import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export function Process() {
  const { translations } = useLanguage();

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {translations.process.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.process.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-indigo-200 transform -translate-x-1/2" />
          
          {translations.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full z-10
                  ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}