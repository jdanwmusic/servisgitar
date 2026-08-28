// src/lib/visual.ts — Phase B Visual Engine
// Responsibilities:
//   - Define valid VisualKind enum
//   - Resolve path contract: /images/articles/{slug}/{kind}.webp
//   - Validate kind
//   - Provide a per-article visual presence check (no broken image references)
//   - Build AI prompt contract (no auto-generation — prompt is a contract only)

import type { VisualReference } from "./types";

export const VISUAL_KINDS = [
  "anatomy",
  "measurement",
  "problem",
  "process",
  "before-after",
  "comparison",
] as const;

export type VisualKind = (typeof VISUAL_KINDS)[number];

export const VISUAL_KIND_LABEL_ID: Record<VisualKind, string> = {
  anatomy: "Anatomi / Komponen",
  measurement: "Diagram Pengukuran",
  problem: "Ilustrasi Masalah",
  process: "Alur Proses",
  "before-after": "Sebelum / Sesudah",
  comparison: "Perbandingan Teknis",
};

/** Path contract — no actual file presence required at runtime.
 *  Articles without an image file simply render the section with a stable "diagram pending" placeholder,
 *  avoiding broken image icons in production.
 */
export function visualPath(slug: string, kind: VisualKind): string {
  return `/images/articles/${slug}/${kind}.webp`;
}

/** True if article declares a valid visual. Does NOT touch the filesystem (no build-time scanning). */
export function hasVisual(article: { visual?: VisualReference }): boolean {
  if (!article.visual) return false;
  return VISUAL_KINDS.includes(article.visual.kind as VisualKind);
}

/** Returns a short label for the visual kind in Indonesian. */
export function visualKindLabel(kind: VisualKind): string {
  return VISUAL_KIND_LABEL_ID[kind] ?? kind;
}

// ── AI visual prompt contract (no actual generation) ───────────────────────
// Use this when generating visuals with a diffusion model or designer hand-off.
// Style is consistent with site identity: dark industrial (#0A0A0C bg, #C9A84C accent).
export interface VisualPromptContract {
  subject: string; // what the image is about (e.g. "string height measurement on fret 12")
  style: "dark-industrial-line-art" | "dark-industrial-photo" | "dark-industrial-anatomy";
  palette: ["#0A0A0C", "#C9A84C", "#E5E5E5"]; // bg, accent, light lines
  composition: string; // e.g. "vertical diagram, top-down fretboard view, labels in Indonesian"
  accuracyRules: string[]; // hard rules — what MUST be correct
  forbidden: string[]; // what MUST NOT be added (e.g. fabricated part names)
  aspectRatio: "16:9" | "4:3" | "1:1";
  alt: string; // matches VisualReference.alt — same content
  outputPath: string; // /images/articles/{slug}/{kind}.webp
}

export function buildVisualPrompt(args: {
  slug: string;
  kind: VisualKind;
  articleTitle: string;
  subject: string;
  composition: string;
  accuracyRules: string[];
  forbidden: string[];
  alt: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
}): VisualPromptContract {
  return {
    subject: args.subject,
    style: "dark-industrial-line-art",
    palette: ["#0A0A0C", "#C9A84C", "#E5E5E5"],
    composition: args.composition,
    accuracyRules: args.accuracyRules,
    forbidden: args.forbidden,
    aspectRatio: args.aspectRatio ?? "16:9",
    alt: args.alt,
    outputPath: visualPath(args.slug, args.kind),
  };
}
