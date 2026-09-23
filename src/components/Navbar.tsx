import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoMark, Wordmark } from './Logo';

const LINKS = [
  { href: '#formations', label: 'Formations' },
  { href: '#programme', label: 'Programme' },
  { href: '#formateur', label: 'Le formateur' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-12 lg:px-24 lg:py-7">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <LogoMark />
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-9 font-medium lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[#3F3B34] no-underline hover:text-clay">
              {l.label}
            </a>
          ))}
          <a
            href="#inscription"
            className="inline-flex h-[46px] items-center rounded-full bg-ink px-[22px] font-semibold text-cream no-underline hover:bg-forest"
          >
            S'inscrire
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-6 pt-3 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium text-ink no-underline"
            >
              {l.label}
            </a>
          ))}
          <a href="#inscription" onClick={() => setOpen(false)} className="btn-primary mt-3">
            S'inscrire
          </a>
        </nav>
      )}
    </header>
  );
}
