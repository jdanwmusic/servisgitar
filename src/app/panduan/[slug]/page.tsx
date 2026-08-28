import { ARTICLES_BY_SLUG } from "@/data/articles";
import { articleTitle, articleDescription } from "@/lib/seo-template";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = Object.keys(ARTICLES_BY_SLUG);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const a = ARTICLES_BY_SLUG[params.slug];
  if (!a) return { title: "Tidak Ditemukan | ServisGitar" };
  return {
    title: articleTitle(a),
    description: articleDescription(a),
    keywords: a.domains.join(", "),
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: `https://servisgitar.com/panduan/${a.slug}`,
      title: a.title,
      description: a.description,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = ARTICLES_BY_SLUG[params.slug];
  if (!a) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
        <Nav />
        <main className="flex-1 container-shell py-24"><h1>Artikel Tidak Ditemukan</h1></main>
        <Footer />
      </div>
    );
  }

  const bodyText = (a.body as unknown as Record<string, unknown>);
  const sections = Object.entries(bodyText).filter(([k]) => !["contentType"].includes(k));

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-brand-muted">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:text-brand-accent">Beranda</a></li>
            <li>/</li>
            <li><a href="/kategori/elektrik" className="hover:text-brand-accent">{a.category === "all" ? "Semua" : a.category}</a></li>
            <li>/</li>
            <li className="text-brand-text-primary truncate max-w-[200px]">{a.title}</li>
          </ol>
        </nav>

        <header className="mb-10 border-b border-brand-border pb-8">
          <div className="flex gap-2 text-xs text-brand-accent font-medium mb-3">
            <span className="uppercase tracking-wider">{a.contentType}</span>
            <span>·</span>
            <span className="text-brand-muted">{a.readingMinutes} menit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">{a.title}</h1>
          <p className="mt-4 text-brand-text text-lg leading-relaxed">{a.description}</p>
          <div className="mt-4 flex gap-2 text-xs text-brand-muted">
            {a.domains.map((d) => (
              <a key={d} href="#" className="border border-brand-border rounded-full px-2 py-0.5 hover:border-brand-accent hover:text-brand-accent transition-colors">{d}</a>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <article>
            <div className="prose prose-invert max-w-none text-brand-text leading-relaxed">
              {sections.map(([key, value]) => (
                <section key={key} className="mb-10">
                  <h2 className="text-xl font-semibold text-brand-text-primary mb-3">{key.replace(/[A-Z]/g, (m) => " " + m.toLowerCase()).replace(/^./, (c) => c.toUpperCase())}</h2>
                  {Array.isArray(value) ? (
                    <ul className="list-disc pl-5 space-y-1 text-brand-text">{(value as string[]).map((item, i) => <li key={i}>{item}</li>)}</ul>
                  ) : (
                    <p className="text-brand-text">{String(value)}</p>
                  )}
                </section>
              ))}
            </div>

            {/* Internal links (related) */}
            <section className="mt-12 pt-8 border-t border-brand-border">
              <h3 className="text-lg font-semibold mb-4">Topik Terkait</h3>
              <p className="text-sm text-brand-muted mb-4">
                Artikel ini memiliki Topik Terkait berupa artikel lain diServisGitar.com.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {a.related.map((slug) => {
                  const rel = ARTICLES_BY_SLUG[slug];
                  if (!rel) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/panduan/${slug}`}
                      className="rounded-lg border border-brand-border bg-brand-surface p-4 hover:border-brand-accent transition-colors block"
                    >
                      <div className="text-xs uppercase tracking-wider text-brand-accent mb-1">
                        {rel.contentType}
                      </div>
                      <div className="text-brand-text-primary font-medium text-sm leading-snug">
                        {rel.title}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Sources */}
            <section className="mt-8 pt-8 border-t border-brand-border">
              <h3 className="text-lg font-semibold mb-3">Sumber</h3>
              <ul className="text-sm text-brand-muted space-y-1">
                {a.sources.map((s, i) => (
                  <li key={i}>{s.title}{s.author ? ` (${s.author})` : ""} — <span className="text-brand-text">{s.tier}</span>{s.note ? ` — ${s.note}` : ""}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-border bg-brand-surface p-6">
              <h3 className="font-semibold mb-3">Tentang Konten Ini</h3>
              <dl className="text-sm space-y-2 text-brand-muted">
                <div><dt>Jenis</dt><dd className="text-brand-text">{a.contentType}</dd></div>
                <div><dt>Kesulitan</dt><dd className="text-brand-text">{a.difficulty}</dd></div>
                <div><dt>Waktu Baca</dt><dd className="text-brand-text">{a.readingMinutes} menit</dd></div>
                <div><dt>Kategori</dt><dd className="text-brand-text">{a.category}</dd></div>
                <div><dt>Domain</dt><dd className="text-brand-text">{a.domains.join(", ")}</dd></div>
              </dl>
            </div>
            {/* Search widget */}
            <div className="rounded-xl border border-brand-border bg-brand-surface p-6">
              <h3 className="font-semibold mb-3">Cari Pengetahuan</h3>
              <form action="/search" method="GET" className="flex gap-2">
                <input type="text" name="q" placeholder="Contoh: fret buzz" className="w-full bg-brand-bg border border-brand-border rounded-md px-3 py-2 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-accent" />
                <button type="submit" className="btn-brand text-xs px-3 py-2">Cari</button>
              </form>
            </div>
          </aside>
        </div>
      </main>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd(a) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd([
          { name: "Beranda", url: "https://servisgitar.com/" },
          { name: a.category === "all" ? "Semua" : a.category, url: `https://servisgitar.com/kategori/${a.category}` },
          { name: a.title, url: `https://servisgitar.com/panduan/${a.slug}` },
        ]) }}
      />
      <Footer />
    </div>
  );
}
