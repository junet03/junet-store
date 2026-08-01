import type { Locale } from "./i18n";

export type StaticRouteId =
  | "home"
  | "mql5-codegraph"
  | "articles"
  | "projects"
  | "about"
  | "community";

export type ArticleId =
  | "codegraph-evidence"
  | "install-first-project"
  | "connect-ai-agents"
  | "ai-mql5-review"
  | "sustainable-vibe-code";

export const STATIC_ROUTE_PATHS: Record<
  StaticRouteId,
  Record<Locale, string>
> = {
  home: { vi: "/vi", en: "/en" },
  "mql5-codegraph": {
    vi: "/vi/mql5-codegraph",
    en: "/en/mql5-codegraph",
  },
  articles: { vi: "/vi/bai-viet", en: "/en/articles" },
  projects: { vi: "/vi/du-an", en: "/en/projects" },
  about: { vi: "/vi/gioi-thieu", en: "/en/about" },
  community: { vi: "/vi/cong-dong", en: "/en/community" },
};

export const ARTICLE_ROUTES: ReadonlyArray<{
  id: ArticleId;
  slugs: Record<Locale, string>;
}> = [
  {
    id: "codegraph-evidence",
    slugs: {
      vi: "mql5-codegraph-la-gi-ai-can-do-thi-bang-chung",
      en: "why-ai-needs-evidence-backed-mql5-codegraph",
    },
  },
  {
    id: "install-first-project",
    slugs: {
      vi: "cai-mql5-codegraph-va-phan-tich-du-an-dau-tien",
      en: "install-mql5-codegraph-and-analyze-your-first-project",
    },
  },
  {
    id: "connect-ai-agents",
    slugs: {
      vi: "ket-noi-mql5-codegraph-mcp-voi-ai-agents",
      en: "connect-mql5-codegraph-mcp-to-ai-agents",
    },
  },
  {
    id: "ai-mql5-review",
    slugs: {
      vi: "ai-doc-kien-truc-va-review-code-mql5",
      en: "ai-assisted-mql5-architecture-and-impact-review",
    },
  },
  {
    id: "sustainable-vibe-code",
    slugs: {
      vi: "vibe-coding-ben-vung-cho-du-an-ma-nguon-mo",
      en: "sustainable-vibe-coding-for-open-source-projects",
    },
  },
] as const;

export type ResolvedRoute =
  | { kind: StaticRouteId }
  | { kind: "article"; articleId: ArticleId };

export function articlePath(id: ArticleId, locale: Locale): string {
  const route = ARTICLE_ROUTES.find((entry) => entry.id === id);
  if (!route) throw new Error(`Unknown article route: ${id}`);
  return `${STATIC_ROUTE_PATHS.articles[locale]}/${route.slugs[locale]}`;
}

export function pathFor(
  route: StaticRouteId | { articleId: ArticleId },
  locale: Locale,
): string {
  return typeof route === "string"
    ? STATIC_ROUTE_PATHS[route][locale]
    : articlePath(route.articleId, locale);
}

export function resolveLocalizedPath(
  locale: Locale,
  segments: string[] | undefined,
): ResolvedRoute | null {
  const path = `/${locale}${segments?.length ? `/${segments.join("/")}` : ""}`;

  for (const [kind, paths] of Object.entries(STATIC_ROUTE_PATHS) as Array<
    [StaticRouteId, Record<Locale, string>]
  >) {
    if (paths[locale] === path) return { kind };
  }

  const article = ARTICLE_ROUTES.find(
    (entry) => articlePath(entry.id, locale) === path,
  );
  return article ? { kind: "article", articleId: article.id } : null;
}

export function alternatePath(pathname: string, locale: Locale): string {
  const targetLocale: Locale = locale === "vi" ? "en" : "vi";

  for (const paths of Object.values(STATIC_ROUTE_PATHS)) {
    if (paths[locale] === pathname) return paths[targetLocale];
  }
  for (const entry of ARTICLE_ROUTES) {
    if (articlePath(entry.id, locale) === pathname) {
      return articlePath(entry.id, targetLocale);
    }
  }
  return STATIC_ROUTE_PATHS.home[targetLocale];
}

export function allPublicPaths(): string[] {
  return [
    ...Object.values(STATIC_ROUTE_PATHS).flatMap((paths) => [paths.vi, paths.en]),
    ...ARTICLE_ROUTES.flatMap((entry) => [
      articlePath(entry.id, "vi"),
      articlePath(entry.id, "en"),
    ]),
  ];
}
