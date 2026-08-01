# Security posture

V1 minimizes attack surface by serving only read-only content. There is no auth,
form, upload, user-controlled rendering, database, API, analytics, advertising,
or third-party runtime script. Production dependencies must pass the High and
Critical audit gate.

Responses apply a default-deny CSP, anti-framing, MIME sniffing protection,
restrictive referrer and browser permissions policies, same-origin isolation,
and no framework disclosure. Current Vinext/RSC output requires narrowly scoped
inline script/style compatibility; `unsafe-eval` and all third-party origins are
forbidden. The local parser-blocking theme script is intentional and tested.

Cloudflare supplies baseline DDoS protection. Enable the available managed rules,
observe Security Events, and avoid permanent Under Attack Mode or country blocks.
Because V1 has no expensive dynamic endpoint, do not challenge normal static GET
traffic by default. If abuse is measured, introduce one reviewed rate rule at a
narrow path or a high threshold, exclude verified bots, start with Managed
Challenge, and record false-positive review in the journal.
