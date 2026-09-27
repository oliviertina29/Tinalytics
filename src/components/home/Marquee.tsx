const ITEMS = [
  'Banques & microfinance',
  'Excel',
  'Télécoms & fintech',
  'Power Query',
  'ONG & projets',
  'Power BI',
  'Administrations',
  'KoboToolbox',
  'Agriculture',
  'Python',
  'Étudiants en reconversion',
  'Machine learning',
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section aria-label="Pour qui, avec quels outils" className="overflow-hidden border-y border-line bg-sand py-6">
      <div className="mask-fade-x flex">
        <div className="flex flex-none animate-marquee items-center gap-10 pr-10">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span
                className={
                  i % 2 === 0
                    ? 'font-display text-[22px] font-semibold text-ink'
                    : 'font-mono text-sm uppercase tracking-[1.5px] text-muted'
                }
              >
                {item}
              </span>
              <span className="h-2 w-2 rotate-45 bg-clay/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
