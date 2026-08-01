import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/content/articles";
import { getRelatedArticles } from "@/lib/content/articles";
import { getCopy } from "@/lib/copy";
import { INSTALL_COMMAND, MQL5_CODEGRAPH, PROJECT_LINKS } from "@/lib/content/projects";
import type { Locale } from "@/lib/i18n";
import { STATIC_ROUTE_PATHS } from "@/lib/routes";
import { ArticleCard } from "./ArticleCard";
import { CopyCode } from "./CopyCode";
import { MarkdownArticle } from "./MarkdownArticle";

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

export function HomeView({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const c = getCopy(locale);
  const project = MQL5_CODEGRAPH.localized[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "Junet.store", url: "https://junet.store", inLanguage: ["vi", "en"] },
      {
        "@type": "SoftwareSourceCode",
        name: "MQL5 CodeGraph",
        codeRepository: PROJECT_LINKS.repository,
        programmingLanguage: "Python",
        license: "https://opensource.org/license/mit",
        version: "0.3.0",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="hero shell">
        <div className="hero__content">
          <span className="eyebrow">{c.home.eyebrow}</span>
          <h1>{c.home.title}</h1>
          <p className="hero__lead">{c.home.lead}</p>
          <div className="button-row">
            <Link className="button button--primary" href={STATIC_ROUTE_PATHS["mql5-codegraph"][locale]}>{c.home.primary}</Link>
            <a className="button button--secondary" href="#install">{c.home.secondary}</a>
            <ExternalLink className="button button--ghost" href={PROJECT_LINKS.telegram}>{c.home.telegram}</ExternalLink>
          </div>
          <div className="trust-row" aria-label="Project status">
            <span>MIT</span><span>Python 3.11+</span><span>v0.3.0</span><span>{c.common.publicBeta}</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-frame">
            <Image
              src={MQL5_CODEGRAPH.image}
              alt="MQL5 CodeGraph — evidence-backed project intelligence"
              width={1280}
              height={640}
              priority
              unoptimized
              sizes="(max-width: 860px) 100vw, 48vw"
            />
          </div>
          <div className="graph-status"><span /> Evidence graph ready</div>
        </div>
      </section>

      <section className="proof-section shell" aria-label={locale === "vi" ? "Giá trị cốt lõi" : "Core values"}>
        {[
          ["01", c.home.proofTitle, c.home.proofBody],
          ["02", c.home.localTitle, c.home.localBody],
          ["03", c.home.communityTitle, c.home.communityBody],
        ].map(([number, title, body]) => (
          <article className="proof-card" key={number}>
            <span>{number}</span><h2>{title}</h2><p>{body}</p>
          </article>
        ))}
      </section>

      <section className="flagship-section shell">
        <div className="flagship-grid">
          <div>
            <SectionHeading
              eyebrow={locale === "vi" ? "DỰ ÁN FLAGSHIP" : "FLAGSHIP PROJECT"}
              title="MQL5 CodeGraph"
              lead={project.summary}
            />
            <p className="body-large">{project.description}</p>
            <div className="button-row">
              <ExternalLink className="button button--primary" href={PROJECT_LINKS.repository}>{c.common.viewRepo}</ExternalLink>
              <Link className="button button--secondary" href={STATIC_ROUTE_PATHS["mql5-codegraph"][locale]}>{locale === "vi" ? "Xem cách hoạt động" : "See how it works"}</Link>
            </div>
          </div>
          <div className="capability-list">
            {project.capabilities.slice(0, 3).map((item, index) => (
              <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="install-section shell">
        <SectionHeading
          eyebrow={locale === "vi" ? "CÀI TRONG MỘT LỆNH" : "ONE-COMMAND INSTALL"}
          title={locale === "vi" ? "Bắt đầu local. Giữ source ở lại máy." : "Start local. Keep source on your machine."}
          lead={locale === "vi" ? "Cài public wheel v0.3.0, sau đó chọn một repository MQL5 local đáng tin cậy để phân tích." : "Install the public v0.3.0 wheel, then select a trusted local MQL5 repository to analyze."}
        />
        <CopyCode code={INSTALL_COMMAND} label={c.common.copyInstall} copiedLabel={c.common.copied} />
        <p className="fine-print">{locale === "vi" ? "Core analyzer không cần model API key. Python 3.11+ là bắt buộc." : "The core analyzer needs no model API key. Python 3.11+ is required."}</p>
      </section>

      <section className="articles-section shell">
        <SectionHeading eyebrow={locale === "vi" ? "KNOWLEDGE HUB" : "KNOWLEDGE HUB"} title={c.home.latest} lead={c.home.latestLead} />
        <div className="article-grid">
          {articles.slice(0, 3).map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
        <div className="section-action"><Link className="text-link" href={STATIC_ROUTE_PATHS.articles[locale]}>{c.common.allArticles} <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="community-banner shell">
        <div><span className="eyebrow">INTEREST AI MQL5</span><h2>{c.home.mission}</h2></div>
        <ExternalLink className="button button--primary" href={PROJECT_LINKS.telegram}>{c.common.joinTelegram}</ExternalLink>
      </section>
    </>
  );
}

export function ProjectView({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const project = MQL5_CODEGRAPH.localized[locale];
  const isVi = locale === "vi";
  return (
    <div className="page-shell shell">
      <section className="project-hero">
        <div>
          <span className="eyebrow">{isVi ? "MÃ NGUỒN MỞ · PUBLIC BETA" : "OPEN SOURCE · PUBLIC BETA"}</span>
          <h1>MQL5 CodeGraph</h1>
          <p className="hero__lead">{project.summary}</p>
          <div className="button-row">
            <ExternalLink className="button button--primary" href={PROJECT_LINKS.repository}>{c.common.starRepo}</ExternalLink>
            <ExternalLink className="button button--secondary" href={PROJECT_LINKS.release}>{c.common.releaseNotes}</ExternalLink>
          </div>
        </div>
        <Image src={MQL5_CODEGRAPH.image} alt="MQL5 CodeGraph" width={1280} height={640} unoptimized sizes="(max-width: 860px) 100vw, 46vw" />
      </section>

      <section className="content-split">
        <div><SectionHeading eyebrow={isVi ? "VÌ SAO" : "WHY IT EXISTS"} title={isVi ? "AI cần context có nguồn" : "AI needs sourced context"} /><p className="body-large">{project.description}</p></div>
        <div className="metric-panel"><div><strong>13</strong><span>{isVi ? "MCP tools read-only" : "read-only MCP tools"}</span></div><div><strong>5</strong><span>{isVi ? "workflow skills" : "workflow skills"}</span></div><div><strong>1.0.0</strong><span>{isVi ? "contract intelligence" : "intelligence contract"}</span></div></div>
      </section>

      <section className="detail-section">
        <SectionHeading eyebrow={isVi ? "KHẢ NĂNG" : "CAPABILITIES"} title={isVi ? "Một kernel, nhiều bề mặt" : "One kernel, several surfaces"} />
        <div className="feature-grid">{project.capabilities.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
      </section>

      <section className="install-card" id="install-command">
        <div><span className="eyebrow">{isVi ? "CÀI V0.3.0" : "INSTALL V0.3.0"}</span><h2>{isVi ? "Python 3.11+. Không cần cloud account." : "Python 3.11+. No cloud account required."}</h2></div>
        <CopyCode code={INSTALL_COMMAND} label={c.common.copyInstall} copiedLabel={c.common.copied} />
      </section>

      <section className="detail-section">
        <SectionHeading eyebrow={isVi ? "TRUST BOUNDARY" : "TRUST BOUNDARY"} title={isVi ? "Nói rõ công cụ không làm gì" : "Be explicit about what it cannot prove"} />
        <ul className="boundary-list">{project.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="contribute-grid">
        <div><h2>{isVi ? "Thiết kế công khai" : "Design in public"}</h2><p>{isVi ? "Đặt câu hỏi kiến trúc trong Discussions hoặc gửi bug có thể tái hiện qua Issues." : "Discuss architecture in Discussions or report reproducible defects through Issues."}</p><div className="button-row"><ExternalLink className="text-link" href={PROJECT_LINKS.discussions}>Discussions →</ExternalLink><ExternalLink className="text-link" href={PROJECT_LINKS.issues}>Issues →</ExternalLink></div></div>
        <div><h2>{isVi ? "Đóng góp có trách nhiệm" : "Contribute responsibly"}</h2><p>{isVi ? "Đọc contribution guide và dùng private advisory cho lỗ hổng bảo mật." : "Read the contribution guide and use a private advisory for vulnerabilities."}</p><div className="button-row"><ExternalLink className="text-link" href={PROJECT_LINKS.contributing}>CONTRIBUTING →</ExternalLink><ExternalLink className="text-link" href={PROJECT_LINKS.security}>Security →</ExternalLink></div></div>
      </section>
    </div>
  );
}

export function ArticlesView({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const isVi = locale === "vi";
  return <div className="page-shell shell"><SectionHeading eyebrow="JUNET KNOWLEDGE" title={isVi ? "Kỹ thuật dùng được, giới hạn nói thật" : "Practical technique, honest boundaries"} lead={isVi ? "Năm bài nền tảng để AI làm việc với MQL5 và mã nguồn mở một cách có kiểm chứng." : "Five foundation articles for evidence-backed AI, MQL5, and open-source work."} /><div className="article-grid article-grid--full">{articles.map((article) => <ArticleCard key={article.id} article={article} />)}</div></div>;
}

export function ArticleView({ article }: { article: Article }) {
  const c = getCopy(article.locale);
  const related = getRelatedArticles(article);
  return (
    <div className="article-page shell">
      <article>
        <header className="article-header"><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p>{article.summary}</p><div className="article-byline"><span>{article.updatedAt}</span><span>{article.readingMinutes} {c.common.minutes}</span></div><div className="tag-row">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></header>
        <MarkdownArticle body={article.body} />
      </article>
      <aside className="related-panel"><h2>{article.locale === "vi" ? "Đọc tiếp" : "Continue reading"}</h2>{related.map((item) => <ArticleCard key={item.id} article={item} />)}</aside>
    </div>
  );
}

export function ProjectsView({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const project = MQL5_CODEGRAPH.localized[locale];
  return <div className="page-shell shell"><SectionHeading eyebrow={locale === "vi" ? "OPEN-SOURCE LAB" : "OPEN-SOURCE LAB"} title={locale === "vi" ? "Dự án được xây để dùng thật" : "Projects built for real use"} lead={locale === "vi" ? "Không dựng project card cho ý tưởng chưa có source. MQL5 CodeGraph là nền móng đầu tiên." : "No project cards for ideas without source. MQL5 CodeGraph is the first foundation."} /><article className="project-card"><Image src={MQL5_CODEGRAPH.image} alt="MQL5 CodeGraph" width={1280} height={640} unoptimized /><div><div className="trust-row"><span>{MQL5_CODEGRAPH.license}</span><span>{MQL5_CODEGRAPH.release}</span><span>{c.common.publicBeta}</span></div><h2>{project.name}</h2><p>{project.summary}</p><div className="button-row"><Link className="button button--primary" href={STATIC_ROUTE_PATHS["mql5-codegraph"][locale]}>{locale === "vi" ? "Xem dự án" : "View project"}</Link><ExternalLink className="button button--secondary" href={PROJECT_LINKS.repository}>{c.common.viewRepo}</ExternalLink></div></div></article><p className="empty-note">{c.common.noProjects}</p></div>;
}

export function AboutView({ locale }: { locale: Locale }) {
  const isVi = locale === "vi";
  return <div className="page-shell shell"><section className="editorial-hero"><span className="eyebrow">JUNET.STORE</span><h1>{isVi ? "Xây công cụ, chia sẻ cách làm, giữ lại bằng chứng." : "Build tools, share the method, preserve the evidence."}</h1><p>{isVi ? "Junet.store là không gian cá nhân dành cho AI thực dụng, MQL5 và mã nguồn mở. Mục tiêu không phải tạo thêm tiếng ồn, mà biến trải nghiệm xây dựng thật thành hướng dẫn có thể lặp lại." : "Junet.store is a personal space for practical AI, MQL5, and open source. The goal is not more noise, but turning real building experience into repeatable guidance."}</p></section><section className="principle-grid">{(isVi ? [["Bằng chứng", "Dẫn nguồn, nói rõ giới hạn và kiểm tra sản phẩm đang chạy."],["Cộng đồng", "Cho đi kiến thức và source để những kết nối tốt có thể tồn tại lâu."],["Tiến hóa", "Spec, ADR, graph và nhật ký giúp dự án lớn lên mà không mất linh hồn."]] : [["Evidence", "Cite sources, state limits, and verify the product that is actually running."],["Community", "Share knowledge and source so useful connections can last."],["Evolution", "Specs, ADRs, graphs, and journals let a project grow without losing its soul."]]).map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</section></div>;
}

export function CommunityView({ locale }: { locale: Locale }) {
  const isVi = locale === "vi";
  return <div className="page-shell shell"><section className="community-hero"><div><span className="eyebrow">INTEREST AI MQL5</span><h1>{isVi ? "Kết nối bằng kiến thức có thể dùng lại." : "Connect through knowledge people can reuse."}</h1><p>{isVi ? "Một cộng đồng nhỏ dành cho AI, MQL5, code graph và những dự án vibe code được làm có trách nhiệm." : "A focused community for AI, MQL5, code graphs, and responsibly built vibe-code projects."}</p><ExternalLink className="button button--primary" href={PROJECT_LINKS.telegram}>{isVi ? "Mở nhóm Telegram" : "Open Telegram group"}</ExternalLink></div><div className="community-orbit" aria-hidden="true"><span>AI</span><span>MQL5</span><span>OSS</span><i /></div></section><section className="principle-grid">{(isVi ? [["Chia sẻ bối cảnh", "Đưa source, log và bước tái hiện phù hợp; tránh hỏi bằng ảnh chụp thiếu dữ kiện."],["Tôn trọng ranh giới", "Không yêu cầu bẻ khóa, đánh cắp source, token hoặc xử lý repository không được phép."],["Ghi nhận đóng góp", "Thảo luận thiết kế ở nơi công khai và giữ lịch sử người đã giúp dự án tốt hơn."]] : [["Share context", "Provide source, logs, and reproducible steps; avoid context-free screenshot questions."],["Respect boundaries", "Do not request cracking, source theft, tokens, or unauthorized repository processing."],["Credit contributions", "Discuss design in public and preserve the history of people who improve the work."]]).map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</section><section className="contribute-grid"><div><h2>GitHub Discussions</h2><p>{isVi ? "Câu hỏi kiến trúc, ý tưởng và hướng phát triển." : "Architecture questions, ideas, and future direction."}</p><ExternalLink className="text-link" href={PROJECT_LINKS.discussions}>{isVi ? "Bắt đầu thảo luận" : "Start a discussion"} →</ExternalLink></div><div><h2>GitHub Issues</h2><p>{isVi ? "Bug có thể tái hiện và phạm vi rõ ràng." : "Reproducible defects with a clear scope."}</p><ExternalLink className="text-link" href={PROJECT_LINKS.issues}>{isVi ? "Báo lỗi" : "Report a defect"} →</ExternalLink></div></section></div>;
}
