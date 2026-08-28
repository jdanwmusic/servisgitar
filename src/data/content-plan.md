# PHASE 2 — PILOT CONTENT PLAN (10 Resources)

## Design principle
Each resource tests a different content type. All must have verifiable sources (Tier 1 preferred, Tier 3 only with explicit note). No fabricated measurements. No universal claims for instrument-specific values.

---

## 1. concept — "Apa Itu Setup Gitar?"
- slug: `apa-itu-setup-gitar`
- content type: concept
- primary entity: KnowledgeDomain.setup + Component (bridge, nut, truss rod, saddles, tuners)
- related entities: setup, measurement, repair
- target: semua kategori (elektrik, akustik, bass, elektrik-akustik)
- user intent: understand what "setup" means before attempting or booking
- foundational reason: every other knowledge article (problem, repair, measurement) assumes user understands setup concept
- planned sources: Fender official setup guide (Tier 1), Gibson repair manual (Tier 1)

## 2. concept — "Apa Itu Elektronik pada Gitar Akustik?"
- slug: `apa-itu-elektronik-gitar-akustik`
- content type: concept
- primary entity: KnowledgeDomain.elektronik + Component (piezo, preamp, EQ, tuner)
- related entities: elektronik, repair, diagnosis, maintenance
- target: elektrik-akustik, elektrik
- user intent: understand electronics before diagnosing sound problems
- planned sources: Fishman official documentation (Tier 1), LR Baggs technical docs (Tier 1)

## 3. problem — "Fret Buzz — Penyebab dan Diagnosis"
- slug: `fret-buzz`
- content type: problem
- primary entity: Problem.fret-buzz
- related entities: Component (neck, fret, truss rod, nut, bridge/saddle), Measurement (neck relief, action), Tool (fret rocker, feeler gauge)
- target: semua kategori
- user intent: diagnose buzzing sound, decide whether DIY-safe
- foundational reason: one of the most common service requests
- planned sources: Fender setup manual (Tier 1), professional luthier guides (Tier 2 — e.g., StewMac, Dan Erlewine references if available online)
- critical: do NOT invent torque values. State that truss rod adjustments are instrument/model dependent.

## 4. problem — "Tuning Instability — Penyebab dan Diagnosis"
- slug: `tuning-instability`
- content type: problem
- primary entity: Problem.tuning-instability
- related entities: Component (tuners, nut, bridge/saddle, strings), Service (setup), Tool (tuner, wrench)
- target: semua kategori
- user intent: understand why guitar won't stay in tune
- planned sources: manufacturer string guides (Tier 1), professional repair guides (Tier 2)

## 5. tool — "Fret Rocker — Cara Menggunakannya"
- slug: `fret-rocker-cara-menggunakan`
- content type: tool
- primary entity: Tool.fret-rocker
- related entities: Component (fret), Problem (fret-buzz), Technique (fret-leveling), Measurement (fret level)
- target: semua kategori
- user intent: learn correct technique for this common diagnostic tool
- planned sources: StewMac product documentation (Tier 1 if available), professional repair videos/technical guides (Tier 2)
- critical: describe technique, not invent measurement tolerances. State that "acceptable" fret variance depends on instrument and player preference.

## 6. measurement — "Cara Mengukur Neck Relief"
- slug: `pengukuran-neck-relief`
- content type: measurement
- primary entity: Measurement.neck-relief
- related entities: Component (neck, truss rod), Problem (fret-buzz), Tool (feeler gauge), Technique (truss-rod-adjustment — deferred Phase 3)
- target: semua kategori
- user intent: learn how to measure a fundamental setup parameter
- planned sources: Fender setup manual (Tier 1), Gibson repair guide (Tier 1)
- critical: provide the measurement METHOD (capo at 1st fret, press at last fret, measure gap at 7th-9th). State that TARGET VALUES vary widely by instrument type, string gauge, and player preference — provide typical ranges (e.g., "many techs aim for ~0.25–0.5mm at 7th fret" as a common reference, NOT a universal rule). Cite Fender manual as source.

