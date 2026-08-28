import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/content-registry";
import type { InstrumentCategorySlug } from "@/lib/types";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as InstrumentCategorySlug[]).map((c) => ({ category: c }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const c = CATEGORIES[params.category as InstrumentCategorySlug];
  if (!c) return { title: "Kategori Tidak Ditemukan | ServisGitar" };
  return { title: `${c.label} | ServisGitar`, description: c.description };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const c = CATEGORIES[params.category as InstrumentCategorySlug];
  if (!c) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
        <Nav />
        <main className="flex-1 container-shell py-24"><h1>Kategori Tidak Ditemukan</h1></main>
        <Footer />
      </div>
    );
  }
  const articles = ARTICLES.filter((a) => a.category === params.category || a.category === "all");

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12 lg:py-16">
        <nav className="text-xs text-brand-muted mb-6">
          <a href="/" className="hover:text-brand-accent">Beranda</a> / <span className="text-brand-text-primary">{c.label}</span>
        </nav>

        <header className="mb-10 border-b border-brand-border pb-8">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">Kategori</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">{c.label}</h1>
          <p className="mt-4 text-brand-text text-lg leading-relaxed max-w-3xl">{c.description}</p>
        </header>

        <h2 className="text-xl font-semibold mb-6">Artikel di Kategori Ini ({articles.length})</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <a key={a.id} href={`/panduan/${a.slug}`} className="block rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-accent transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">{a.contentType}</span>
              </div>
              <h3 className="text-base font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors mb-2">{a.title}</h3>
              <p className="text-sm text-brand-text line-clamp-2">{a.description}</p>
              <p className="text-xs text-brand-muted mt-3">{a.readingMinutes} menit · {a.difficulty}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
