import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { COURSES } from '../data/courses';
import { SITE, formatFcfa, mailtoWithBody, whatsappMessageUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

type Form = {
  parcours: string;
  formule: 'lancement' | 'individuel' | 'entreprise';
  secteur: string;
  niveau: string;
  objectif: string;
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  structure: string;
  financement: 'moi' | 'employeur';
};

const EMPTY: Form = {
  parcours: 'excel-power-bi',
  formule: 'individuel',
  secteur: '',
  niveau: '',
  objectif: '',
  nom: '',
  email: '',
  telephone: '',
  ville: '',
  structure: '',
  financement: 'moi',
};

const STORAGE_KEY = 'tinalytics-inscription';
const STEPS = ['Parcours', 'Profil', 'Coordonnées', 'Confirmation'];
const SECTEURS = ['Banque / microfinance', 'Télécoms / fintech', 'ONG / projet', 'Administration publique', 'Entreprise privée', 'Étudiant / en recherche d’emploi', 'Autre'];
const NIVEAUX = [
  { v: 'Débutant', d: 'Je saisis des données et fais des formules simples' },
  { v: 'Intermédiaire', d: 'J’utilise RECHERCHEV et les tableaux croisés' },
  { v: 'Avancé', d: 'Je connais Power Query ou Power BI' },
];
const FORMULES = [
  { v: 'lancement', label: 'Tarif de lancement', price: SITE.launchPrice, note: '10 premiers inscrits' },
  { v: 'individuel', label: 'Individuel', price: SITE.individualPrice, note: 'Paiement en 1 ou 2 fois' },
  { v: 'entreprise', label: 'Entreprise / ONG', price: null, note: 'Facture à la structure' },
] as const;

function loadDraft(): Form {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

export function SignupPage() {
  usePageMeta('Inscription', 'Réservez votre place dans la prochaine cohorte Tinalytics en deux minutes.');
  const [params] = useSearchParams();
  const [form, setForm] = useState<Form>(() => {
    const draft = loadDraft();
    const p = params.get('parcours');
    const f = params.get('formule');
    return {
      ...draft,
      ...(p && COURSES.some((c) => c.slug === p) ? { parcours: p } : {}),
      ...(f === 'lancement' || f === 'individuel' || f === 'entreprise' ? { formule: f } : {}),
    };
  });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      /* stockage indisponible : on continue sans brouillon */
    }
  }, [form]);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const course = COURSES.find((c) => c.slug === form.parcours) ?? COURSES[0];
  const formule = FORMULES.find((f) => f.v === form.formule)!;

  const validate = (s: number) => {
    const e: typeof errors = {};
    if (s === 1) {
      if (!form.secteur) e.secteur = 'Choisissez votre secteur.';
      if (!form.niveau) e.niveau = 'Indiquez votre niveau.';
    }
    if (s === 2) {
      if (form.nom.trim().length < 2) e.nom = 'Indiquez votre nom complet.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Adresse e-mail invalide.';
      if (form.telephone.replace(/\D/g, '').length < 8) e.telephone = 'Numéro WhatsApp invalide (8 chiffres minimum).';
      if (!form.ville.trim()) e.ville = 'Indiquez votre ville et votre pays.';
      if (form.financement === 'employeur' && !form.structure.trim()) e.structure = 'Indiquez le nom de votre structure.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = (e?: FormEvent) => {
    e?.preventDefault();
    if (!validate(step)) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const message = useMemo(
    () =>
      [
        'Bonjour Olivier, je souhaite m’inscrire à une formation Tinalytics.',
        '',
        `Parcours : ${course.num} · ${course.title}`,
        `Formule : ${formule.label}`,
        `Secteur : ${form.secteur}`,
        `Niveau Excel : ${form.niveau}`,
        form.objectif.trim() ? `Objectif : ${form.objectif.trim()}` : null,
        '',
        `Nom : ${form.nom.trim()}`,
        `E-mail : ${form.email.trim()}`,
        `WhatsApp : ${form.telephone.trim()}`,
        `Ville : ${form.ville.trim()}`,
        form.structure.trim() ? `Structure : ${form.structure.trim()}` : null,
        `Financement : ${form.financement === 'moi' ? 'personnel' : 'par mon employeur'}`,
      ]
        .filter((l) => l !== null)
        .join('\n'),
    [form, course, formule],
  );

  const waUrl = whatsappMessageUrl(message);
  const mailUrl = mailtoWithBody(`Inscription – ${course.shortTitle} – ${form.nom.trim()}`, message);

  const onSend = () => {
    setSent(true);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* rien */
    }
  };

  if (sent) {
    return (
      <section className="container-site flex min-h-[70vh] items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex max-w-[640px] flex-col items-center gap-6 text-center"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-forest text-gold">
            <CheckCircle2 size={40} aria-hidden="true" />
          </span>
          <h1 className="h2 m-0">Merci {form.nom.split(' ')[0]} !</h1>
          <p className="lead m-0">
            Votre demande est prête dans WhatsApp ou votre messagerie : pensez à <strong>appuyer sur « Envoyer »</strong>.
            Olivier vous répond en général dans la journée avec les modalités de paiement.
          </p>
          <ol className="m-0 flex w-full list-none flex-col gap-3 rounded-3xl border border-line bg-paper p-7 text-left">
            {['Vous envoyez le message', 'Nous confirmons votre place et le paiement', 'Vous recevez le lien Zoom et rejoignez le groupe de cohorte'].map((t, i) => (
              <li key={t} className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sand font-mono text-sm">{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setSent(false)} className="btn-outline">
              Renvoyer le message
            </button>
            <Link to="/" className="btn-dark">
              Retour à l’accueil
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="container-site grid grid-cols-1 gap-12 py-12 lg:grid-cols-[1fr_380px] lg:gap-16 lg:py-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="eyebrow">Inscription</div>
          <h1 className="h2 m-0">Réservez votre place en deux minutes.</h1>
        </div>

        <ol className="m-0 grid list-none grid-cols-4 gap-2 p-0" aria-label="Étapes">
          {STEPS.map((s, i) => (
            <li key={s} className="flex flex-col gap-2.5" aria-current={i === step ? 'step' : undefined}>
              <div className="h-1.5 overflow-hidden rounded-full bg-sand">
                <motion.div
                  className="h-full bg-clay"
                  initial={false}
                  animate={{ width: i < step ? '100%' : i === step ? '50%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className={`flex items-center gap-1.5 text-[13px] font-semibold ${i <= step ? 'text-ink' : 'text-muted'}`}>
                {i < step && <Check size={14} className="text-clay" aria-hidden="true" />}
                <span className="hidden sm:inline">{s}</span>
                <span className="sm:hidden">{i + 1}</span>
              </span>
            </li>
          ))}
        </ol>

        <form onSubmit={next} noValidate className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-8"
            >
              {step === 0 && (
                <>
                  <Fieldset legend="Quel parcours vous intéresse ?">
                    <div className="grid grid-cols-1 gap-3">
                      {COURSES.map((c) => (
                        <RadioCard
                          key={c.slug}
                          name="parcours"
                          checked={form.parcours === c.slug}
                          onChange={() => set('parcours', c.slug)}
                          title={`${c.num} · ${c.title}`}
                          desc={`${c.duration} · ${c.level}${c.status === 'soon' ? ' · liste d’attente' : ''}`}
                        />
                      ))}
                    </div>
                  </Fieldset>
                  <Fieldset legend="Formule">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {FORMULES.map((f) => (
                        <RadioCard
                          key={f.v}
                          name="formule"
                          checked={form.formule === f.v}
                          onChange={() => set('formule', f.v)}
                          title={f.label}
                          desc={`${f.price != null ? `${formatFcfa(f.price)} FCFA` : f.v === 'entreprise' ? 'Sur devis' : 'Tarif communiqué'} · ${f.note}`}
                        />
                      ))}
                    </div>
                  </Fieldset>
                </>
              )}

              {step === 1 && (
                <>
                  <Field label="Votre secteur" error={errors.secteur} id="secteur">
                    <select
                      id="secteur"
                      className="field appearance-none"
                      value={form.secteur}
                      onChange={(e) => set('secteur', e.target.value)}
                      aria-invalid={!!errors.secteur}
                    >
                      <option value="">Choisir…</option>
                      {SECTEURS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Fieldset legend="Votre niveau sur Excel" error={errors.niveau}>
                    <div className="grid grid-cols-1 gap-3">
                      {NIVEAUX.map((n) => (
                        <RadioCard
                          key={n.v}
                          name="niveau"
                          checked={form.niveau === n.v}
                          onChange={() => set('niveau', n.v)}
                          title={n.v}
                          desc={n.d}
                        />
                      ))}
                    </div>
                    <Link to="/test-de-niveau" className="mt-1 text-sm font-semibold text-clay">
                      Pas sûr ? Faites le test de niveau →
                    </Link>
                  </Fieldset>
                  <Field label="Ce que vous voulez accomplir (facultatif)" id="objectif">
                    <textarea
                      id="objectif"
                      rows={4}
                      className="field h-auto py-4"
                      placeholder="Ex. : automatiser le rapport mensuel des encaissements de mon agence"
                      value={form.objectif}
                      onChange={(e) => set('objectif', e.target.value)}
                      maxLength={500}
                    />
                  </Field>
                </>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Nom complet" error={errors.nom} id="nom" className="sm:col-span-2">
                    <input id="nom" className="field" autoComplete="name" value={form.nom} onChange={(e) => set('nom', e.target.value)} aria-invalid={!!errors.nom} />
                  </Field>
                  <Field label="E-mail" error={errors.email} id="email">
                    <input id="email" type="email" className="field" autoComplete="email" inputMode="email" value={form.email} onChange={(e) => set('email', e.target.value)} aria-invalid={!!errors.email} />
                  </Field>
                  <Field label="Numéro WhatsApp" error={errors.telephone} id="telephone">
                    <input id="telephone" type="tel" className="field" autoComplete="tel" inputMode="tel" placeholder="+223 …" value={form.telephone} onChange={(e) => set('telephone', e.target.value)} aria-invalid={!!errors.telephone} />
                  </Field>
                  <Field label="Ville et pays" error={errors.ville} id="ville" className="sm:col-span-2">
                    <input id="ville" className="field" autoComplete="address-level2" placeholder="Ex. : Bamako, Mali" value={form.ville} onChange={(e) => set('ville', e.target.value)} aria-invalid={!!errors.ville} />
                  </Field>
                  <Fieldset legend="Qui finance la formation ?" className="sm:col-span-2">
                    <div className="grid grid-cols-2 gap-3">
                      <RadioCard name="financement" checked={form.financement === 'moi'} onChange={() => set('financement', 'moi')} title="Moi-même" desc="Paiement mobile money" />
                      <RadioCard name="financement" checked={form.financement === 'employeur'} onChange={() => set('financement', 'employeur')} title="Mon employeur" desc="Facture à la structure" />
                    </div>
                  </Fieldset>
                  <Field label={`Structure${form.financement === 'employeur' ? '' : ' (facultatif)'}`} error={errors.structure} id="structure" className="sm:col-span-2">
                    <input id="structure" className="field" autoComplete="organization" value={form.structure} onChange={(e) => set('structure', e.target.value)} aria-invalid={!!errors.structure} />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <div className="rounded-3xl border border-line bg-paper p-7">
                    <h2 className="m-0 mb-5 font-display text-2xl font-semibold">Vérifiez votre demande</h2>
                    <dl className="m-0 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {[
                        ['Parcours', `${course.num} · ${course.shortTitle}`],
                        ['Formule', formule.label],
                        ['Secteur', form.secteur],
                        ['Niveau', form.niveau],
                        ['Nom', form.nom],
                        ['E-mail', form.email],
                        ['WhatsApp', form.telephone],
                        ['Ville', form.ville],
                      ].map(([k, v]) => (
                        <div key={k} className="flex flex-col gap-0.5">
                          <dt className="font-mono text-xs uppercase tracking-[1.5px] text-muted">{k}</dt>
                          <dd className="m-0 break-words font-semibold">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <p className="m-0 text-body">
                    Choisissez comment envoyer votre demande. Le message est déjà rédigé, il ne vous reste qu’à
                    appuyer sur « Envoyer ».
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {waUrl && (
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={onSend} className="btn flex-1 bg-[#1F7A4D] text-white hover:bg-[#186540]">
                        <MessageCircle size={19} aria-hidden="true" /> Envoyer sur WhatsApp
                      </a>
                    )}
                    <a href={mailUrl} onClick={onSend} className="btn-dark flex-1">
                      <Mail size={19} aria-hidden="true" /> Envoyer par e-mail
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
            {step > 0 ? (
              <button type="button" onClick={back} className="btn-outline h-12 px-5">
                <ArrowLeft size={18} aria-hidden="true" /> Retour
              </button>
            ) : (
              <span className="text-sm text-muted">Vos réponses sont gardées sur cet appareil.</span>
            )}
            {step < STEPS.length - 1 && (
              <button type="submit" className="btn-primary h-12 px-6">
                Continuer <ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
          </div>
        </form>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex flex-col gap-6 rounded-[28px] bg-ink p-7 text-cream">
          <span className="font-mono text-xs uppercase tracking-[1.5px] text-[#8F887B]">Votre sélection</span>
          <div className="flex flex-col gap-2">
            <span className="font-display text-5xl font-semibold text-gold">{course.num}</span>
            <span className="font-display text-2xl font-semibold leading-tight">{course.title}</span>
            <span className="text-sm text-[#D5CEC0]">{course.duration}</span>
          </div>
          <div className="flex items-center justify-between border-t border-white/15 pt-5">
            <span className="text-[#D5CEC0]">{formule.label}</span>
            <span className="font-display text-2xl font-semibold">
              {formule.price != null ? `${formatFcfa(formule.price)} FCFA` : formule.v === 'entreprise' ? 'Sur devis' : 'Sur demande'}
            </span>
          </div>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-[#D5CEC0]">
            {['Séances en direct + replays', 'Groupe de cohorte WhatsApp', 'Attestation de fin de parcours'].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Check size={16} className="text-gold" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}

function Fieldset({ legend, error, children, className = '' }: { legend: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <fieldset className={`m-0 flex flex-col gap-3 border-0 p-0 ${className}`}>
      <legend className="label mb-3 p-0 text-base">{legend}</legend>
      {children}
      {error && (
        <span role="alert" className="text-sm font-semibold text-clay">
          {error}
        </span>
      )}
    </fieldset>
  );
}

function Field({ label, error, id, children, className = '' }: { label: string; error?: string; id: string; children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="mt-2 text-sm font-semibold text-clay">
          {error}
        </span>
      )}
    </div>
  );
}

function RadioCard({ name, checked, onChange, title, desc }: { name: string; checked: boolean; onChange: () => void; title: string; desc: string }) {
  return (
    <label
      className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
        checked ? 'border-ink bg-paper shadow-card ring-1 ring-ink' : 'border-line bg-paper/60 hover:border-ink/40'
      }`}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 transition peer-focus-visible:ring-4 peer-focus-visible:ring-gold/40 ${
          checked ? 'border-clay bg-clay' : 'border-line'
        }`}
        aria-hidden="true"
      >
        {checked && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
      <span className="flex flex-col gap-1">
        <span className="font-semibold leading-snug">{title}</span>
        <span className="text-sm text-muted">{desc}</span>
      </span>
    </label>
  );
}
