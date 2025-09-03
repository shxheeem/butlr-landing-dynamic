import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    eyebrow: 'Governance',
    title: 'Close the gap between students and SU decisions',
    description: 'Enable direct participation, voting and transparent communication between students and the Students\' Union.',
  },
  {
    eyebrow: 'Activities',
    title: 'Make campus life engaging and measurable',
    description: 'Gamify participation with points, badges and analytics that highlight what students value most.',
  },
  {
    eyebrow: 'Admin',
    title: 'One dashboard for organisers & teams',
    description: 'Content, events, reporting and permissions — streamlined for SU teams.',
  },
  {
    eyebrow: 'Insights',
    title: 'Data-driven decisions for SUs',
    description: 'Understand student engagement and make informed decisions with our powerful analytics dashboard.',
  },
];

const FeatureGrid = () => {
  return (
    <div id="features" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Everything you need to engage your campus</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 transition-colors"
          >
            <h3 className="text-sm font-semibold text-orange-400">{feature.eyebrow}</h3>
            <h4 className="mt-2 text-lg font-bold">{feature.title}</h4>
            <p className="mt-2 text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;