import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const dynamic = 'force-static';

export const metadata = { title: "Cari Pengetahuan | ServisGitar" };

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams?.q ?? "").trim();
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12">
        <h1 className="text-3xl font-bold mb-2">Cari Pengetahuan</h1>
        <p className="text-brand-text mb-8">Cari artikel, masalah, tools, terminologi, dan panduan servis.</p>
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
        {q.length >= 2 && <p className="text-sm text-brand-muted">Hasil untuk: {q}</p>}
      </main>
      <Footer />
    </div>
  );
}
