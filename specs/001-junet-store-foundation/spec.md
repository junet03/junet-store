# Feature Specification: Junet.store Foundation

**Feature Branch**: `001-junet-store-foundation`

**Created**: 2026-08-02

**Status**: Accepted for implementation

**Input**: Build a public bilingual, mobile-first personal and community site
that promotes MQL5 CodeGraph first, publishes durable AI/MQL5/open-source
knowledge, supports light and dark themes, and is operated through secure,
evidence-backed release gates.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover and install MQL5 CodeGraph (Priority: P1)

An MQL5 developer arrives from search, GitHub, or Telegram, understands what
MQL5 CodeGraph does, sees its local/offline trust boundary, and can open the
repository or copy the current installation command without hunting through the
site.

**Why this priority**: Promoting the flagship open-source repository is the
primary purpose of V1.

**Independent Test**: A new visitor can reach the project page, identify the
public-beta status and license, copy the v0.3.0 command, and open the repository
in under two minutes.

**Acceptance Scenarios**:

1. **Given** a visitor opens either locale homepage, **When** the first viewport
   is visible, **Then** the MQL5 CodeGraph value proposition and repository and
   install calls to action are present.
2. **Given** the project page, **When** the visitor requests the install command,
   **Then** the exact v0.3.0 command is copyable and accompanied by Python 3.11+
   and local-project guidance.
3. **Given** a visitor needs trust details, **When** they inspect the project
   page, **Then** the MIT license, public-beta status, local/offline boundary,
   experimental MCP/plugin status, and MetaQuotes independence notice are clear.

---

### User Story 2 - Learn in Vietnamese or English (Priority: P2)

A reader can browse five complete practical articles in Vietnamese or English,
switch language while staying on equivalent content, and follow related guidance
without encountering incomplete translations.

**Why this priority**: The site must become a lasting knowledge hub rather than a
single campaign page.

**Independent Test**: Starting from either article index, a reader can open each
of five articles, switch locale on the same article, and return to the matching
localized index.

**Acceptance Scenarios**:

1. **Given** any localized page, **When** the reader changes language, **Then**
   the equivalent page identified by the same content identity opens.
2. **Given** either article index, **When** it loads, **Then** all five translated
   articles are present with clear topic, summary, date, tags, and reading time.
3. **Given** a translation is absent or metadata is invalid, **When** release
   validation runs, **Then** publication is blocked rather than falling back to
   mixed-language content.

---

### User Story 3 - Use the site comfortably on any screen (Priority: P3)

An Android, iPhone, tablet, or desktop visitor can navigate, read, copy commands,
and change theme without horizontal page overflow, clipped controls, hover-only
actions, or a flash of the wrong theme.

**Why this priority**: Mobile compatibility, accessibility, and visual identity
are non-negotiable parts of the product.

**Independent Test**: The homepage, project page, article index, article detail,
projects page, and not-found state pass the agreed Chromium/WebKit viewport
matrix in both themes.

**Acceptance Scenarios**:

1. **Given** a first-time visitor, **When** the page opens, **Then** the theme
   follows the device preference before content becomes visible.
2. **Given** a visitor chooses the sun or moon control, **When** they navigate or
   reload, **Then** the explicit choice remains and the control has an accessible
   localized name.
3. **Given** a 375 CSS-pixel viewport, **When** the visitor opens navigation and
   code examples, **Then** every control remains reachable with at least a 44 CSS
   pixel touch target and the document itself does not scroll horizontally.

---

### User Story 4 - Join and sustain the community (Priority: P4)

A visitor can understand Junet's community mission, join Interest AI MQL5, find
contribution channels, and see current and future open-source projects without
fabricated project claims.

**Why this priority**: Community continuity is the long-term value beyond the
flagship launch.

**Independent Test**: A visitor can reach the community, GitHub Discussions,
Issues, and contribution guidance from both locale navigation systems.

**Acceptance Scenarios**:

1. **Given** a community-oriented visitor, **When** they open the community page,
   **Then** the Telegram group, participation principles, and contribution paths
   are clear.
