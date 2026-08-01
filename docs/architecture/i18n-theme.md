# Internationalization and theme

The root route returns a non-cacheable `307` based on `Accept-Language`, with
Vietnamese as the deterministic fallback. Every public identity owns explicit
Vietnamese and English paths, canonical URLs, `hreflang` entries, and an
`x-default` pointing to Vietnamese.

Theme uses semantic CSS variables. Before hydration, `/theme-init.js` reads only
the values `light` or `dark` from `localStorage`; otherwise it follows
`prefers-color-scheme`. It sets `data-theme` and `color-scheme` before the first
content paint. The accessible sun/moon control stores an explicit choice and
continues to work when storage is unavailable.

Mobile behavior is not hover-dependent. Controls use at least 44 CSS pixels,
the navigation locks body scrolling when open, layouts account for iPhone safe
areas, code blocks scroll independently, and motion is disabled when the visitor
prefers reduced motion.
