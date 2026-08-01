"use client";

import { useParams } from "next/navigation";
import { NotFoundView } from "@/components/content/NotFoundView";
import { isLocale } from "@/lib/i18n";

export default function LocalizedNotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : "vi";
  return <NotFoundView locale={locale} />;
}
