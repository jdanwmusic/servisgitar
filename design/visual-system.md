# ServisGitar Visual & Design System — Design Spec

Status: DRAFT (read-only blueprint, evidence-based, no mutation to existing articles until approved)
Target: Scalable visual standard from 17 → ±2000 articles.
Evidence rule: NO fabricated specs; NO decorative-only images.

## A. Visual System Scope (Phase B)

### A1. Types of Visual (per article intent — conditional, not forced):

| Type | When Required | Format | Accuracy Rule |
|------|------|--------|----------------|
| Anatomy / Component Illustration | Component/terminology/article that explains structure | SVG / PNG 16:9 hero or 4:3 inline | Technical accuracy > beauty; label exact part names |
| Measurement Diagram | Measurement/problem article | PNG 16:9 or vertical diagram | Show exact measurement points (fret 12, fret 1, nut, saddle); include ruler/feeler gauge reference |
| Problem Illustration | Problem/diagnosis article | PNG 4:3 or 16:9 | Show symptom location (e.g. fret buzz zone on fretboard); no exaggerated cracks |
| Process / Repair Flow | Service/technique/problem (tindakan/proses) | PNG 16:9 vertical flow | Show step order clearly; label tools; no shortcut representations |
| Before/After Concept | Service/measurement (optional, not mandatory) | PNG 4:3 split | Both states accurate; no fabricated damage |
| Technical Comparison | Terminology/measurement (optional) | PNG 16:9 table/visual | Show real differences (e.g. scale length 34" vs 30") with measurement references |

### A2. Naming Convention (future asset pipeline):
- Path: `/public/images/articles/{slug}/{kind}.webp`
- `kind` values: `hero`, `anatomy`, `measurement`, `problem`, `process`, `before-after`, `comparison`
- Naming: `{slug}-{kind}.webp` (e.g. `pengukuran-action-string-akustik-measurement.webp`)

### A3. Alt Text Convention:
- Fact-based description of what the image shows (not SEO keyword spam)
- Example (measurement): `Ilustrasi titik pengukuran string height (action) pada fret 12 dan fret pertama dengan capo.`
- Example (anatomy): `Anatomi senar, nut, fret 12, dan saddle pada gitar akustik.`
- Must reference specific component/action shown, never generic.

### A4. Caption Convention:
- Short, factual caption (≤ 120 chars)
- Must state what the image explains (not decorative)
- Example: `Gambar 1: Titik pengukuran action pada fret 12. Jarak antara senar dan fret diukur dengan feeler gauge.`

### A5. Style Guidelines (design standard, not implemented yet):
- Background: dark industrial (`#0A0A0C`) — consistent with site
- Accent: gold (`#C9A84C`) — consistent with site
- Typography: clean, readable (same as current site font)
- Technical illustrations: use clean lines, labeled parts, consistent scale; no AI-style photorealism for component parts (copyright + accuracy risk)
- If using AI image generation (future pipeline): ONLY allowed for generic anatomical/conceptual illustrations (not manufacturer photos); must include source disclaimer; must be verified for technical accuracy by referencing official docs

### A6. Visual Requirement Per Content Type (evidence-backed):

| Content Type | Visual Need | Mandatory? |
|---|---|---|
| concept (setup) | Anatomy / component illustration (optional) | Optional; helpful for complex structures |
| problem | Problem illustration (optional) + measurement diagram (if relevant measurement) | Optional; recommended if problem has physical manifestation |
| measurement | Measurement diagram (REQUIRED) | Required: without measurement diagram, the measurement content is incomplete |
| service | Process illustration / repair flow (optional) | Optional; useful for multi-step service |
| terminology | Technical comparison / anatomy (optional) | Optional; helps if term refers to physical component |
| technique | Process flow / measurement (optional) | Optional |

Rule: If article is `measurement`, a measurement diagram is MANDATORY (not optional). If article is `problem` with measurement reference, include measurement diagram.

## B. Article Template Audit & Upgrade Plan (Phase B — Design Only, Not Mutation Yet)

