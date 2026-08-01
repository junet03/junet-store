import type { ArticleId } from "../routes";
import type { Locale } from "../i18n";

export type ArticleForValidation = {
  id: ArticleId;
  translationId: ArticleId;
  locale: Locale;
  slug: string;
  body: string;
};

const rawHtml = /(^|\n)\s*<\/?[a-z][^>]*>/i;
const unsafeProtocol = /\]\(\s*(?:javascript:|data:text\/html)/i;
const inlineHandler = /\bon[a-z]+\s*=/i;

export function assertSafeMarkdown(article: ArticleForValidation): void {
  if (rawHtml.test(article.body)) {
    throw new Error(`Raw HTML is forbidden in article ${article.id}/${article.locale}`);
  }
  if (unsafeProtocol.test(article.body) || inlineHandler.test(article.body)) {
    throw new Error(`Unsafe content is forbidden in article ${article.id}/${article.locale}`);
  }
}

export function assertArticleParity(articles: ArticleForValidation[]): void {
  const seenLocaleSlugs = new Set<string>();
  const pairs = new Map<ArticleId, Set<Locale>>();

  for (const article of articles) {
    if (article.id !== article.translationId) {
      throw new Error(`Translation identity mismatch for ${article.id}/${article.locale}`);
    }
    const slugKey = `${article.locale}:${article.slug}`;
    if (seenLocaleSlugs.has(slugKey)) {
      throw new Error(`Duplicate localized article slug: ${slugKey}`);
    }
    seenLocaleSlugs.add(slugKey);
    const locales = pairs.get(article.id) ?? new Set<Locale>();
    if (locales.has(article.locale)) {
      throw new Error(`Duplicate translation: ${article.id}/${article.locale}`);
    }
    locales.add(article.locale);
    pairs.set(article.id, locales);
    assertSafeMarkdown(article);
  }

  for (const [id, locales] of pairs) {
    if (!locales.has("vi") || !locales.has("en") || locales.size !== 2) {
      throw new Error(`Article ${id} must have exactly one vi and one en translation`);
    }
  }
}
