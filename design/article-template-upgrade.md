# Phase B — Article Template Upgrade Design

Status: READ-ONLY DESIGN (no mutation to page.tsx in this turn)
Related: `visual-system.md`

## Current Template (`/panduan/[slug]/page.tsx`) — Verified from Source:
- Breadcrumb: `Panduan` / `Kategori` — verified
- Hero: title, description, category badge (`contentType`), reading minutes — verified
- Body sections: conditional per `body.contentType` — verified
- Related (`Topik Terkait`): card grid with `article.title` + `contentType` badge + link — verified (`0ccc36e`)
- Brand (`Brand Terkait`): conditional if `article.brandIds` non-empty — verified (`bd716ab`)
- Model (`Model Terkait`): conditional if `article.modelIds` non-empty — verified
- Sources (`Sumber`): list of source objects — verified
- About Content (`Tentang Konten Ini`): not explicitly checked in audit; verify if exists
- Search (`/search`): indexes `article`, `brand`, `model`, `terminology` — verified

## Planned Upgrade (Design, Not Mutation):

### 1. Visual Section — New Conditional Section
Location: Between Body Sections and Related Section (or after Related — design choice; after Body is preferred for reading flow).
Condition: Only renders if `article.visual` field exists (future) or `public/images/articles/{slug}/` has files.
Not destructive: if no visual, section does not render (empty state handled gracefully — no broken UI).

Implementation reference (design only — NOT written to file):
```
// In page.tsx — conditional render, added after body sections:
{article.visual && (
  <section className="article-visual-section">
    <figure>
      <img src={`/images/articles/${slug}/${visual.kind}.webp`} alt={visual.alt} />
      <figcaption>{visual.caption}</figcaption>
    </figure>
  </section>
)}
```

### 2. CSS Addition — Reference Design (Not Mutation):
Target file: `/home/ubuntu/servisgitar/src/app/globals.css` or `src/app/panduan/[slug]/page.tsx` (scope: global if reusable, local if article-only).
No CSS mutation performed in this turn.

Design spec:
```
.article-visual-section {
  margin: 2rem 0;
  max-width: 100%;
}
.article-visual-section figure img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: contain;
}
.article-visual-section figcaption {
  font-size: 0.875rem;
  color: #888;
  margin-top: 0.5rem;
  text-align: center;
}
```
No destructive CSS changes; new class only.

### 3. Responsive / Mobile (Design Reference):
- Desktop (`sm+`): image full-width within content column (`max-width: 720px`)
- Mobile (`xs`): same full-width; no side margins; caption centered
- No overflow (`overflow: hidden` on container)
- No fixed height; `height: auto` preserved

### 4. Accessibility Design:
- Every `<img>` requires `alt` (descriptive, not empty, not decorative)
- Every `<img>` requires `<figcaption>` or adjacent caption
- Heading hierarchy preserved: `h2` (body section), `h3` (subsection/related/visual title if any)
- No `aria-hidden` on images (images are content, not decorative in this design)
- Focus styles: default browser focus ring preserved; no `outline: none`

### 5. No Schema Change in Phase B:
- `articles.ts` not edited (only `visual` field could be added in future Phase 3 if needed; not in Phase B)
- `types.ts` preserved; no new `visual` interface added in Phase B
- Article data (`related[]`, `brandIds`, `modelIds`, `sources`) preserved

### 6. Implementation Gate for Phase B:
Before coding Phase B mutation:
- Confirm user wants visual template implemented (current turn is READ-ONLY)
- Confirm which contentType gets visual first (measurement = mandatory; others optional)
- Confirm AI image pipeline design standard (`visual-system.md`) approved
- Confirm no destructive schema change needed

No mutation performed in this turn.
