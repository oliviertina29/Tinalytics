import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE, whatsappMessageUrl } from '../config';
import { Reveal } from './ui/Reveal';

export function FinalCta() {
  const title = SITE.nextCohortDate
    ? `La prochaine cohorte démarre le ${SITE.nextCohortDate}.`
    : 'La prochaine cohorte se prépare.';
  const wa = whatsappMessageUrl("Bonjour Olivier, je souhaite réserver ma place pour la prochaine cohorte Tinalytics.");

  return (
    <section className="container-site pb-24 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-clay px-8 py-14 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-gold/40 blur-[100px]" />
          <div
            className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 font-display text-[260px] font-semibold leading-none text-white/[0.08] lg:block"
            aria-hidden="true"
          >
            20
          </div>
          <div className="relative flex max-w-[760px] flex-col gap-6">
            <span className="flex w-fit items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[1.5px]">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-gold" aria-hidden="true" />
              Inscriptions ouvertes
            </span>
            <h2 className="m-0 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-[64px]">
              {title}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-white/90 md:text-xl">
              20 places maximum, pour garder de vrais échanges avec chaque participant. Réservez la vôtre en deux
              minutes.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link to="/inscription" className="btn bg-ink text-white hover:-translate-y-0.5 hover:bg-forest">
                Réserver ma place
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-light">
                  <MessageCircle size={18} aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
