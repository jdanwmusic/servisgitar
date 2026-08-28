import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Layanan Servis Gitar | JW Guitar Service",
  description:
    "Layanan servis dan perawatan gitar profesional — setup, fret job, perbaikan, dan penyesuaian instrumen.",
};

export default function LayananPage() {
  const layanan = [
    {
      title: "Setup Gitar",
      slug: "apa-itu-setup-gitar",
      desc: "Penyesuaian neck relief, action, dan intonasi. Termasuk pemeriksaan nut dan saddle — berdasarkan prinsip dasar setup.",
      note: "Tidak ada harga universal; estimasi diberikan setelah inspeksi.",
    },
    {
      title: "Setup Elektrik",
      slug: "service-setup-dasar-gitar-elektrik",
      desc: "Layanan setup untuk gitar elektrik — termasuk pemeriksaan nut, saddle, pickup, dan elektronik dasar. Fokus pada standar profesional.",
      note: "Tidak semua spesifikasi universal; variasi per merek tetap dipertahankan.",
    },
    {
      title: "Penyesuaian Neck Relief",
      slug: "apa-itu-relief-gitar",
      desc: "Pengukuran dan penyesuaian relief leher dengan string action dan kondisi instrumen sebagai acuan. Bukti sumber tersedia.",
      note: "Tidak ada nilai universal — setiap instrumen berbeda.",
    },
    {
      title: "Perbaikan Fret",
      slug: "fret-buzz",
      desc: "Identifikasi dan penanganan masalah fret — dari leveling hingga penggantian jika diperlukan. Bergantung kondisi instrumen.",
      note: "Estimasi bergantung pada kondisi fret aktual per inspeksi.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary flex flex-col">
      <Nav />
      <main className="flex-1 container-shell py-16 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight">Layanan</h1>
        <p className="mt-4 text-brand-text max-w-3xl leading-relaxed">
          Berikut layanan servis gitar yang kami kerjakan. Semua
          penjelasan menggunakan data verifikasi yang tersedia di
          knowledge base; tidak ada klaim universal yang belum memiliki
          sumber.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {layanan.map((l) => (
            <a
              key={l.slug}
              href={`/panduan/${l.slug}`}
              className="block rounded-xl border border-brand-border bg-brand-surface p-6 hover:border-brand-accent/50 transition-colors"
            >
              <h2 className="text-xl font-semibold">{l.title}</h2>
              <p className="mt-2 text-sm text-brand-text leading-relaxed">{l.desc}</p>
              <p className="mt-3 text-xs text-brand-muted">{l.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-border bg-brand-surface p-6">
          <h3 className="text-xl font-semibold">Informasi Penting</h3>
          <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-brand-text leading-relaxed">
            <li>
              Harga servis bersifat individual dan bergantung kondisi
              instrumen — tidak ada tabel harga universal.
            </li>
            <li>
              Setiap layanan melibatkan inspeksi awal; klaim hanya dibuat
              setelah verifikasi kondisi fisik instrumen.
            </li>
            <li>
              Perbaikan struktural (neck reset, bridge reglue, dll.)
              memerlukan penilaian profesional sebelum eksekusi.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