Current article page (`/panduan/[slug]/page.tsx`) already supports:
- Hero title, description, breadcrumb
- Article body (rendered from `article.body` sections)
- Topik Terkait (related articles — updated in Batch 2/3)
- Brand Terkait + Model Terkait (updated in Batch 2/3)
- Sumber (sources list — already exists)

Template upgrade targets (READ-ONLY design — not changing existing articles):

### B1. Template Sections (conditional, existing structure preserved):
- `Hero` (title, category badge, reading time, updatedAt)
- `Breadcrumb` (already exists — verified in page template)
- `Body Sections`: conditional rendering per contentType (already exists via body keys)
- `Visual Section`: new — renders image from `article.visual` (future) or `public/images/articles/{slug}/*.webp`
- `Measurement Section`: for measurement content — renders diagram
- `Related Section`: `Topik Terkait` (already exists)
- `Brand/Model Section`: already exists (from `brandIds`/`modelIds` in article)
- `Sources`: already exists (`Sumber`)
- `About Content`: `Tentang Konten Ini` (already exists)

No destructive schema change; only UI/template enhancement.

### B2. Responsive / Mobile Rules:
- Hero: full-width image (16:9) with overlay text; mobile: stacked (image above title)
- Body: max-width 720px; readable line-height (1.7); adequate padding
- Related cards: 2-col on desktop, 1-col mobile (already implemented)
- Brand/Model links: compact list; mobile stacked
- Visual: responsive image (`max-width: 100%`; `height: auto`); alt text preserved

### B3. Accessibility (A11y basics):
- Every image has descriptive `alt` text (not empty, not generic)
- Every image has `caption` or `figcaption`
- Heading hierarchy preserved: h1 (article title), h2 (body sections), h3 (subsections / related cards / sources)
- Focus states visible (default browser; no override)
- No color-only information (already no color-only info; content is text-first)

## C. Article Template Design (Concrete Implementation — Deferred to User Approval)

### C1. Changes to make (when approved):
- Modify `/panduan/[slug]/page.tsx` to add visual rendering section (if `visualReferences` field exists in article)
- Modify `/panduan/[slug]/page.tsx` to render `visual` array from future `visual` field in article schema (optional — does not break existing 17 articles without visual)
- Add CSS in `globals.css` or `tailwind.config.js` for `.article-visual` class (responsive image container, caption styling)
- Create `/public/images/` directory (empty now; future images added per article)
- Create design reference file for AI image prompts (deferred — not implemented)

### C2. Non-changes (preserved):
- Article body rendering logic (does not change)
- Related/article card logic (preserved)
- Brand/Model visibility (preserved)
- Schema/data (`articles.ts`) — NOT edited in Phase B
- No new content type / no new article in Phase B

## D. Brand/Model Architecture Audit (Read-Only — Not Changing Data)

Current state (`brands-models.ts`):
- Brands: Fender (`fender`), Gibson (`gibson`), Yamaha (`yamaha`)
- Models: Fender Stratocaster (`fender-stratocaster`), Fender Telecaster (`fender-telecaster`), Gibson Les Paul (`gibson-les-paul`), Yamaha FG800 (`yamaha-fg800`), Yamaha Pacifica 112V (`yamaha-pacifica-112v`)

Current visibility (`page.tsx`):
- Brand/Model visibility already implemented (`bd716ab`) — renders conditionally based on `brandIds`/`modelIds` on article
- Articles with `brandIds`/`modelIds`: verified 2 articles in existing 13 (`apa-itu-elektronik-gitar-akustik` has `brandIds`: `yamaha`; `service-setup-dasar-gitar-elektrik` has `brandIds`: `fender`, `gibson` + `modelIds`)
- Phase A new articles: none have `brandIds`/`modelIds` (correct — no fabricated brand/model links)

Future scalable architecture (design phase, not mutation):
- Brand pages (`/brand/[brand]`): list all articles with `brandIds` containing that brand
- Model pages (`/model/[brand]/[model]`): list all articles with `modelIds` containing that model
- Brand → Article relationship: explicit via `brandIds` array on article (evidence-backed)
- Model → Article: explicit via `modelIds` array on article
- Search index (`search()`) already indexes brand/model; future: extend to include component/tool/problem entities
- No new brand/model added without evidence source

