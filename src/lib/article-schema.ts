// src/lib/article-schema.ts — Standard article template
// Every published article should answer the 12 required sections where relevant.

import type { Article, ArticleBody } from "./types";

export const REQUIRED_SECTIONS: (keyof ArticleBody)[] = [
  "apaItu",
  "fungsi",
  "caraKerja",
  "gejala",
  "penyebab",
  "diagnosis",
  "pengukuran",
  "tools",
  "proses",
  "risiko",
  "lihatProfesional",
  "topikTerkait",
];

export const SECTION_TITLES_ID: Record<keyof ArticleBody, string> = {
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
};

export function validateArticle(article: Article): { ok: boolean; missing: string[] } {
  const missing: string[] = [];
  for (const section of REQUIRED_SECTIONS) {
    if (!article.body[section] || (article.body[section] as string).trim().length < 20) {
      missing.push(section);
    }
  }
  return { ok: missing.length === 0, missing };
}
