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
      <Navbar />
      <main>
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
