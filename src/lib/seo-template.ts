// src/lib/seo-template.ts — SEO metadata patterns

import type { Article } from "./types";

export function articleTitle(article: Article): string {
  return `${article.title} — Panduan Servis Gitar | ServisGitar`;
}

export function articleDescription(article: Article): string {
  return article.description.slice(0, 155);
}

export function articleH1(article: Article): string {
  return article.title;
}

export function articleCanonical(slug: string): string {
  return `https://servisgitar.com/panduan/${slug}`;
}
