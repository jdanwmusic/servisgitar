// src/lib/types.ts — Entity & relationship type definitions for SERVICEGITAR.COM
// Phase 1.5: expanded to support scalable knowledge platform per MASTER MISSION

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

export type ContentType =
  | "concept" // definisi/konsep (Apa itu X)
  | "problem" // diagnosis & repair
  | "service" // layanan profesional
  | "tool" // alat & penggunaannya
  | "measurement" // cara ukur
  | "technique" // metode/teknik
  | "terminology" // glosarium
  | "brand" // brand
  | "model" // model spesifik
  | "case-study"; // pengalaman lapangan

export interface Source {
  title: string;
  url?: string;
  tier: SourceTier;
  author?: string;
  publisher?: string;
  accessDate?: string; // ISO date
  note?: string;
}

// ── Core entities ────────────────────────────────────────────────────────────

export interface Instrument {
  id: string;
  name: string;
  category: InstrumentCategorySlug;
  subtypes: string[];
}

export interface InstrumentType {
  id: string; // e.g. "stratocaster", "telecaster", "dreadnought"
  name: string; // "Stratocaster"
  category: InstrumentCategorySlug;
  description: string;
  characteristics: string[];
}

export interface KnowledgeDomain {
  id: string;
  slug: KnowledgeDomainSlug;
  title: string;
  shortDescription: string;
}

export interface Component {
  id: string; // "bridge-tunomatic", "nut-bone"
  name: string;
  category: InstrumentCategorySlug[]; // applicable categories
  domains: KnowledgeDomainSlug[]; // which knowledge domains
  description: string;
  relatedArticleIds: string[];
}

export interface Problem {
  id: string; // "fret-buzz", "tuning-instability"
  name: string;
  category: InstrumentCategorySlug[];
  symptoms: string[];
  commonCauses: string[]; // entity IDs of components/problems
  diagnosis: string; // markdown summary
  severity: "minor" | "moderate" | "serious" | "critical";
  relatedArticleIds: string[];
}

export interface Service {
  id: string; // "setup-basic", "fret-leveling"
  name: string;
  category: InstrumentCategorySlug[];
  description: string;
  estimatedDuration: string; // "30 menit", "1-2 jam"
  requiredTools: string[]; // tool IDs
  relatedArticleIds: string[];
}

export interface Tool {
  id: string; // "fret-rocker", "truss-rod-wrench"
  name: string;
  category: "measuring" | "cutting" | "adjusting" | "diagnosing" | "safety";
  description: string;
  typicalUse: string;
  relatedArticleIds: string[];
}

export interface Measurement {
  id: string; // "action-at-12th-fret", "neck-relief"
  name: string;
  targetRange: string; // typical accepted range, e.g. "1.5-2.0mm"
  unit: string; // "mm", "inch", "thou"
  description: string;
  relatedArticleIds: string[];
}

export interface Technique {
  id: string; // "fret-crowning", "plek-style-leveling"
  name: string;
  description: string;
  requiredSkill: DifficultyLevel;
  relatedArticleIds: string[];
}

export interface Terminology {
  id: string; // "backbow", "relief", "plek"
  term: string;
  shortDefinition: string;
  longDefinition?: string;
  relatedArticleIds: string[];
}

export interface Brand {
  id: string; // "fender", "gibson", "yamaha"
  name: string;
  countryOfOrigin?: string;
  foundedYear?: number;
  description: string;
  modelIds: string[];
}

export interface Model {
  id: string; // "fender-stratocaster-1957", "yamaha-fg800"
  name: string;
  brandId: string; // → Brand.id
  category: InstrumentCategorySlug;
  description: string;
  specifications: Record<string, string>;
  relatedArticleIds: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  instrumentModelId?: string; // → Model.id
  problemId?: string; // → Problem.id
  serviceIds: string[]; // → Service.id
  observations: string;
  diagnosis: string;
  workPerformed: string;
  result: string;
  images?: string[]; // path to /public
  date?: string; // ISO date
  relatedArticleIds: string[];
}

// ── Article (content type discriminated) ────────────────────────────────────

export interface ArticleBase {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: InstrumentCategorySlug | "all";
  domains: KnowledgeDomainSlug[];
  difficulty: DifficultyLevel;
  contentType: ContentType;
  readingMinutes: number;
  status: ContentStatus;
  related: string[]; // article IDs
  sources: Source[];
  updatedAt: string; // ISO date
}

export type ArticleBody = ArticleBodyConcept | ArticleBodyProblem | ArticleBodyService | ArticleBodyTool | ArticleBodyMeasurement | ArticleBodyTechnique | ArticleBodyTerminology | ArticleBodyCaseStudy;

export interface ArticleBodyConcept {
  contentType: "concept";
  apaItu: string;
  fungsi: string;
  caraKerja?: string;
  hubunganDengan: string[];
  variasi?: string[];
  sumber?: string[];
}

export interface ArticleBodyProblem {
  contentType: "problem";
  apaItu: string;
  gejala: string;
  penyebab: string[];
  diagnosis: string;
  pengukuran?: string;
  tools: string[];
  proses: string;
  risiko: string;
  lihatProfesional: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyService {
  contentType: "service";
  apaItu: string;
  mencakup: string[];
  durasi: string;
  tools: string[];
  proses: string;
  risiko: string;
  lihatProfesional: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyTool {
  contentType: "tool";
  apaItu: string;
  fungsi: string;
  jenis: string[];
  caraMenggunakan: string;
  perawatan: string;
  lihatProfesional?: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyMeasurement {
  contentType: "measurement";
  apaItu: string;
  target: string;
  caraMengukur: string;
  tools: string[];
  interpretasi: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyTechnique {
  contentType: "technique";
  apaItu: string;
  kapan: string;
  proses: string;
  tools: string[];
  risiko: string;
  lihatProfesional: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyTerminology {
  contentType: "terminology";
  definisi: string;
  konteks?: string;
  contoh?: string;
  topikTerkait: string[];
  sumber?: string[];
}

export interface ArticleBodyCaseStudy {
  contentType: "case-study";
  instrumen: string;
  masalah: string;
  observasi: string;
  diagnosis: string;
  pekerjaan: string;
  hasil: string;
  pelajaran: string;
  topikTerkait: string[];
}

export interface Article extends ArticleBase {
  body: ArticleBody;
}

// ── Relationship graph (12 + 2 added) ────────────────────────────────────────

export type RelationshipType =
  // hierarchy
  | "isPartOf"
  | "isTypeOf"
  // causal
  | "causes"
  | "solves"
  // dependency
  | "requires"
  | "requiresTool"
  // measurement
  | "measures"
  // semantic
  | "appliesTo"
  | "relatedTo"
  // process
  | "precedes"
  | "follows"
  // constraint
  | "conflictsWith"
  // entity references (Phase 1.5 added)
  | "hasComponent" // Instrument → Component
  | "performedOn"; // Service → Instrument

export interface Relationship {
  from: string;
  to: string;
  type: RelationshipType;
  weight: number; // 0.0-1.0
  bidirectional: boolean;
}

// ── Navigation ───────────────────────────────────────────────────────────────

export interface NavTree {
  category: InstrumentCategorySlug;
  label: string;
  description: string;
  domains: { slug: KnowledgeDomainSlug; label: string; count: number }[];
}
