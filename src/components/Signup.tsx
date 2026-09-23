import { SITE, mailtoUrl, whatsappUrl } from '../config';

export function Signup() {
  const title = SITE.nextCohortDate
    ? `La prochaine cohorte démarre le ${SITE.nextCohortDate}.`
    : 'La prochaine cohorte se prépare. Réservez votre place.';

  return (
    <section id="inscription" className="mx-auto max-w-[1440px] px-5 pb-20 md:px-12 lg:px-24 lg:pb-[110px]">
      <div className="flex flex-col justify-between gap-10 rounded-[32px] bg-clay px-8 py-12 md:px-20 md:py-[72px] lg:flex-row lg:items-center lg:gap-14">
        <div className="flex max-w-[720px] flex-col gap-[18px]">
          <h2 className="m-0 font-display text-4xl font-semibold leading-[1.05] tracking-[-1.2px] text-white md:text-[54px]">
            {title}
          </h2>
          <p className="m-0 text-lg leading-relaxed text-white md:text-[19px]">
            20 places maximum, pour garder de vrais échanges avec chaque participant.
          </p>
        </div>
        <div className="flex flex-none flex-col gap-3.5">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-[60px] bg-ink px-[34px] text-white hover:bg-forest"
            >
              Réserver sur WhatsApp
            </a>
          )}
          <a
            href={mailtoUrl('Inscription – prochaine cohorte Tinalytics')}
            className={
              whatsappUrl
                ? 'btn h-[60px] border-[1.5px] border-white px-[34px] text-white hover:bg-white hover:text-clay'
                : 'btn h-[60px] bg-ink px-[34px] text-white hover:bg-forest'
            }
          >
            {whatsappUrl ? 'Écrire un e-mail' : 'Réserver par e-mail'}
          </a>
        </div>
      </div>
    </section>
  );
}
