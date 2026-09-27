import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { CoursesSection } from '../components/home/CoursesSection';
import { ProgramSection } from '../components/home/ProgramSection';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { TrainerTeaser } from '../components/home/TrainerTeaser';
import { Method } from '../components/home/Method';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCta } from '../components/FinalCta';
import { FAQ } from '../data/courses';

export function HomePage() {
  usePageMeta('');
  return (
    <>
      <Hero />
      <Marquee />
      <BeforeAfter />
      <CoursesSection />
      <ProgramSection />
      <RoiCalculator />
      <TrainerTeaser />
      <Method />
      <PricingSection />
      <FaqSection items={FAQ.slice(0, 6)} />
      <FinalCta />
    </>
  );
}
