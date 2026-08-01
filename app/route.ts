import { pickLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const locale = pickLocale(request.headers.get("accept-language"));
  const destination = new URL(`/${locale}`, request.url);
  return new Response(null, {
    status: 307,
    headers: {
      Location: destination.toString(),
      Vary: "Accept-Language",
      "Cache-Control": "private, no-store",
    },
  });
}
