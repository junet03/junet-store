# Content publishing runbook

1. Add one directory under `content/articles/<stable-id>/` with both `vi.md` and
   `en.md` in the same change.
2. Use all required front-matter fields. Keep `id` and `translationId` equal in
   both files; use unique localized slugs.
3. Add the identity and both slugs to `lib/routes.ts`, then add explicit `?raw`
   imports in `lib/content/articles.ts`.
4. Preserve factual parity, external-source boundaries, and the MetaQuotes
   independence disclaimer. Raw HTML and unsafe protocols are prohibited.
5. Run `npm run test:content`, `npm run test:rendered`, link review, and mobile
   checks for article index/detail and the language switch.
6. Add a journal entry with sources checked, tests, remaining risks, and next
   action. A major new content type requires a feature spec and ADR.
