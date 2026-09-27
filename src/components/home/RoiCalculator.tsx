import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const WORK_WEEKS = 46;
const DAY_HOURS = 8;

function AnimatedNumber({ value }: { value: number }) {
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => new Intl.NumberFormat('fr-FR').format(Math.round(v)));
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.5, ease: 'easeOut' });
    return controls.stop;
  }, [mv, value]);
  return <motion.span>{text}</motion.span>;
}

export function RoiCalculator() {
  const [hours, setHours] = useState(6);
  const [share, setShare] = useState(60);
  const hoursId = useId();
  const shareId = useId();

  const savedYear = hours * WORK_WEEKS * (share / 100);
  const savedDays = savedYear / DAY_HOURS;

  return (
    <section className="container-site py-24 lg:py-32">
      <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-line bg-paper lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="flex flex-col gap-8 p-8 md:p-12 lg:p-14">
          <div className="flex flex-col gap-5">
            <div className="eyebrow">Calculateur</div>
            <h2 className="h2 text-balance m-0">Combien de temps pourriez-vous récupérer ?</h2>
            <p className="m-0 text-lg leading-relaxed text-body">
              Indiquez le temps que vous passez sur vos rapports et la part qui pourrait être automatisée. Le calcul
              se fait sur {WORK_WEEKS} semaines travaillées par an.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <label htmlFor={hoursId} className="font-semibold">
                Heures par semaine sur le reporting
              </label>
              <span className="font-display text-2xl font-semibold">{hours} h</span>
            </div>
            <input
              id={hoursId}
              type="range"
              min={1}
              max={30}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="h-2 w-full cursor-pointer accent-clay"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <label htmlFor={shareId} className="font-semibold">
                Part répétitive et automatisable
              </label>
              <span className="font-display text-2xl font-semibold">{share} %</span>
            </div>
            <input
              id={shareId}
              type="range"
              min={10}
              max={90}
              step={5}
              value={share}
              onChange={(e) => setShare(Number(e.target.value))}
              className="h-2 w-full cursor-pointer accent-clay"
            />
            <span className="text-sm text-muted">
              Copier-coller, consolidation de fichiers, mise à jour des graphiques…
            </span>
          </div>
        </Reveal>

        <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-clay p-8 text-white md:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-white/80">Votre estimation</span>
            <div className="font-display text-[88px] font-semibold leading-none tracking-tight md:text-[120px]" aria-live="polite">
              <AnimatedNumber value={savedYear} />
              <span className="ml-2 text-4xl font-normal">h</span>
            </div>
            <span className="text-xl">récupérées chaque année</span>
          </div>
          <div className="relative grid grid-cols-2 gap-4 border-t border-white/25 pt-6">
            <div>
              <div className="font-display text-4xl font-semibold">
                <AnimatedNumber value={savedDays} />
              </div>
              <div className="text-sm text-white/85">journées de travail</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold">
                <AnimatedNumber value={(hours * share) / 100} />
                <span className="text-xl"> h</span>
              </div>
              <div className="text-sm text-white/85">libérées chaque semaine</div>
            </div>
          </div>
          <Link to="/inscription" className="btn relative w-full bg-ink text-white hover:bg-forest sm:w-fit">
            Récupérer ce temps
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
