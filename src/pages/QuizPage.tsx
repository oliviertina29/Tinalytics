import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { QUIZ, scoreQuiz } from '../data/quiz';
import { getCourse } from '../data/courses';
import { usePageMeta } from '../hooks/usePageMeta';

export function QuizPage() {
  usePageMeta('Test de niveau', 'Six questions pour savoir quel parcours Tinalytics vous correspond.');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const done = index >= QUIZ.length;
  const q = QUIZ[Math.min(index, QUIZ.length - 1)];

  const choose = (value: number) => {
    setAnswers((a) => ({ ...a, [q.id]: value }));
    window.setTimeout(() => setIndex((i) => i + 1), 220);
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
      <div className="container-site relative flex min-h-[78vh] flex-col items-center py-14 lg:py-20">
        <div className="flex w-full max-w-[760px] flex-col gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="eyebrow">Test de niveau · 2 minutes</div>
            {!done && (
              <div className="flex w-full max-w-[420px] items-center gap-4">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
                  <motion.div
                    className="h-full rounded-full bg-clay"
                    initial={false}
                    animate={{ width: `${(index / QUIZ.length) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-sm text-muted">
                  {index + 1}/{QUIZ.length}
                </span>
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                <h1 className="text-balance m-0 text-center font-display text-[32px] font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
                  {q.question}
                </h1>
                <div className="flex flex-col gap-3" role="radiogroup" aria-label={q.question}>
                  {q.options.map((o, i) => {
                    const selected = answers[q.id] === o.value;
                    return (
                      <button
                        key={o.label}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => choose(o.value)}
                        className={`group flex items-center gap-5 rounded-2xl border p-5 text-left text-[17px] font-medium transition md:p-6 ${
                          selected ? 'border-ink bg-ink text-cream' : 'border-line bg-paper hover:-translate-y-0.5 hover:border-ink hover:shadow-card'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl font-mono text-sm font-semibold ${
                            selected ? 'bg-gold text-forest' : 'bg-sand text-ink group-hover:bg-gold'
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        {o.label}
                      </button>
                    );
                  })}
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => setIndex((i) => i - 1)}
                    className="flex items-center gap-2 self-center text-sm font-semibold text-muted hover:text-ink"
                  >
                    <ArrowLeft size={16} aria-hidden="true" /> Question précédente
                  </button>
                )}
              </motion.div>
            ) : (
              <Result answers={answers} onRestart={restart} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Result({ answers, onRestart }: { answers: Record<string, number>; onRestart: () => void }) {
  const r = scoreQuiz(answers);
  const course = getCourse(r.slug)!;
  const pct = Math.round((r.score / r.max) * 100);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-forest p-8 text-cream md:p-12">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
          <div className="relative h-36 w-36 flex-none">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#D9A441"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 52}
                initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - pct / 100) }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-semibold">{r.level}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[1.5px] text-gold">
              <Sparkles size={14} aria-hidden="true" /> Notre recommandation
            </span>
            <h1 className="m-0 font-display text-3xl font-semibold leading-tight md:text-[40px]">{r.headline}</h1>
            <p className="m-0 text-lg leading-relaxed text-forest-mist">{r.message}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-[28px] border border-line bg-paper p-7 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-center gap-5">
          <span className="font-display text-5xl font-semibold text-clay">{course.num}</span>
          <div className="flex flex-col gap-1">
            <span className="font-display text-xl font-semibold leading-tight">{course.title}</span>
            <span className="text-sm text-muted">
              {course.duration} · {course.status === 'open' ? 'Inscriptions ouvertes' : 'Bientôt disponible'}
            </span>
          </div>
        </div>
        <div className="flex flex-none flex-wrap gap-3">
          <Link to={`/formations/${course.slug}`} className="btn-outline h-12 px-5">
            Programme
          </Link>
          <Link to={`/inscription?parcours=${course.slug}`} className="btn-primary h-12 px-5">
            {course.status === 'open' ? 'Réserver' : 'Être prévenu'} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <button type="button" onClick={onRestart} className="flex items-center gap-2 self-center text-sm font-semibold text-muted hover:text-ink">
        <RotateCcw size={15} aria-hidden="true" /> Refaire le test
      </button>
    </motion.div>
  );
}
