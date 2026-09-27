import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, TrendingDown, TrendingUp } from 'lucide-react';

// Données fictives de démonstration : encaissements mensuels (millions FCFA).
const MONTHS = ['Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep'];
const REGIONS = {
  Bamako: [42, 45, 51, 44, 47, 53, 55, 58, 54, 61, 63, 68],
  Sikasso: [18, 17, 22, 19, 21, 24, 23, 27, 29, 26, 30, 33],
  Ségou: [12, 14, 13, 15, 14, 16, 18, 17, 19, 21, 20, 23],
} as const;
type Region = keyof typeof REGIONS | 'Toutes';
const REGION_LIST: Region[] = ['Toutes', 'Bamako', 'Sikasso', 'Ségou'];

const fmt = (n: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n);

export function DemoDashboard() {
  const [region, setRegion] = useState<Region>('Toutes');
  const [period, setPeriod] = useState<6 | 12>(12);
  const [hover, setHover] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshedAt, setRefreshedAt] = useState<string | null>(null);

  const series = useMemo(() => {
    const full =
      region === 'Toutes'
        ? MONTHS.map((_, i) => REGIONS.Bamako[i] + REGIONS.Sikasso[i] + REGIONS.Ségou[i])
        : [...REGIONS[region]];
    return full.slice(-period).map((v, i) => ({ month: MONTHS.slice(-period)[i], value: v }));
  }, [region, period]);

  const total = series.reduce((s, d) => s + d.value, 0);
  const max = Math.max(...series.map((d) => d.value));
  const active = hover ?? series.length - 1;
  const prevIndex = Math.max(active - 1, 0);
  const change = active === 0 ? 0 : ((series[active].value - series[prevIndex].value) / series[prevIndex].value) * 100;

  const refresh = () => {
    setRefreshing(true);
    window.setTimeout(() => {
      setRefreshing(false);
      setRefreshedAt(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    }, 900);
  };

  return (
    <div className="relative rounded-[28px] bg-forest p-5 text-cream shadow-lift sm:p-7">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 rounded-[28px] opacity-50" />
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-forest-mist">
              Tableau de bord · démo
            </span>
            <span className="text-[17px] font-semibold">Encaissements mensuels</span>
          </div>
          <button
            type="button"
            onClick={refresh}
            className="flex h-10 items-center gap-2 rounded-full bg-gold px-4 text-[13px] font-semibold text-forest transition hover:bg-gold-light"
          >
            <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} aria-hidden="true" />
            {refreshing ? 'Actualisation…' : 'Actualiser'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par région">
          {REGION_LIST.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={region === r}
              onClick={() => setRegion(r)}
              className={`h-9 rounded-full px-3.5 text-[13px] font-semibold transition ${
                region === r ? 'bg-cream text-forest' : 'bg-forest-mid text-forest-mist hover:text-cream'
              }`}
            >
              {r}
            </button>
          ))}
          <div className="ml-auto flex rounded-full bg-forest-mid p-1" role="group" aria-label="Période">
            {([6, 12] as const).map((p) => (
              <button
                key={p}
                type="button"
                aria-pressed={period === p}
                onClick={() => setPeriod(p)}
                className={`h-7 rounded-full px-3 text-[12px] font-semibold transition ${
                  period === p ? 'bg-cream text-forest' : 'text-forest-mist hover:text-cream'
                }`}
              >
                {p} mois
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-forest-mid p-4">
            <div className="text-xs text-forest-mist">Total sur {period} mois</div>
            <div className="mt-1 font-display text-[28px] font-semibold leading-none">
              {fmt(total)} <span className="font-sans text-sm font-medium text-forest-mist">M FCFA</span>
            </div>
          </div>
          <div className="rounded-2xl bg-forest-mid p-4">
            <div className="text-xs text-forest-mist">{series[active].month} · vs mois précédent</div>
            <div className="mt-1 flex items-center gap-2 font-display text-[28px] font-semibold leading-none">
              {change >= 0 ? (
                <TrendingUp size={22} className="text-gold" aria-hidden="true" />
              ) : (
                <TrendingDown size={22} className="text-clay-light" aria-hidden="true" />
              )}
              {change >= 0 ? '+' : ''}
              {change.toFixed(1).replace('.', ',')} %
            </div>
          </div>
        </div>

        <div
          className="relative flex h-[190px] items-end gap-1.5 border-b border-white/15 sm:gap-2"
          onMouseLeave={() => setHover(null)}
          role="img"
          aria-label={`Graphique des encaissements, ${region}, ${period} derniers mois`}
        >
          {series.map((d, i) => {
            const isActive = i === active;
            return (
              <div
                key={d.month}
                className="group relative flex h-full flex-1 cursor-pointer items-end"
                onMouseEnter={() => setHover(i)}
              >
                {isActive && (
                  <div className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-cream px-2.5 py-1.5 text-[12px] font-semibold text-forest shadow-card">
                    {d.month} · {fmt(d.value)} M
                  </div>
                )}
                <motion.div
                  className={`w-full rounded-t-md ${isActive ? 'bg-gold' : 'bg-forest-soft group-hover:bg-forest-mist'}`}
                  initial={false}
                  animate={{ height: `${(d.value / max) * 74}%`, opacity: refreshing ? 0.4 : 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18, delay: i * 0.02 }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between gap-1 font-mono text-[10.5px] text-forest-mist">
          {series.map((d) => (
            <span key={d.month} className="flex-1 text-center">
              {period === 12 ? d.month.slice(0, 1) : d.month}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pb-14 font-mono text-[11px] text-forest-mist sm:pb-10">
          <span>Données fictives · séance 5 du parcours 01</span>
          <span aria-live="polite">{refreshedAt ? `Actualisé à ${refreshedAt}` : 'Source : Power Query'}</span>
        </div>
      </div>
    </div>
  );
}
