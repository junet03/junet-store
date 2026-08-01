import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { PROJECT_LINKS } from "@/lib/content/projects";
import { STATIC_ROUTE_PATHS } from "@/lib/routes";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isVi = locale === "vi";
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link className="footer-brand" href={STATIC_ROUTE_PATHS.home[locale]}>junet.store</Link>
          <p>
            {isVi
              ? "AI thực dụng, MQL5 có bằng chứng và mã nguồn mở vì một cộng đồng kết nối bền vững."
              : "Practical AI, evidence-backed MQL5, and open source for a community built to last."}
          </p>
        </div>
        <div className="footer-links">
          <a href={PROJECT_LINKS.repository} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PROJECT_LINKS.discussions} target="_blank" rel="noopener noreferrer">Discussions</a>
          <a href={PROJECT_LINKS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
      <div className="shell trademark-note">
        {isVi
          ? "MetaTrader 5 và MQL5 là các nhãn hiệu của MetaQuotes Ltd. MQL5 CodeGraph là một dự án độc lập, không liên kết, không được tài trợ và không được MetaQuotes Ltd. chứng thực."
          : "MetaTrader 5 and MQL5 are trademarks of MetaQuotes Ltd. MQL5 CodeGraph is an independent project and is not affiliated with, sponsored by, or endorsed by MetaQuotes Ltd."}
      </div>
    </footer>
  );
}
