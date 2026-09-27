import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { SITE, mailtoUrl, whatsappUrl } from '../config';
import { COURSES } from '../data/courses';
import { LogoMark, Wordmark } from './Logo';

const linkClass = 'text-[#D5CEC0] no-underline transition-colors hover:text-white';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-[#D5CEC0]">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,#000_40%)]" />
      <div className="container-site relative">
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <h2 className="m-0 max-w-[760px] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-cream md:text-6xl">
            Vos données méritent mieux que le <em className="font-normal text-gold">copier-coller</em>.
          </h2>
          <Link to="/inscription" className="btn-primary flex-none">
            Rejoindre la prochaine cohorte
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline" aria-label="Tinalytics, accueil">
              <LogoMark />
              <Wordmark light />
            </Link>
            <p className="m-0 max-w-[320px] text-[15px] leading-relaxed">
              Formations data en français, en direct, pour les professionnels d'Afrique de l'Ouest.
            </p>
            <div className="flex gap-2.5">
              <SocialLink href={SITE.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href={SITE.github} label="GitHub">
                <Github size={18} />
              </SocialLink>
              {whatsappUrl && (
                <SocialLink href={whatsappUrl} label="WhatsApp">
                  <MessageCircle size={18} />
                </SocialLink>
              )}
              <SocialLink href={mailtoUrl()} label="E-mail">
                <Mail size={18} />
              </SocialLink>
            </div>
          </div>

          <FooterCol title="Formations">
            {COURSES.map((c) => (
              <Link key={c.slug} to={`/formations/${c.slug}`} className={linkClass}>
                {c.shortTitle}
              </Link>
            ))}
            <Link to="/test-de-niveau" className={linkClass}>
              Test de niveau
            </Link>
          </FooterCol>

          <FooterCol title="Tinalytics">
            <Link to="/a-propos" className={linkClass}>
              À propos
            </Link>
            <Link to="/entreprises" className={linkClass}>
              Entreprises &amp; ONG
            </Link>
            <Link to="/inscription" className={linkClass}>
              Inscription
            </Link>
            <Link to="/formations" className={linkClass}>
              Catalogue
            </Link>
          </FooterCol>

          <FooterCol title="Contact">
            <a href={mailtoUrl()} className={`${linkClass} break-all`}>
              {SITE.email}
            </a>
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {SITE.phoneDisplay}
              </a>
            )}
            <span>En ligne, depuis toute l'Afrique de l'Ouest</span>
          </FooterCol>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-7 text-sm sm:flex-row">
          <span>© {new Date().getFullYear()} Tinalytics. Tous droits réservés.</span>
          <span className="font-mono text-xs uppercase tracking-[1.5px] text-[#8F887B]">
            Excel · Power BI · Python · Machine learning
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 text-[15px]">
      <span className="mb-1 font-mono text-xs uppercase tracking-[1.5px] text-[#8F887B]">{title}</span>
      {children}
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-white hover:bg-white hover:text-ink"
    >
      {children}
    </a>
  );
}
