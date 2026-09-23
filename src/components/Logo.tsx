import { BarChart3 } from 'lucide-react';

export function LogoMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-forest">
      <BarChart3 size={22} className="text-cream" strokeWidth={2} />
    </span>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-display text-[26px] font-bold tracking-[-0.5px] ${light ? 'text-cream' : 'text-ink'}`}
    >
      Tina<span className={light ? 'text-clay-light' : 'text-clay'}>lytics</span>
    </span>
  );
}
