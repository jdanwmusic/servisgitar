import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Kontak & Booking Servis | JW Guitar Service",
  description:
    "Hubungi JW Guitar Service untuk booking servis, konsultasi, atau pertanyaan tentang layanan setup, fret, dan perbaikan gitar.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-16 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight">Kontak &amp; Booking</h1>
        <p className="mt-4 text-brand-text max-w-2xl leading-relaxed">
          Hubungi kami untuk booking servis atau konsultasi. Servis untuk
          gitar akustik, elektrik, dan bass — berbagai merek.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="rounded-xl border border-brand-border bg-brand-surface p-8">
            <h2 className="text-xl font-semibold mb-6">Informasi Kontak</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/6287748514337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text-primary hover:text-brand-accent transition-colors"
                >
                  0877-4851-4337
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">
                  Email
                </p>
                <a
                  href="mailto:jdanwmusic@gmail.com"
                  className="text-brand-text-primary hover:text-brand-accent transition-colors"
                >
                  jdanwmusic@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">
                  Alamat
                </p>
                <address className="not-italic text-brand-text leading-relaxed">
                  Jl. Semanan Pintu Air No.37<br />
                  Duri Kosambi, Cengkareng<br />
                  Jakarta Barat
                </address>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-2">
                  Area Layanan
                </p>
                <p className="text-brand-text text-sm">
                  Jakarta &amp; Tangerang
                </p>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="rounded-xl border border-brand-border bg-brand-surface p-8">
            <h2 className="text-xl font-semibold mb-4">Booking Servis</h2>
            <p className="text-sm text-brand-text leading-relaxed mb-6">
              Hubungi via WhatsApp untuk booking atau konsultasi awal.
              Sertakan informasi instrumen (merek, model) dan jenis
              servis yang dibutuhkan.
            </p>

            <a
              href="https://wa.me/6287748514337?text=Halo%2C%20saya%20ingin%20booking%20servis%20gitar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand block text-center"
            >
              Chat via WhatsApp
            </a>

            <div className="mt-8 pt-6 border-t border-brand-border">
              <h3 className="text-sm font-semibold mb-3">Jenis Servis</h3>
              <ul className="space-y-1 text-sm text-brand-text">
                <li>· Setup dasar &amp; profesional</li>
                <li>· Penyesuaian neck relief &amp; action</li>
                <li>· Perbaikan fret &amp; fret buzz</li>
                <li>· Servis elektronik gitar</li>
                <li>· Custom modification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ note */}
        <div className="mt-10 rounded-xl border border-brand-border bg-brand-surface p-6">
          <h3 className="text-lg font-semibold">Catatan Penting</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-text leading-relaxed list-disc list-inside">
            <li>
              Estimasi harga servis diberikan setelah inspeksi instrumen —
              tidak ada harga universal per jenis servis.
            </li>
            <li>
              Setiap instrumen berbeda; kondisi fisik harus diverifikasi
              sebelum klaim dibuat.
            </li>
            <li>
              Servis struktural (neck reset, bridge reglue, dll.) memerlukan
              penilaian profesional terpisah.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
