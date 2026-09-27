import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '../../config';
import { DemoDashboard } from './DemoDashboard';

const STATS = [
  { value: '6', unit: 'samedis', label: 'par parcours' },
  { value: '3', unit: 'h', label: 'en direct par séance' },
  { value: '20', unit: 'places', label: 'maximum par cohorte' },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,#000_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-gold/20 blur-[120px]" />

      <div className="container-site relative grid grid-cols-1 items-center gap-16 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pb-28 lg:pt-16">
        <div className="flex flex-col gap-8">
          <motion.div {...fade(0)}>
            <Link
              to="/test-de-niveau"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink no-underline shadow-card transition hover:border-ink"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-forest px-2.5 py-1 text-xs font-semibold text-cream">
                <Sparkles size={13} aria-hidden="true" /> Nouveau
              </span>
              Quel parcours pour vous ? Test en 2 minutes
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.h1 className="h1 text-balance m-0" {...fade(0.08)}>
            Arrêtez de refaire vos rapports <em className="font-normal text-clay">à la main</em>.
          </motion.h1>

          <motion.p className="lead m-0 max-w-[590px]" {...fade(0.16)}>
            Tinalytics forme les professionnels d'Afrique de l'Ouest à Excel, Power BI et Python, avec des cas
            concrets de chez nous : microfinance, télécoms, ONG, agriculture. En direct le samedi, depuis
            n'importe quelle ville.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3.5" {...fade(0.24)}>
            <Link to="/inscription" className="btn-primary">
              Réserver ma place
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/formations/excel-power-bi" className="btn-outline">
              Voir le programme
            </Link>
          </motion.div>

          <motion.dl className="m-0 mt-2 grid max-w-[560px] grid-cols-3 gap-6 border-t border-line pt-7" {...fade(0.32)}>
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-sm text-muted">{s.label}</dt>
                <dd className="order-1 m-0 font-display text-[34px] font-semibold leading-none tracking-tight">
                  {s.value}
                  <span className="ml-1 text-lg font-normal text-muted">{s.unit}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative pb-16 lg:pb-12"
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <DemoDashboard />
          <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-[20px] border border-line bg-paper p-3.5 pr-6 shadow-lift sm:-left-10">
            <img src={SITE.photo} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[11px] uppercase tracking-[1px] text-muted">Votre formateur</span>
              <span className="text-base font-bold">Olivier Tina</span>
              <span className="text-[13px] text-body">Data Analyst · Orange Money</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
