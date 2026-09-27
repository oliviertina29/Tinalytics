import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COURSES } from '../../data/courses';
import { ProgramStepper } from '../ProgramStepper';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ProgramSection() {
  const course = COURSES[0];
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" />
      <div className="container-site relative flex flex-col gap-14 py-24 lg:py-32">
        <SectionHeading
          dark
          eyebrow="Parcours 01 · Programme"
          title={
            <>
              Six samedis pour ne plus <em className="font-normal text-gold">jamais</em> refaire un rapport à la main.
            </>
          }
          intro="Chaque séance part d'un cas concret, avec un jeu de données préparé pour l'occasion et des exercices à faire dans la semaine."
        />
        <Reveal>
          <ProgramStepper sessions={course.sessions} />
        </Reveal>
        <Reveal className="flex flex-wrap gap-3.5">
          <Link to="/inscription?parcours=excel-power-bi" className="btn-primary">
            Réserver ma place
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to={`/formations/${course.slug}`} className="btn-light">
            Tout savoir sur le parcours
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
