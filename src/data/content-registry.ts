// src/data/content-registry.ts — 4 instrument categories + 20 knowledge domains + nav tree
// Phase 1: skeleton, no articles yet

import type {
  InstrumentCategorySlug,
  KnowledgeDomainSlug,
  NavTree,
} from "@/lib/types";

export const CATEGORIES: Record<InstrumentCategorySlug, { label: string; description: string }> = {
  elektrik: {
    label: "Gitar Elektrik",
    description:
      "Konstruksi, setup, elektronik, dan perbaikan gitar elektrik — Stratocaster, Telecaster, Les Paul, SG, Superstrat, dan lainnya.",
  },
  akustik: {
    label: "Gitar Akustik",
    description:
      "Dreadnought, concert, jumbo, parlor, classical — perawatan, setup, bridge, saddle, neck, dan restorasi.",
  },
  "elektrik-akustik": {
    label: "Elektrik-Akustik",
    description:
      "Piezo, undersaddle pickup, preamp, EQ, tuner, feedback, baterai, output jack, dan troubleshooting akustik elektrik.",
  },
  bass: {
    label: "Bass",
    description:
      "4-string hingga 6-string, fretless, multiscale, aktif-pasif, setup, elektronik, dan servis bass profesional.",
  },
};

export const DOMAINS: Record<KnowledgeDomainSlug, { label: string; short: string }> = {
  konstruksi: { label: "Konstruksi", short: "Body, neck, joint, dan struktur kayu" },
  komponen: { label: "Komponen", short: "Bagian-bagian gitar dan fungsinya" },
  hardware: { label: "Hardware", short: "Bridge, tuners, nut, strap pin" },
  elektronik: { label: "Elektronik", short: "Pickup, pot, switch, jack, wiring" },
  strings: { label: "Senar", short: "Gauge, material, brand, dan ganti senar" },
  setup: { label: "Setup", short: "Action, intonasi, relief, truss rod" },
  maintenance: { label: "Perawatan", short: "Cleaning, conditioning, storage" },
  problems: { label: "Masalah", short: "Buzz, dead note, fret sprout, crack" },
  diagnosis: { label: "Diagnosis", short: "Cara menemukan penyebab masalah" },
  repair: { label: "Perbaikan", short: "Step-by-step repair" },
  restoration: { label: "Restorasi", short: "Refinish, re-fret, overhaul" },
  tools: { label: "Tools", short: "Alat yang dibutuhkan" },
  measurement: { label: "Pengukuran", short: "Action, relief, fret level" },
  techniques: { label: "Teknik", short: "Metode perbaikan" },
  terminology: { label: "Terminologi", short: "Istilah teknis" },
  brands: { label: "Brand", short: "Fender, Gibson, Yamaha, dll." },
  models: { label: "Model", short: "Model spesifik dan karakteristiknya" },
  "case-studies": { label: "Studi Kasus", short: "Pengalaman lapangan" },
  diy: { label: "DIY", short: "Kerja sendiri yang aman" },
  "professional-services": { label: "Layanan Profesional", short: "Kapan harus ke luthier" },
};

export const NAV_TREE: NavTree[] = (
  Object.keys(CATEGORIES) as InstrumentCategorySlug[]
).map((cat) => ({
  category: cat,
  label: CATEGORIES[cat].label,
  description: CATEGORIES[cat].description,
  domains: (Object.keys(DOMAINS) as KnowledgeDomainSlug[]).map((d) => ({
    slug: d,
    label: DOMAINS[d].label,
    count: 0,
  })),
}));
