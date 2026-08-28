// src/lib/jsonld.ts — Generate JSON-LD structured data for articles
// Phase 2: Article + BreadcrumbList. Future: Service, HowTo for problem content.

import type { Article } from "./types";
import { articleCanonical } from "./seo-template";

export function articleJsonLd(article: Article): string {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "id-ID",
    datePublished: article.updatedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleCanonical(article.slug) },
    author: { "@type": "Organization", name: "ServisGitar" },
    publisher: { "@type": "Organization", name: "ServisGitar" },
    keywords: article.domains.join(", "),
    articleSection: article.category,
  };

  // For problem articles, also add HowTo (proses = steps)
  if (article.body.contentType === "problem") {
    const body = article.body as { proses?: string; risiko?: string };
    if (body.proses) {
      const steps = body.proses
        .split(/\(\d\)/)
        .map((s) => s.trim())
        .filter((s) => s.length > 20)
        .slice(0, 8);
      if (steps.length > 0) {
        data["@type"] = ["Article", "HowTo"];
        (data as { step?: unknown[] }).step = steps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text,
        }));
      }
    }
  }

  // For service articles, add Service
  if (article.body.contentType === "service") {
    data["@type"] = ["Article", "Service"];
    const body = article.body as { mencakup?: string[]; durasi?: string };
    if (body.durasi) (data as { duration?: string }).duration = body.durasi;
    if (body.mencakup) (data as { serviceType?: string }).serviceType = "Guitar Setup";
  }

  return JSON.stringify(data);
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
