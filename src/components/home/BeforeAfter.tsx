import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const BEFORE = [
  'Télécharger les fichiers de chaque agence, un par un',
  'Copier-coller dans le fichier maître et espérer ne rien oublier',
  'Réparer les formules cassées par une colonne en plus',
  'Refaire les graphiques à la main',
  'Envoyer le rapport en retard, sans le temps de l’analyser',
];

const AFTER = [
  'Déposer les nouveaux fichiers dans un dossier',
  'Cliquer sur « Actualiser » : Power Query fait le reste',
  'Des mesures DAX qui ne cassent pas',
  'Un tableau de bord interactif, toujours à jour',
  'Du temps pour comprendre les chiffres et conseiller la direction',
];

export function BeforeAfter() {
  const [mode, setMode] = useState<'avant' | 'apres'>('avant');
  const items = mode === 'avant' ? BEFORE : AFTER;

  return (
    <section className="container-site py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal className="flex flex-col gap-6">
          <div className="eyebrow">Le problème</div>
          <h2 className="h2 text-balance m-0">
            Le rapport mensuel ne devrait pas vous prendre <em className="font-normal text-clay">trois jours</em>.
          </h2>
          <p className="lead m-0 max-w-[520px]">
            Dans la plupart des structures, le reporting repose encore sur des manipulations manuelles, longues et
            fragiles. Nos formations remplacent ces gestes par des outils qui travaillent pour vous.
          </p>
          <div className="mt-2 inline-flex w-fit rounded-full border border-line bg-paper p-1.5" role="tablist" aria-label="Comparer">
            {(['avant', 'apres'] as const).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={`relative h-11 rounded-full px-6 text-[15px] font-semibold transition-colors ${
                  mode === m ? 'text-cream' : 'text-body hover:text-ink'
                }`}
              >
                {mode === m && (
                  <motion.span
                    layoutId="ba-pill"
                    className={`absolute inset-0 rounded-full ${m === 'avant' ? 'bg-ink' : 'bg-forest'}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{m === 'avant' ? 'Avant la formation' : 'Après la formation'}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={`relative overflow-hidden rounded-[28px] p-8 transition-colors duration-500 md:p-10 ${
              mode === 'avant' ? 'bg-paper ring-1 ring-line' : 'bg-forest text-cream'
            }`}
            role="tabpanel"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className={`font-mono text-xs uppercase tracking-[1.5px] ${mode === 'avant' ? 'text-muted' : 'text-gold'}`}>
                {mode === 'avant' ? 'Le lundi matin, aujourd’hui' : 'Le lundi matin, après Tinalytics'}
              </span>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs ${
                  mode === 'avant' ? 'bg-clay-tint text-clay-dark' : 'bg-gold text-forest'
                }`}
              >
                {mode === 'avant' ? 'Manuel' : 'Automatisé'}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.ol
                key={mode}
                className="m-0 flex list-none flex-col gap-5 p-0"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                {items.map((t, i) => (
                  <li key={t} className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full ${
                        mode === 'avant' ? 'bg-clay-tint text-clay' : 'bg-gold text-forest'
                      }`}
                      aria-hidden="true"
                    >
                      {mode === 'avant' ? <X size={16} strokeWidth={2.5} /> : <Check size={16} strokeWidth={2.5} />}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className={`font-mono text-[11px] ${mode === 'avant' ? 'text-muted' : 'text-forest-mist'}`}>
                        ÉTAPE {i + 1}
                      </span>
                      <span className="text-[17px] font-medium leading-snug">{t}</span>
                    </span>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
