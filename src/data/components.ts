// src/data/components.ts — Phase 3.75: MINIMUM verified component entities
// ONLY components that are actually referenced by relationships or model/service notes.
// All unknown/unverified components are ABSENT (not fabricated).
// Component has: id, name, instrument/model association, description, sources (only if claim requires evidence), relatedArticleIds.

import type { Component } from "@/lib/types";

export const COMPONENTS: Component[] = [
  // === Components verified by manufacturer docs or model descriptions ===
  {
    id: "component-truss-rod-headstock",
    name: "Truss Rod (Headstock Access — Fender Style)",
    category: ["elektrik"],
    domains: ["hardware", "maintenance", "setup"],
    description:
      "Truss rod diakses melalui headstock (bukan soundhole). Umum pada Fender Stratocaster, Telecaster, Gibson Les Paul, dan Yamaha Pacifica. Bentuk nut truss rod bervariasi per pabrikan (3/16\" hex, 5/16\" hex, spoke wheel, bullet nut).",
    relatedArticleIds: ["pengukuran-neck-relief", "fret-buzz"],
  },
  {
    id: "component-bridge-tremolo-6-screw",
    name: "Synchronized Tremolo (6-Screw Vintage Style)",
    category: ["elektrik"],
    domains: ["hardware", "setup", "maintenance"],
    description:
      "Bridge tremolo dengan 6 sekrup pengunci pada Fender Stratocaster (American Vintage II dan Squier Affinity). Sistem ini memungkinkan penyesuaian intonasi per-string. Perlu pemeliharaan berkala (lubrikasi, keseimbangan spring).",
    relatedArticleIds: ["service-setup-dasar-gitar-elektrik", "terminologi-intonasi"],
  },
  {
    id: "component-bridge-hardtail-3-saddle",
    name: "Hardtail Bridge (3-Saddle Vintage Style)",
    category: ["elektrik"],
    domains: ["hardware", "setup", "maintenance"],
    description:
      "Bridge hardtail 3-saddle atau 6-saddle pada Fender Telecaster. Bridge 3-saddle vintage memerlukan kompromi intonasi antar senar. Perlu penyesuaian intonasi saat servis rutin.",
    relatedArticleIds: ["service-setup-dasar-gitar-elektrik", "terminologi-intonasi"],
  },
  {
    id: "component-tune-o-matic",
    name: "Tune-o-Matic Bridge (Nashville / ABR-1)",
    category: ["elektrik"],
    domains: ["hardware", "setup", "maintenance"],
    description:
      "Bridge Tune-o-Matic digunakan pada Gibson Les Paul dan model Gibson lainnya. Dikombinasikan dengan stopbar tailpiece. Memungkinkan intonasi per-string (lebih fleksibel dari 3-saddle). Perlu penyesuaian saat servis rutin.",
    relatedArticleIds: ["service-setup-dasar-gitar-elektrik", "terminologi-intonasi"],
  },
  {
    id: "component-stopbar-tailpiece",
    name: "Stopbar Tailpiece",
    category: ["elektrik"],
    domains: ["hardware", "maintenance"],
    description:
      "Tailpiece yang terpasang pada Gibson Les Paul (dan beberapa model Gibson lainnya). Memengaruhi sustain dan intonasi. Posisi tailpiece dapat disesuaikan untuk preferensi pemain.",
    relatedArticleIds: ["service-setup-dasar-gitar-elektrik"],
  },
  {
    id: "component-nut",
    name: "Nut (Bone / Synthetic / Plastic)",
    category: ["elektrik", "akustik"],
    domains: ["hardware", "setup", "maintenance"],
    description:
      "Nut pada gitar — komponen yang mengatur ketinggian senar di awal leher (fret 1). Material bervariasi (bone, synthetic bone, plastic) tergantung pabrikan dan seri. Perlu penyesuaian jika senar macet atau slot aus.",
    relatedArticleIds: ["fret-buzz", "tuning-instability", "service-setup-dasar-gitar-elektrik"],
  },
  {
    id: "component-fret",
    name: "Fret (Individual Fret Wire)",
    category: ["elektrik", "akustik"],
    domains: ["hardware", "maintenance", "repair"],
    description:
      "Fret wire pada leher gitar — komponen logam yang menentukan posisi nada saat senar ditekan. Keausan fret yang tidak merata dapat menyebabkan fret buzz atau intonasi buruk. Leveling diperlukan jika fret rocker mendeteksi perbedaan ketinggian.",
    relatedArticleIds: ["fret-buzz", "fret-rocker-cara-menggunakan", "terminologi-fret-leveling"],
  },
  // === Acoustic-specific components verified by Yamaha FG800 ===
  {
    id: "component-pinned-rosewood-bridge",
    name: "Pinned Rosewood Bridge (Acoustic)",
    category: ["akustik"],
    domains: ["hardware", "setup", "maintenance"],
    description:
      "Bridge pada gitar akustik seri FG (Yamaha FG800) — bridge pinned rosewood dengan 6 pin. Perlu penyesuaian intonasi jika saddle diganti atau kondisi bridge berubah. Bridge akustik biasanya tidak dapat disetel sefleksibel bridge elektrik.",
    relatedArticleIds: ["pengukuran-action-string-height", "service-setup-dasar-gitar-elektrik"],
  },
];

export const COMPONENT_BY_ID: Record<string, Component> = Object.fromEntries(
  COMPONENTS.map((c) => [c.id, c])
);
