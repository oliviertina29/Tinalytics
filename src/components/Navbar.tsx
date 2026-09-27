import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LogoMark, Wordmark } from './Logo';
import { SITE } from '../config';

const LINKS = [
  { to: '/formations', label: 'Formations' },
  { to: '/entreprises', label: 'Entreprises' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/test-de-niveau', label: 'Test de niveau' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-cream/90 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between lg:h-[88px]">
        <Link to="/" className="flex items-center gap-3 no-underline" aria-label="Tinalytics, accueil">
          <LogoMark />
          <Wordmark />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2.5 text-[15.5px] font-medium no-underline transition-colors ${
                  isActive ? 'bg-sand text-ink' : 'text-[#3F3B34] hover:bg-sand/60 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/inscription" className="btn-dark h-12 px-6 text-[15px]">
            S'inscrire
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Navigation mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[76px] flex flex-col overflow-y-auto bg-cream px-5 pb-8 pt-4 lg:hidden"
          >
            {[{ to: '/', label: 'Accueil' }, ...LINKS].map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-line py-5 font-display text-[28px] font-semibold no-underline ${
                      isActive ? 'text-clay' : 'text-ink'
                    }`
                  }
                >
                  {l.label}
                  <ArrowRight size={22} aria-hidden="true" />
                </NavLink>
              </motion.div>
            ))}
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Link to="/inscription" className="btn-primary">
                S'inscrire à une cohorte
              </Link>
              <a href={`mailto:${SITE.email}`} className="text-center text-sm text-muted">
                {SITE.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
