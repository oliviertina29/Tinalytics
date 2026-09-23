import { SITE } from '../config';

const COURSES = [
  {
    num: '01',
    title: "Automatiser ses rapports : d'Excel à Power BI",
    text: 'Pour ceux qui passent leurs journées sur Excel. Vous repartez avec un tableau de bord qui se met à jour tout seul.',
    points: ['Excel solide et tableaux croisés', 'Power Query : fin du copier-coller', 'Power BI et DAX essentiel'],
    badge: SITE.nextCohortDate ? `Cohorte le ${SITE.nextCohortDate}` : 'Inscriptions ouvertes',
    featured: true,
  },
  {
    num: '02',
    title: 'Kobo + Power BI pour le suivi-évaluation',
    text: 'Pour les équipes S&E des ONG et projets : de la collecte terrain au rapport bailleur, sans ressaisie.',
    points: ['Formulaires Kobo bien conçus', 'Nettoyage et indicateurs automatiques', 'Tableaux de bord pour les bailleurs'],
    badge: 'Bientôt',
  },
  {
    num: '03',
    title: "Python pour l'analyse, jusqu'au machine learning",
    text: 'Pour évoluer vers les métiers de la data, avec des projets inspirés de cas réels en télécoms, finance et agriculture.',
    points: ['Pandas, SQL et visualisation', 'Modèles prédictifs et explicabilité', 'Mettre un modèle entre les mains des équipes'],
    badge: 'Bientôt',
  },
];

export function Courses() {
  return (
    <section
      id="formations"
      className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 py-20 md:px-12 lg:px-24 lg:pb-[110px] lg:pt-[120px]"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
        <div className="flex flex-col gap-4">
          <div className="eyebrow">Les parcours</div>
          <h2 className="h2 m-0 max-w-[700px]">Trois parcours, une vraie progression.</h2>
        </div>
        <p className="m-0 max-w-[460px] text-lg leading-relaxed text-body">
          On commence par ce qui vous fait gagner du temps dès lundi, puis on monte en compétence jusqu'à
          l'analyse avancée.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {COURSES.map((c) => (
          <article
            key={c.num}
            className={`flex flex-col gap-5 rounded-3xl bg-paper p-8 lg:p-9 ${
              c.featured ? 'border-[1.5px] border-ink' : 'border border-line'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`font-display text-[44px] font-semibold ${c.featured ? 'text-clay' : 'text-forest'}`}>
                {c.num}
              </span>
              <span
                className={`rounded-full px-3.5 py-[7px] text-[13px] font-semibold ${
                  c.featured ? 'bg-clay text-white' : 'bg-sand text-[#3F3B34]'
                }`}
              >
                {c.badge}
              </span>
            </div>
            <h3 className="m-0 font-display text-[28px] font-semibold leading-tight">{c.title}</h3>
            <p className="m-0 leading-relaxed text-body">{c.text}</p>
            <ul className="m-0 mt-auto flex list-none flex-col gap-2.5 border-t border-line p-0 pt-4 text-[15px]">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
