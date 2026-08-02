# Graph Report - F:\Dev\Projects\junet-store  (2026-08-02)

## Corpus Check
- 114 files · ~119,326 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 498 nodes · 710 edges · 30 communities (27 shown, 3 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 83 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Spec Kit PowerShell Core
- Feature Branch Automation
- Localized Page Dispatcher
- Locale Layout and 404
- SEO and Security Headers
- Theme and Locale UI
- Localized Page Components
- Safe Markdown Rendering
- Project Footer Metadata
- ESLint Quality Policy
- Article Content Loader
- Content and Render Tests
- Route Identity Contracts
- Runtime Package Manifest
- Toolchain Dependencies
- Markdown Raw Imports
- Spec Kit SDD Workflow
- Constitution and Quality
- MQL5 Evidence and Release
- Architecture Security Decisions
- Foundation Design Decisions
- Release Security Operations
- Foundation Release Architecture
- Project Metadata Type
- Sites Vite Configuration
- Worker Asset Policy

## God Nodes (most connected - your core abstractions)
1. `Junet.store Constitution` - 16 edges
2. `getCopy()` - 14 edges
3. `Locale` - 13 edges
4. `articlePath()` - 13 edges
5. `scripts` - 12 edges
6. `isLocale()` - 9 edges
7. `ARTICLE_ROUTES` - 9 edges
8. `Actionable Task Generation` - 8 edges
9. `Full SDD Cycle` - 8 edges
10. `Append-only project journal` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Append-Only Checklist Generation` --semantically_similar_to--> `Living Documentation and Append-Only History`  [INFERRED] [semantically similar]
  .agents/skills/speckit-checklist/SKILL.md → .specify/memory/constitution.md
- `Append-Only Convergence Tasks` --semantically_similar_to--> `Living Documentation and Append-Only History`  [INFERRED] [semantically similar]
  .agents/skills/speckit-converge/SKILL.md → .specify/memory/constitution.md
- `Test-First Task Execution` --semantically_similar_to--> `Tests-Before-Implementation Ordering`  [INFERRED] [semantically similar]
  .agents/skills/speckit-implement/SKILL.md → .specify/templates/tasks-template.md
- `Technology-Agnostic Success Criteria` --semantically_similar_to--> `Measurable Success Outcomes`  [INFERRED] [semantically similar]
  .agents/skills/speckit-specify/SKILL.md → .specify/templates/spec-template.md
- `Inference honesty boundary` --semantically_similar_to--> `Graphify and GitNexus evidence roles`  [INFERRED] [semantically similar]
  docs/runbooks/refresh-code-intelligence.md → specs/001-junet-store-foundation/research.md

## Import Cycles
- 1-file cycle: `app/[locale]/[[...path]]/page.tsx -> app/[locale]/[[...path]]/page.tsx`
- 1-file cycle: `components/content/PageViews.tsx -> components/content/PageViews.tsx`
- 1-file cycle: `lib/content/articles.ts -> lib/content/articles.ts`
- 1-file cycle: `app/[locale]/layout.tsx -> app/[locale]/layout.tsx`
- 1-file cycle: `components/content/ArticleCard.tsx -> components/content/ArticleCard.tsx`
- 1-file cycle: `components/content/CopyCode.tsx -> components/content/CopyCode.tsx`
- 1-file cycle: `components/content/MarkdownArticle.tsx -> components/content/MarkdownArticle.tsx`
- 1-file cycle: `eslint.config.mjs -> eslint.config.mjs`
- 1-file cycle: `tests/content.test.ts -> tests/content.test.ts`
- 1-file cycle: `tests/ui-contracts.test.ts -> tests/ui-contracts.test.ts`
- 1-file cycle: `vite.config.ts -> vite.config.ts`
- 1-file cycle: `worker/index.ts -> worker/index.ts`
- 2-file cycle: `app/[locale]/[[...path]]/page.tsx -> lib/seo.ts -> app/[locale]/[[...path]]/page.tsx`

## Hyperedges (group relationships)
- **Spec Kit Core SDD Cycle** — _specify_workflows_speckit_workflow_full_sdd_cycle, _agents_skills_speckit_specify_skill_feature_specification, _agents_skills_speckit_plan_skill_implementation_planning, _agents_skills_speckit_tasks_skill_actionable_task_generation, _agents_skills_speckit_implement_skill_task_implementation [EXTRACTED 1.00]
- **Junet.store Core Release Principles** — _specify_memory_constitution_community_and_flagship_first, _specify_memory_constitution_bilingual_parity_release_gate, _specify_memory_constitution_mobile_accessibility_performance, _specify_memory_constitution_static_private_secure_default, _specify_memory_constitution_evidence_backed_delivery, _specify_memory_constitution_living_documentation_append_only_history, _specify_memory_constitution_simple_reversible_change [EXTRACTED 1.00]
- **Repository Security Automation** — _github_dependabot_automated_dependency_updates, _github_workflows_codeql_codeql_security_analysis, _github_workflows_dependency_review_pull_request_dependency_review, _github_workflows_quality_dependency_security_audit [INFERRED 0.85]
- **Stable bilingual identity and metadata system** — docs_architecture_content_flow_stable_article_identity_registry, docs_architecture_i18n_theme_localized_route_identity, docs_decisions_0001_localized_url_identities_stable_identity_decision [EXTRACTED 1.00]
- **Static compiler test and runtime evidence chain** — content_articles_01_codegraph_evidence_en_static_analysis_limits, content_articles_02_install_first_project_en_compiler_runtime_evidence, content_articles_04_ai_mql5_review_en_layered_evidence, content_articles_05_sustainable_vibe_code_en_bounded_patch_and_proof [INFERRED 0.95]
- **Approval-gated release and rollback control** — handoff_private_sites_candidate_gate, handoff_production_blockers, docs_architecture_deployment_approval_gated_sites_deployment, docs_architecture_deployment_version_and_dns_rollback [INFERRED 0.95]
- **Bilingual content identity system** — specs_001_junet_store_foundation_contracts_content_schema_content_contract, specs_001_junet_store_foundation_contracts_routes_public_route_contract, specs_001_junet_store_foundation_data_model_article, specs_001_junet_store_foundation_data_model_route_identity [INFERRED 0.85]
- **Controlled release evidence flow** — docs_decisions_0004_sites_controlled_delivery_exact_green_commit, docs_runbooks_deploy_rollback_exact_sha_private_candidate, specs_001_junet_store_foundation_contracts_release_evidence_production_eligibility_record, specs_001_junet_store_foundation_data_model_release_evidence_lifecycle, specs_001_junet_store_foundation_tasks_production_edge_cutover [INFERRED 0.85]
- **Production edge security activation** — docs_decisions_0005_static_edge_security_static_first_edge_security, docs_decisions_0006_production_edge_activation_production_edge_activation, docs_runbooks_ddos_incident_ddos_incident_response, docs_runbooks_dns_cutover_dns_cutover_workflow [INFERRED 0.85]

## Communities (30 total, 3 thin omitted)

### Community 13 - "Spec Kit PowerShell Core"
Cohesion: 0.22
Nodes (10): Find-SpecifyRoot(), Resolve-SpecifyInitDir(), Get-RepoRoot(), Get-CurrentBranch(), Save-FeatureJson(), Get-FeaturePathsEnv(), Get-InvokeSeparator(), Format-SpecKitCommand() (+2 more)

### Community 16 - "Localized Page Dispatcher"
Cohesion: 0.26
Nodes (11): PageParams, pageText(), generateMetadata(), LocalizedPage(), AboutView(), ARTICLES, getArticles(), getArticle() (+3 more)

### Community 12 - "Locale Layout and 404"
Cohesion: 0.20
Nodes (10): generateStaticParams(), metadata, LocaleLayout(), LocalizedNotFound(), NotFoundView(), LOCALES, isLocale(), globals (+2 more)

### Community 18 - "SEO and Security Headers"
Cohesion: 0.27
Nodes (5): sitemap(), securityHeaders, nextConfig, seo site url, next

### Community 14 - "Theme and Locale UI"
Cohesion: 0.31
Nodes (8): GET(), Theme, currentTheme(), subscribe(), ThemeToggle(), Locale, pickLocale(), react

### Community 8 - "Localized Page Components"
Cohesion: 0.16
Nodes (15): ArticleCard(), CopyCode(), HomeView(), ProjectView(), ArticlesView(), ArticleView(), ProjectsView(), CommunityView() (+7 more)

### Community 21 - "Safe Markdown Rendering"
Cohesion: 0.50
Nodes (4): safeHref(), MarkdownArticle(), react markdown, remark gfm

### Community 20 - "Project Footer Metadata"
Cohesion: 0.40
Nodes (4): SiteFooter(), PROJECT_LINKS, Project, MQL5_CODEGRAPH

### Community 22 - "ESLint Quality Policy"
Cohesion: 0.40
Nodes (4): eslintConfig, eslint config, eslint config next core web vitals, eslint config next typescript

### Community 11 - "Article Content Loader"
Cohesion: 0.14
Nodes (14): ArticleFrontMatter, sources, parseArticle(), content articles 01 codegraph evidence en md raw, content articles 01 codegraph evidence vi md raw, content articles 02 install first project en md raw, content articles 02 install first project vi md raw, content articles 03 connect ai agents en md raw (+6 more)

### Community 9 - "Content and Render Tests"
Cohesion: 0.13
Nodes (15): ArticleForValidation, assertSafeMarkdown(), assertArticleParity(), ArticleId, root, required, node assert strict, node fs promises (+7 more)

### Community 17 - "Route Identity Contracts"
Cohesion: 0.35
Nodes (9): StaticRouteId, STATIC_ROUTE_PATHS, ARTICLE_ROUTES, articlePath(), pathFor(), resolveLocalizedPath(), alternatePath(), allPublicPaths() (+1 more)

### Community 4 - "Runtime Package Manifest"
Cohesion: 0.05
Nodes (36): name, version, private, engines, node, scripts, dev, build (+28 more)

### Community 5 - "Toolchain Dependencies"
Cohesion: 0.06
Nodes (33): devDependencies, @cloudflare/vite-plugin, @cloudflare/vite-plugin, @tailwindcss/postcss, @tailwindcss/postcss, @types/node, @types/node, @types/react (+25 more)

### Community 0 - "Spec Kit SDD Workflow"
Cohesion: 0.05
Nodes (49): Specification Analysis, Read-Only Analysis, Requirement Coverage Mapping, Analysis Severity Model, Requirements Quality Checklist, Unit Tests for Requirements Writing, Requirement Quality Dimensions, Eighty Percent Traceability Threshold (+41 more)

### Community 2 - "Constitution and Quality"
Cohesion: 0.06
Nodes (40): Constitution Authority, Specification Clarification, Ambiguity Coverage Taxonomy, Sequential Clarification Questioning, Incremental Specification Integration, Constitution Management, Constitution Semantic Versioning, Constitution Consistency Propagation (+32 more)

### Community 1 - "MQL5 Evidence and Release"
Cohesion: 0.05
Nodes (46): Junet.store V1 release foundation, Immutable feature specs and append-only operational journal, HSTS deferred until apex and www TLS proof, Protected feature release checkpoint, Private Sites candidate validation gate, Production approval DNS and TLS blockers, Previous known-good Sites rollback, MQL5 CodeGraph evidence-backed orientation map (+38 more)

### Community 10 - "Architecture Security Decisions"
Cohesion: 0.12
Nodes (19): Junet.store bilingual mobile-first knowledge hub, MQL5 CodeGraph flagship community project, Repository-owned paired Vietnamese and English Markdown, No CMS database forms accounts analytics or third-party scripts, Private vulnerability reporting policy, V1 reduced public application attack surface, MQL5 CodeGraph private advisory channel, Strict Markdown-to-localized-HTML content pipeline (+11 more)

### Community 7 - "Foundation Design Decisions"
Cohesion: 0.09
Nodes (25): System-first persisted theme, Parser-blocking theme initializer, Theme CSP constraint, Repository-owned Markdown, Paired bilingual articles, Strict Markdown release gate, Explicit bundled Markdown imports, Code-intelligence baseline (+17 more)

### Community 6 - "Release Security Operations"
Cohesion: 0.07
Nodes (33): Sites controlled delivery, Validation-only GitHub Actions, Exact green commit delivery, Explicit production approval, Static-first edge security, Default-deny response policy, Progressive edge mitigation, Append-only security journal (+25 more)

### Community 3 - "Foundation Release Architecture"
Cohesion: 0.06
Nodes (39): Production edge activation, Deployable response policy, Production cache policy, DNS rollback target 198.54.119.178, DNS cutover workflow, Cloudflare DNS and edge backup, TLS and canonical redirect validation, HSTS observation gate (+31 more)

### Community 19 - "Sites Vite Configuration"
Cohesion: 0.29
Nodes (6): localBindingConfig, build sites vite plugin, build sites vite plugin sites, openai hosting, vinext, vite

### Community 15 - "Worker Asset Policy"
Cohesion: 0.17
Nodes (7): Env, ExecutionContext, PUBLIC_ASSET_PATHS, isStaticAsset(), worker, vinext server app router entry, vinext server image optimization

## Ambiguous Edges - Review These
- `Theme Preference` → `Locale`  [AMBIGUOUS]
  specs/001-junet-store-foundation/data-model.md · relation: conceptually_related_to

## Knowledge Gaps
- **166 isolated node(s):** `PageParams`, `metadata`, `Theme`, `eslintConfig`, `sources` (+161 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Theme Preference` and `Locale`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Junet.store Constitution` connect `Constitution and Quality` to `Spec Kit SDD Workflow`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `PageParams`, `metadata`, `Theme` to the rest of the system?**
  _166 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Article Content Loader` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Content and Render Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._
- **Should `Runtime Package Manifest` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Toolchain Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._

## Operator Health Review

- Directed incremental hotfix update: 498 nodes, 710 retained edges, and 30 communities.
- Integrity on the post-merge extraction: 0 missing endpoints, 0 dangling endpoints, 0 self-loops, and 0 exact duplicate edges.
- Changed-source scope was limited to `vite.config.ts`, `worker/index.ts`, and `tests/rendered-html.test.mjs`; semantic documents were unchanged, so no LLM extraction was required.
- The prior full-rebuild audit recorded two raw same-endpoint edge pairs before `DiGraph` collapse. This incremental merge starts from that reviewed directed graph and does not represent those pairs as newly resolved.
- Token usage remains zero measured because this update was deterministic AST-only work.
