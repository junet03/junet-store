"use client";

import { useState } from "react";

export function CopyCode({
  code,
  label,
  copiedLabel,
}: {
  code: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="copy-code">
      <code>{code}</code>
      <button type="button" onClick={copy} aria-label={label}>
        {copied ? copiedLabel : label}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? copiedLabel : ""}</span>
    </div>
  );
}
