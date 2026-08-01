import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutView,
  ArticlesView,
  ArticleView,
  CommunityView,
  HomeView,
  ProjectView,
  ProjectsView,
} from "@/components/content/PageViews";
import { getArticle, getArticles } from "@/lib/content/articles";
import { getCopy } from "@/lib/copy";
import { isLocale, LOCALES, type Locale, otherLocale } from "@/lib/i18n";
import {
  ARTICLE_ROUTES,
  STATIC_ROUTE_PATHS,
  articlePath,
  resolveLocalizedPath,
  type ResolvedRoute,
} from "@/lib/routes";
import { localizedMetadata } from "@/lib/seo";

type PageParams = { locale: string; path?: string[] };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => {
    const staticEntries = Object.values(STATIC_ROUTE_PATHS).map((paths) => ({
      locale,
      path: paths[locale].split("/").filter(Boolean).slice(1),
    }));
    const articleEntries = ARTICLE_ROUTES.map((article) => ({
      locale,
      path: articlePath(article.id, locale).split("/").filter(Boolean).slice(1),
    }));
    return [...staticEntries, ...articleEntries];
  });
}

function pageText(locale: Locale, route: ResolvedRoute) {
  const vi = locale === "vi";
  switch (route.kind) {
    case "home":
      return {
        title: vi ? "AI, MQL5 và mã nguồn mở" : "AI, MQL5, and open source",
        description: getCopy(locale).home.lead,
      };
    case "mql5-codegraph":
      return {
        title: "MQL5 CodeGraph",
        description: vi
          ? "Đồ thị mã nguồn tĩnh có bằng chứng cho repository MQL5, chạy local với CLI, dashboard và MCP thử nghiệm."
          : "Evidence-backed static code-graph intelligence for local MQL5 repositories, with a CLI, dashboard, and experimental MCP.",
      };
    case "articles":
      return {
        title: vi ? "Bài viết AI và MQL5" : "AI and MQL5 articles",
        description: vi
          ? "Hướng dẫn thực hành về AI, MQL5 CodeGraph, review impact, MCP và vibe coding bền vững."
          : "Practical guidance for AI, MQL5 CodeGraph, impact review, MCP, and sustainable vibe coding.",
      };
    case "projects":
      return {
        title: vi ? "Dự án mã nguồn mở" : "Open-source projects",
        description: vi ? "Các dự án được xây để dùng thật, bắt đầu với MQL5 CodeGraph." : "Projects built for real use, starting with MQL5 CodeGraph.",
      };
    case "about":
      return {
        title: vi ? "Giới thiệu Junet.store" : "About Junet.store",
        description: vi ? "Sứ mệnh chia sẻ AI thực dụng, MQL5 có bằng chứng và mã nguồn mở." : "The mission behind practical AI, evidence-backed MQL5, and open source.",
      };
    case "community":
      return {
        title: vi ? "Cộng đồng Interest AI MQL5" : "Interest AI MQL5 community",
        description: vi ? "Kết nối, chia sẻ bối cảnh và xây dự án AI/MQL5 có trách nhiệm." : "Connect, share context, and build responsible AI/MQL5 projects.",
      };
    case "article": {
      const article = getArticle(route.articleId, locale);
      if (!article) notFound();
      return { title: article.seoTitle, description: article.seoDescription };
    }
  }
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: rawLocale, path } = await params;
  if (!isLocale(rawLocale)) notFound();
  const route = resolveLocalizedPath(rawLocale, path);
  if (!route) notFound();
  const canonical = route.kind === "article"
    ? articlePath(route.articleId, rawLocale)
    : STATIC_ROUTE_PATHS[route.kind][rawLocale];
  const target = otherLocale(rawLocale);
  const alternate = route.kind === "article"
    ? articlePath(route.articleId, target)
    : STATIC_ROUTE_PATHS[route.kind][target];
  const text = pageText(rawLocale, route);
  return localizedMetadata({
    locale: rawLocale,
    title: text.title,
    description: text.description,
    canonical,
    alternate,
    type: route.kind === "article" ? "article" : "website",
  });
}

export default async function LocalizedPage({ params }: { params: Promise<PageParams> }) {
  const { locale: rawLocale, path } = await params;
  if (!isLocale(rawLocale)) notFound();
  const route = resolveLocalizedPath(rawLocale, path);
  if (!route) notFound();

  switch (route.kind) {
    case "home": return <HomeView locale={rawLocale} articles={getArticles(rawLocale)} />;
    case "mql5-codegraph": return <ProjectView locale={rawLocale} />;
    case "articles": return <ArticlesView locale={rawLocale} articles={getArticles(rawLocale)} />;
    case "projects": return <ProjectsView locale={rawLocale} />;
    case "about": return <AboutView locale={rawLocale} />;
    case "community": return <CommunityView locale={rawLocale} />;
    case "article": {
      const article = getArticle(route.articleId, rawLocale);
      if (!article) notFound();
      return <ArticleView article={article} />;
    }
  }
}
