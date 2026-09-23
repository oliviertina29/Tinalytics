import { SITE, mailtoUrl, whatsappUrl } from '../config';
import { Wordmark } from './Logo';

const linkClass = 'text-cream no-underline hover:text-clay-light';

export function Footer() {
  return (
    <footer className="bg-ink text-[#D5CEC0]">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-14 md:px-12 lg:flex-row lg:items-start lg:px-24">
        <div className="flex flex-col gap-2.5">
          <Wordmark light />
          <span className="text-[15px]">Formations data en français, pour l'Afrique de l'Ouest.</span>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-[15px]">
          <a href={mailtoUrl()} className={linkClass}>
            {SITE.email}
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              WhatsApp
            </a>
          )}
          <span>© {new Date().getFullYear()} Tinalytics</span>
        </div>
      </div>
    </footer>
  );
}
