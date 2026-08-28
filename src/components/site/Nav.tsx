"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [panduanOpen, setPanduanOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/40 backdrop-blur-md bg-brand-bg/80">
      <nav
        className="container-shell flex h-16 items-center justify-between"
        aria-label="Global"
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-brand-text-primary hover:text-brand-accent transition-colors">
          SERVISEGITAR
        </Link>

        {/* Desktop nav — knowledge-first */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-text">
          <li><Link href="/" className="link-underline">Beranda</Link></li>

          {/* Panduan dropdown */}
          <li className="relative group" onMouseEnter={() => setPanduanOpen(true)} onMouseLeave={() => setPanduanOpen(false)}>
            <button className="flex items-center gap-1 link-underline" aria-expanded={panduanOpen} aria-haspopup="true">
              Panduan
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </button>
            <div className={`absolute top-full left-0 mt-2 w-48 rounded-xl border border-brand-border bg-brand-surface shadow-xl overflow-hidden ${panduanOpen ? 'block' : 'hidden'}`}>
              <Link href="/kategori/akustik" className="block px-4 py-2.5 text-sm hover:bg-brand-bg hover:text-brand-accent transition-colors border-b border-brand-border/30">Akustik</Link>
              <Link href="/kategori/elektrik" className="block px-4 py-2.5 text-sm hover:bg-brand-bg hover:text-brand-accent transition-colors border-b border-brand-border/30">Elektrik</Link>
              <Link href="/kategori/bass" className="block px-4 py-2.5 text-sm hover:bg-brand-bg hover:text-brand-accent transition-colors">Bass</Link>
              <div className="border-t border-brand-border/30">
                <Link href="/search" className="block px-4 py-2.5 text-xs text-brand-muted hover:text-brand-accent transition-colors">Cari Semua →</Link>
              </div>
            </div>
          </li>

          <li><Link href="/brand/fender" className="link-underline">Brand</Link></li>
          <li><Link href="/layanan" className="link-underline">Layanan</Link></li>
          <li><Link href="/kontak" className="link-underline">Kontak</Link></li>
        </ul>

        <Link href="/kontak" className="hidden md:inline-block btn-brand text-xs py-2 px-3">Booking</Link>

        <button type="button" onClick={() => setOpen(v => !v)} className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent" aria-label="Toggle menu" aria-expanded={open}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            {open ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/> : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-brand-border/40 bg-brand-bg/95 backdrop-blur-md">
          <ul className="container-shell flex flex-col gap-1 py-3 text-sm font-medium text-brand-text">
            <li><Link href="/" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Beranda</Link></li>
            <li><span className="block px-3 py-2 text-brand-muted text-xs uppercase tracking-wider">Panduan — Kategori</span></li>
            <li><Link href="/kategori/akustik" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Akustik</Link></li>
            <li><Link href="/kategori/elektrik" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Elektrik</Link></li>
            <li><Link href="/kategori/bass" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Bass</Link></li>
            <li><Link href="/brand/fender" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Brand</Link></li>
            <li><Link href="/layanan" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Layanan</Link></li>
            <li><Link href="/kontak" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors">Kontak</Link></li>
            <li className="px-3 pt-2"><Link href="/kontak" onClick={() => setOpen(false)} className="btn-brand block text-center">Booking</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
