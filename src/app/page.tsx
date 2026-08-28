// Site components (placeholder shell — no content/articles yet)
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="relative isolate overflow-hidden bg-gradient-hero"
          aria-label="Hero"
        >
          {/* Decorative noise overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-noise-dark opacity-60 mix-blend-overlay"
          />
          {/* Decorative gold corner accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96
                       rounded-full bg-brand-accent/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96
                       rounded-full bg-brand-accent/5 blur-3xl"
          />

          <div className="container-shell relative py-24 sm:py-32 lg:py-40">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-border
                            bg-brand-surface/60 px-3 py-1 text-xs font-medium uppercase
                            tracking-widest text-brand-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Profesional · Presisi · Bergaransi
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight
                             text-brand-text-primary sm:text-5xl lg:text-6xl">
                Servis Gitar &amp; Bass{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Tanpa Kompromi.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-text">
                Setup, fret job, elektronik, hingga custom mod — dikerjakan
                luthier berpengalaman dengan standar workshop profesional.
                (Konten hero lengkap menyusul.)
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#cta" className="btn-brand">
                  Booking Servis
                </a>
                <a href="#layanan" className="btn-ghost">
                  Lihat Layanan
                </a>
              </div>

              {/* Trust strip placeholder */}
              <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t
                             border-brand-border pt-8 text-sm">
                <div>
                  <dt className="text-brand-text">Pengalaman</dt>
                  <dd className="mt-1 text-2xl font-semibold text-brand-text-primary">—</dd>
                </div>
                <div>
                  <dt className="text-brand-text">Gitar Diservis</dt>
                  <dd className="mt-1 text-2xl font-semibold text-brand-text-primary">—</dd>
                </div>
                <div>
                  <dt className="text-brand-text">Kepuasan</dt>
                  <dd className="mt-1 text-2xl font-semibold text-brand-text-primary">—</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
