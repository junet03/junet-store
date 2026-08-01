# Data Model: Junet.store Foundation

## Locale

- Values: `vi`, `en`
- Default: `vi`
- Rule: public route and content metadata must use exactly one supported value.

## Route Identity

- Fields: `id`, `paths.vi`, `paths.en`, `navigationOrder`, `sitemapPriority`
- Relationships: article route identities reference one Article identity.
- Rules: paths are absolute, unique per locale, and resolvable in both locales.

## Article

- Stable fields: `id`, `translationId`, `featured`
- Localized fields: `locale`, `slug`, `title`, `summary`, `seoTitle`,
  `seoDescription`, `category`, `tags`, `publishedAt`, `updatedAt`, body
- Derived fields: `path`, `readingMinutes`, translation path
- Rules: exactly one `vi` and one `en` item per identity; localized slugs are
  unique; dates are ISO; body has no raw HTML or unsafe link/image protocol.

## Project

- Stable fields: `id`, `status`, `license`, `release`, `repoUrl`, `releaseUrl`,
  `docsUrl`, `discussionsUrl`, `issuesUrl`, `image`
- Localized fields: `name`, `summary`, `description`, `ctaLabels`
- Rules: all public claims and destinations are verified before publication;
  no future project exists until a verified public record is added.

## Theme Preference

- Values: `light`, `dark`
- Source order: valid stored choice, then device preference, then light fallback
- State transition: explicit toggle replaces the stored choice; invalid or
  inaccessible storage does not block rendering.

## Release Evidence

- Fields: `spec`, `adrs`, `commitSha`, `ciChecks`, `privatePreview`,
  `browserEvidence`, `graphifyRevision`, `gitnexusSummary`, `approval`,
  `sitesVersion`, `productionSmoke`, `rollbackVersion`, `risks`, `nextAction`
- State transitions: drafted -> validated -> privately deployed -> approved ->
  publicly deployed -> verified; any failed gate returns to drafted or triggers
  rollback.
