import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Tinalytics</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {translations.nav.home}
            </a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {translations.nav.services}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {translations.nav.contact}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Globe size={20} />
              <span className="uppercase">{language}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}