## 7. measurement — "Cara Mengukur Action (String Height)"
- slug: `pengukuran-action-string-height`
- content type: measurement
- primary entity: Measurement.action-at-12th-fret
- related entities: Component (bridge/saddle, nut), Problem (high-action, low-action), Service (setup)
- target: semua kategori
- user intent: measure action to determine if setup needed
- planned sources: Fender setup manual (Tier 1), Gibson specs (Tier 1)
- critical: describe measurement point (12th fret, bass side, high E side) and common ranges (e.g., Fender spec references). State dependency on instrument/model/player preference. Do NOT invent universal values.

## 8. terminology — "Fret Leveling"
- slug: `terminologi-fret-leveling`
- content type: terminology
- primary entity: Terminology.fret-leveling
- related entities: Component (fret), Technique (fret-crowning), Problem (uneven-fret), Tool (fret-file, fret-crowning-file)
- target: semua kategori
- user intent: understand the term before attempting repair or booking service
- planned sources: Fender manual (Tier 1 — reference to fret work), professional repair guides (Tier 2)

## 9. terminology — "Intonasi"
- slug: `terminologi-intonasi`
- content type: terminology
- primary entity: Terminology.intonation
- related entities: Component (bridge/saddle, tuners), Service (setup), Measurement (string-length), Problem (poor-intonation — deferred Phase 3)
- target: semua kategori
- user intent: understand intonation concept before attempting setup
- planned sources: Fender setup manual (Tier 1), Gibson specs (Tier 1)
- critical: state dependency — intonation setup varies by bridge type (fixed, tremolo, tune-o-matic) and instrument.

## 10. service — "Setup Dasar Gitar Elektrik"
- slug: `service-setup-dasar-gitar-elektrik`
- content type: service
- primary entity: Service.setup-basic
- related entities: Component (bridge/saddle, nut, tuners, truss rod, strings), Measurement (neck-relief, action), Tool (wrench, feeler-gauge, screwdriver), KnowledgeDomain.setup
- target: elektrik category
- user intent: understand what's included in a basic setup service (before booking)
- planned sources: Fender official setup procedure reference (Tier 1) — use as structural reference only; do not claim Fender's procedure applies to all instruments.
- critical: describe service scope (neck relief check/adjustment if applicable, string height check/adjustment, intonation check/adjustment, nut/bridge inspection, cleaning). State that truss rod adjustments and intonation adjustments are instrument/model dependent. Do NOT invent universal values.

---

## SOURCE STRATEGY SUMMARY

Tier 1 sources (primary) — planned for this batch:
- Fender official setup guide / repair manual (concept, measurement, service)
- Gibson repair/service documentation (measurement references)
- Fishman / LR Baggs electronics documentation (konsep elektronik-akustik)
- Manufacturer string guides (problem: tuning-instability)

Tier 2 sources (expert/professional):
- Professional repair guides (StewMac, Dan Erlewine technical references where verifiable online)
- Educational repair resources

Tier 3 sources (community/experience):
- Not used as primary evidence in this batch.
- Only acceptable if explicitly labeled as user/community experience, not universal fact.

---

## CONTENT TYPE DISTRIBUTION (test coverage)

| # | Type | Slug | Tests entity, relationship, source |
|---|---|---|---|
| 1 | concept | `apa-itu-setup-gitar` | concept + domain + component rel |
| 2 | concept | `apa-itu-elektronik...` | concept + component + electronics rel |
| 3 | problem | `fret-buzz` | problem + measurement + tool rel + service rel |
| 4 | problem | `tuning-instability` | problem + component + service + measurement rel |
| 5 | tool | `fret-rocker...` | tool + measurement + technique + component rel |
| 6 | measurement | `pengukuran-neck-relief` | measurement + problem + tool + component rel |
| 7 | measurement | `pengukuran-action...` | measurement + service + component + problem rel |
| 8 | terminology | `terminologi-fret-leveling` | terminology + technique + component rel |
| 9 | terminology | `terminologi-intonasi` | terminology + service + measurement + component rel |
| 10 | service | `service-setup...` | service + measurement + component + tool + domain rel |

Every content type is tested. 5 different types covered (concept: 2, problem: 2, tool: 1, measurement: 2, terminology: 2, service: 1 = 10 resources).
