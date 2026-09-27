import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { COURSES, type Course } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { PageHero } from '../components/ui/PageHero';
import { FinalCta } from '../components/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';

const LEVELS: (Course['level'] | 'Tous')[] = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];

export function CoursesPage() {
  usePageMeta('Formations', 'Trois parcours data en direct : Excel et Power BI, Kobo pour le suivi-évaluation, Python et machine learning.');
  const [level, setLevel] = useState<(typeof LEVELS)[number]>('Tous');
  const [onlyOpen, setOnlyOpen] = useState(false);

  const list = useMemo(
    () => COURSES.filter((c) => (level === 'Tous' || c.level === level) && (!onlyOpen || c.status === 'open')),
    [level, onlyOpen],
  );

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Formations' }]}
        eyebrow="Catalogue"
        title={
          <>
            Des formations pensées pour <em className="font-normal text-clay">votre</em> quotidien.
          </>
        }
        intro="Chaque parcours se déroule en direct, sur plusieurs samedis, avec des cas tirés des banques, des télécoms, des ONG et de l'agriculture en Afrique de l'Ouest."
      />

      <section className="container-site flex flex-col gap-10 py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par niveau">
            {LEVELS.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={level === l}
                onClick={() => setLevel(l)}
                className={`h-11 rounded-full px-5 text-[15px] font-semibold transition ${
                  level === l ? 'bg-ink text-cream' : 'border border-line bg-paper text-ink hover:border-ink'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <label className="flex cursor-pointer items-center gap-3 text-[15px] font-medium">
            <input
              type="checkbox"
              checked={onlyOpen}
              onChange={(e) => setOnlyOpen(e.target.checked)}
              className="h-5 w-5 accent-clay"
            />
            Inscriptions ouvertes uniquement
          </label>
        </div>

        <p className="m-0 text-sm text-muted" aria-live="polite">
          {list.length} parcours {list.length > 1 ? 'correspondent' : 'correspond'} à votre sélection
        </p>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <CourseCard course={c} featured={c.status === 'open'} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {list.length === 0 && (
          <div className="rounded-3xl border border-dashed border-line p-10 text-center text-body">
            Aucun parcours ne correspond à ces filtres.
          </div>
        )}
      </section>

      <section className="container-site pb-24">
        <div className="overflow-x-auto rounded-[28px] border border-line bg-paper">
          <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
            <caption className="px-8 pb-2 pt-8 text-left font-display text-2xl font-semibold">Comparer les parcours</caption>
            <thead>
              <tr className="border-b border-line text-muted">
                <th scope="col" className="px-8 py-4 font-mono text-xs font-medium uppercase tracking-[1.5px]"></th>
                {COURSES.map((c) => (
                  <th key={c.slug} scope="col" className="px-6 py-4 font-display text-lg font-semibold text-ink">
                    {c.num} · {c.shortTitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ['Niveau', (c: Course) => c.level],
                  ['Durée', (c: Course) => c.duration],
                  ['Domaine', (c: Course) => c.domain],
                  ['Outils', (c: Course) => c.tools.join(', ')],
                  ['Statut', (c: Course) => (c.status === 'open' ? 'Inscriptions ouvertes' : 'Bientôt')],
                ] as const
              ).map(([label, get]) => (
                <tr key={label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-8 py-4 font-mono text-xs font-medium uppercase tracking-[1.5px] text-muted">
                    {label}
                  </th>
                  {COURSES.map((c) => (
                    <td key={c.slug} className="px-6 py-4 align-top">
                      {get(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
