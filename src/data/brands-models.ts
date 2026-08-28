// src/data/brands-models.ts — Brand & Model entities (Phase 3 pilot)
// Evidence-based: every value has a source. Unknown fields tracked explicitly.

import type { Brand, Model } from "@/lib/types";

const SRC_FENDER_OFFICIAL = { title: "Fender Official Product / Spec Pages", tier: "primary" as const, author: "Fender Musical Instruments Corporation", publisher: "Fender", accessDate: "2026-08-28", note: "Manufacturer official documentation. Specific product pages contain model-specific scale, pickup, and hardware info." };
const SRC_GIBSON_OFFICIAL = { title: "Gibson Official Product / Spec Pages", tier: "primary" as const, author: "Gibson Brands, Inc.", publisher: "Gibson", accessDate: "2026-08-28" };
const SRC_YAMAHA_OFFICIAL = { title: "Yamaha Official Product Pages", tier: "primary" as const, author: "Yamaha Corporation", publisher: "Yamaha", accessDate: "2026-08-28" };
const SRC_FENDER_HISTORY = { title: "Fender Corporate History (manufacturer published)", tier: "primary" as const, publisher: "Fender", accessDate: "2026-08-28", note: "Manufacturer-published history, not third-party speculation." };

// ── BRANDS ────────────────────────────────────────────────────────────────

export const BRANDS: Brand[] = [
  {
    id: "fender",
    name: "Fender",
    countryOfOrigin: "United States",
    foundedYear: 1946,
    officialWebsite: "fender.com",
    description: "Produsen gitar dan bass asal Amerika Serikat yang didirikan oleh Leo Fender pada tahun 1946 di Fullerton, California. Dikenal karena model-model seperti Telecaster, Stratocaster, Jazzmaster, dan Precision Bass yang menjadi standar industri untuk gitar elektrik dan bass elektrik.",
    modelIds: ["fender-stratocaster", "fender-telecaster"],
    sources: [SRC_FENDER_HISTORY],
  },
  {
    id: "gibson",
    name: "Gibson",
    countryOfOrigin: "United States",
    foundedYear: 1902,
    officialWebsite: "gibson.com",
    description: "Produsen gitar asal Amerika Serikat yang didirikan oleh Orville Gibson pada tahun 1902 di Kalamazoo, Michigan. Dikenal karena model-model dengan body solid seperti Les Paul, SG, dan ES-335, serta archtop jazz guitars. (Catatan: sejarah lengkap Gibson sebelum akuisisi oleh CMI dan kemudian Gibson Brands tidak dicantumkan di sini karena bukan fokus service. Untuk sejarah lengkap, lihat sumber resmi.)",
    modelIds: ["gibson-les-paul"],
    sources: [
      { title: "Gibson Corporate History (manufacturer published)", tier: "primary", publisher: "Gibson", accessDate: "2026-08-28" },
    ],
  },
  {
    id: "yamaha",
    name: "Yamaha",
    countryOfOrigin: "Japan",
    foundedYear: 1887,
    officialWebsite: "yamaha.com",
    description: "Perusahaan multinasional Jepang yang didirikan pada tahun 1887. Divisi musik (Yamaha Musical Products) memproduksi gitar, bass, dan instrumen musik lainnya. Dikenal di Indonesia terutama karena lini gitar akustik seri FG (entry-level solid top) dan Pacifica (elektrik entry-mid). Catatan: sejarah lengkap Yamaha di luar divisi musik tidak relevan untuk konteks servis gitar.",
    modelIds: ["yamaha-fg800", "yamaha-pacifica-112v"],
    sources: [SRC_YAMAHA_OFFICIAL],
  },
];

// ── MODELS ────────────────────────────────────────────────────────────────

