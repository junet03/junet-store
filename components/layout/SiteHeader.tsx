"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCopy } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";
import { alternatePath, STATIC_ROUTE_PATHS } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const c = getCopy(locale);
  const alternate = alternatePath(pathname, locale);
  const nav = [
    ["home", c.navigation.home],
    ["mql5-codegraph", c.navigation.project],
    ["articles", c.navigation.articles],
    ["projects", c.navigation.projects],
    ["about", c.navigation.about],
    ["community", c.navigation.community],
  ] as const;

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="brand" href={STATIC_ROUTE_PATHS.home[locale]} aria-label="Junet.store">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>
            <strong>junet.store</strong>
            <small>{c.brandNote}</small>
          </span>
        </Link>

        <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label={c.navigation.home}>
          {nav.map(([id, label]) => (
            <Link
              key={id}
              href={STATIC_ROUTE_PATHS[id][locale]}
              aria-current={pathname === STATIC_ROUTE_PATHS[id][locale] ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-actions">
          <Link
            className="language-link"
            href={alternate}
            hrefLang={locale === "vi" ? "en" : "vi"}
            onClick={() => setOpen(false)}
          >
            {locale === "vi" ? "EN" : "VI"}
            <span className="sr-only">{c.navigation.switchLanguage}</span>
          </Link>
          <ThemeToggle locale={locale} />
          <button
            type="button"
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? c.navigation.closeMenu : c.navigation.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
