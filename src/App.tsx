import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Audience } from './components/Audience';
import { Courses } from './components/Courses';
import { Program } from './components/Program';
import { Trainer } from './components/Trainer';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Signup } from './components/Signup';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <Audience />
        <Courses />
        <Program />
        <Trainer />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
