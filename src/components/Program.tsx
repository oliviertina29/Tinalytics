const SESSIONS = [
  {
    title: 'Excel solide',
    text: "Données structurées en tableaux, RECHERCHEX, SOMME.SI.ENS, fonctions texte et date. Cas : ventes d'un distributeur.",
  },
  {
    title: 'Tableaux croisés et graphiques',
    text: "Analyser vite, choisir le bon graphique, construire un premier tableau de bord. Cas : encaissements d'une microfinance.",
  },
  {
    title: 'Power Query',
    text: 'Importer, nettoyer et combiner automatiquement vos fichiers mensuels. Un clic, et le rapport est à jour.',
  },
  {
    title: 'Premiers pas dans Power BI',
    text: 'Importer, modéliser avec tables de faits et de dimensions, créer vos premières visualisations.',
  },
  {
    title: 'DAX et tableau de bord pro',
    text: "Mesures clés, comparaisons d'un mois à l'autre, filtres, mise en page claire pour la direction.",
  },
  {
    title: 'Projet final',
    text: 'Vous présentez votre tableau de bord, recevez un retour personnalisé et votre attestation.',
  },
];

export function Program() {
  return (
    <section id="programme" className="bg-forest text-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 py-20 md:px-12 lg:px-24 lg:py-[110px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="eyebrow text-gold">Parcours 01 · Programme</div>
            <h2 className="h2 m-0 max-w-[760px]">Six samedis pour ne plus jamais refaire un rapport à la main.</h2>
          </div>
          <p className="m-0 max-w-[420px] text-lg leading-relaxed text-forest-mist">
            Chaque séance part d'un cas concret, avec un jeu de données préparé pour l'occasion et des
            exercices à faire dans la semaine.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {SESSIONS.map((s, i) => {
            const last = i === SESSIONS.length - 1;
            return (
              <li
                key={s.title}
                className={`flex flex-col gap-3 rounded-[20px] p-[30px] ${last ? 'bg-gold text-ink' : 'bg-forest-mid'}`}
              >
                <span className={`font-mono text-[13px] ${last ? 'text-forest' : 'text-gold'}`}>SÉANCE {i + 1}</span>
                <h3 className="m-0 font-display text-2xl font-semibold">{s.title}</h3>
                <p className={`m-0 text-[15px] leading-relaxed ${last ? 'text-[#2A2822]' : 'text-forest-mist'}`}>
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
