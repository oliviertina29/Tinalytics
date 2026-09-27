import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { whatsappMessageUrl } from '../config';

export function Layout() {
  const location = useLocation();
  const reduce = useReducedMotion();

  // Remonte en haut à chaque changement de page, ou va à l'ancre demandée.
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <Navbar />
      <motion.main
        id="contenu"
        key={location.pathname}
        className="flex-1"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-clay"
      style={{ scaleX }}
    />
  );
}

function FloatingWhatsApp() {
  const href = whatsappMessageUrl("Bonjour Olivier, j'aimerais avoir des informations sur les formations Tinalytics.");
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-[#1F7A4D] pl-4 pr-4 text-white no-underline shadow-lift transition-all hover:bg-[#186540] md:bottom-8 md:right-8 md:pr-6"
    >
      <span className="relative flex">
        <MessageCircle size={24} aria-hidden="true" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse-dot rounded-full bg-gold" />
      </span>
      <span className="hidden text-[15px] font-semibold md:inline">Une question ?</span>
    </a>
  );
}
