# SERVICEGITAR.COM — Knowledge Architecture (Phase 1)

## 1. 4 Instrument Categories
- **Elektrik** — Strat, Tele, Les Paul, SG, Superstrat, Offset, Hollow/Semi-hollow, 7/8-string, Baritone, Headless
- **Akustik** — Steel-string, Classical, Dreadnought, Concert, Auditorium, Jumbo, Parlor, Travel
- **Elektrik-Akustik** — Piezo, Undersaddle, Soundhole, Magnetic, Mic, Preamp, EQ, Tuner, Battery, Output Jack, Feedback, Wiring
- **Bass** — 4/5/6-string, Short/Medium/Long scale, Multiscale, Fretless, Active/Passive, PJ/JJ/P, Humbucker, Headless, Acoustic Bass

## 2. 20 Knowledge Domains
konstruksi, komponen, hardware, elektronik, strings, setup, maintenance, problems, diagnosis, repair, restoration, tools, measurement, techniques, terminology, brands, models, case-studies, diy, professional-services

## 3. Entity Model
`Instrument → Problem → Diagnosis → Solution → Tool → Measurement → Technique → Article`

## 4. Relationship Graph
12 typed relationships:
- `isPartOf`, `isTypeOf` (hierarchy)
- `causes`, `solves` (causal)
- `requires`, `requiresTool` (dependency)
- `measures` (measurement-to-target)
- `appliesTo`, `relatedTo` (semantic)
- `precedes`, `follows` (process)
- `conflictsWith` (constraint)

Used for: internal linking, related-articles sidebar, future diagnostic engine, structured data.

## 5. Article Schema (12 sections)
apaItu, fungsi, caraKerja, gejala, penyebab, diagnosis, pengukuran, tools, proses, risiko, lihatProfesional, topikTerkait, sumber

Each article must answer these where relevant. Validation in `article-schema.ts`.

## 6. Navigation
`/kategori/[category]` → `/domain/[domain]` → `/panduan/[slug]`

## 7. SEO
- title pattern: `{title} — Panduan Servis Gitar | ServisGitar`
- description: ≤155 char, unique per article
- canonical: `https://servisgitar.com/panduan/{slug}`
- h1 = article title, h2 = section titles, h3 = subsections

## 8. Status
Phase 1 ✅ | Phase 2 (Knowledge Core) — pending foundation sign-off.
