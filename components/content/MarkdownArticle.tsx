import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function safeHref(href: string | undefined): string | undefined {
  if (!href) return undefined;
  if (href.startsWith("/") || href.startsWith("#") || /^https:\/\//i.test(href)) return href;
  return undefined;
}

export function MarkdownArticle({ body }: { body: string }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        skipHtml
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const safe = safeHref(href);
            const external = safe?.startsWith("https://");
            return safe ? (
              <a href={safe} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                {children}
              </a>
            ) : (
              <span>{children}</span>
            );
          },
          pre: ({ children }) => <pre tabIndex={0}>{children}</pre>,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
