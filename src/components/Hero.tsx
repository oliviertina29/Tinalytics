import { SITE } from '../config';

const STATS = [
  { value: '6 samedis', label: 'par parcours' },
  { value: '3 h', label: 'en direct par séance' },
  { value: '20 places', label: 'maximum par cohorte' },
];

const BARS = [38, 52, 45, 63, 58, 74, 69, 88];

const FILTERS = [
  { label: 'Région', value: 'Toutes' },
  { label: 'Période', value: '12 mois' },
  { label: 'Source', value: 'Power Query' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-5 pb-20 pt-14 md:px-12 lg:flex-row lg:px-24 lg:pb-24 lg:pt-[88px]"
    >
      <div className="flex flex-1 flex-col gap-7">
        <div className="eyebrow">Formations data · en français · en direct</div>
        <h1 className="m-0 font-display text-5xl font-semibold leading-[1.02] tracking-[-2px] md:text-[72px]">
          Arrêtez de refaire vos rapports à la main.
        </h1>
        <p className="m-0 max-w-[580px] text-lg leading-relaxed text-body md:text-xl">
          Tinalytics forme les professionnels d'Afrique de l'Ouest à Excel, Power BI et Python, avec des
          cas concrets de chez nous : microfinance, télécoms, ONG, agriculture. En direct le samedi,
          depuis n'importe quelle ville.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-1">
          <a href="#inscription" className="btn-primary">
            Réserver ma place
          </a>
          <a href="#inscription" className="btn-outline">
            Masterclass gratuite
          </a>
        </div>
        <div className="mt-2 flex flex-wrap gap-8 border-t border-line pt-5">
          {STATS.map((s) => (
            <div key={s.value} className="flex flex-col gap-0.5">
              <span className="font-display text-[26px] font-semibold">{s.value}</span>
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[520px] w-full max-w-[560px] flex-none sm:h-[560px]">
        <div className="absolute right-0 top-0 flex h-[440px] w-full flex-col gap-[22px] rounded-3xl bg-forest p-6 sm:w-[520px] sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15px] font-semibold text-cream">Encaissements mensuels</span>
            <span className="rounded-full bg-gold px-2.5 py-1.5 font-mono text-[11px] text-forest">
              ACTUALISÉ AUTOMATIQUEMENT
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {FILTERS.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5 rounded-xl bg-forest-mid p-3.5">
                <span className="text-xs text-[#B9C9BF]">{f.label}</span>
                <span className="text-[15px] font-semibold text-cream">{f.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-3 border-b border-[#45665A] px-1">
            {BARS.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-md ${i === BARS.length - 1 ? 'bg-gold' : 'bg-forest-soft'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="font-mono text-[11px] text-[#B9C9BF]">Tableau de bord réalisé en séance 5</div>
        </div>

        <div className="absolute bottom-0 left-0 flex w-[330px] max-w-full items-center gap-4 rounded-[20px] border border-line bg-paper p-[18px] shadow-[0_18px_40px_rgba(27,26,23,0.12)]">
          <img src={SITE.photo} alt="Olivier Tina" className="h-16 w-16 rounded-full object-cover" />
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-[1px] text-muted">Votre formateur</span>
            <span className="text-[17px] font-bold">Olivier Tina</span>
            <span className="text-sm text-body">Data Analyst · Orange Money</span>
          </div>
        </div>
      </div>
    </section>
  );
}
