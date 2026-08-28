import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { search } from "@/lib/search";
import { MODEL_BY_ID } from "@/data/brands-models";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = { title: "Cari Pengetahuan | ServisGitar" };

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams?.q ?? "").trim();
  const results = q.length >= 2 ? search(q) : [];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12">
        <h1 className="text-3xl font-bold mb-2">Cari Pengetahuan</h1>
        <p className="text-brand-text mb-8">Cari artikel, brand, model, dan panduan servis.</p>
        <form action="/search" method="GET" className="flex gap-2 mb-10">
          <input
            name="q"
            type="text"
            defaultValue={q}
            placeholder="Contoh: fret buzz, setup, intonasi"
            className="flex-1 bg-brand-surface border border-brand-border rounded-md px-4 py-3 text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-accent"
          />
          <button type="submit" className="btn-brand px-5 py-3">Cari</button>
        </form>
        {q.length >= 2 && <p className="text-sm text-brand-muted mb-6">Hasil untuk: &quot;{q}&quot;</p>}

        {results.length === 0 && q.length >= 2 && (
          <p className="text-brand-text">Tidak ada hasil untuk &quot;{q}&quot;.</p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <div
              key={`${r.type}-${r.id}`}
              className="rounded-xl border border-brand-border bg-brand-surface p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-brand-accent/10 text-brand-accent px-2 py-0.5 text-xs font-medium uppercase tracking-wider">
                  {r.type}
                </span>
                <span className="text-xs text-brand-muted">skor {r.score}</span>
              </div>
              <h3 className="font-semibold text-brand-text-primary">
                {r.type === "article" ? (
                  <Link href={`/panduan/${(r as { slug: string }).slug}`} className="hover:text-brand-accent transition-colors">
                    {r.title}
                  </Link>
                ) : r.type === "brand" ? (
                  <Link href={`/brand/${(r as { id: string }).id}`} className="hover:text-brand-accent transition-colors">
                    {r.title}
                  </Link>
                ) : (
                  (() => {
                    const m = MODEL_BY_ID[(r as { id: string }).id];
                    const href = m ? `/model/${m.brandId}/${(r as { id: string }).id}` : "#";
                    return (
                      <Link href={href} className="hover:text-brand-accent transition-colors">
                        {r.title}
                      </Link>
                    );
                  })()
                )}
              </h3>
              <p className="mt-1 text-xs text-brand-text leading-relaxed">{(r as { description: string }).description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
