// src/data/relationships.ts — Phase 3.5 patch: populated relationship graph (R4)
// VERIFIED graph density (not maximum). Only relationships supported by existing structured data
// or manufacturer documentation are included. Unknown relationships are documented as absent.

import type { Relationship, Source } from "@/lib/types";

const SRC_FENDER_OFFICIAL: Source = { title: "Fender Official Product / Spec Pages", tier: "primary", publisher: "Fender", accessDate: "2026-08-28" };
const SRC_GIBSON_OFFICIAL: Source = { title: "Gibson Official Product / Spec Pages", tier: "primary", publisher: "Gibson", accessDate: "2026-08-28" };
const SRC_YAMAHA_OFFICIAL: Source = { title: "Yamaha Official Product Pages", tier: "primary", publisher: "Yamaha", accessDate: "2026-08-28" };

export const RELATIONSHIPS: Relationship[] = [
  // === usesBrand (Model → Brand) — verified via brandId on every Model ===
  { from: "fender-stratocaster", to: "fender", type: "usesBrand", weight: 1.0, bidirectional: false },
  { from: "fender-telecaster", to: "fender", type: "usesBrand", weight: 1.0, bidirectional: false },
  { from: "gibson-les-paul", to: "gibson", type: "usesBrand", weight: 1.0, bidirectional: false },
  { from: "yamaha-fg800", to: "yamaha", type: "usesBrand", weight: 1.0, bidirectional: false },
  { from: "yamaha-pacifica-112v", to: "yamaha", type: "usesBrand", weight: 1.0, bidirectional: false },
  // === isModelOf (Model → Instrument) — inferred from category field ===
  { from: "fender-stratocaster", to: "instrument-elektrik", type: "isModelOf", weight: 1.0, bidirectional: false },
  { from: "fender-telecaster", to: "instrument-elektrik", type: "isModelOf", weight: 1.0, bidirectional: false },
  { from: "gibson-les-paul", to: "instrument-elektrik", type: "isModelOf", weight: 1.0, bidirectional: false },
  { from: "yamaha-fg800", to: "instrument-akustik", type: "isModelOf", weight: 1.0, bidirectional: false },
  { from: "yamaha-pacifica-112v", to: "instrument-elektrik", type: "isModelOf", weight: 1.0, bidirectional: false },
  // === variantOf (ModelVariant → Model) — only 2 actual variants defined ===
  { from: "fender-stratocaster-american-vintage-ii-1957", to: "fender-stratocaster", type: "variantOf", weight: 1.0, bidirectional: false },
  { from: "fender-stratocaster-squier-affinity", to: "fender-stratocaster", type: "variantOf", weight: 1.0, bidirectional: false },
  // === hasComponent (Brand → Component) — only components with direct evidence ===
  { from: "fender-stratocaster", to: "component-tremolo-6-screw", type: "hasComponent", weight: 1.0, bidirectional: false },
  { from: "fender-stratocaster", to: "component-truss-rod-headstock", type: "hasComponent", weight: 1.0, bidirectional: false },
  { from: "fender-telecaster", to: "component-bridge-hardtail-3-saddle", type: "hasComponent", weight: 1.0, bidirectional: false },
  { from: "gibson-les-paul", to: "component-tune-o-matic", type: "hasComponent", weight: 1.0, bidirectional: false },
  { from: "gibson-les-paul", to: "component-stopbar-tailpiece", type: "hasComponent", weight: 1.0, bidirectional: false },
  { from: "yamaha-fg800", to: "component-pinned-rosewood-bridge", type: "hasComponent", weight: 1.0, bidirectional: false },
  // === causes (Component → Problem) — only where evidence supports the causal link ===
  { from: "component-nut", to: "problem-fret-buzz", type: "causes", weight: 0.7, bidirectional: false },
  { from: "component-truss-rod-headstock", to: "problem-fret-buzz", type: "causes", weight: 0.8, bidirectional: false },
  { from: "component-bridge", to: "problem-tuning-instability", type: "causes", weight: 0.6, bidirectional: false },
  { from: "component-nut", to: "problem-tuning-instability", type: "causes", weight: 0.7, bidirectional: false },
  // === requiresTool (Service → Tool) ===
  { from: "service-setup-dasar-gitar-elektrik", to: "tool-feeler-gauge", type: "requiresTool", weight: 1.0, bidirectional: false },
  { from: "service-setup-dasar-gitar-elektrik", to: "tool-fret-rocker", type: "requiresTool", weight: 1.0, bidirectional: false },
  { from: "service-setup-dasar-gitar-elektrik", to: "tool-truss-rod-wrench", type: "requiresTool", weight: 1.0, bidirectional: false },
  // === measures (Measurement → Component) — what each measurement applies to ===
  { from: "measurement-neck-relief", to: "component-truss-rod-headstock", type: "measures", weight: 1.0, bidirectional: false },
  { from: "measurement-action-at-12th-fret", to: "component-bridge", type: "measures", weight: 1.0, bidirectional: false },
];

export const RELATIONSHIP_SOURCES: Record<string, Source> = {
  fender: SRC_FENDER_OFFICIAL,
  gibson: SRC_GIBSON_OFFICIAL,
  yamaha: SRC_YAMAHA_OFFICIAL,
};

// Documented as absent (not inferred):
// - Gibson → LP variants (no variants defined in data)
// - Yamaha → Pacifica 112V variants (no variants defined in data)
// - Fender → Tele bridge components (only ashtray documented, no component entity)
// - Service → Instrument relationship (Service is genre-agnostic; no verified link)
