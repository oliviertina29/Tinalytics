import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../../config';
import { Reveal } from '../ui/Reveal';

const FACTS = [
  { k: 'Aujourd’hui', v: 'Data Analyst, Orange Money Sierra Leone' },
  { k: 'Formation', v: 'MSc Data Engineering, UM6P' },
  { k: 'Terrain', v: 'Télécoms, fintech, agronomie, géospatial' },
  { k: 'Langues', v: 'Français, anglais, bambara, bomu' },
];

export function TrainerTeaser() {
  return (
    <section className="container-site pb-24 lg:pb-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[32px] bg-clay" aria-hidden="true" />
          <img
            src={SITE.photo}
            alt="Portrait d'Olivier Tina, formateur Tinalytics"
            className="relative aspect-[4/5] w-full rounded-[32px] object-cover object-[center_30%]"
            loading="lazy"
          />
          <div className="absolute -right-3 top-8 rotate-3 rounded-2xl bg-gold px-4 py-3 font-mono text-xs uppercase tracking-[1px] text-forest shadow-card sm:-right-8">
            Ambassadeur AMLD Africa
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-7">
          <div className="eyebrow">Votre formateur</div>
          <h2 className="h2 m-0">
            Olivier Tina, <em className="font-normal text-clay">praticien</em> avant d'être formateur.
          </h2>
          <blockquote className="m-0 border-l-2 border-clay pl-6 font-display text-[22px] italic leading-snug text-ink md:text-2xl">
            « Je transmets ce qui sert vraiment au travail, en français, avec des exemples qui ressemblent à votre
            quotidien. »
          </blockquote>
          <p className="m-0 text-lg leading-relaxed text-body">
            Malien, formé en mathématiques appliquées puis en data engineering au Maroc, Olivier construit des
            outils data pour des équipes bien réelles : prédiction du comportement client dans les télécoms, analyse
            d'essais agricoles au Sahel, lecture d'images satellites.
          </p>
          <dl className="m-0 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.k} className="flex flex-col gap-1">
                <dt className="font-mono text-xs uppercase tracking-[1.5px] text-muted">{f.k}</dt>
                <dd className="m-0 font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
          <Link to="/a-propos" className="btn-outline w-fit">
            Découvrir son parcours
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
