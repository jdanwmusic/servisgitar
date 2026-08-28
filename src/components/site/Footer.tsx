import Link from "next/link";

export default function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-border/40 bg-brand-surface">
      <div className="container-shell py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-brand-text-primary">SERVISEGITAR</p>
            <p className="mt-2 text-xs text-brand-muted leading-relaxed">
              JW Guitar Service — Servis dan perawatan gitar akustik, elektrik,
              dan bass. Jakarta &amp; Tangerang.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
              Layanan
            </p>
            <ul className="space-y-2 text-sm text-brand-text">
              <li><Link href="/layanan" className="hover:text-brand-accent transition-colors">Layanan</Link></li>
              <li><Link href="/panduan/apa-itu-setup-gitar" className="hover:text-brand-accent transition-colors">Setup Gitar</Link></li>
              <li><Link href="/panduan/fret-buzz" className="hover:text-brand-accent transition-colors">Perbaikan Fret</Link></li>
              <li><Link href="/kontak" className="hover:text-brand-accent transition-colors">Booking</Link></li>
            </ul>
          </div>

          {/* Panduan */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
              Panduan
            </p>
            <ul className="space-y-2 text-sm text-brand-text">
              <li><Link href="/kategori/elektrik" className="hover:text-brand-accent transition-colors">Gitar Elektrik</Link></li>
              <li><Link href="/kategori/akustik" className="hover:text-brand-accent transition-colors">Gitar Akustik</Link></li>
              <li><Link href="/search" className="hover:text-brand-accent transition-colors">Cari Panduan</Link></li>
            </ul>
          </div>

          {/* Brand & Model */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
              Merek
            </p>
            <ul className="space-y-2 text-sm text-brand-text">
              <li><Link href="/brand/fender" className="hover:text-brand-accent transition-colors">Fender</Link></li>
              <li><Link href="/brand/gibson" className="hover:text-brand-accent transition-colors">Gibson</Link></li>
              <li><Link href="/brand/yamaha" className="hover:text-brand-accent transition-colors">Yamaha</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {tahun} JW Guitar Service. ServisGitar Knowledge Base.
          </p>
          <p className="text-xs text-brand-muted">
            Built with evidence-backed knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
