import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SITE, formatFcfa } from '../config';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const INCLUDED = [
  '6 séances de 3 h en direct',
  'Replays illimités',
  'Jeux de données et modèles',
  'Groupe de cohorte WhatsApp',
  'Retour personnalisé sur votre projet',
  'Attestation de fin de parcours',
];

export function PricingSection() {
  return (
    <section id="tarifs" className="container-site flex flex-col gap-14 pb-24 lg:pb-32">
      <SectionHeading
        align="center"
        eyebrow="Tarifs · Parcours 01"
        title={
          <>
            Un investissement qui se rembourse en <em className="font-normal text-clay">heures gagnées</em>.
          </>
        }
        intro="Paiement par mobile money, en une ou deux fois. Facture possible au nom de votre structure."
      />

      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        <Reveal>
          <Plan
            name="Tarif de lancement"
            price={SITE.launchPrice}
            note="Réservé aux 10 premiers inscrits de la première cohorte."
            cta="Je profite du lancement"
            to="/inscription?formule=lancement"
            features={INCLUDED.slice(0, 4)}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Plan
            name="Individuel"
            price={SITE.individualPrice}
            note="Tout le parcours, avec paiement possible en deux fois."
            cta="Réserver ma place"
            to="/inscription?formule=individuel"
            features={INCLUDED}
            highlight
          />
        </Reveal>
        <Reveal delay={0.16}>
          <Plan
            name="Entreprises & ONG"
            priceLabel="Sur devis"
            note="Plusieurs agents inscrits, ou une session privée sur vos propres données."
            cta="Demander un devis"
            to="/entreprises#devis"
            features={['Facture au nom de la structure', 'Session privée possible', 'Cas pratiques sur vos données', 'Suivi après la formation']}
          />
        </Reveal>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-[15px] text-body">
        <span>Paiement accepté :</span>
        {['Orange Money', 'Wave', 'Moov Money', 'Virement'].map((p) => (
          <span key={p} className="rounded-full border border-[#D8CDB9] bg-paper px-4 py-2 font-semibold text-ink">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

type PlanProps = {
  name: string;
  price?: number | null;
  priceLabel?: string;
  note: string;
  cta: string;
  to: string;
  features: string[];
  highlight?: boolean;
};

function Plan({ name, price, priceLabel, note, cta, to, features, highlight = false }: PlanProps) {
  const label = priceLabel ?? (price == null ? 'Sur demande' : null);
  return (
    <div
      className={`relative flex h-full flex-col gap-7 overflow-hidden rounded-[28px] p-8 md:p-10 ${
        highlight ? 'bg-ink text-cream shadow-lift lg:-my-4 lg:py-14' : 'border border-line bg-paper'
      }`}
    >
      {highlight && <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />}
      <div className="relative flex items-center justify-between gap-3">
        <span className="text-lg font-bold">{name}</span>
        {highlight && (
          <span className="rounded-full bg-clay px-3 py-1.5 text-xs font-semibold text-white">Le plus choisi</span>
        )}
      </div>
      <div className="relative flex flex-col gap-3">
        <span className="font-display text-[48px] font-semibold leading-none tracking-tight">
          {label ?? (
            <>
              {formatFcfa(price as number)}{' '}
              <span className={`font-sans text-lg font-medium ${highlight ? 'text-[#C9C2B4]' : 'text-muted'}`}>FCFA</span>
            </>
          )}
        </span>
        <span className={`text-[15px] leading-relaxed ${highlight ? 'text-[#D5CEC0]' : 'text-body'}`}>{note}</span>
      </div>
      <ul className={`relative m-0 flex list-none flex-col gap-3 border-t p-0 pt-6 ${highlight ? 'border-white/15' : 'border-line'}`}>
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px]">
            <Check size={18} className={`mt-0.5 flex-none ${highlight ? 'text-gold' : 'text-clay'}`} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Link to={to} className={`relative mt-auto ${highlight ? 'btn-primary' : 'btn-outline'}`}>
        {cta}
      </Link>
    </div>
  );
}
