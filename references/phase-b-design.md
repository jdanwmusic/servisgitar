# Phase B Design References (2026-08-28)

Design-only session (no mutation to `articles.ts`/`types.ts`/`page.tsx`).
Deliverables (untracked under repo):
- `design/visual-system.md` — visual type catalog, naming convention (`/images/articles/{slug}/{kind}.webp`), alt+caption rules, style (dark industrial + gold), contentType-specific visual requirements (measurement = mandatory diagram; others optional)
- `design/article-template-upgrade.md` — conditional visual section design (non-destructive), responsive/mobile rules, accessibility (alt mandatory), no new schema fields
- `design/knowledge-roadmap.md` — 3 head (akustik/elektrik/bass) × 10 domain hierarchy, batch quality gate, scale design (~2000 via batches of 2–4), evidence-only constraint preserved
- `references/knowledge-factory-phase-b.md` — session notes

Schema preserved (read-only): `types.ts` unchanged; `contentType` values (`measurement`, `problem`, `terminology`) verified; domain registry (`content-registry.ts`) preserved (`problems` not `problem`).

No commit performed for Phase B design files (user instruction: no push until fully verified; user handles deploy independently).