2. **Given** the projects page, **When** it loads, **Then** only verified public
   projects are represented and the information architecture can accept later
   projects without redesign.

---

### User Story 5 - Operate a trustworthy public site (Priority: P5)

The maintainer can review an exact release candidate, verify mobile, content,
security, and architecture evidence, approve production explicitly, and roll back
to the prior stable release.

**Why this priority**: The public domain must be reliable without trading away
the higher-priority visitor experience.

**Independent Test**: A release record ties a validated commit to a private
preview, production approval, deployed version, smoke results, and rollback
target.

**Acceptance Scenarios**:

1. **Given** a candidate with a failed required check, **When** release is
   requested, **Then** production publication is blocked.
2. **Given** all required evidence is green, **When** the maintainer approves the
   candidate, **Then** exactly that candidate may be published.
3. **Given** production validation fails, **When** rollback is invoked, **Then**
   the last known-good saved version can be restored and the event is journaled.

### Edge Cases

- Unsupported locale paths produce a localized not-found experience and offer
  both valid locale roots.
- A disabled or unavailable client script leaves core navigation, article text,
  external links, and install commands readable.
- A failed decorative image does not hide product identity or calls to action.
- Long commands and unbroken source identifiers scroll within their code region
  without causing document overflow.
- Missing, duplicated, or mismatched translation identifiers stop publication.
- External GitHub or Telegram downtime does not block local page rendering; links
  remain visible for retry.
- Theme storage denial falls back to the system color preference without an
  exception or blank page.
- Crawlers and verified bots are not unintentionally challenged by site-specific
  abuse rules.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present MQL5 CodeGraph as the flagship project in the
  first viewport of both locale homepages.
- **FR-002**: The project page MUST expose repository, release, documentation,
  Discussions, Issues, contribution, and copy-install actions.
- **FR-003**: Project claims and install instructions MUST match the current
  public repository and release selected for V1.
- **FR-004**: The site MUST provide complete `/vi` and `/en` route families for
  home, project, articles, projects, about, community, and not-found content.
- **FR-005**: Every public content item MUST have a stable identity and complete
  Vietnamese and English representations.
- **FR-006**: Locale switching MUST open the equivalent translated content and
  MUST NOT infer a destination by mechanically replacing arbitrary path text.
- **FR-007**: The article library MUST publish the five accepted bilingual topics
  with summaries, categories, tags, dates, and reading-time guidance.
- **FR-008**: Published content MUST reject raw embedded HTML and unsafe script or
  event-handler content.
- **FR-009**: The site MUST expose light and dark color modes through an
  accessible sun/moon control.
- **FR-010**: Initial theme selection MUST follow the device preference, while a
  manual selection MUST persist locally across reloads and route changes.
- **FR-011**: Mobile navigation MUST be fully operable with touch and keyboard and
  MUST not depend on hover.
- **FR-012**: Code examples MUST remain readable and copyable at narrow widths
  without causing document-level horizontal scrolling.
- **FR-013**: The projects page MUST contain only verified public projects and
  MUST support adding future projects through the same content contract.
- **FR-014**: The community page MUST link to Interest AI MQL5 and the verified
  MQL5 CodeGraph contribution channels.
- **FR-015**: Each localized page MUST expose its own canonical URL and the
  equivalent Vietnamese, English, and default language alternates.
- **FR-016**: The project and footer disclosures MUST state that MetaTrader 5 and
  MQL5 are MetaQuotes trademarks and that MQL5 CodeGraph is independent.
- **FR-017**: The release workflow MUST bind validation and publication to an
  exact source revision and a saved deployable version.
- **FR-018**: Public deployment MUST require explicit maintainer approval after a
  private preview and required release checks.
- **FR-019**: The project MUST maintain architecture, decision, operations,
  handoff, changelog, and append-only journal documentation.
- **FR-020**: Release evidence MUST include current Graphify architecture outputs
  and a scoped GitNexus change-impact summary.

### Non-Functional Requirements

