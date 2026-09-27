import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COURSES } from '../../data/courses';
import { CourseCard } from '../CourseCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function CoursesSection() {
  const [first, ...rest] = COURSES;
  return (
    <section className="container-site flex flex-col gap-14 pb-24 lg:pb-32">
      <SectionHeading
        eyebrow="Les parcours"
        title={
          <>
            Trois parcours, une <em className="font-normal text-clay">vraie</em> progression.
          </>
        }
        intro="On commence par ce qui vous fait gagner du temps dès lundi, puis on monte en compétence jusqu'à l'analyse avancée."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="lg:row-span-2">
          <CourseCard course={first} featured />
        </Reveal>
        {rest.map((c, i) => (
          <Reveal key={c.slug} delay={0.1 * (i + 1)}>
            <CourseCard course={c} />
          </Reveal>
        ))}
      </div>
      <Reveal className="flex flex-col items-start justify-between gap-5 rounded-[28px] border border-dashed border-ink/25 p-7 sm:flex-row sm:items-center md:p-8">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold">Vous hésitez entre deux parcours ?</span>
          <span className="text-body">Six questions, deux minutes, une recommandation personnalisée.</span>
        </div>
        <Link to="/test-de-niveau" className="btn-dark flex-none">
          Faire le test de niveau
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
