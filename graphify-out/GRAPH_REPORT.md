# Graph Report - F:\Dev\Projects\junet-store  (2026-08-02)

## Corpus Check
- 101 files · ~119,180 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 496 nodes · 706 edges · 28 communities (25 shown, 3 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 83 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Routing and Locale
- Spec Kit Task Workflow
- Content Schema and Tests
- Architecture Decisions
- Foundation Design
- Constitution Governance
- Runtime Dependencies
- Build Toolchain
- Bilingual MQL5 Knowledge
- Feature Scope and Evidence
- Spec Kit PowerShell Core
- Production Edge Security
- Worker Runtime Adapter
- SEO Sitemap and Robots
- Controlled Sites Delivery
- Release Evidence Journal
- Sites Vite Configuration
- Static Security Governance
- Safe Markdown Rendering
- Cloudflare DDoS Operations
- ESLint Quality Policy
- Feature Branch Automation
- Markdown Raw Imports
- Project Metadata Model

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

## Communities (28 total, 3 thin omitted)

### Community 0 - "App Routing and Locale"
Cohesion: 0.08
Nodes (48): globals, LocaleLayout(), metadata, LocalizedNotFound(), generateMetadata(), generateStaticParams(), LocalizedPage(), PageParams (+40 more)

### Community 1 - "Spec Kit Task Workflow"
Cohesion: 0.05
Nodes (49): Requirement Coverage Mapping, Read-Only Analysis, Analysis Severity Model, Specification Analysis, Append-Only Checklist Generation, Requirement Quality Dimensions, Requirements Quality Checklist, Eighty Percent Traceability Threshold (+41 more)

### Community 2 - "Content Schema and Tests"
Cohesion: 0.06
Nodes (37): GET(), content articles 01 codegraph evidence en md raw, content articles 01 codegraph evidence vi md raw, content articles 02 install first project en md raw, content articles 02 install first project vi md raw, content articles 03 connect ai agents en md raw, content articles 03 connect ai agents vi md raw, content articles 04 ai mql5 review en md raw (+29 more)

### Community 3 - "Architecture Decisions"
Cohesion: 0.06
Nodes (41): HSTS deferred until apex and www TLS proof, Immutable feature specs and append-only operational journal, Junet.store V1 release foundation, Bounded patches and layered proof, Specs ADRs and append-only journal preserve project memory, Sustainable vibe coding for open-source MQL5, Patch có ranh giới và chứng minh nhiều lớp, Spec ADR và nhật ký nối đuôi giữ trí nhớ dự án (+33 more)

### Community 4 - "Foundation Design"
Cohesion: 0.05
Nodes (41): Parser-blocking theme initializer, System-first persisted theme, Theme CSP constraint, Explicit bundled Markdown imports, Paired bilingual articles, Repository-owned Markdown, Strict Markdown release gate, Code-intelligence baseline (+33 more)

### Community 5 - "Constitution Governance"
Cohesion: 0.06
Nodes (40): Constitution Authority, Ambiguity Coverage Taxonomy, Incremental Specification Integration, Sequential Clarification Questioning, Specification Clarification, Constitution Consistency Propagation, Constitution Management, Constitution Semantic Versioning (+32 more)

### Community 6 - "Runtime Dependencies"
Cohesion: 0.05
Nodes (36): next, dependencies, next, react, react-dom, react-markdown, remark-gfm, yaml (+28 more)

### Community 7 - "Build Toolchain"
Cohesion: 0.06
Nodes (33): @cloudflare/vite-plugin, eslint, eslint-config-next, devDependencies, @cloudflare/vite-plugin, eslint, eslint-config-next, react-server-dom-webpack (+25 more)

### Community 8 - "Bilingual MQL5 Knowledge"
Cohesion: 0.09
Nodes (24): Intelligence Kernel shared CLI dashboard and MCP semantics, MQL5 CodeGraph evidence-backed orientation map, Static analysis limits and diagnostic honesty, Shared query context impact and directed-path meaning, MQL5 CodeGraph as a sourced map for AI, Partial tokenizer results and visible diagnostics, Separate MetaEditor compiler test and runtime evidence, Trusted project root and bounded analysis budget (+16 more)

### Community 9 - "Feature Scope and Evidence"
Cohesion: 0.13
Nodes (18): Mobile and performance release evidence, Foundation feature readiness, Specification quality checklist, Factual flagship content, Bilingual knowledge experience, Bilingual route requirements, Community continuity, Discover and install MQL5 CodeGraph (+10 more)

### Community 10 - "Spec Kit PowerShell Core"
Cohesion: 0.22
Nodes (10): Find-SpecifyRoot(), Format-SpecKitCommand(), Get-CurrentBranch(), Get-FeaturePathsEnv(), Get-InvokeSeparator(), Get-Python3Command(), Get-RepoRoot(), Resolve-SpecifyInitDir() (+2 more)

### Community 11 - "Production Edge Security"
Cohesion: 0.18
Nodes (11): Cloudflare Free plan constraints, Deployable response policy, DNS rollback target 198.54.119.178, Production cache policy, Production edge activation, Cloudflare DNS and edge backup, DNS cutover workflow, HSTS observation gate (+3 more)

### Community 12 - "Worker Runtime Adapter"
Cohesion: 0.18
Nodes (5): vinext server app router entry, vinext server image optimization, Env, ExecutionContext, worker

### Community 13 - "SEO Sitemap and Robots"
Cohesion: 0.24
Nodes (6): sitemap(), allPublicPaths(), seo site url, nextConfig, securityHeaders, next

### Community 14 - "Controlled Sites Delivery"
Cohesion: 0.25
Nodes (8): Exact green commit delivery, Explicit production approval, Sites controlled delivery, Validation-only GitHub Actions, Deploy and rollback workflow, Exact-SHA private candidate, Saved-version rollback, Validation-only CI and controlled Sites CD

### Community 15 - "Release Evidence Journal"
Cohesion: 0.29
Nodes (8): Append-only project journal, Foundation implementation candidate, Private release candidate, Remote governance and dependency-gate correction, Production eligibility record, Release evidence contract, Release Evidence lifecycle, Release governance requirements

### Community 16 - "Sites Vite Configuration"
Cohesion: 0.29
Nodes (6): build sites vite plugin, build sites vite plugin sites, openai hosting, vinext, vite, localBindingConfig

### Community 17 - "Static Security Governance"
Cohesion: 0.33
Nodes (6): Append-only security journal, Default-deny response policy, Static-first edge security, Static privacy and security requirements, Trustworthy site operations, Trustworthy release gate

### Community 18 - "Safe Markdown Rendering"
Cohesion: 0.50
Nodes (4): MarkdownArticle(), safeHref(), react markdown, remark gfm

### Community 19 - "Cloudflare DDoS Operations"
Cohesion: 0.40
Nodes (5): Progressive edge mitigation, Cloudflare Security Events evidence, DDoS incident response, Progressive DDoS mitigation, Verified-bot protection

### Community 20 - "ESLint Quality Policy"
Cohesion: 0.40
Nodes (4): eslintConfig, eslint config, eslint config next core web vitals, eslint config next typescript

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
- **Why does `Junet.store Constitution` connect `Constitution Governance` to `Spec Kit Task Workflow`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `PageParams`, `metadata`, `Theme` to the rest of the system?**
  _166 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Routing and Locale` be split into smaller, more focused modules?**
  _Cohesion score 0.07645687645687646 - nodes in this community are weakly interconnected._
- **Should `Spec Kit Task Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `Content Schema and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06376811594202898 - nodes in this community are weakly interconnected._
- **Should `Architecture Decisions` be split into smaller, more focused modules?**
  _Cohesion score 0.05731707317073171 - nodes in this community are weakly interconnected._

## Operator Health Review

- Directed full rebuild: 496 nodes, 706 retained edges, and 28 communities.
- Integrity: 0 missing endpoints, 0 dangling endpoints, 0 self-loops, and 0 exact duplicate edges.
- AST reference reconciliation materialized 38 explicit external/generated reference nodes, preserving 60 structural import edges that the extractor would otherwise omit.
- Two raw edge pairs share directed endpoints: one repeats an import at two source lines; one records both containment and indirect-call evidence. Graphify's directed `DiGraph` retains one edge per pair, so the committed graph has 706 of 708 valid raw edges. This limitation is explicit and does not affect the production-response-policy blast-radius conclusion.
- Semantic extraction used three host-agent chunks over 63 documents. This host exposes no per-agent usage accounting, so token usage remains recorded as zero measured rather than estimated.
