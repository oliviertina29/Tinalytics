import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export function Stats() {
  const { translations } = useLanguage();
  
  const stats = [
    { value: '50+', label: translations.hero.stats.projects },
    { value: '15+', label: translations.hero.stats.clients },
    { value: '3+', label: translations.hero.stats.experience },
  ];

  return (
    <div className="bg-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-indigo-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}