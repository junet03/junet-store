import type { Metadata } from "next";
import type { Locale } from "./i18n";

export const SITE_URL = "https://junet.store";
export const SITE_NAME = "Junet.store";

export function localizedMetadata({
  locale,
  title,
  description,
  canonical,
  alternate,
  type = "website",
}: {
  locale: Locale;
  title: string;
  description: string;
  canonical: string;
  alternate: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        vi: locale === "vi" ? canonical : alternate,
        en: locale === "en" ? canonical : alternate,
        "x-default": locale === "vi" ? canonical : alternate,
      },
    },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? ["en_US"] : ["vi_VN"],
      images: [{ url: "/og-1200x630.webp", width: 1200, height: 630, alt: `${SITE_NAME} — AI × MQL5 × Open Source` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-1200x630.webp"],
    },
  };
}