## E. Knowledge Architecture Roadmap (Design Phase — Not Mutation)

Based on mission (`~2000` articles, 3 heads, evidence-backed):

### E1. Hierarchy (design, not new categories unless needed):

```
GITAR
├── AKUSTIK (category: akustik, elektronik-akustik)
│   ├── Setup (domain: setup)
│   ├── Measurement (domain: measurement)
│   ├── Problems (domain: problems)
│   ├── Diagnosis (domain: diagnosis)
│   ├── Repair (domain: repair)
│   ├── Components (domain: komponen)
│   ├── Maintenance (domain: maintenance)
│   └── Terminology (domain: terminology)
├── ELEKTRIK (category: elektrik)
│   ├── Setup (setup)
│   ├── Electronics (elektronik)
│   ├── Measurement (measurement)
│   ├── Problems (problems)
│   ├── Diagnosis (diagnosis)
│   ├── Repair (repair)
│   ├── Components (komponen)
│   ├── Maintenance (maintenance)
│   ├── Hardware (hardware)
│   └── Tools (tools)
└── BASS (category: bass)
    ├── Setup (setup)
    ├── Electronics (elektronik)
    ├── Measurement (measurement)
    ├── Problems (problems)
    ├── Diagnosis (diagnosis)
    ├── Repair (repair)
    ├── Components (komponen)
    ├── Maintenance (maintenance)
    └── Terminology (terminology)
```

Note: `komponen`, `hardware`, `tools`, `electronics` are existing domains in registry (`content-registry.ts`). No new domain required unless content demands it.

### E2. Scale Estimation (evidence-backed, not fabricated):

Per head (akustik, elektrik, bass), per domain (~10 domains):
- If each (head × domain) produces 5–15 articles: 3 × 10 × 10 = 300 minimum
- For 2000 target: ~200 per head across all domains = ~20 per domain per head = realistic with evidence-based batch process
- Phase B does NOT add new articles; Phase B builds visual/template architecture so future batches (Phase 3+) scale faster.

### E3. Batch Quality Gate (design, not mutation):
Per future batch (Phase 3+):
- Pick 2–4 slugs from roadmap (already defined in `master-audit-23dcb91.md`)
- Verify `related[]` points to existing articles (evidence-based linking)
- Verify source tier (`primary` manufacturer / `expert` technical / no `community` universal claims)
- Verify no fabricated technical spec (no made-up measurements, no universal claims without primary source)
- Build PASS, Typecheck PASS
- Commit message: `"Batch N — expand [head] [domain] knowledge ([slugs])"`

### E4. Knowledge Factory Design Deliverables (Phase B — Read-Only Design Documents, Not Code Mutation):
- `/home/ubuntu/servisgitar/design/visual-system.md` (this file — visual spec)
- `/home/ubuntu/servisgitar/design/article-template-upgrade.md` (planned template changes)
- `/home/ubuntu/servisgitar/design/knowledge-roadmap.md` (hierarchy + batch strategy — already partially in `master-audit-23dcb91.md`)
- `/home/ubuntu/servisgitar/references/knowledge-factory-phase-b.md` (session notes — references only, not executed mutation)

No `articles.ts` mutation in Phase B unless user approves content batch separately. Phase B = design + architecture blueprint only.

## F. Quality Gate Design (Phase B — Read-Only Template Definition)

### F1. Per Article Before Production:
- [ ] `id`: unique format `art-{head}-{domain}-{seq}` (example: `art-bass-meas-003`)
- [ ] `slug`: unique, descriptive, hyphenated, no numbers unless sequence (e.g. `pengukuran-action-bass` not `pengukuran-action-bass-001` unless sequence needed)
- [ ] `contentType`: valid value from `contentType` union (`concept`, `problem`, `service`, `measurement`, `tool`, `terminology`, `technique`)
- [ ] `category`: valid from registry (`akustik`, `elektrik`, `elektrik-akustik`, `bass`, `all`)
- [ ] `domains`: array of valid `KnowledgeDomainSlug` from registry (`setup`, `measurement`, `problems`, etc. — `problems`, NOT `problem`)
- [ ] `related[]`: array of `slug` values that exist in ARTICLES (`grep -c 'slug: "..."'` verification)
- [ ] `sources`: array with `tier: "primary" | "expert" | "community"`; `primary` preferred for spec/measurement; no universal claims from `community`
- [ ] `body`: keys match `contentType` schema (no `hubunganDengan` in `measurement`, `problem`, `terminology`, `service`; no `definisi` in `concept` unless concept has terminology focus)
- [ ] `status`: `"draft"` or `"published"`; publish only after build + typecheck pass
- [ ] Build PASS (`npm run build` → 32/32 or future count + all pages)
- [ ] Typecheck PASS (`npx tsc --noEmit` → 0 errors)

