import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, FileCheck2 } from 'lucide-react';
import type { Session } from '../data/courses';

/** Programme séance par séance : liste à gauche, détail à droite. */
export function ProgramStepper({ sessions }: { sessions: Session[] }) {
  const [active, setActive] = useState(0);
  const s = sessions[active];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-10">
      <div className="flex flex-col gap-2" role="tablist" aria-label="Séances" aria-orientation="vertical">
        {sessions.map((sess, i) => {
          const isActive = i === active;
          return (
            <button
              key={sess.title}
              type="button"
              role="tab"
              id={`seance-tab-${i}`}
              aria-selected={isActive}
              aria-controls="seance-panel"
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-5 rounded-2xl px-5 py-4 text-left transition-colors ${
                isActive ? 'text-forest' : 'text-cream hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="seance-active"
                  className="absolute inset-0 rounded-2xl bg-cream"
                  transition={{ type: 'spring', stiffness: 350, damping: 34 }}
                />
              )}
              <span
                className={`relative font-mono text-[13px] ${isActive ? 'text-clay' : 'text-gold'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative flex-1 font-display text-xl font-semibold">{sess.title}</span>
            </button>
          );
        })}
      </div>

      <div
        id="seance-panel"
        role="tabpanel"
        aria-labelledby={`seance-tab-${active}`}
        className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-forest-mid p-8 md:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col gap-7"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[13px] uppercase tracking-[1.5px] text-gold">
                Séance {active + 1} / {sessions.length}
              </span>
              <span className="font-display text-[96px] font-semibold leading-[0.7] text-white/[0.07]" aria-hidden="true">
                {String(active + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="m-0 font-display text-[34px] font-semibold leading-tight">{s.title}</h3>
              <p className="m-0 text-lg text-forest-mist">{s.summary}</p>
            </div>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {s.topics.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15.5px]">
                  <CheckCircle2 size={18} className="mt-0.5 flex-none text-gold" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-start gap-4 rounded-2xl bg-forest p-5">
              <FileCheck2 size={22} className="mt-0.5 flex-none text-gold" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-forest-mist">
                  Vous repartez avec
                </span>
                <span className="font-medium">{s.deliverable}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
