import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Bell, CalendarDays, Check, Clock, MonitorPlay, Printer, Signal, Users } from 'lucide-react';
import { COURSES, getCourse } from '../data/courses';
import { SITE, formatFcfa } from '../config';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProgramStepper } from '../components/ProgramStepper';
import { CourseCard } from '../components/CourseCard';
import { FaqSection } from '../components/FaqSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFoundPage } from './NotFoundPage';

export function CoursePage() {
  const { slug } = useParams();
  const course = getCourse(slug);
  usePageMeta(course?.shortTitle ?? 'Parcours introuvable', course?.pitch);
  if (!course) return <NotFoundPage />;

  const open = course.status === 'open';
  const others = COURSES.filter((c) => c.slug !== course.slug);
  const price = open && SITE.individualPrice != null ? `${formatFcfa(SITE.individualPrice)} FCFA` : 'Sur demande';

  const facts = [
    { icon: <CalendarDays size={18} />, label: 'Démarrage', value: open ? SITE.nextCohortDate ?? 'Prochaine cohorte' : 'À venir' },
    { icon: <Clock size={18} />, label: 'Durée', value: course.duration },
    { icon: <Signal size={18} />, label: 'Niveau', value: course.level },
    { icon: <MonitorPlay size={18} />, label: 'Format', value: 'En direct sur Zoom' },
    { icon: <Users size={18} />, label: 'Groupe', value: '20 participants max.' },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Formations', to: '/formations' }, { label: course.shortTitle }]}
        eyebrow={`Parcours ${course.num} · ${course.domain}`}
        title={course.title}
        intro={course.tagline}
        aside={
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 rounded-[28px] bg-ink p-7 text-cream shadow-lift">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[1.5px] text-[#8F887B]">Tarif individuel</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${open ? 'bg-clay text-white' : 'bg-white/10'}`}
                >
                  {open ? 'Inscriptions ouvertes' : 'Bientôt'}
                </span>
              </div>
              <span className="font-display text-[40px] font-semibold leading-none">{price}</span>
              <dl className="m-0 flex flex-col gap-3.5 border-t border-white/15 pt-5">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-4 text-[15px]">
                    <dt className="flex items-center gap-2.5 text-[#D5CEC0]">
                      <span className="text-gold" aria-hidden="true">
                        {f.icon}
                      </span>
                      {f.label}
                    </dt>
                    <dd className="m-0 text-right font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link to={`/inscription?parcours=${course.slug}`} className="btn-primary w-full">
                {open ? (
                  <>
                    Réserver ma place <ArrowRight size={18} aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <Bell size={18} aria-hidden="true" /> Être prévenu du lancement
                  </>
                )}
              </Link>
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#D5CEC0] hover:text-white print:hidden"
              >
                <Printer size={16} aria-hidden="true" /> Imprimer ou enregistrer le programme en PDF
              </button>
            </div>
          </Reveal>
        }
      />

      <section className="container-site grid grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:gap-24 lg:py-28">
        <Reveal className="flex flex-col gap-7">
          <div className="eyebrow">À la fin du parcours</div>
          <h2 className="h2 m-0">Vous saurez…</h2>
          <ol className="m-0 flex list-none flex-col p-0">
            {course.outcomes.map((o, i) => (
              <li key={o} className="flex items-start gap-5 border-b border-line py-5 first:pt-0">
                <span className="font-display text-3xl font-semibold leading-none text-clay">{String(i + 1).padStart(2, '0')}</span>
                <span className="pt-1 text-lg font-medium leading-snug">{o}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal delay={0.08} className="card flex flex-col gap-5 p-8">
            <h3 className="m-0 font-display text-2xl font-semibold">Pour qui ?</h3>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {course.audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[16px] leading-snug">
                  <Check size={19} className="mt-0.5 flex-none text-clay" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="flex flex-col gap-5 rounded-3xl bg-sand p-8">
            <h3 className="m-0 font-display text-2xl font-semibold">Prérequis</h3>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {course.prerequisites.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[16px] leading-snug">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
            <Link to="/test-de-niveau" className="font-semibold text-clay">
              Pas sûr de votre niveau ? Faites le test →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative flex flex-col gap-14 py-24 lg:py-28">
          <SectionHeading
            dark
            eyebrow="Programme détaillé"
            title={`${course.sessions.length} séances, un projet concret.`}
            intro="Cliquez sur une séance pour voir son contenu et ce que vous produisez."
          />
          <Reveal>
            <ProgramStepper sessions={course.sessions} />
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {course.tools.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24 lg:h-32" />
      <FaqSection />

      <section className="container-site flex flex-col gap-10 pb-24 lg:pb-32">
        <SectionHeading align="left" eyebrow="Pour aller plus loin" title="Les autres parcours" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {others.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </>
  );
}
