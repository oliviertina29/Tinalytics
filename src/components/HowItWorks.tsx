import { Award, MessageCircle, MonitorPlay, PlayCircle } from 'lucide-react';

const ITEMS = [
  { icon: MonitorPlay, title: 'En direct le samedi', text: 'Trois heures sur Zoom, avec questions en temps réel.' },
  { icon: PlayCircle, title: 'Replays et fichiers', text: 'Chaque séance enregistrée, avec les jeux de données et modèles.' },
  { icon: MessageCircle, title: 'Groupe de cohorte', text: 'Un groupe WhatsApp pour vos questions entre les séances.' },
  { icon: Award, title: 'Attestation + projet', text: 'Un tableau de bord à montrer et une attestation de fin de parcours.' },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-20 md:px-12 lg:px-24 lg:pb-[120px]">
      <div className="flex flex-col gap-10 rounded-[28px] border border-line bg-paper p-8 md:p-14">
        <h2 className="m-0 font-display text-[40px] font-semibold tracking-[-0.8px]">Comment ça se passe</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-3">
              <Icon size={28} strokeWidth={1.8} className="text-clay" aria-hidden="true" />
              <span className="text-lg font-bold">{title}</span>
              <span className="text-[15px] leading-relaxed text-body">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