- **NFR-001**: Every interactive control MUST be keyboard operable, visibly
  focused, meaningfully named, and at least 44 by 44 CSS pixels on touch layouts.
- **NFR-002**: Required pages MUST have no document-level horizontal overflow at
  375, 393, 412, 768, and 1440 CSS-pixel viewport widths.
- **NFR-003**: Mobile release measurement MUST target scores of at least 95 for
  performance, accessibility, best practices, and SEO, with LCP at most 2.5
  seconds and CLS at most 0.1 under the documented profile.
- **NFR-004**: The first painted theme MUST match the selected or system theme
  without a visible opposite-theme flash.
- **NFR-005**: The public runtime MUST contain no account, form, upload,
  application database, advertising, analytics, or third-party runtime script.
- **NFR-006**: Responses MUST apply a default-deny content policy, anti-framing,
  MIME-sniffing protection, restrictive referrer handling, and restrictive
  browser capability permissions.
- **NFR-007**: Public pages and immutable assets MUST be served through the edge
  cache without exposing a dedicated public origin.
- **NFR-008**: The domain security policy MUST retain automatic DDoS protection,
  available managed protections, verified-bot exclusions, reversible changes,
  and a documented false-positive response.
- **NFR-009**: Required continuous-integration checks MUST run for proposed changes
  and block merge on failures.
- **NFR-010**: Build, security, deployment, and automation credentials MUST remain
  outside source, content, specifications, logs, and generated public artifacts.
- **NFR-011**: A production failure MUST have a documented rollback path to the
  immediately prior stable version and DNS state.
- **NFR-012**: Operational and release history MUST be append-only and traceable to
  source revision, specification, decision records, and evidence.

### Key Entities

- **Localized Page**: A navigable page identity with locale-specific title,
  summary, path, canonical metadata, and translation relationship.
- **Article**: A stable knowledge item with a Vietnamese and English body,
  localized slug and metadata, publication dates, category, tags, and featured
  status.
- **Project**: A verified open-source project with status, license, release,
  repository, documentation, artwork, and localized descriptions.
- **Theme Preference**: A visitor-local light or dark choice that overrides the
  device preference after explicit selection.
- **Release Evidence**: A traceable record of source revision, required checks,
  private preview, approval, deployed version, smoke results, and rollback target.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time MQL5 visitor can identify the flagship purpose and open
  the repository or copy the install command within two minutes.
- **SC-002**: All five knowledge topics are accessible in both languages, and 100%
  of language switches on accepted routes resolve to equivalent content.
- **SC-003**: All required pages pass the five-width mobile/desktop matrix in both
  themes without document overflow or unreachable controls.
- **SC-004**: The documented mobile audit reaches at least 95 in performance,
  accessibility, best practices, and SEO, with LCP at most 2.5 seconds and CLS at
  most 0.1.
- **SC-005**: Required content, build, test, dependency, and security checks pass
  before a production candidate becomes eligible for approval.
- **SC-006**: Production HTTP checks confirm HTTPS, apex canonicalization,
  locale routes, security headers, expected content marker, and removal of the
  parking page.
- **SC-007**: Every release has one append-only journal entry containing the
  accepted spec, relevant ADRs, Graphify/GitNexus evidence, exact revision,
  deployed version, remaining risks, and rollback target.
- **SC-008**: No secret, credential, local index, runtime log, or temporary browser
  artifact is present in the committed or deployed public source.

## Assumptions

- `junet.store` remains managed through the existing Cloudflare zone and the
  maintainer can edit DNS and security settings at the production checkpoint.
- `junet03/junet-store` will be a public repository; only MQL5 CodeGraph is a
  verified public project at V1 launch.
- Vietnamese and English are editorially equivalent, not automatic translations.
- The root route may prefer browser English when explicitly requested and
  otherwise defaults to Vietnamese.
- Production publication is performed through Sites using a saved version after
  approval; unsupported deployment APIs are not invented for CI automation.
- DDoS, WAF, and rate-limit controls use features exposed by the current
  Cloudflare plan and are tuned from observed traffic rather than paid-plan
  assumptions.
