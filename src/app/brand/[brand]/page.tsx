import { BRANDS, MODELS_BY_BRAND } from "@/data/brands-models";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export async function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.id }));
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = BRANDS.find((b) => b.id === params.brand);
  if (!brand) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
        <Nav />
        <main className="flex-1 container-shell py-24"><h1>Brand Tidak Ditemukan</h1></main>
        <Footer />
      </div>
    );
  }
  const models = MODELS_BY_BRAND[brand.id] ?? [];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12 lg:py-16">
        <nav className="text-xs text-brand-muted mb-6">
          <Link href="/" className="hover:text-brand-accent">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-text-primary">{brand.name}</span>
        </nav>

        <header className="mb-10 border-b border-brand-border pb-8">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">Brand</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">{brand.name}</h1>
          <p className="mt-4 text-brand-text text-lg leading-relaxed max-w-3xl">{brand.description}</p>
          <div className="mt-4 flex gap-3 text-sm text-brand-muted">
            {brand.countryOfOrigin && <span>Asal: {brand.countryOfOrigin}</span>}
            {brand.foundedYear && <span>· Didirikan: {brand.foundedYear}</span>}
            {brand.officialWebsite && <span>· <a href={brand.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Website Resmi</a></span>}
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Model dalam Arsip</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((m) => (
              <Link key={m.id} href={`/model/${brand.id}/${m.id}`} className="block rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-accent transition-colors group">
                <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors">{m.name}</h3>
                <p className="text-sm text-brand-text mt-1 line-clamp-2">{m.description}</p>
                <p className="text-xs text-brand-muted mt-2">{m.category} · {m.scaleLength ? `Scale: ${m.scaleLength}` : "—"}</p>
              </Link>
            ))}
            {models.length === 0 && <p className="text-brand-muted">Belum ada model yang didokumentasikan untuk brand ini.</p>}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Sumber Verifikasi</h2>
          <ul className="text-sm text-brand-muted space-y-2">
            {brand.sources.map((s, i) => (
              <li key={i}>
                <strong className="text-brand-text">{s.title}</strong> — <span className="text-brand-text">{s.tier}</span>
                {s.author ? ` — ${s.author}` : ""} ({s.publisher || "—"}) — {s.accessDate}
                {s.note ? ` — ${s.note}` : ""}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
