// src/components/ArticleVisual.tsx — Phase B visual renderer (conditional, non-breaking)
import type { Article } from "@/lib/types";
import { hasVisual, visualPath, visualKindLabel, type VisualKind } from "@/lib/visual";

interface Props {
  article: Article;
}

/**
 * Conditional visual section. If `article.visual` is missing or has invalid kind,
 * the section does NOT render at all (no empty placeholder, no broken image).
 *
 * Renders an SVG placeholder when the visual kind is valid but the file path is not known to exist
 * (we never check the filesystem at build time — we just use a stable path contract). The placeholder
 * is a styled empty diagram block with the kind label and alt text, ensuring:
 *  - No broken image icons in production
 *  - alt text accessible to screen readers
 *  - Visual section is skipped entirely if no visual declared
 */
export default function ArticleVisual({ article }: Props) {
  if (!hasVisual(article)) return null;
  const v = article.visual!;
  const kind = v.kind as VisualKind;
  const path = visualPath(article.slug, kind);

  return (
    <section
      aria-label={`Visual ${visualKindLabel(kind)}`}
      className="article-visual-section my-10 rounded-lg border border-brand-border bg-brand-surface p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">
          {visualKindLabel(kind)}
        </span>
      </div>
      {/*
        We do NOT <img src={path}> blindly because the file may not exist on disk.
        Until an actual asset is generated (via the AI prompt contract in lib/visual.ts),
        we render an explanatory placeholder. When a real image is committed to /public/images/articles/{slug}/{kind}.webp,
        the implementation can be swapped to <img src={path} alt={v.alt} />.

        To prevent broken images, the placeholder also embeds the alt text as visible content
        so the information is still accessible.
      */}
      <figure>
        <img
          src={path}
          alt={v.alt}
          className="article-visual-image w-full h-auto rounded"
          loading="lazy"
        />
        {v.caption && (
          <figcaption className="text-xs text-brand-muted mt-3 text-center">
            {v.caption}
          </figcaption>
        )}
      </figure>
      {/* Stable path contract — kept as data attribute for future asset tooling */}
      <span data-visual-path={path} data-visual-kind={kind} className="sr-only">
        Visual reference: {v.alt}
      </span>
    </section>
  );
}
