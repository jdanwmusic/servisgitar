# Phase B — Knowledge Roadmap Design (Not Mutation)

Status: READ-ONLY DESIGN — no new articles, no schema mutation, no data edit
Reference: `master-audit-23dcb91.md` (Phase 0), `visual-system.md` (Phase B design)

## Design Goal (Phase B Scope Only)
Build scalable architecture so future batches (Phase 3+) can produce 2–4 high-quality articles per cycle with consistent quality gate, valid schema, and evidence-backed sources — without requiring architecture redesign per batch.

## Hierarchy Design (Existing Categories + Domains Preserved)

From `content-registry.ts` (verified):
- Categories: `akustik`, `elektrik`, `elektrik-akustik`, `bass`
- Domains: `setup`, `measurement`, `problems`, `diagnosis`, `repair`, `maintenance`, `terminology`, `components` (komponen), `hardware`, `electronics`, `tools`, `strings`, `brands`, `models`, `diy`, `professional-services`, `restoration`

Design hierarchy (not new data, design reference):

```
Head: AKUSTIK (category: akustik / elektrik-akustik)
├── Setup (domain: setup) — 2–3 articles (concept, problem, measurement)
├── Measurement (domain: measurement) — 2–3 articles
├── Problems (domain: problems) — 3–4 articles
├── Diagnosis (domain: diagnosis) — 2 articles
├── Repair (domain: repair) — 2 articles
├── Maintenance (domain: maintenance) — 2 articles
├── Components (domain: komponen) — 2 articles (if evidence available)
├── Terminology (domain: terminology) — 2 articles
└── Tools (domain: tools) — 1–2 articles (if tool-specific)

Head: ELEKTRIK (category: elektrik)
├── Setup — 3–4 articles (existing: 9; need more depth)
├── Electronics (domain: elektronik) — 2–3 articles
├── Measurement — 2–3 articles (existing: 2; strong)
├── Problems — 3–4 articles
├── Diagnosis — 2 articles
├── Repair — 2 articles
├── Components — 2 articles
└── Terminology — 2–3 articles (existing: 2; need more)

Head: BASS (category: bass)
├── Setup — 2–3 articles (existing: 2; weak)
├── Measurement — 2 articles (existing: 1; weak)
├── Problems — 2–3 articles (existing: 0; critical gap)
├── Electronics (domain: elektronik) — 2 articles (if active/passive distinction needed)
├── Terminology — 1–2 articles (new: scale length; need more)
├── Repair — 1–2 articles
└── Maintenance — 1–2 articles
```

Design note: This is a roadmap design, not a data mutation. No articles created. No new categories/domains. Existing `contentType` values (`concept`, `problem`, `service`, `measurement`, `tool`, `terminology`, `technique`) preserved.

## Scale Target Design (Evidence-Backed, Not Fabricated)

From audit: 13 articles existing (batch 1–3 + Phase A). Target design ~2000 is strategic vision only; Phase B does NOT create articles; Phase 3 creates batches of 2–4 per cycle.

Estimated batches needed (design estimate):
- Per head (~10 domains): ~10 articles per head = 30 articles per full cycle (all 3 heads, all domains)
- To reach 200: ~7 full cycles
- To reach 2000: ~67 full cycles (long-term, multi-year, evidence-backed)
- Phase B establishes the design that allows these cycles without architecture redesign

## Batch Quality Gate Design (Future Phase 3 — Not Executed in Phase B)

Per batch (design reference — not executed):
1. Select 2–4 slugs from roadmap (e.g., `measurement-action-akustik`, `problem-fretbuzz-akustik` — already done in Phase A)
2. Verify `slug` unique (no duplicate in ARTICLES)
3. Verify `id` unique (format `art-{head}-{domain}-{seq}` — e.g., `art-bass-meas-003` for measurement bass; sequence number only for clarity, not fabrication)
4. Verify `contentType` matches schema
5. Verify `domains` match registry
6. Verify `related[]` slugs exist (read existing ARTICLES; check position before `ARTICLES_BY_SLUG` export)
7. Verify `sources[]`: at least 1 `primary`; no `community` universal claims
8. Verify no fabricated specs/thresholds/causes
9. Insert before `];` in ARTICLES array (design pattern from Phase A)
10. Build PASS, Typecheck PASS
11. Commit message format: `"Batch N — expand [head] [domain] ([slug1], [slug2], ...)"`
12. Push; verify HEAD == remote

Design only — not executed until user approves Phase 3 batch.

## Brand/Model Architecture Design (Not Mutation — Existing Already Works)

From `brands-models.ts` (verified): 3 brands, 5 models.
From `page.tsx` (verified `bd716ab`): conditional render of Brand/Model sections.
From `relationships.ts`: 27 edges linking articles to components, brands, etc.

Design for scale:
- Brand pages (`/brand/[brand]`) already exist; future: filter by `brandIds` in ARTICLES
- Model pages (`/model/[brand]/[model]`) already exist; future: filter by `modelIds`
- No new brand/model added without manufacturer source
- `brandIds` / `modelIds` fields on article: optional, only when evidence available
- Search index already supports brand/model; future: extend to component/tool/problem if needed

No mutation to `brands-models.ts` in Phase B.

## Visual Design Integration Design (From visual-system.md)

For each article in future batches:
- If `contentType` = `measurement`: mandatory measurement diagram (`kind=measurement`)
- If `contentType` = `problem`: recommended problem illustration (`kind=problem`) + optional measurement if measurement is part of diagnosis
- If `contentType` = `terminology`: optional anatomy/comparison (`kind=anatomy` or `kind=comparison`)
- If `contentType` = `concept`: optional anatomy (`kind=anatomy`)
- Naming: `/public/images/articles/{slug}/` directory per slug; files named `{kind}.webp`
- Template upgrade: add visual section after body, conditional (only renders if images exist)
- No mutation to articles until user approves content batch + visual design

## Remaining Risks (Documented — No Action Without Approval)

1. **Schema ambiguity**: `ArticleBodyMeasurement` uses `topikTerkait` (camelCase) but `REQUIRED_BY_TYPE` uses `topikTerkait`. Verified matching in Phase A. No ambiguity.
2. **Domain slug mismatch**: `content-registry.ts` uses `problems` (plural), articles must use `problems` (verified Phase A `masalah-fret-buzz-akustik` uses `problems`). No ambiguity.
3. **Visual pipeline not built**: No AI image generation infrastructure; future batches must either (a) design diagrams manually or (b) create prompt/template for AI image generation (design reference in `visual-system.md`). No urgency — Phase B is design only.
4. **Production deploy**: `www.servisgitar.com` verified live (200 OK); root `servisgitar.com` may have redirect/Cloudflare issue — out of scope for Phase B; user handles independently.
5. **Hardcase freeze**: `ffd38de` untouched — verified.

## Final Design Report (Phase B — Read-Only Design Only, No Code Mutation)

This file is read-only design. No mutation performed to:
- `src/data/articles.ts` (stays 17 articles from Phase A)
- `src/lib/types.ts` (schema preserved)
- `src/app/panduan/[slug]/page.tsx` (template preserved; upgrade design only)
- `public/` (no images added)
- `src/data/brands-models.ts`, `components.ts`, `relationships.ts`, `content-registry.ts`

Next approval needed: Phase B execution (visual section + CSS + visual directory creation + reference file finalization) — user must approve before mutation to `page.tsx` or `globals.css`.
