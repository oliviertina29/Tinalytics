import { Fragment } from 'react';

const AUDIENCES = [
  'Banques & microfinance',
  'Télécoms & fintech',
  'ONG & projets',
  'Administrations',
  'Étudiants en reconversion',
];

export function Audience() {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-9 md:px-12 lg:flex-row lg:items-center lg:gap-12 lg:px-24">
        <span className="flex-none font-mono text-[13px] uppercase tracking-[1.5px] text-muted">Conçu pour</span>
        <div className="flex flex-wrap gap-x-10 gap-y-3 font-display text-lg font-semibold md:text-[22px]">
          {AUDIENCES.map((a, i) => (
            <Fragment key={a}>
              {i > 0 && (
                <span className="text-[#C9BCA5]" aria-hidden="true">
                  ·
                </span>
              )}
              <span>{a}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
