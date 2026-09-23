import { SITE } from '../config';

const CREDENTIALS = [
  { title: 'MSc Data Engineering', detail: 'Université Mohammed VI Polytechnique (UM6P), 2022–2024' },
  { title: 'Licence Mathématiques appliquées', detail: 'Université Hassan 1er, Settat, 2018–2021' },
  { title: 'Ambassadeur AMLD Africa', detail: 'Applied Machine Learning Days, 2025–2026' },
  { title: '4 langues', detail: 'Français, anglais, bambara, bomu' },
];

const EXPERIENCE = [
  {
    period: "2026 — aujourd'hui",
    org: 'Orange Money Sierra Leone',
    role: 'Data Analyst · Freetown',
    text: 'Analyse de données, modèles prédictifs et automatisation des rapports opérationnels.',
  },
  {
    period: '2025 — 2026',
    org: 'Orange Mali',
    role: 'Data Science · Bamako',
    text: 'Chaîne de machine learning complète pour anticiper le recours aux SIM concurrentes, explicabilité SHAP, application Streamlit suivie avec MLflow pour les équipes marketing.',
  },
  {
    period: '2025 — 2026',
    org: 'ICRISAT',
    role: 'Research Scholar · Bamako',
    text: "Évaluation de la durabilité d'essais agronomiques de long terme (N'Tarla, Sadoré) et application mobile de détection des maladies des plantes par vision par ordinateur.",
  },
  {
    period: '2024',
    org: 'UM6P · Analytics Lab',
    role: 'Data Science · Rabat',
    text: 'Délimitation automatique de parcelles agricoles sur images satellites (U-Net, LinkNet, FPN) et analyse sous QGIS.',
  },
  {
    period: '2023',
    org: 'AI Movement',
    role: 'Data Science · Rabat',
    text: "Graphes de connaissances sous Neo4j et modèles de prédiction de liens pour l'étiquetage de données de maintenance.",
  },
];

const SKILLS = ['Excel', 'Power BI', 'Tableau', 'Python', 'SQL', 'Spark', 'Machine learning', 'Suivi-évaluation'];

export function Trainer() {
  return (
    <section
      id="formateur"
      className="mx-auto flex max-w-[1440px] flex-col gap-[72px] px-5 py-20 md:px-12 lg:px-24 lg:pb-[120px] lg:pt-[130px]"
    >
      <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex w-full max-w-[440px] flex-none flex-col gap-5">
          <div className="relative aspect-[440/500] w-full">
            <div className="absolute left-6 top-6 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-[28px] bg-clay" />
            <img
              src={SITE.photo}
              alt="Portrait d'Olivier Tina"
              className="absolute left-0 top-0 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-[28px] object-cover object-[center_30%]"
            />
          </div>
          <div className="flex flex-wrap gap-2.5 pt-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-ink px-[18px] text-[15px] font-semibold text-ink no-underline hover:bg-ink hover:text-cream"
            >
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-ink px-[18px] text-[15px] font-semibold text-ink no-underline hover:bg-ink hover:text-cream"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-[26px]">
          <div className="eyebrow">Votre formateur</div>
          <h2 className="m-0 font-display text-5xl font-semibold leading-[1.02] tracking-[-1.6px] md:text-[64px]">
            Olivier Tina
          </h2>
          <div className="text-lg font-semibold text-[#3F3B34] md:text-xl">
            Data Analyst chez Orange Money Sierra Leone · Fondateur de Tinalytics
          </div>
          <p className="m-0 text-lg leading-[1.7] text-body">
            Malien, formé en mathématiques appliquées puis en data engineering au Maroc, Olivier construit
            des outils data pour des équipes bien réelles : prédiction du comportement client dans les
            télécoms, analyse d'essais agricoles au Sahel, lecture d'images satellites. Avant de travailler
            dans la data, il enseignait déjà les mathématiques à des étudiants internationaux.
          </p>
          <p className="m-0 text-lg leading-[1.7] text-body">
            Avec Tinalytics, il transmet ce qui sert vraiment au travail, en français, avec des exemples qui
            ressemblent à votre quotidien.
          </p>
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="flex flex-col gap-1.5 rounded-[18px] border border-line bg-paper p-[22px]">
                <span className="font-display text-[22px] font-semibold">{c.title}</span>
                <span className="text-[15px] text-muted">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t-[1.5px] border-ink">
        <div className="flex flex-col justify-between gap-2 pb-2.5 pt-[26px] md:flex-row md:items-center">
          <h3 className="m-0 font-display text-[32px] font-semibold">Parcours professionnel</h3>
          <span className="font-mono text-[13px] text-muted">TÉLÉCOMS · FINTECH · AGRONOMIE · GÉOSPATIAL</span>
        </div>
        {EXPERIENCE.map((e) => (
          <div
            key={e.org}
            className="grid grid-cols-1 items-baseline gap-2 border-b border-line py-[26px] md:grid-cols-[190px_280px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[190px_340px_minmax(0,1fr)]"
          >
            <span className="font-mono text-sm text-clay">{e.period}</span>
            <div className="flex flex-col gap-1">
              <span className="text-[19px] font-bold">{e.org}</span>
              <span className="text-[15px] text-muted">{e.role}</span>
            </div>
            <span className="leading-relaxed text-body">{e.text}</span>
          </div>
        ))}
        <div className="flex flex-wrap gap-2.5 pt-7">
          {SKILLS.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
