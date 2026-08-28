// src/lib/types.ts — Entity & relationship type definitions for SERVICEGITAR.COM
// Phase 1: pure architecture, no content

export type Lang = "id";

export type InstrumentCategorySlug =
  | "elektrik"
  | "akustik"
  | "elektrik-akustik"
  | "bass";

export type KnowledgeDomainSlug =
  | "konstruksi"
  | "komponen"
  | "hardware"
  | "elektronik"
  | "strings"
  | "setup"
  | "maintenance"
  | "problems"
  | "diagnosis"
  | "repair"
  | "restoration"
  | "tools"
  | "measurement"
  | "techniques"
  | "terminology"
  | "brands"
  | "models"
  | "case-studies"
  | "diy"
  | "professional-services";

export type DifficultyLevel = "pemula" | "menengah" | "lanjutan" | "profesional";

export type ContentStatus = "draft" | "review" | "published";

export type SourceTier = "primary" | "expert" | "community";

export interface Source {
  title: string;
  url?: string;
  tier: SourceTier;
  note?: string;
}

export interface Instrument {
  id: string;
  name: string;
  category: InstrumentCategorySlug;
  subtypes: string[];
}

export interface KnowledgeDomain {
  id: string;
  slug: KnowledgeDomainSlug;
  title: string;
  shortDescription: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: InstrumentCategorySlug;
  domains: KnowledgeDomainSlug[];
  difficulty: DifficultyLevel;
  readingMinutes: number;
  status: ContentStatus;
  body: ArticleBody;
  related: string[];
  sources: Source[];
  updatedAt: string;
}

export interface ArticleBody {
  apaItu?: string;
  fungsi?: string;
  caraKerja?: string;
  gejala?: string;
  penyebab?: string;
  diagnosis?: string;
  pengukuran?: string;
  tools?: string[];
  proses?: string;
  risiko?: string;
  lihatProfesional?: string;
  topikTerkait?: string[];
  sumber?: string[];
}

// 12 typed relationships (Phase 1)
export type RelationshipType =
  | "isPartOf"
  | "isTypeOf"
  | "causes"
  | "solves"
  | "requires"
  | "requiresTool"
  | "measures"
  | "appliesTo"
  | "relatedTo"
  | "precedes"
  | "follows"
  | "conflictsWith";

export interface Relationship {
  from: string;
  to: string;
  type: RelationshipType;
  weight: number;
  bidirectional: boolean;
}

export interface NavTree {
  category: InstrumentCategorySlug;
  label: string;
  description: string;
  domains: { slug: KnowledgeDomainSlug; label: string; count: number }[];
}
