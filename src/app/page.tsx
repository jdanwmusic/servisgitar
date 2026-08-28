import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { ARTICLES } from "@/data/articles";
import { BRANDS } from "@/data/brands-models";
import Link from "next/link";

export default function HomePage() {
  // Featured: pick 3 diverse articles (concept + problem + measurement)
  const featured = ARTICLES.slice(0, 3);

  // Service preview cards — from existing article and content
  const serviceItems = [
    {
      title: "Setup Gitar",
      desc: "Penyesuaian neck relief, action, dan intonasi agar gitar bermain dengan nyaman dan stabil.",
      href: "/panduan/apa-itu-setup-gitar",
      badge: "Dasar",
    },
    {
      title: "Setup Gitar Elektrik",
      desc: "Layanan setup profesional untuk gitar elektrik — termasuk pemeriksaan nut, saddle, dan elektronik dasar.",
      href: "/panduan/service-setup-dasar-gitar-elektrik",
      badge: "Profesional",
    },
    {
      title: "Diagnosis Fret Buzz",
      desc: "Identifikasi penyebab buzz — dari relief leher hingga fret yang tidak rata.",
      href: "/panduan/fret-buzz",
      badge: "Diagnostik",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="relative isolate overflow-hidden bg-gradient-hero"
          aria-label="Hero"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-noise-dark opacity-60 mix-blend-overlay"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl"
          />

          <div className="container-shell relative py-24 sm:py-32 lg:py-40">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                JW Guitar Service
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-brand-text-primary sm:text-5xl lg:text-6xl">
                Servis Gitar &amp; Bass
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  {" "}Profesional.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-text">
                Setup, fret job, elektronik, hingga custom modification —
                dikerjakan dengan standar workshop profesional. Servis untuk
                gitar akustik, elektrik, dan bass dari berbagai merek.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/kontak" className="btn-brand">
                  Booking Servis
                </Link>
                <Link href="/layanan" className="btn-ghost">
                  Lihat Layanan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES PREVIEW ───────────────────────────────────────── */}
        <section
          id="layanan"
          className="border-t border-brand-border/40 bg-brand-bg py-20"
          aria-label="Layanan"
        >
          <div className="container-shell">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
                Layanan
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Apa yang Kami Kerjakan
              </h2>
              <p className="mt-3 max-w-2xl text-brand-text">
                Servis berdasarkan pengetahuan teknis yang terverifikasi.
                Setiap penyesuaian mempertimbangkan spesifikasi instrumen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceItems.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group rounded-xl border border-brand-border bg-brand-surface p-6 hover:border-brand-accent/60 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="rounded-full border border-brand-accent/40 bg-brand-accent/10 px-2 py-0.5 text-xs text-brand-accent font-medium">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary group-hover:text-brand-accent transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text leading-relaxed">
                    {svc.desc}
                  </p>
                  <p className="mt-4 text-xs text-brand-accent font-medium group-hover:underline">
                    Baca panduan →
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/layanan"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
              >
                Lihat semua layanan dan informasi servis →
              </Link>
            </div>
          </div>
        </section>

        {/* ── KNOWLEDGE BASE ────────────────────────────────────────── */}
        <section
          className="border-t border-brand-border/40 py-20"
          aria-label="Knowledge Base"
        >
          <div className="container-shell">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
                Knowledge Base
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Panduan Servis &amp; Perawatan
              </h2>
              <p className="mt-3 max-w-2xl text-brand-text">
                Pengetahuan servis gitar berbasis证据 — sumber dari manufacturer
                resmi dan referensi profesional. Setiap klaim memiliki attribution.
              </p>
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
                  <p className="mt-2 text-sm text-brand-text line-clamp-2">
                    {a.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kategori/elektrik"
                className="rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Gitar Elektrik
              </Link>
              <Link
                href="/kategori/akustik"
                className="rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Gitar Akustik
              </Link>
              <Link
                href="/search"
                className="rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm text-brand-text hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                + Semua Panduan
              </Link>
            </div>
          </div>
        </section>

        {/* ── BRANDS ─────────────────────────────────────────────────── */}
        <section
          className="border-t border-brand-border/40 bg-brand-bg py-20"
          aria-label="Brand"
        >
          <div className="container-shell">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
                Merek
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Model yang Telah Didokumentasikan
              </h2>
              <p className="mt-2 text-brand-text">
                Spesifikasi servis-relevant per merek — dari sumber manufacturer.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {BRANDS.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="group rounded-xl border border-brand-border bg-brand-surface p-5 hover:border-brand-accent/60 transition-colors"
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

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section
          id="kontak"
          className="border-t border-brand-border/40 py-20"
          aria-label="Kontak"
        >
          <div className="container-shell text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Butuh Servis?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-brand-text">
              Hubungi untuk booking atau konsultasi. Servis untuk gitar
              akustik, elektrik, dan bass — berbagai merek.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/kontak" className="btn-brand">
                Hubungi Kami
              </Link>
              <Link href="/layanan" className="btn-ghost">
                Pelajari Layanan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
