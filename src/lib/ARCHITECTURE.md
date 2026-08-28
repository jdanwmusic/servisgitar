# SERVICEGITAR.COM — Knowledge Architecture (Phase 1.5)

## 1. 4 Instrument Categories
- **Elektrik** — Strat, Tele, Les Paul, SG, Superstrat, Offset, Hollow/Semi-hollow, 7/8-string, Baritone, Headless
- **Akustik** — Steel-string, Classical, Dreadnought, Concert, Auditorium, Jumbo, Parlor, Travel
- **Elektrik-Akustik** — Piezo, Undersaddle, Soundhole, Magnetic, Mic, Preamp, EQ, Tuner, Battery, Output Jack, Feedback, Wiring
- **Bass** — 4/5/6-string, Short/Medium/Long scale, Multiscale, Fretless, Active/Passive, PJ/JJ/P, Humbucker, Headless, Acoustic Bass

## 2. 20 Knowledge Domains
konstruksi, komponen, hardware, elektronik, strings, setup, maintenance, problems, diagnosis, repair, restoration, tools, measurement, techniques, terminology, brands, models, case-studies, diy, professional-services

## 3. Entity Model (Phase 1.5)

| Entity | Purpose | Required Now? |
|---|---|---|
| Instrument | umbrella type (e.g. "Gitar Elektrik") | YES |
| InstrumentType | specific construction (Strat, Tele, Dreadnought) | YES (for filtering) |
| KnowledgeDomain | 20 domain taxonomy | YES |
| Component | nut, bridge, pickup, etc. | YES (for knowledge base) |
| Problem | fret buzz, tuning instability | YES (for diagnostic engine) |
| Service | setup, fret leveling, electronics repair | YES (for JW Guitar Service) |
| Tool | fret rocker, truss rod wrench, etc. | YES (for tools page) |
| Measurement | action, relief, fret level | YES (for measurement guides) |
| Technique | fret crowning, leveling, etc. | YES (for techniques page) |
| Terminology | relief, backbow, plek, etc. | YES (for glossary) |
| Brand | Fender, Gibson, Yamaha | DEFER (Phase 3) |
| Model | specific model specs | DEFER (Phase 3) |
| CaseStudy | real-world service experience | DEFER (Phase 5) |
| Article | content resource | YES (Phase 2+) |
| Source | citation | YES (every article) |

**Not added yet (avoid overengineering):**
- ServicePricing (requires market research)
- Workshop / Location (Phase 5)
- CustomerReview (not in scope)

## 4. Relationship Graph (14 types)
**12 from Phase 1 + 2 new**:
- `hasComponent` (Instrument → Component) — anatomy
- `performedOn` (Service → Instrument) — applicability

Used for: internal linking, related-articles sidebar, diagnostic engine, future search.

## 5. Article Schema (Phase 1.5 — content-type-aware)

**10 content types, each with its own required sections**:
- `concept` — 3 sections (apaItu, fungsi, topik Terkait)
- `problem` — 9 sections (full problem-solving)
- `service` — 8 sections (service definition)
- `tool` — 6 sections (tool usage)
- `measurement` — 6 sections (how to measure)
- `technique` — 7 sections (technique procedure)
- `terminology` — 2 sections (definition + related)
- `case-study` — 8 sections (real experience)
- `brand` / `model` — 3 sections (placeholder for Phase 3)

**Key change from Phase 1**: No more "force all articles to have 12 sections". A glossary entry doesn't need "tools" or "proses".

## 6. Navigation
`/kategori/[category]` → `/domain/[domain]` → `/panduan/[slug]`
Plus: `/glosarium` (terminology), `/tools` (tools index), `/layanan` (services).

## 7. SEO
- title pattern: `{title} — Panduan Servis Gitar | ServisGitar`
- description: ≤155 char, unique per article
- canonical: `https://servisgitar.com/panduan/{slug}`
- h1 = article title, h2 = section titles, h3 = subsections
- JSON-LD: `Article` + `BreadcrumbList` (Phase 2 implementation)

## 8. Source Model (Phase 1.5)
- `title` (required)
- `url` (optional — for verifiable citation)
- `tier` (primary/expert/community)
- `author` (optional)
- `publisher` (optional)
- `accessDate` (optional ISO)
- `note` (optional context)

## 9. Status
Phase 1.5 ✅ — foundation hardened.
Phase 2 (Knowledge Core) — pending approval.
