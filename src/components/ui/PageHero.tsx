import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: { label: string; to?: string }[];
  children?: ReactNode;
  aside?: ReactNode;
};

/** En-tête des pages intérieures. */
export function PageHero({ eyebrow, title, intro, crumbs, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,#000,transparent_85%)]" />
      <div className="container-site relative flex flex-col gap-12 pb-20 pt-10 lg:flex-row lg:items-end lg:gap-20 lg:pb-24 lg:pt-14">
        <div className="flex flex-1 flex-col gap-7">
          {crumbs && (
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <Link to="/" className="text-muted no-underline hover:text-ink">
                Accueil
              </Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight size={14} aria-hidden="true" />
                  {c.to ? (
                    <Link to={c.to} className="text-muted no-underline hover:text-ink">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {c.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <Reveal className="flex flex-col gap-6">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="h1 text-balance m-0 max-w-[980px]">{title}</h1>
            {intro && <p className="lead m-0 max-w-[680px]">{intro}</p>}
          </Reveal>
          {children}
        </div>
        {aside && <div className="w-full flex-none lg:w-[400px]">{aside}</div>}
      </div>
    </section>
  );
}
