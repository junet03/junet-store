import Link from "next/link";
import type { Article } from "@/lib/content/articles";
import { getCopy } from "@/lib/copy";

export function ArticleCard({ article }: { article: Article }) {
  const c = getCopy(article.locale);
  return (
    <article className="article-card">
      <div className="article-card__meta">
        <span>{article.category}</span>
        <span>{article.readingMinutes} {c.common.minutes}</span>
      </div>
      <h3><Link href={article.path}>{article.title}</Link></h3>
      <p>{article.summary}</p>
      <div className="tag-row" aria-label="Tags">
        {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <Link className="text-link" href={article.path}>{c.common.readArticle} <span aria-hidden="true">→</span></Link>
    </article>
  );
}
