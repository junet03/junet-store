# Content Contract

Required article front matter:

```yaml
id: stable-article-id
translationId: stable-article-id
locale: vi
slug: localized-kebab-case
title: Localized title
summary: Localized summary
publishedAt: 2026-08-02
updatedAt: 2026-08-02
category: Localized category
tags:
  - MQL5
featured: true
seoTitle: Localized SEO title
seoDescription: Localized SEO description
```

Release validation rejects unknown fields, missing translations, duplicate
identity/locale combinations, duplicate localized slugs, invalid dates, empty
tags, raw HTML, inline event handlers, `javascript:`/`data:text/html` URLs, and
orphaned imports.
