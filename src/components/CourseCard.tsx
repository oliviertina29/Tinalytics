import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Signal } from 'lucide-react';
import type { Course } from '../data/courses';
import { SITE } from '../config';

export function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
  const open = course.status === 'open';
  const badge = open
    ? SITE.nextCohortDate
      ? `Cohorte le ${SITE.nextCohortDate}`
      : 'Inscriptions ouvertes'
    : 'Bientôt';

  return (
    <Link
      to={`/formations/${course.slug}`}
      className={`group relative flex h-full flex-col gap-6 overflow-hidden rounded-[28px] p-8 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:p-10 ${
        featured ? 'bg-ink text-cream' : 'border border-line bg-paper text-ink'
      }`}
    >
      {featured && <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-70" />}
      <div className="relative flex items-center justify-between gap-3">
        <span className={`font-display text-[56px] font-semibold leading-none ${featured ? 'text-gold' : 'text-clay'}`}>
          {course.num}
        </span>
        <span
          className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold ${
            open ? 'bg-clay text-white' : featured ? 'bg-white/10 text-cream' : 'bg-sand text-[#3F3B34]'
          }`}
        >
          {open && <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" aria-hidden="true" />}
          {badge}
        </span>
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className={`m-0 font-display font-semibold leading-[1.1] tracking-tight ${featured ? 'text-[34px] md:text-[40px]' : 'text-[28px]'}`}>
          {course.title}
        </h3>
        <p className={`m-0 leading-relaxed ${featured ? 'text-[17px] text-[#D5CEC0]' : 'text-body'}`}>{course.pitch}</p>
      </div>

      <div className={`relative flex flex-wrap gap-2 ${featured ? '' : ''}`}>
        {course.tools.map((t) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1.5 text-[13px] font-medium ${featured ? 'bg-white/10 text-cream' : 'bg-sand text-ink'}`}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className={`relative mt-auto flex items-center justify-between gap-4 border-t pt-5 text-sm ${
          featured ? 'border-white/15 text-[#D5CEC0]' : 'border-line text-muted'
        }`}
      >
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5">
            <Clock size={15} aria-hidden="true" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Signal size={15} aria-hidden="true" /> {course.level}
          </span>
        </span>
        <span
          className={`flex h-11 w-11 flex-none items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
            featured ? 'bg-gold text-forest' : 'bg-ink text-cream'
          }`}
          aria-hidden="true"
        >
          <ArrowUpRight size={20} />
        </span>
      </div>
    </Link>
  );
}
