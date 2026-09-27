import { Award, FolderDown, MessageCircle, MonitorPlay, Users } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Method() {
  return (
    <section className="container-site flex flex-col gap-14 pb-24 lg:pb-32">
      <SectionHeading
        eyebrow="La méthode"
        title={
          <>
            Apprendre en faisant, <em className="font-normal text-clay">jamais</em> seul.
          </>
        }
        intro="Des séances en direct, un groupe qui avance ensemble et un projet concret à la clé."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <div className="relative flex h-full min-h-[300px] flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-ink p-8 text-cream md:p-10">
            <div className="bg-grid-dark pointer-events-none absolute inset-0" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay">
                <MonitorPlay size={24} aria-hidden="true" />
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-mono text-xs">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-[#E5484D]" aria-hidden="true" /> EN DIRECT
              </span>
            </div>
            <div className="relative flex flex-col gap-3">
              <h3 className="m-0 font-display text-[32px] font-semibold leading-tight md:text-[40px]">
                Trois heures en direct, chaque samedi.
              </h3>
              <p className="m-0 max-w-[520px] text-lg text-[#D5CEC0]">
                Pas de vidéos préenregistrées : on manipule les données ensemble, vous posez vos questions en temps
                réel, sur Zoom.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-2">
          <Tile icon={<Users size={24} />} title="20 places maximum" text="Pour que chacun soit suivi et reçoive des réponses." accent />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-2">
          <Tile icon={<FolderDown size={24} />} title="Replays et fichiers" text="Chaque séance enregistrée, avec jeux de données et modèles." />
        </Reveal>
        <Reveal delay={0.16} className="md:col-span-2">
          <Tile icon={<MessageCircle size={24} />} title="Groupe de cohorte" text="Un groupe WhatsApp pour vos questions entre les séances." />
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-2">
          <Tile icon={<Award size={24} />} title="Attestation + projet" text="Un tableau de bord à montrer et une attestation de fin de parcours." />
        </Reveal>
      </div>
    </section>
  );
}

function Tile({ icon, title, text, accent = false }: { icon: React.ReactNode; title: string; text: string; accent?: boolean }) {
  return (
    <div
      className={`flex h-full min-h-[240px] flex-col justify-between gap-8 rounded-[28px] p-8 ${
        accent ? 'bg-gold text-forest' : 'border border-line bg-paper'
      }`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent ? 'bg-forest text-gold' : 'bg-sand text-clay'}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="m-0 font-display text-2xl font-semibold">{title}</h3>
        <p className={`m-0 leading-relaxed ${accent ? 'text-forest/80' : 'text-body'}`}>{text}</p>
      </div>
    </div>
  );
}
