import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'split' | 'center' | 'left';
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, intro, align = 'split', dark = false }: Props) {
  const eyebrowClass = `eyebrow ${dark ? 'text-gold' : ''}`;
  const introClass = `m-0 text-lg leading-relaxed ${dark ? 'text-forest-mist' : 'text-body'}`;

  if (align === 'center') {
    return (
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
        <div className={eyebrowClass}>{eyebrow}</div>
        <h2 className="h2 text-balance m-0">{title}</h2>
        {intro && <p className={`${introClass} max-w-[620px]`}>{intro}</p>}
      </Reveal>
    );
  }

  if (align === 'left') {
    return (
      <Reveal className="flex max-w-[760px] flex-col gap-5">
        <div className={eyebrowClass}>{eyebrow}</div>
        <h2 className="h2 text-balance m-0">{title}</h2>
        {intro && <p className={introClass}>{intro}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
      <div className="flex max-w-[760px] flex-col gap-5">
        <div className={eyebrowClass}>{eyebrow}</div>
        <h2 className="h2 text-balance m-0">{title}</h2>
      </div>
      {intro && <p className={`${introClass} max-w-[440px] lg:pb-2`}>{intro}</p>}
    </Reveal>
  );
}
