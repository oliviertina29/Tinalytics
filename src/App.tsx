import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Technologies />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;