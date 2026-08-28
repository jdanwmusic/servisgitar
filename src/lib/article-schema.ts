// src/lib/article-schema.ts — Content-type-aware article validation
// Phase 1.5: each content type has its own required sections (no one-size-fits-all)

import type { Article, ArticleBody } from "./types";

export const SECTION_TITLES_ID: Record<string, string> = {
  apaItu: "Apa Itu?",
  fungsi: "Fungsi",
  caraKerja: "Cara Kerja",
  gejala: "Gejala",
  penyebab: "Penyebab",
  diagnosis: "Diagnosis",
  pengukuran: "Pengukuran",
  tools: "Tools yang Diperlukan",
  proses: "Proses Perbaikan / Setup",
  risiko: "Risiko",
  lihatProfesional: "Kapan ke Profesional?",
  topikTerkait: "Topik Terkait",
  sumber: "Sumber",
  mencakup: "Layanan Mencakup",
  durasi: "Durasi",
  jenis: "Jenis / Varian",
  caraMenggunakan: "Cara Menggunakan",
  perawatan: "Perawatan Alat",
  target: "Target / Range Ideal",
  caraMengukur: "Cara Mengukur",
  interpretasi: "Interpretasi Hasil",
  kapan: "Kapan Digunakan",
  definisi: "Definisi",
  konteks: "Konteks",
  contoh: "Contoh",
  instrumen: "Instrumen",
  masalah: "Masalah",
  observasi: "Observasi",
  pekerjaan: "Pekerjaan",
  hasil: "Hasil",
  pelajaran: "Pelajaran",
  hubunganDengan: "Hubungan Dengan",
  variasi: "Variasi",
};

export const REQUIRED_BY_TYPE: Record<string, string[]> = {
  concept: ["apaItu", "fungsi", "topikTerkait"],
  problem: ["apaItu", "gejala", "penyebab", "diagnosis", "tools", "proses", "risiko", "lihatProfesional", "topikTerkait"],
  service: ["apaItu", "mencakup", "durasi", "tools", "proses", "risiko", "lihatProfesional", "topikTerkait"],
  tool: ["apaItu", "fungsi", "jenis", "caraMenggunakan", "perawatan", "topikTerkait"],
  measurement: ["apaItu", "target", "caraMengukur", "tools", "interpretasi", "topikTerkait"],
  technique: ["apaItu", "kapan", "proses", "tools", "risiko", "lihatProfesional", "topikTerkait"],
  terminology: ["definisi", "topikTerkait"],
  "case-study": ["instrumen", "masalah", "observasi", "diagnosis", "pekerjaan", "hasil", "pelajaran", "topikTerkait"],
  brand: ["apaItu", "fungsi", "topikTerkait"],
  model: ["apaItu", "fungsi", "topikTerkait"],
};

export function getRequiredSections(contentType: ArticleBody["contentType"]): string[] {
  return REQUIRED_BY_TYPE[contentType] ?? [];
}

export function validateArticle(article: Article): { ok: boolean; missing: string[] } {
  const missing: string[] = [];
  const required = getRequiredSections(article.body.contentType);
  for (const section of required) {
    const value = (article.body as unknown as Record<string, unknown>)[section];
    if (!value) {
      missing.push(section);
      continue;
    }
    if (typeof value === "string" && value.trim().length < 20) {
      missing.push(section);
    }
    if (Array.isArray(value) && value.length === 0) {
      missing.push(section);
    }
  }
  return { ok: missing.length === 0, missing };
}
