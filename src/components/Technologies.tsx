import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const techStack = {
  frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'Django', 'Express', 'FastAPI'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'],
  analytics: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn'],
};

export function Technologies() {
  const { translations } = useLanguage();

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {translations.technologies.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.technologies.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {translations.technologies.categories[category]}
              </h3>
              <div className="space-y-2">
                {technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}