export const MODELS: Model[] = [
  {
    id: "fender-stratocaster",
    name: "Stratocaster",
    brandId: "fender",
    category: "elektrik",
    description: "Gitar elektrik dengan body double-cutaway, diperkenalkan pada tahun 1954. Desain awal oleh Leo Fender dan tim. Dikenal dengan tiga pickup single-coil, synchronized tremolo (vintage 'synchronized tremolo' / 'trem' modern), dan kontrol volume + 2 tone + 5-way switch. Menjadi salah satu model gitar elektrik yang paling banyak diproduksi dan diservis.",
    scaleLength: "25.5 in (648 mm)",
    bridge: "Synchronized Tremolo (6-screw vintage style) — untuk Modern Player series, tipe bridge bervariasi; untuk American Vintage II, bridge adalah tremolo vintage-style",
    nut: "Bone (pada American Vintage / Custom series); material pada Squier series bervariasi",
    fretboard: "Rosewood atau Maple (tergantung finish dan tahun)",
    pickups: "3x single-coil (S-S-S) untuk konfigurasi standar; varian HSS (2 humbucker + single-coil) juga umum",
    electronics: "1 master volume, 2 tone, 5-way switch",
    trussRodAccess: "Di headstock, 3/16\" hex (4.76 mm) atau 7mm (tergantung seri); American Vintage II menggunakan Bullet truss rod nut, sebagian seri menggunakan spoke wheel",
    serviceNotes: "Catatan servis (umum): (1) Tremolo arm removal/installation harus hati-hati agar tidak merusak tremolo block. (2) 5-way switch dapat aus seiring waktu — switch replacement umum. (3) Tuners vintage-style tanpa locking mechanism — string changes memerlukan lebih banyak peregangan senar. (4) Setup value bervariasi WIDE antara seri (American Vintage II, Player Plus, Squier Affinity, dll.) — selalu verifikasi dengan spec sheet spesifik seri.",
    variants: [
      {
        id: "fender-stratocaster-american-vintage-ii-1957",
        label: "American Vintage II 1957",
        productionEra: "2022-sekarang (reissue)",
        characteristics: ["7.25 in fretboard radius", "Vintage-style synchronized tremolo", "3 single-coil pickup (Vintage-Style '57)", "Bone nut"],
        sourceIds: ["SRC_FENDER_OFFICIAL"],
      },
      {
        id: "fender-stratocaster-squier-affinity",
        label: "Squier Affinity Series",
        productionEra: "2020-sekarang",
        characteristics: ["Entry-level", "Body alder", "3 single-coil pickup (ceramic)", "Bridge tremolo vintage-style"],
        sourceIds: ["SRC_FENDER_OFFICIAL"],
      },
    ],
    sources: [SRC_FENDER_OFFICIAL],
    relatedArticleIds: ["apa-itu-setup-gitar", "pengukuran-action-string-height", "pengukuran-neck-relief", "fret-buzz", "tuning-instability"],
    unknownFields: ["exact factory spec untuk action (bervariasi per seri, tidak di sini)", "exact pickup DC resistance (bervariasi per tahun dan seri)"],
  },
  {
    id: "fender-telecaster",
    name: "Telecaster",
    brandId: "fender",
    category: "elektrik",
    description: "Gitar elektrik dengan body single-cutaway, diperkenalkan pada tahun 1950 (sebagai Broadcaster / Esquire). Desain awal oleh Leo Fender. Dikenal dengan konfigurasi pickup 2 single-coil (neck + bridge) dengan bridge 'ashtray' atau 'top-load' tergantung seri.",
    scaleLength: "25.5 in (648 mm)",
    bridge: "Hardtail 3-saddle atau 6-saddle (tergantung seri); bridge 'ashtray' untuk vintage style",
    nut: "Bone (vintage / American series); synthetic (Squier)",
    fretboard: "Maple atau Rosewood (tergantung finish)",
    pickups: "2x single-coil (neck + bridge); beberapa model dengan bridge 'wide range humbucker' (seri khusus)",
    electronics: "1 master volume, 1 master tone, 3-way switch",
    trussRodAccess: "Di headstock, 3/16\" hex atau spoke wheel (tergantung seri)",
    serviceNotes: "Catatan servis: (1) Bridge saddle intonation adjustment pada 3-saddle vintage bridge mengharuskan penggeseran string satu per satu — intonation compromise antar senar. (2) Neck plate 4-bolt, neck removal jarang diperlukan. (3) String ground melalui bridge plate — pastikan kontak listrik bersih untuk menghindari hum.",
    sources: [SRC_FENDER_OFFICIAL],
    relatedArticleIds: ["apa-itu-setup-gitar", "terminologi-intonasi"],
    unknownFields: ["exact bridge string spacing untuk semua varian (vintage vs modern berbeda)"],
  },
  {
    id: "gibson-les-paul",
    name: "Les Paul",
    brandId: "gibson",
    category: "elektrik",
    description: "Gitar elektrik dengan body solid single-cutaway, diperkenalkan pada tahun 1952. Dinamai dari gitaris Les Paul. Dikenal dengan body mahogany + maple top, neck mahogany dengan set neck (glued), dan konfigurasi pickup 2 humbucker (pada model standar).",
    scaleLength: "24.75 in (628.65 mm)",
    bridge: "Tune-o-Matic (Nashville atau ABR-1) + stopbar tailpiece",
    nut: "Corian atau Bone (tergantung seri dan tahun)",
    fretboard: "Rosewood atau ebony (tergantung finish; Les Paul Custom menggunakan ebony)",
    pickups: "2x humbucker (neck + bridge); model standar 490R/498T, Custom 57 Classic",
    electronics: "2 volume, 2 tone, 3-way switch",
    trussRodAccess: "Di headstock, 5/16\" hex atau spoke wheel (tergantung seri)",
    serviceNotes: "Catatan servis: (1) Tune-o-Matic bridge intonation adjustment per-string (lebih fleksibel dari 3-saddle). (2) Set neck (glued) — neck reset adalah operasi besar, biasanya dilakukan oleh luthier berpengalaman. (3) Stopbar tailpiece dapat mempengaruhi sustain dan intonation — adjustment posisi tailpiece adalah opsional. (4) Pickup height adjustment melalui 2 mounting screws per pickup — measurement polarity matters untuk menjaga balance.",
    sources: [SRC_GIBSON_OFFICIAL],
    relatedArticleIds: ["apa-itu-setup-gitar", "pengukuran-neck-relief"],
    unknownFields: ["exact factory pickup height untuk semua tahun (bervariasi)", "exact nut width per series (1.687 in / 42.85 mm standar Les Paul, tetapi Custom berbeda)"],
  },
  {
    id: "yamaha-fg800",
    name: "FG800",
    brandId: "yamaha",
    category: "akustik",
    description: "Gitar akustik dreadnought entry-level dengan solid spruce top. Diproduksi sebagai bagian dari seri FG (Yamaha's foundational acoustic line). Sering digunakan sebagai gitar pertama bagi pemain pemula di Indonesia karena harga terjangkau dan build quality solid untuk kelas harganya.",
    scaleLength: "25 in (634 mm) atau 25.6 in (650 mm) — tergantung model spesifik (FG800 vs FG800J); verifier harus cek spec sheet spesifik",
    bridge: "Pinned rosewood bridge (atau yang setara)",
    nut: "Material: plastic atau bone; lebar: 43 mm standar (verifier: cek per-tahun)",
    fretboard: "Rosewood atau walnut (tergantung tahun produksi)",
    pickups: "Tidak ada (acoustic-only tanpa sistem elektronik pada FG800 standar); FG800J mungkin dilengkapi pickup sederhana",
    electronics: "Tidak ada (acoustic-only)",
    trussRodAccess: "Di soundhole (traditional)",
    serviceNotes: "Catatan servis: (1) Truss rod adjustment melalui soundhole — lebih sulit diakses dibanding headstock-access. (2) Bridge harus dilepas untuk intonation adjustment pada saddle. (3) Humidity control penting — gitar akustik solid wood sangat sensitif terhadap perubahan kelembapan. (4) Bridge plate (di dalam body) tidak bisa diakses tanpa membuka body.",
    sources: [SRC_YAMAHA_OFFICIAL],
    relatedArticleIds: [],
    unknownFields: ["exact spec untuk setiap tahun produksi (2016-2024 — kemungkinan ada revisi)", "exact factory action height (Yamaha tidak selalu publish)", "exact pickup configuration untuk setiap sub-variant"],
  },
  {
    id: "yamaha-pacifica-112v",
    name: "Pacifica 112V",
    brandId: "yamaha",
    category: "elektrik",
    description: "Gitar elektrik entry-mid level dengan body double-cutaway. Populer sebagai pilihan upgrade dari gitar pemula. Tersedia dalam konfigurasi HSS (humbucker + 2 single-coil) atau HH.",
    scaleLength: "25.5 in (648 mm)",
    bridge: "Vintage tremolo (6-screw)",
    nut: "Plastic atau synthetic bone",
    fretboard: "Rosewood atau maple (tergantung finish)",
    pickups: "HSS (humbucker bridge + 2 single-coil) konfigurasi umum",
    electronics: "1 volume, 1 tone, 5-way switch",
    trussRodAccess: "Di headstock, spoke wheel atau 4mm hex (verifier: cek per-tahun)",
    serviceNotes: "Catatan servis: (1) Hardware berkualitas entry-mid — potensi upgrade tuner atau nut dapat meningkatkan tuning stability. (2) Coil-tap pada humbucker memberikan fleksibilitas tonal — pastikan wiring benar saat servis. (3) Body alder (standar) — ringan, tidak ada isu berat signifikan.",
    sources: [SRC_YAMAHA_OFFICIAL],
    relatedArticleIds: [],
    unknownFields: ["exact year-to-year spec variation", "exact truss rod nut size untuk setiap batch produksi"],
  },
];

// Index for fast lookup
export const BRAND_BY_ID: Record<string, Brand> = Object.fromEntries(BRANDS.map((b) => [b.id, b]));
export const MODEL_BY_ID: Record<string, Model> = Object.fromEntries(MODELS.map((m) => [m.id, m]));
export const MODELS_BY_BRAND: Record<string, Model[]> = {};
for (const m of MODELS) {
  if (!MODELS_BY_BRAND[m.brandId]) MODELS_BY_BRAND[m.brandId] = [];
  MODELS_BY_BRAND[m.brandId].push(m);
}
