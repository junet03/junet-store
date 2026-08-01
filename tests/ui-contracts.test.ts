import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import test from "node:test";
import { pickLocale } from "../lib/i18n";
import { ARTICLE_ROUTES, STATIC_ROUTE_PATHS, alternatePath, articlePath, resolveLocalizedPath } from "../lib/routes";

test("negotiates browser locale with Vietnamese as deterministic fallback", () => {
  assert.equal(pickLocale("en-US,en;q=0.9,vi;q=0.8"), "en");
  assert.equal(pickLocale("fr;q=1,vi;q=.7,en;q=.5"), "vi");
  assert.equal(pickLocale("de-DE"), "vi");
  assert.equal(pickLocale(null), "vi");
});

test("switches locale by stable identity for every route", () => {
  for (const paths of Object.values(STATIC_ROUTE_PATHS)) {
    assert.equal(alternatePath(paths.vi, "vi"), paths.en);
    assert.equal(alternatePath(paths.en, "en"), paths.vi);
  }
  for (const route of ARTICLE_ROUTES) {
    assert.equal(alternatePath(articlePath(route.id, "vi"), "vi"), articlePath(route.id, "en"));
    assert.equal(alternatePath(articlePath(route.id, "en"), "en"), articlePath(route.id, "vi"));
    assert.deepEqual(
      resolveLocalizedPath("vi", ["bai-viet", route.slugs.vi]),
      { kind: "article", articleId: route.id },
    );
  }
});

async function runThemeInit({ stored, dark, throws = false }: { stored?: string; dark: boolean; throws?: boolean }) {
  const source = await readFile("public/theme-init.js", "utf8");
  const dataset: Record<string, string> = {};
  const style: Record<string, string> = {};
  vm.runInNewContext(source, {
    window: {
      localStorage: { getItem() { if (throws) throw new Error("blocked"); return stored ?? null; } },
      matchMedia() { return { matches: dark }; },
    },
    document: { documentElement: { dataset, style } },
  });
  return { dataset, style };
}

test("initializes theme from manual choice, then system, without crashing on storage denial", async () => {
  assert.equal((await runThemeInit({ stored: "light", dark: true })).dataset.theme, "light");
  assert.equal((await runThemeInit({ stored: "dark", dark: false })).dataset.theme, "dark");
  assert.equal((await runThemeInit({ dark: true })).dataset.theme, "dark");
  assert.equal((await runThemeInit({ dark: false, throws: true })).dataset.theme, "light");
});

test("keeps required responsive and accessibility primitives in the shipped UI", async () => {
  const [css, header, toggle, markdown] = await Promise.all([
    readFile("app/globals.css", "utf8"),
    readFile("components/layout/SiteHeader.tsx", "utf8"),
    readFile("components/theme/ThemeToggle.tsx", "utf8"),
    readFile("components/content/MarkdownArticle.tsx", "utf8"),
  ]);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /env\(safe-area-inset-(?:top|bottom)\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /overflow-x:\s*auto/);
  assert.match(css, /body\.menu-open/);
  assert.match(header, /id="site-navigation"/);
  assert.match(header, /aria-expanded=\{open\}/);
  assert.match(toggle, /localStorage\.setItem\("junet-theme"/);
  assert.match(markdown, /noopener noreferrer/);
});
