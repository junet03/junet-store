export const LOCALES = ["vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "vi";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "vi" ? "en" : "vi";
}

export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferences = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawLanguage, ...params] = entry.trim().split(";");
      const qValue = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const quality = qValue ? Number.parseFloat(qValue.slice(2)) : 1;
      return {
        language: rawLanguage.toLowerCase().split("-")[0],
        quality: Number.isFinite(quality) ? quality : 0,
        index,
      };
    })
    .filter((entry) => entry.language === "vi" || entry.language === "en")
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  if (preferences.length === 0) return DEFAULT_LOCALE;
  if (preferences.length > 1 && preferences[0].quality === preferences[1].quality) {
    return DEFAULT_LOCALE;
  }

  return preferences[0].language === "en" ? "en" : "vi";
}
