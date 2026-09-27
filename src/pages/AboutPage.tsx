import { Link } from 'react-router-dom';
import { ArrowRight, Github, Languages, Linkedin, MapPin, Target, Users } from 'lucide-react';
import { SITE } from '../config';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FinalCta } from '../components/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';

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

const CREDENTIALS = [
  { title: 'MSc Data Engineering', detail: 'Université Mohammed VI Polytechnique (UM6P), 2022–2024' },
  { title: 'Licence Mathématiques appliquées', detail: 'Université Hassan 1er, Settat, 2018–2021' },
  { title: 'Ambassadeur AMLD Africa', detail: 'Applied Machine Learning Days, 2025–2026' },
];

const SKILLS = ['Excel', 'Power Query', 'Power BI', 'DAX', 'Tableau', 'Python', 'SQL', 'Spark', 'scikit-learn', 'SHAP', 'Streamlit', 'MLflow', 'QGIS', 'Neo4j', 'KoboToolbox'];

const PRINCIPLES = [
  { icon: <Target size={22} />, t: 'Concret d’abord', d: 'Chaque notion part d’un cas réel : microfinance, télécoms, ONG, agriculture.' },
  { icon: <Languages size={22} />, t: 'En français', d: 'Des explications claires, sans jargon inutile, dans la langue de travail de nos participants.' },
  { icon: <Users size={22} />, t: 'Petits groupes', d: '20 personnes au maximum, pour que chacun reçoive des réponses à ses questions.' },
  { icon: <MapPin size={22} />, t: 'D’ici, pour ici', d: 'Des exemples et des contraintes qui ressemblent au quotidien en Afrique de l’Ouest.' },
];

export function AboutPage() {
  usePageMeta('À propos', "Olivier Tina, data analyst et fondateur de Tinalytics : parcours, expériences et approche pédagogique.");

  return (
    <>
      <PageHero
        crumbs={[{ label: 'À propos' }]}
        eyebrow="À propos"
        title={
          <>
            Former avec l’expérience du <em className="font-normal text-clay">terrain</em>.
          </>
        }
        intro="Tinalytics est né d'un constat simple : trop de professionnels talentueux perdent des journées entières sur des tâches que les bons outils automatisent en quelques minutes."
      />

      <section className="container-site grid grid-cols-1 gap-14 py-24 lg:grid-cols-[440px_1fr] lg:gap-24 lg:py-28">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <div className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[32px] bg-clay" aria-hidden="true" />
            <img
              src={SITE.photo}
              alt="Portrait d'Olivier Tina"
              className="relative aspect-[4/5] w-full rounded-[32px] object-cover object-[center_30%]"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline h-12 flex-1 px-4 text-[15px]">
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="btn-outline h-12 flex-1 px-4 text-[15px]">
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16">
          <Reveal className="flex flex-col gap-6">
            <div className="eyebrow">Le fondateur</div>
            <h2 className="m-0 font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-[72px]">Olivier Tina</h2>
            <p className="m-0 text-xl font-semibold text-[#3F3B34]">
              Data Analyst chez Orange Money Sierra Leone · Fondateur de Tinalytics
            </p>
            <p className="m-0 text-lg leading-[1.75] text-body">
              Malien, formé en mathématiques appliquées puis en data engineering au Maroc, Olivier construit des outils
              data pour des équipes bien réelles : prédiction du comportement client dans les télécoms, analyse d'essais
              agricoles au Sahel, lecture d'images satellites. Avant de travailler dans la data, il enseignait déjà les
              mathématiques à des étudiants internationaux.
            </p>
            <p className="m-0 text-lg leading-[1.75] text-body">
              Avec Tinalytics, il transmet ce qui sert vraiment au travail, en français, avec des exemples qui
              ressemblent à votre quotidien.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="card flex flex-col gap-2 p-6">
                <span className="font-display text-xl font-semibold leading-tight">{c.title}</span>
                <span className="text-sm text-muted">{c.detail}</span>
              </div>
            ))}
          </Reveal>

          <div className="flex flex-col">
            <Reveal className="flex flex-col justify-between gap-2 border-b-[1.5px] border-ink pb-5 md:flex-row md:items-end">
              <h3 className="m-0 font-display text-[32px] font-semibold">Parcours professionnel</h3>
              <span className="font-mono text-xs text-muted">TÉLÉCOMS · FINTECH · AGRONOMIE · GÉOSPATIAL</span>
            </Reveal>
            <ol className="m-0 list-none p-0">
              {EXPERIENCE.map((e, i) => (
                <Reveal as="li" key={e.org} delay={i * 0.05} className="group relative grid grid-cols-1 gap-2 border-b border-line py-7 md:grid-cols-[170px_1fr] md:gap-8">
                  <span className="font-mono text-sm text-clay">{e.period}</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-xl font-bold">{e.org}</span>
                      <span className="text-[15px] text-muted">{e.role}</span>
                    </div>
                    <p className="m-0 leading-relaxed text-body">{e.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="flex flex-col gap-5">
            <h3 className="m-0 font-display text-2xl font-semibold">Boîte à outils</h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative flex flex-col gap-14 py-24 lg:py-28">
          <SectionHeading dark eyebrow="Nos principes" title="Ce qui guide chaque séance." />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="flex flex-col gap-5 rounded-[24px] bg-forest-mid p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest" aria-hidden="true">
                  {p.icon}
                </span>
                <h3 className="m-0 font-display text-2xl font-semibold">{p.t}</h3>
                <p className="m-0 leading-relaxed text-forest-mist">{p.d}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/formations" className="btn-light w-fit">
            Voir les formations <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="h-24 lg:h-28" />
      <FinalCta />
    </>
  );
}
