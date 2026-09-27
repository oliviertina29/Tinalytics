import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { FAQ } from '../data/courses';
import { whatsappMessageUrl, mailtoUrl } from '../config';
import { Accordion } from './ui/Accordion';
import { Reveal } from './ui/Reveal';

export function FaqSection({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  const ask = whatsappMessageUrl("Bonjour Olivier, j'ai une question sur les formations Tinalytics : ") ?? mailtoUrl('Question');
  return (
    <section id="faq" className="container-site pb-24 lg:pb-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow">Questions fréquentes</div>
          <h2 className="h2 m-0">Avant de vous inscrire</h2>
          <p className="m-0 text-lg leading-relaxed text-body">
            Vous ne trouvez pas votre réponse ? Écrivez-nous, nous répondons en général dans la journée.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={ask} target="_blank" rel="noopener noreferrer" className="btn-dark w-fit">
              <MessageCircle size={18} aria-hidden="true" />
              Poser une question
            </a>
            <Link to="/test-de-niveau" className="btn-outline w-fit">
              Test de niveau
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion
            defaultOpen={0}
            items={items.map((f) => ({
              title: f.q,
              content: <p className="m-0 text-[17px] leading-relaxed text-body">{f.a}</p>,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
