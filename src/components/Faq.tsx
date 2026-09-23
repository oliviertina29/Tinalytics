const QUESTIONS = [
  {
    q: "Je débute sur Excel, c'est pour moi ?",
    a: 'Oui, si vous savez déjà saisir des données et faire une formule simple. La première séance remet tout le monde au même niveau.',
  },
  {
    q: 'Et si je rate une séance ?',
    a: 'Le replay et les exercices sont disponibles, et vos questions trouvent réponse dans le groupe de cohorte.',
  },
  {
    q: 'De quel matériel ai-je besoin ?',
    a: "Un ordinateur Windows avec Excel et une connexion correcte. Power BI Desktop est gratuit, on l'installe ensemble.",
  },
  {
    q: 'Mon employeur peut-il payer ?',
    a: 'Oui. Nous établissons une facture au nom de votre structure et une attestation de formation.',
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pb-20 md:px-12 lg:flex-row lg:gap-20 lg:px-24 lg:pb-[120px]"
    >
      <div className="flex flex-none flex-col gap-4 lg:w-[360px]">
        <div className="eyebrow">Questions fréquentes</div>
        <h2 className="m-0 font-display text-4xl font-semibold leading-[1.1] tracking-[-1px] md:text-[44px]">
          Avant de vous inscrire
        </h2>
      </div>
      <dl className="m-0 grid flex-1 grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {QUESTIONS.map(({ q, a }) => (
          <div key={q} className="flex flex-col gap-2.5">
            <dt className="text-[19px] font-bold">{q}</dt>
            <dd className="m-0 leading-relaxed text-body">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
