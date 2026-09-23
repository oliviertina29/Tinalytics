import { SITE, formatFcfa, mailtoUrl } from '../config';

const PAYMENTS = ['Orange Money', 'Wave', 'Moov Money'];

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 pb-20 md:px-12 lg:px-24 lg:pb-[120px]"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="eyebrow">Tarifs · Parcours 01</div>
        <h2 className="h2 m-0">Un investissement qui se rembourse en heures gagnées.</h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-[18px] rounded-3xl border border-line bg-paper p-[38px]">
          <span className="text-lg font-bold">Tarif de lancement</span>
          <Price amount={SITE.launchPrice} />
          <span className="text-[15px] leading-relaxed text-body">
            Réservé aux 10 premiers inscrits de la première cohorte.
          </span>
          <a href="#inscription" className="btn-outline mt-auto h-[52px]">
            Je profite du lancement
          </a>
        </div>

        <div className="flex flex-col gap-[18px] rounded-3xl bg-ink p-[38px] text-cream">
          <div className="flex items-center justify-between gap-3">
            <span className="text-lg font-bold">Individuel</span>
            <span className="rounded-full bg-clay px-3 py-1.5 text-xs font-semibold text-white">Le plus choisi</span>
          </div>
          <Price amount={SITE.individualPrice} dark />
          <span className="text-[15px] leading-relaxed text-[#D5CEC0]">
            Les 6 séances, replays, fichiers, groupe de cohorte et attestation. Paiement possible en deux fois.
          </span>
          <a href="#inscription" className="btn-primary mt-auto h-[52px]">
            Réserver ma place
          </a>
        </div>

        <div className="flex flex-col gap-[18px] rounded-3xl border border-line bg-paper p-[38px]">
          <span className="text-lg font-bold">Entreprises &amp; ONG</span>
          <span className="font-display text-[46px] font-semibold">Sur devis</span>
          <span className="text-[15px] leading-relaxed text-body">
            Facture au nom de la structure, inscription de plusieurs agents ou session privée adaptée à vos
            données.
          </span>
          <a href={mailtoUrl('Demande de devis – formation Tinalytics')} className="btn-outline mt-auto h-[52px]">
            Demander un devis
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3.5 text-[15px] text-body">
        <span>Paiement par mobile money :</span>
        {PAYMENTS.map((p) => (
          <span key={p} className="rounded-full border border-[#D8CDB9] px-3.5 py-[7px] font-semibold text-ink">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

function Price({ amount, dark = false }: { amount: number | null; dark?: boolean }) {
  if (amount === null) {
    return <span className="font-display text-[46px] font-semibold">Sur demande</span>;
  }
  return (
    <span className="font-display text-[46px] font-semibold">
      {formatFcfa(amount)}{' '}
      <span className={`font-sans text-xl font-medium ${dark ? 'text-[#C9C2B4]' : 'text-muted'}`}>FCFA</span>
    </span>
  );
}
