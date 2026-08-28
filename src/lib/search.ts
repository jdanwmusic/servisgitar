// src/lib/search.ts — Client-side search MVP (static-export safe)
// Searches across title, description, content body text, domains, terminology

import type { Article } from "./types";
import { ARTICLES } from "@/data/articles";

export interface SearchResult {
  article: Article;
  matchedOn: string[];
  score: number;
}

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

export function search(query: string, articles: Article[] = ARTICLES): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const tokens = tokenize(q);
  const results: SearchResult[] = [];

  for (const a of articles) {
    const matched: string[] = [];
    let score = 0;
    const titleLower = a.title.toLowerCase();
    const descLower = a.description.toLowerCase();
    const bodyText = bodyToText(a.body).toLowerCase();
    const domains = a.domains.join(" ").toLowerCase();
    const type = a.contentType.toLowerCase();

    for (const t of tokens) {
      if (titleLower.includes(t)) {
        matched.push("title");
        score += 10;
      }
      if (descLower.includes(t)) {
        matched.push("description");
        score += 5;
      }
      if (bodyText.includes(t)) {
        matched.push("content");
        score += 2;
      }
      if (domains.includes(t)) {
        matched.push("domain");
        score += 3;
      }
      if (type.includes(t)) {
        matched.push("type");
        score += 1;
      }
    }

    if (matched.length > 0) {
      results.push({ article: a, matchedOn: Array.from(new Set(matched)), score });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
