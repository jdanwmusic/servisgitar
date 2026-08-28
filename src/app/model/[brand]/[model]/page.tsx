import { MODEL_BY_ID, BRAND_BY_ID } from "@/data/brands-models";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(MODEL_BY_ID).map((id) => {
    const model = MODEL_BY_ID[id];
    return { brand: model.brandId, model: id };
  });
}

export default function ModelPage({ params }: { params: { brand: string; model: string } }) {
  const model = MODEL_BY_ID[params.model];
  if (!model || model.brandId !== params.brand) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
        <Nav />
        <main className="flex-1 container-shell py-24"><h1>Model Tidak Ditemukan</h1></main>
        <Footer />
      </div>
    );
  }
  const brand = BRAND_BY_ID[model.brandId];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-12 lg:py-16">
        <nav className="text-xs text-brand-muted mb-6">
          <Link href="/" className="hover:text-brand-accent">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href={`/brand/${brand?.id}`} className="hover:text-brand-accent">{brand?.name ?? "—"}</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-text-primary">{model.name}</span>
        </nav>

        <header className="mb-10 border-b border-brand-border pb-8">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">Model</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">{brand?.name} {model.name}</h1>
          <p className="mt-4 text-brand-text text-lg leading-relaxed max-w-3xl">{model.description}</p>
          <div className="mt-4 flex gap-3 text-sm text-brand-muted">
            <span className="capitalize">{model.category}</span>
            {model.scaleLength && <span>· Scale: {model.scaleLength}</span>}
            {model.bridge && <span>· Bridge: {model.bridge}</span>}
          </div>
        </header>

        {/* Service-relevant specs */}
        {[
          { label: "Scale Length", value: model.scaleLength },
          { label: "Bridge", value: model.bridge },
          { label: "Nut", value: model.nut },
          { label: "Fretboard", value: model.fretboard },
          { label: "Pickups", value: model.pickups },
          { label: "Electronics", value: model.electronics },
          { label: "Truss Rod Access", value: model.trussRodAccess },
        ].filter((r) => r.value).length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Spesifikasi Servis-Relevan</h2>
            <div className="rounded-xl border border-brand-border bg-brand-surface overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {([
                    { label: "Scale Length", value: model.scaleLength },
                    { label: "Bridge", value: model.bridge },
                    { label: "Nut", value: model.nut },
                    { label: "Fretboard", value: model.fretboard },
                    { label: "Pickups", value: model.pickups },
                    { label: "Electronics", value: model.electronics },
                    { label: "Truss Rod Access", value: model.trussRodAccess },
                  ] as { label: string; value?: string }[]).filter((r) => r.value).map((row, i) => (
                    <tr key={row.label} className={i > 0 ? "border-t border-brand-border" : ""}>
                      <td className="px-4 py-3 text-brand-muted font-medium w-40">{row.label}</td>
                      <td className="px-4 py-3 text-brand-text">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-2 border-t border-brand-border text-xs text-brand-muted">
                ⚠️ Nilai di atas adalah dari sumber yang diverifikasi. Nilai yang tidak dicantumkan berarti belum ada sumber yang tersedia untuk konfirmasi.
              </div>
            </div>
          </section>
        )}

        {/* Variants */}
        {model.variants && model.variants.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Varian / Generasi</h2>
            <div className="space-y-4">
              {model.variants.map((v) => (
                <div key={v.id} className="rounded-xl border border-brand-border bg-brand-surface p-5">
                  <h3 className="font-semibold text-brand-text-primary mb-2">{v.label}</h3>
                  {v.productionEra && <p className="text-sm text-brand-muted mb-2">Era produksi: {v.productionEra}</p>}
                  <ul className="text-sm text-brand-text space-y-1">
                    {v.characteristics.map((c, i) => <li key={i}>· {c}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Service notes */}
        {model.serviceNotes && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Catatan Servis</h2>
            <div className="rounded-xl border border-brand-accent/30 bg-brand-surface p-5">
              <p className="text-sm text-brand-text leading-relaxed whitespace-pre-line">{model.serviceNotes}</p>
            </div>
          </section>
        )}

        {/* Unknown fields */}
        {model.unknownFields && model.unknownFields.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-brand-muted">Informasi yang Belum Diverifikasi</h2>
            <div className="rounded-xl border border-brand-border bg-brand-surface p-5 opacity-70">
              <ul className="text-sm text-brand-muted space-y-1">
                {model.unknownFields.map((u, i) => <li key={i}>· {u}</li>)}
              </ul>
            </div>
          </section>
        )}

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Sumber</h2>
          <ul className="text-sm text-brand-muted space-y-2">
            {model.sources.map((s, i) => (
              <li key={i}>
                <strong className="text-brand-text">{s.title}</strong> — <span className="text-brand-text">{s.tier}</span>
                {s.author ? ` — ${s.author}` : ""} ({s.publisher || "—"}) — {s.accessDate}
                {s.note ? ` — ${s.note}` : ""}
              </li>
            ))}
          </ul>
        </section>

        {/* Related articles */}
        {model.relatedArticleIds && model.relatedArticleIds.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Panduan Terkait</h2>
            <div className="flex flex-wrap gap-2">
              {model.relatedArticleIds.map((slug) => (
                <Link key={slug} href={`/panduan/${slug}`} className="rounded-md border border-brand-border px-3 py-1.5 text-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-colors">
                  {slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
