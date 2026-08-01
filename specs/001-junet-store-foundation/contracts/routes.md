# Public Route Contract

| Identity | Vietnamese | English |
| --- | --- | --- |
| Home | `/vi` | `/en` |
| Flagship project | `/vi/mql5-codegraph` | `/en/mql5-codegraph` |
| Article index | `/vi/bai-viet` | `/en/articles` |
| Projects | `/vi/du-an` | `/en/projects` |
| About | `/vi/gioi-thieu` | `/en/about` |
| Community | `/vi/cong-dong` | `/en/community` |

Article detail paths use their localized index prefix and localized slug. Root
`/` selects a supported locale with a temporary redirect and is never a canonical
content page. Unsupported locale or content identities return not found.

Every content response exposes a locale-specific canonical and symmetrical `vi`,
`en`, and `x-default` alternates. The switcher uses identity lookup only.
