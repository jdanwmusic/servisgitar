import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { ARTICLES } from "@/data/articles";
import { BRANDS } from "@/data/brands-models";
import Link from "next/link";

export default function HomePage() {
  // 3 featured articles — diverse types
  const featured = ARTICLES.slice(0, 3);

  // Knowledge categories — from content-registry (Akustik / Elektrik / Bass)
  const instrumentCategories = [
    { label: "Gitar Akustik", href: "/kategori/akustik", desc: "Setup, perawatan, dan repair gitar akustik natural." },
    { label: "Gitar Elektrik", href: "/kategori/elektrik", desc: "Setup, elektronik, dan setup profissional gitar elektrik." },
    { label: "Bass", href: "/kategori/bass", desc: "Servis dan setup bass guitar." },
  ];

  // Knowledge domains — from content-registry (key domains relevant to guitar service)
  const knowledgeDomains = [
    { label: "Setup", href: "/panduan/apa-itu-setup-gitar", desc: "Relief, action, intonasi." },
    { label: "Diagnosis", href: "/panduan/fret-buzz", desc: "Identifikasi masalah fret buzz, tuning." },
    { label: "Pengukuran", href: "/panduan/pengukuran-neck-relief", desc: "Neck relief, action, intonasi." },
    { label: "Komponen", href: "/panduan/fret-rocker-cara-menggunakan", desc: "Nut, bridge, tremolo, fret, pickup." },
    { label: "Tools", href: "/panduan/terminologi-intonasi", desc: "Alat ukur dan alat servis." },
    { label: "Perbaikan", href: "/panduan/service-setup-dasar-gitar-elektrik", desc: "Fret leveling, restring, repair dasar." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">

        {/* ── IDENTITY BLOCK ───────────────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-bg"
          aria-label="Tentang platform"
        >
          <div className="container-shell py-14 sm:py-18">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-4">
                Pusat Pengetahuan Servis Gitar
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text-primary leading-tight">
                ServisGitar.com
              </h1>
              <p className="mt-4 text-lg text-brand-text leading-relaxed max-w-2xl">
                Pusat Pengetahuan Servis, Repair &amp; Perawatan Gitar.{" "}
                Pelajari setup, diagnosis, pengukuran, repair, komponen,
                tools, dan perawatan gitar akustik, elektrik, dan bass.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/search" className="btn-brand">
                  Cari Pengetahuan
                </Link>
                <Link href="/kategori/elektrik" className="btn-ghost">
                  Mulai Pelajari
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTRUMENT CATEGORIES ──────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-bg py-14"
          aria-label="Kategori instrumen"
        >
          <div className="container-shell">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Gitar yang Dibahas
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {instrumentCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-accent/60 transition-colors"
                >
                  <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── KNOWLEDGE DOMAINS ───────────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-surface py-14"
          aria-label="Domain pengetahuan"
        >
          <div className="container-shell">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Yang Bisa Dipelajari
            </h2>
            <p className="text-brand-text mb-8 max-w-xl">
              Informasi servis gitar terstruktur: dari konsep dasar
              hingga teknik profesional.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {knowledgeDomains.map((dom) => (
                <Link
                  key={dom.href}
                  href={dom.href}
                  className="group rounded-xl border border-brand-border bg-brand-bg p-5 hover:border-brand-accent/60 transition-colors"
                >
                  <h3 className="font-medium text-brand-text-primary group-hover:text-brand-accent transition-colors">
                    {dom.label}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted leading-relaxed">
                    {dom.desc}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/search"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
              >
                Telusuri semua pengetahuan →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURED GUIDES ─────────────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-bg py-14"
          aria-label="Panduan pilihan"
        >
          <div className="container-shell">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Panduan Pilihan
              </h2>
              <Link
                href="/search"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
              >
                Lihat semua →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((a) => (
                <Link
                  key={a.slug}
                  href={`/panduan/${a.slug}`}
                  className="group rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-accent/60 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">
                      {a.contentType}
                    </span>
                    <span className="text-brand-muted">·</span>
                    <span className="text-xs text-brand-muted">
                      {a.readingMinutes} menit
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text line-clamp-2 leading-relaxed">
                    {a.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANDS ──────────────────────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-surface py-14"
          aria-label="Brand"
        >
          <div className="container-shell">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Merek yang Didokumentasikan
            </h2>
            <p className="text-brand-text mb-6">
              Spesifikasi servis-relevant per merek — dari sumber manufacturer.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {BRANDS.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="group rounded-xl border border-brand-border bg-brand-bg p-5 hover:border-brand-accent/60 transition-colors"
                >
                  <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    {brand.countryOfOrigin} · {brand.modelIds.length} model
                  </p>
                  <p className="mt-2 text-xs text-brand-accent font-medium group-hover:underline">
                    Lihat model →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECONDARY JW CTA ───────────────────────────────────── */}
        <section
          className="border-b border-brand-border/40 bg-brand-bg py-14"
          aria-label="Bantuan profesional"
        >
          <div className="container-shell">
            <div className="rounded-xl border border-brand-border bg-brand-surface p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Butuh bantuan profesional?
                </h2>
                <p className="mt-2 text-sm text-brand-text leading-relaxed max-w-md">
                  Konsultasikan gitar Anda dengan JW Guitar Service — setup,
                  fret job, elektronik, dan custom modification untuk gitar
                  akustik, elektrik, dan bass.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <Link href="/kontak" className="btn-brand whitespace-nowrap">
                  Hubungi Kami
                </Link>
                <Link
                  href="/layanan"
                  className="text-sm text-brand-muted hover:text-brand-accent text-center transition-colors"
                >
                  Lihat layanan →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
