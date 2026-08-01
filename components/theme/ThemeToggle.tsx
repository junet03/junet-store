"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/copy";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("junet-theme-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("junet-theme-change", onStoreChange);
  };
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "light");
  const labels = getCopy(locale).theme;

  function toggleTheme() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try {
      window.localStorage.setItem("junet-theme", next);
    } catch {
      // Theme remains active for this page even when storage is unavailable.
    }
    window.dispatchEvent(new Event("junet-theme-change"));
  }

  const label = theme === "dark" ? labels.light : labels.dark;

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__sun" aria-hidden="true">☀</span>
      <span className="theme-toggle__moon" aria-hidden="true">☾</span>
    </button>
  );
}
