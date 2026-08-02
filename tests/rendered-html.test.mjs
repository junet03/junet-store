import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicPaths = [
  "/vi", "/en",
  "/vi/mql5-codegraph", "/en/mql5-codegraph",
  "/vi/bai-viet", "/en/articles",
  "/vi/du-an", "/en/projects",
  "/vi/gioi-thieu", "/en/about",
  "/vi/cong-dong", "/en/community",
  "/vi/bai-viet/mql5-codegraph-la-gi-ai-can-do-thi-bang-chung",
  "/en/articles/why-ai-needs-evidence-backed-mql5-codegraph",
  "/vi/bai-viet/cai-mql5-codegraph-va-phan-tich-du-an-dau-tien",
  "/en/articles/install-mql5-codegraph-and-analyze-your-first-project",
  "/vi/bai-viet/ket-noi-mql5-codegraph-mcp-voi-ai-agents",
  "/en/articles/connect-mql5-codegraph-mcp-to-ai-agents",
  "/vi/bai-viet/ai-doc-kien-truc-va-review-code-mql5",
  "/en/articles/ai-assisted-mql5-architecture-and-impact-review",
  "/vi/bai-viet/vibe-coding-ben-vung-cho-du-an-ma-nguon-mo",
  "/en/articles/sustainable-vibe-coding-for-open-source-projects",
];

const workerUrl = new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);
const env = {
  ASSETS: {
    fetch: async (assetRequest) => {
      const pathname = new URL(assetRequest.url).pathname;
      if (pathname === "/mql5-codegraph-hero.webp") {
        return new Response("webp", {
          status: 200,
          headers: { "Content-Type": "application/octet-stream" },
        });
      }
      if (pathname.startsWith("/assets/")) {
        return new Response("asset", { status: 200 });
      }
      return new Response("Not found", { status: 404 });
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

function request(path, headers = {}) {
  return worker.fetch(new Request(`http://localhost${path}`, {
    headers: { accept: "text/html", ...headers },
  }), env, ctx);
}

test("root negotiates locale without caching a visitor-specific redirect", async () => {
  const english = await request("/", { "accept-language": "fr;q=.7,en-US;q=.9" });
  assert.equal(english.status, 307);
  assert.equal(english.headers.get("location"), "http://localhost/en");
  assert.equal(english.headers.get("vary"), "Accept-Language");
  assert.equal(english.headers.get("cache-control"), "private, no-store");

  const fallback = await request("/", { "accept-language": "de-DE" });
  assert.equal(fallback.headers.get("location"), "http://localhost/vi");
});

test("renders the complete bilingual route contract", async () => {
  for (const path of publicPaths) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, path);
    const html = await response.text();
    assert.match(html, new RegExp(`<html lang="${path.startsWith("/vi") ? "vi" : "en"}"`), path);
    assert.match(html, /junet\.store/i, path);
    assert.doesNotMatch(html, /Namecheap|Your site is taking shape|react-loading-skeleton/i, path);
  }
});

test("flagship page exposes verified install and community destinations", async () => {
  const response = await request("/vi/mql5-codegraph");
  const html = await response.text();
  assert.match(html, /mql5_codegraph-0\.3\.0-py3-none-any\.whl/);
  assert.match(html, /https:\/\/github\.com\/junet03\/mql5-codegraph/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.match(html, /MCP tools read-only/);

  const community = await request("/en/community");
  assert.match(await community.text(), /https:\/\/t\.me\/interestaimql5/);
});

test("metadata links exact translation identities", async () => {
  const path = "/vi/bai-viet/ket-noi-mql5-codegraph-mcp-voi-ai-agents";
  const response = await request(path);
  const html = await response.text();
  assert.match(html, /rel="canonical" href="https:\/\/junet\.store\/vi\/bai-viet\/ket-noi-mql5-codegraph-mcp-voi-ai-agents"/);
  assert.match(html, /hrefLang="vi" href="https:\/\/junet\.store\/vi\/bai-viet\/ket-noi-mql5-codegraph-mcp-voi-ai-agents"/);
  assert.match(html, /hrefLang="en" href="https:\/\/junet\.store\/en\/articles\/connect-mql5-codegraph-mcp-to-ai-agents"/);
  assert.match(html, /hrefLang="x-default" href="https:\/\/junet\.store\/vi\/bai-viet\/ket-noi-mql5-codegraph-mcp-voi-ai-agents"/);
});

test("returns localized HTML 404 responses", async () => {
  const vi = await request("/vi/khong-co");
  assert.equal(vi.status, 404);
  assert.match(vi.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(await vi.text(), /Trang này chưa có trên bản đồ/);

  const en = await request("/en/not-here");
  assert.equal(en.status, 404);
  assert.match(await en.text(), /This page is not on the map/);
});

test("applies strict response and cache policy after production TLS activation", async () => {
  const response = await request("/en");
  const csp = response.headers.get("content-security-policy") ?? "";
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /form-action 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  assert.equal(response.headers.get("strict-transport-security"), "max-age=2592000");
  assert.equal(
    response.headers.get("cache-control"),
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  );
  assert.equal(response.headers.get("x-powered-by"), null);
});

test("routes static assets through the response policy", async () => {
  const config = JSON.parse(
    await readFile(new URL("../dist/server/wrangler.json", import.meta.url), "utf8"),
  );
  assert.equal(config.assets.binding, "ASSETS");
  assert.equal(config.assets.run_worker_first, true);

  const image = await request("/mql5-codegraph-hero.webp", { accept: "image/webp" });
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/webp");
  assert.equal(
    image.headers.get("cache-control"),
    "public, max-age=86400, stale-while-revalidate=604800",
  );
  assert.equal(image.headers.get("strict-transport-security"), "max-age=2592000");

  const asset = await request("/assets/example-hash.js", { accept: "text/javascript" });
  assert.equal(asset.status, 200);
  assert.equal(asset.headers.get("cache-control"), "public, max-age=31536000, immutable");
});

test("serves sitemap and robots for all public routes", async () => {
  const sitemap = await request("/sitemap.xml", { accept: "application/xml" });
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/junet\.store\/vi/);
  assert.match(xml, /https:\/\/junet\.store\/en\/articles\/sustainable-vibe-coding-for-open-source-projects/);

  const robots = await request("/robots.txt", { accept: "text/plain" });
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/junet\.store\/sitemap\.xml/);
});
