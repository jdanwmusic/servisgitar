"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Beranda" },
    { href: "/layanan", label: "Layanan" },
    { href: "/kategori/elektrik", label: "Panduan" },
    { href: "/brand/fender", label: "Brand" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/40 backdrop-blur-md bg-brand-bg/80">
      <nav
        className="container-shell flex h-16 items-center justify-between"
        aria-label="Global"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-brand-text-primary hover:text-brand-accent transition-colors"
        >
          SERVISEGITAR
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/kontak"
          className="hidden md:inline-block btn-brand text-xs py-2 px-3"
        >
          Booking
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-brand-border/40 bg-brand-bg/95 backdrop-blur-md">
          <ul className="container-shell flex flex-col gap-1 py-3 text-sm font-medium text-brand-text">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-brand-surface hover:text-brand-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Link
                href="/kontak"
                onClick={() => setOpen(false)}
                className="btn-brand block text-center"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
