import { useState, type FormEvent } from 'react';
import { Building2, CheckCircle2, Laptop, Mail, MapPin, MessageCircle, UsersRound } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { mailtoWithBody, whatsappMessageUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

const FORMATS = [
  {
    icon: <UsersRound size={24} />,
    title: 'Inscrire vos agents',
    text: 'Vos collaborateurs rejoignent une cohorte ouverte. Une facture unique au nom de la structure, une attestation par participant.',
  },
  {
    icon: <Laptop size={24} />,
    title: 'Session privée en ligne',
    text: 'Une cohorte réservée à votre équipe, aux horaires qui vous conviennent, avec des exercices construits sur vos propres fichiers.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Session sur site',
    text: 'Pour les équipes qui préfèrent le présentiel, selon la ville et la durée. Contactez-nous pour étudier la faisabilité.',
  },
];

const STEPS = [
  { t: 'Échange de cadrage', d: '30 minutes pour comprendre vos rapports, vos outils et vos objectifs.' },
  { t: 'Proposition sur mesure', d: 'Programme adapté, calendrier et devis sous quelques jours.' },
  { t: 'Formation sur vos données', d: 'Des cas pratiques tirés de vos fichiers, anonymisés si besoin.' },
  { t: 'Suivi après la formation', d: 'Un point de suivi pour lever les blocages une fois de retour au travail.' },
];

const THEMES = ['Excel & Power Query', 'Power BI & DAX', 'Kobo & suivi-évaluation', 'Python & analyse', 'Machine learning', 'Sur mesure'];

export function BusinessPage() {
  usePageMeta('Entreprises & ONG', 'Formations data sur mesure pour les banques, microfinances, télécoms, ONG et administrations.');

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Entreprises & ONG' }]}
        eyebrow="Entreprises · ONG · Administrations"
        title={
          <>
            Faites monter <em className="font-normal text-clay">toute votre équipe</em> en compétence.
          </>
        }
        intro="Des formations data sur vos propres fichiers, pour que vos équipes produisent des rapports fiables, plus vite, et consacrent leur temps à l'analyse."
      >
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a href="#devis" className="btn-primary">
            Demander un devis
          </a>
          <a href="#formats" className="btn-outline">
            Voir les formats
          </a>
        </div>
      </PageHero>

      <section id="formats" className="container-site flex flex-col gap-14 py-24 lg:py-28">
        <SectionHeading eyebrow="Formats" title="Trois façons de travailler ensemble." />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="card flex flex-col gap-6 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-clay" aria-hidden="true">
                {f.icon}
              </span>
              <h3 className="h3 m-0">{f.title}</h3>
              <p className="m-0 leading-relaxed text-body">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative flex flex-col gap-14 py-24 lg:py-28">
          <SectionHeading dark eyebrow="Démarche" title="Du premier échange au suivi." />
          <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.08} className="relative flex flex-col gap-4 rounded-[24px] bg-forest-mid p-7">
                <span className="font-display text-6xl font-semibold leading-none text-gold/90">{i + 1}</span>
                <h3 className="m-0 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="m-0 leading-relaxed text-forest-mist">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="devis" className="container-site py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <div className="eyebrow">Devis</div>
            <h2 className="h2 m-0">Parlons de votre équipe.</h2>
            <p className="m-0 text-lg leading-relaxed text-body">
              Décrivez votre besoin en quelques lignes. Vous recevez une proposition adaptée, avec programme, calendrier
              et tarif.
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {['Devis et facture au nom de la structure', 'Attestation pour chaque participant', 'Cas pratiques sur vos données', 'Paiement par virement ou mobile money'].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 size={20} className="flex-none text-clay" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function QuoteForm() {
  const [f, setF] = useState({ structure: '', contact: '', email: '', telephone: '', effectif: '5 à 10', theme: 'Power BI & DAX', format: 'Session privée en ligne', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  const set = (k: keyof typeof f, v: string) => {
    setF((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: '' }));
    setReady(false);
  };

  const body = [
    'Bonjour, nous souhaitons recevoir une proposition de formation Tinalytics.',
    '',
    `Structure : ${f.structure}`,
    `Contact : ${f.contact}`,
    `E-mail : ${f.email}`,
    `Téléphone : ${f.telephone}`,
    `Nombre de participants : ${f.effectif}`,
    `Thème : ${f.theme}`,
    `Format souhaité : ${f.format}`,
    f.message ? `\nBesoin : ${f.message}` : '',
  ].join('\n');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!f.structure.trim()) errs.structure = 'Indiquez le nom de la structure.';
    if (!f.contact.trim()) errs.contact = 'Indiquez votre nom.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) errs.email = 'Adresse e-mail invalide.';
    setErrors(errs);
    setReady(Object.keys(errs).length === 0);
  };

  const wa = whatsappMessageUrl(body);
  const mail = mailtoWithBody(`Demande de devis – ${f.structure}`, body);

  const input = (k: keyof typeof f, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="flex flex-col">
      <label htmlFor={`q-${k}`} className="label">
        {label}
      </label>
      <input id={`q-${k}`} className="field" value={f[k]} onChange={(e) => set(k, e.target.value)} aria-invalid={!!errors[k]} {...props} />
      {errors[k] && (
        <span role="alert" className="mt-2 text-sm font-semibold text-clay">
          {errors[k]}
        </span>
      )}
    </div>
  );

  const select = (k: keyof typeof f, label: string, options: string[]) => (
    <div className="flex flex-col">
      <label htmlFor={`q-${k}`} className="label">
        {label}
      </label>
      <select id={`q-${k}`} className="field" value={f[k]} onChange={(e) => set(k, e.target.value)}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5 rounded-[28px] border border-line bg-paper p-7 shadow-card md:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {input('structure', 'Structure', { autoComplete: 'organization' })}
        {input('contact', 'Votre nom', { autoComplete: 'name' })}
        {input('email', 'E-mail professionnel', { type: 'email', autoComplete: 'email' })}
        {input('telephone', 'Téléphone (facultatif)', { type: 'tel', autoComplete: 'tel' })}
        {select('effectif', 'Participants', ['1 à 4', '5 à 10', '11 à 20', 'Plus de 20'])}
        {select('theme', 'Thème', THEMES)}
      </div>
      {select('format', 'Format', FORMATS.map((x) => x.title))}
      <div className="flex flex-col">
        <label htmlFor="q-message" className="label">
          Votre besoin (facultatif)
        </label>
        <textarea id="q-message" rows={4} className="field h-auto py-4" value={f.message} onChange={(e) => set('message', e.target.value)} placeholder="Ex. : nos 8 chargés de reporting consolident chaque mois les données de 12 agences…" />
      </div>

      {!ready ? (
        <button type="submit" className="btn-primary w-full">
          <Building2 size={18} aria-hidden="true" /> Préparer ma demande
        </button>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm font-semibold text-forest" role="status">
            Votre demande est prête. Choisissez comment l'envoyer :
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn flex-1 bg-[#1F7A4D] text-white hover:bg-[#186540]">
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp
              </a>
            )}
            <a href={mail} className="btn-dark flex-1">
              <Mail size={18} aria-hidden="true" /> E-mail
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
