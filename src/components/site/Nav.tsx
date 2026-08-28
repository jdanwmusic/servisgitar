export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/40 backdrop-blur-md bg-brand-bg/80">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Global">
        <a href="/" className="text-xl font-bold tracking-tight text-brand-text-primary hover:text-brand-accent transition-colors">
          SERVISEGITAR
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text">
          <li><a href="#layanan" className="link-underline">Layanan</a></li>
          <li><a href="#tentang" className="link-underline">Tentang</a></li>
          <li><a href="#kontak" className="link-underline">Kontak</a></li>
        </ul>
        <a href="#cta" className="btn-brand text-xs py-2 px-3">Booking</a>
      </nav>
    </header>
  );
}
