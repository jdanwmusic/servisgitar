// src/lib/search.ts — Client-side search MVP (static-export safe)
// Phase 3.5 R8: extended to include Brand and Model entities
// Searches across title, description, content body text, domains, terminology, brands, models

import type { Article, Brand, Model } from "@/lib/types";
import { ARTICLES } from "@/data/articles";
import { BRANDS } from "@/data/brands-models";
import { MODELS } from "@/data/brands-models";

export interface ArticleSearchResult {
  type: "article";
  id: string;
  slug: string;
  title: string;
  description: string;
  matchedOn: string[];
  score: number;
}

export interface BrandSearchResult {
  type: "brand";
  id: string;
  title: string;
  description: string;
  matchedOn: string[];
  score: number;
}

export interface ModelSearchResult {
  type: "model";
  id: string;
  title: string;
  description: string;
  category: string;
  matchedOn: string[];
  score: number;
}

export type SearchResult = ArticleSearchResult | BrandSearchResult | ModelSearchResult;

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
}

function bodyToText(body: Article["body"]): string {
  const parts: string[] = [];
  const obj = body as unknown as Record<string, unknown>;
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === "string") parts.push(v);
    if (Array.isArray(v)) parts.push(v.filter((x) => typeof x === "string").join(" "));
  }
  return parts.join(" ");
}

// ── Article search ───────────────────────────────────────────────────────────

function scoreArticle(query: string, tokens: string[], article: Article): ArticleSearchResult | null {
  const matched: string[] = [];
  let score = 0;
  const titleLower = article.title.toLowerCase();
  const descLower = article.description.toLowerCase();
  const bodyText = bodyToText(article.body).toLowerCase();
  const domains = article.domains.join(" ").toLowerCase();
  const type = article.contentType.toLowerCase();

  for (const t of tokens) {
    if (titleLower.includes(t)) { matched.push("title"); score += 10; }
    if (descLower.includes(t)) { matched.push("description"); score += 5; }
    if (bodyText.includes(t)) { matched.push("content"); score += 2; }
    if (domains.includes(t)) { matched.push("domain"); score += 3; }
    if (type.includes(t)) { matched.push("type"); score += 1; }
  }

  if (matched.length > 0) {
    return { type: "article", id: article.id, slug: article.slug, title: article.title, description: article.description, matchedOn: Array.from(new Set(matched)), score };
  }
  return null;
}

// ── Brand search ─────────────────────────────────────────────────────────────

function scoreBrand(query: string, tokens: string[], brand: Brand): BrandSearchResult | null {
  const matched: string[] = [];
  let score = 0;
  const nameLower = brand.name.toLowerCase();
  const descLower = brand.description.toLowerCase();

  for (const t of tokens) {
    if (nameLower.includes(t)) { matched.push("name"); score += 10; }
    if (descLower.includes(t)) { matched.push("description"); score += 3; }
  }

  if (matched.length > 0) {
    return { type: "brand", id: brand.id, title: brand.name, description: brand.description.slice(0, 120) + "...", matchedOn: Array.from(new Set(matched)), score };
  }
  return null;
}

// ── Model search ──────────────────────────────────────────────────────────────

function scoreModel(query: string, tokens: string[], model: Model): ModelSearchResult | null {
  const matched: string[] = [];
  let score = 0;
  const nameLower = model.name.toLowerCase();
  const descLower = model.description.toLowerCase();
  const bridgeLower = (model.bridge ?? "").toLowerCase();
  const pickupsLower = (model.pickups ?? "").toLowerCase();

  for (const t of tokens) {
    if (nameLower.includes(t)) { matched.push("name"); score += 10; }
    if (descLower.includes(t)) { matched.push("description"); score += 3; }
    if (bridgeLower.includes(t)) { matched.push("bridge"); score += 2; }
    if (pickupsLower.includes(t)) { matched.push("pickups"); score += 2; }
  }

  if (matched.length > 0) {
    return { type: "model", id: model.id, title: model.name, description: model.description.slice(0, 120) + "...", category: model.category, matchedOn: Array.from(new Set(matched)), score };
  }
  return null;
}

// ── Unified search ────────────────────────────────────────────────────────────

export function search(query: string, options?: { articles?: Article[]; brands?: Brand[]; models?: Model[] }): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const articles = options?.articles ?? ARTICLES;
  const brands = options?.brands ?? BRANDS;
  const models = options?.models ?? MODELS;
  const tokens = tokenize(q);

  const results: SearchResult[] = [];

  for (const a of articles) {
    const r = scoreArticle(q, tokens, a);
    if (r) results.push(r);
  }
  for (const b of brands) {
    const r = scoreBrand(q, tokens, b);
    if (r) results.push(r);
  }
  for (const m of models) {
    const r = scoreModel(q, tokens, m);
    if (r) results.push(r);
  }

  return results.sort((a, b) => b.score - a.score);
}

// Legacy: article-only search for existing callers
export function searchArticles(query: string, articles: Article[] = ARTICLES): ArticleSearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const tokens = tokenize(q);
  const results: ArticleSearchResult[] = [];
  for (const a of articles) {
    const r = scoreArticle(q, tokens, a);
    if (r) results.push(r);
  }
  return results.sort((a, b) => b.score - a.score);
}