### F2. Visual Check (Future — Not Executed in Phase B):
- [ ] If `contentType` = `measurement`: visual diagram exists or is planned
- [ ] If `contentType` = `problem`: problem illustration planned (optional but recommended)
- [ ] No decorative-only images (no random guitar photos without technical explanation)
- [ ] All images have `alt` and `caption`

## G. Article Template Design (Not Code — Design Blueprint Only)

### G1. Template Sections (What Exists + Planned Additions):

**Existing (verified from page template):**
- Breadcrumb (`Panduan` / `Kategori`) — verified in page source
- Hero (title, category badge, reading time) — verified
- Body sections (conditional per `body` keys: `apaItu`, `fungsi`, etc.) — verified
- Related (`Topik Terkait` — card grid 2-col sm+) — verified (`0ccc36e`)
- Brand/Model (`Brand Terkait` / `Model Terkait`) — verified (`bd716ab`)
- Sources (`Sumber`) — verified
- Search (`/search`) — verified
- Contact (`/kontak`) — verified
- Footer — verified

**Planned Addition (design only, not implemented in this turn):**
- Visual Section (`.article-visual` container) — renders image from future `visual` field or `/public/images/articles/{slug}/`
- Caption (`.article-visual-caption`) — renders `visual.caption`
- Alt text accessible (`alt` from `visual.alt`)
- Responsive (`max-width: 100%; height: auto; object-fit: contain`)
- No mutation to existing sections — only adds a new conditional section

### G2. Template Code Design (Read-Only Design — Not Implemented):

```
// Conceptual design only — NOT written to file in this turn
function ArticleVisual({ article }) {
  if (!article.visual && !article.slug) return null;
  const path = `/images/articles/${article.slug}/${article.visual?.kind || 'hero'}.webp`;
  return (
    <figure className="article-visual">
      <img src={path} alt={article.visual?.alt || article.title} />
      <figcaption className="article-visual-caption">
        {article.visual?.caption || ''}
      </figcaption>
    </figure>
  );
}
```

No mutation performed — this is design reference only.

## H. Phase B Design Deliverables (This Turn — Read-Only Design Documents Only)

Files created (read-only design, no mutation to `articles.ts`, `types.ts`, `page.tsx`, etc.):
- `/home/ubuntu/servisgitar/design/visual-system.md` (this file)
- `/home/ubuntu/servisgitar/design/article-template-upgrade.md` (planned template)
- `/home/ubuntu/servisgitar/design/knowledge-roadmap.md` (future batches)
- `/home/ubuntu/servisgitar/references/knowledge-factory-phase-b.md` (session notes, design reference)

No mutation to repository code in Phase B (per user instruction: STOP before coding; read-only audit/design first).

## I. Phase B Implementation (Deferred Until User Approval)

When user approves Phase B execution:
1. Implement visual section in `page.tsx` (conditional, non-destructive)
2. Add CSS for `.article-visual` / `.article-visual-caption`
3. Create `/public/images/articles/` directory (empty; future images)
4. Update article template design reference (this file) to final
5. Design AI image pipeline standard (reference file, not execution)
6. No new articles added in Phase B; only visual/template architecture
7. Build PASS, Typecheck PASS
8. Commit: `"Phase B — visual system + article template upgrade"`
9. Push, verify `HEAD == origin/main`, clean working tree

No mutation executed in this turn — Phase B = design blueprint only.
