import { parse as parseYaml } from "yaml";
import { z } from "zod";
import type { Locale } from "../i18n";
import { ARTICLE_ROUTES, type ArticleId, articlePath } from "../routes";
import { assertArticleParity } from "./validate";

import codegraphEvidenceVi from "@/content/articles/01-codegraph-evidence/vi.md?raw";
import codegraphEvidenceEn from "@/content/articles/01-codegraph-evidence/en.md?raw";
import installFirstVi from "@/content/articles/02-install-first-project/vi.md?raw";
import installFirstEn from "@/content/articles/02-install-first-project/en.md?raw";
import connectAgentsVi from "@/content/articles/03-connect-ai-agents/vi.md?raw";
import connectAgentsEn from "@/content/articles/03-connect-ai-agents/en.md?raw";
import aiReviewVi from "@/content/articles/04-ai-mql5-review/vi.md?raw";
import aiReviewEn from "@/content/articles/04-ai-mql5-review/en.md?raw";
import vibeCodeVi from "@/content/articles/05-sustainable-vibe-code/vi.md?raw";
import vibeCodeEn from "@/content/articles/05-sustainable-vibe-code/en.md?raw";

const articleIds = [
  "codegraph-evidence",
  "install-first-project",
  "connect-ai-agents",
  "ai-mql5-review",
  "sustainable-vibe-code",
] as const satisfies readonly ArticleId[];

const ArticleFrontMatter = z
  .object({
    id: z.enum(articleIds),
    translationId: z.enum(articleIds),
    locale: z.enum(["vi", "en"]),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(12).max(100),
    summary: z.string().min(40).max(260),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    category: z.string().min(2).max(40),
    tags: z.array(z.string().min(1).max(32)).min(1).max(8),
    featured: z.boolean(),
    seoTitle: z.string().min(20).max(70),
    seoDescription: z.string().min(50).max(170),
  })
  .strict();

export type Article = z.infer<typeof ArticleFrontMatter> & {
  body: string;
  readingMinutes: number;
  path: string;
};

const sources = [
  codegraphEvidenceVi,
  codegraphEvidenceEn,
  installFirstVi,
  installFirstEn,
  connectAgentsVi,
  connectAgentsEn,
  aiReviewVi,
  aiReviewEn,
  vibeCodeVi,
  vibeCodeEn,
];

function parseArticle(raw: string): Article {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/u.exec(raw);
  if (!match) throw new Error("Article front matter must be enclosed by YAML fences");
  const metadata = ArticleFrontMatter.parse(parseYaml(match[1]));
  const route = ARTICLE_ROUTES.find((entry) => entry.id === metadata.id);
  if (!route || route.slugs[metadata.locale] !== metadata.slug) {
    throw new Error(`Route slug mismatch for ${metadata.id}/${metadata.locale}`);
  }
  const body = match[2].trim();
  const wordCount = body.split(/\s+/u).filter(Boolean).length;
  return {
    ...metadata,
    body,
    readingMinutes: Math.max(1, Math.ceil(wordCount / 210)),
    path: articlePath(metadata.id, metadata.locale),
  };
}

export const ARTICLES: readonly Article[] = sources.map(parseArticle);

assertArticleParity([...ARTICLES]);
if (ARTICLES.length !== ARTICLE_ROUTES.length * 2) {
  throw new Error("Every registered article route must have two content files");
}

export function getArticles(locale: Locale): Article[] {
  return ARTICLES.filter((article) => article.locale === locale).sort((a, b) =>
    a.id.localeCompare(b.id),
  );
}

export function getArticle(id: ArticleId, locale: Locale): Article | undefined {
  return ARTICLES.find((article) => article.id === id && article.locale === locale);
}

export function getRelatedArticles(article: Article, limit = 2): Article[] {
  return getArticles(article.locale)
    .filter((candidate) => candidate.id !== article.id)
    .sort((a, b) => {
      const aScore = a.tags.filter((tag) => article.tags.includes(tag)).length;
      const bScore = b.tags.filter((tag) => article.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}
