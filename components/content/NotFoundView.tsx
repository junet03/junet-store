import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { STATIC_ROUTE_PATHS } from "@/lib/routes";

export function NotFoundView({ locale }: { locale: Locale }) {
  const otherLocale = locale === "vi" ? "en" : "vi";
  return (
    <div className="not-found shell">
      <span className="eyebrow">404</span>
      <h1>{locale === "vi" ? "Trang này chưa có trên bản đồ." : "This page is not on the map."}</h1>
      <p>
        {locale === "vi"
          ? "Đường dẫn có thể đã đổi hoặc nội dung chưa được xuất bản ở locale này."
          : "The path may have changed, or the content is not published for this locale."}
      </p>
      <div className="button-row">
        <Link className="button button--primary" href={STATIC_ROUTE_PATHS.home[locale]}>
          {locale === "vi" ? "Về trang chủ" : "Back home"}
        </Link>
        <Link className="button button--secondary" href={STATIC_ROUTE_PATHS.home[otherLocale]}>
          {locale === "vi" ? "Open English" : "Mở Tiếng Việt"}
        </Link>
      </div>
    </div>
  );
}
