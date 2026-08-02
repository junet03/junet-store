/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const HSTS = "max-age=2592000";
const PUBLIC_HTML_CACHE = "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";
const IMMUTABLE_ASSET_CACHE = "public, max-age=31536000, immutable";
const BRAND_ASSET_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

function withProductionHeaders(request: Request, response: Response): Response {
  const { pathname } = new URL(request.url);
  const headers = new Headers(response.headers);

  headers.set("Strict-Transport-Security", HSTS);

  if (response.status === 200 && /^(?:\/vi|\/en)(?:\/|$)/.test(pathname)) {
    headers.set("Cache-Control", PUBLIC_HTML_CACHE);
  } else if (
    response.status === 200 &&
    (pathname.startsWith("/assets/") || pathname.startsWith("/_next/static/"))
  ) {
    headers.set("Cache-Control", IMMUTABLE_ASSET_CACHE);
  } else if (
    response.status === 200 &&
    [
      "/mql5-codegraph-hero.webp",
      "/og-1200x630.webp",
      "/mql5-codegraph-hero.png",
      "/og.png",
    ].includes(pathname)
  ) {
    headers.set("Cache-Control", BRAND_ASSET_CACHE);
  }

  if (pathname.endsWith(".webp")) {
    headers.set("Content-Type", "image/webp");
  } else if (pathname.endsWith(".png")) {
    headers.set("Content-Type", "image/png");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withProductionHeaders(request, response);
    }

    const response = await handler.fetch(request, env, ctx);
    return withProductionHeaders(request, response);
  },
};

export default worker;
