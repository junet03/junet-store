import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { parse as parseYaml } from "yaml";
import { assertArticleParity, assertSafeMarkdown, type ArticleForValidation } from "../lib/content/validate";
import { ARTICLE_ROUTES, articlePath } from "../lib/routes";

const root = path.resolve("content/articles");
const required = [
  "id", "translationId", "locale", "slug", "title", "summary", "publishedAt",
  "updatedAt", "category", "tags", "featured", "seoTitle", "seoDescription",
];

async function loadArticles() {
  const directories = await readdir(root, { withFileTypes: true });
  const articles = [];
  for (const directory of directories.filter((entry) => entry.isDirectory())) {
    for (const locale of ["vi", "en"] as const) {
      const raw = await readFile(path.join(root, directory.name, `${locale}.md`), "utf8");
      const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/u.exec(raw);
      assert.ok(match, `${directory.name}/${locale} must use fenced YAML front matter`);
      const data = parseYaml(match[1]) as Record<string, unknown>;
      articles.push({ file: `${directory.name}/${locale}.md`, data, body: match[2].trim() });
    }
  }
  return articles;
}

test("publishes exactly five complete Vietnamese-English pairs", async () => {
  const loaded = await loadArticles();
  assert.equal(loaded.length, 10);
  const candidates: ArticleForValidation[] = [];
  for (const article of loaded) {
    assert.deepEqual(Object.keys(article.data).sort(), [...required].sort(), article.file);
    assert.equal(typeof article.data.id, "string", article.file);
    assert.equal(article.data.locale, article.file.endsWith("vi.md") ? "vi" : "en", article.file);
    assert.match(String(article.data.slug), /^[a-z0-9]+(?:-[a-z0-9]+)*$/, article.file);
    assert.equal(typeof article.data.featured, "boolean", article.file);
    assert.ok(Array.isArray(article.data.tags) && article.data.tags.length > 0, article.file);
    assert.match(String(article.data.publishedAt), /^\d{4}-\d{2}-\d{2}$/, article.file);
    assert.match(String(article.data.updatedAt), /^\d{4}-\d{2}-\d{2}$/, article.file);
    assert.ok(article.body.length > 700, `${article.file} is too short to be a complete article`);
    candidates.push({
      id: article.data.id as ArticleForValidation["id"],
      translationId: article.data.translationId as ArticleForValidation["translationId"],
      locale: article.data.locale as ArticleForValidation["locale"],
      slug: String(article.data.slug),
      body: article.body,
    });
  }
  assert.doesNotThrow(() => assertArticleParity(candidates));

  for (const route of ARTICLE_ROUTES) {
    for (const locale of ["vi", "en"] as const) {
      const article = candidates.find((candidate) => candidate.id === route.id && candidate.locale === locale);
      assert.ok(article, `${route.id}/${locale}`);
      assert.equal(article.slug, route.slugs[locale]);
      assert.match(articlePath(route.id, locale), new RegExp(`${article.slug}$`));
    }
  }
});

test("rejects raw HTML, unsafe protocols, and broken identity", () => {
  const base: ArticleForValidation = {
    id: "codegraph-evidence",
    translationId: "codegraph-evidence",
    locale: "vi",
    slug: "safe",
    body: "Safe Markdown",
  };
  assert.throws(() => assertSafeMarkdown({ ...base, body: "<script>alert(1)</script>" }), /Raw HTML/);
  assert.throws(() => assertSafeMarkdown({ ...base, body: "[x](javascript:alert(1))" }), /Unsafe content/);
  assert.throws(
    () => assertArticleParity([{ ...base, translationId: "install-first-project" }]),
    /Translation identity mismatch/,
  );
});

test("keeps the verified v0.3.0 wheel command equal in both install guides", async () => {
  const loaded = await loadArticles();
  const install = loaded.filter((article) => article.data.id === "install-first-project");
  const commands = install.map((article) => article.body.match(/python -m pip install "[^"]+"/)?.[0]);
  assert.equal(commands.length, 2);
  assert.ok(commands[0]);
  assert.equal(commands[0], commands[1]);
  assert.match(commands[0]!, /releases\/download\/v0\.3\.0\/mql5_codegraph-0\.3\.0-py3-none-any\.whl/);
});
