'use client';

import React from 'react';
import { motion } from 'framer-motion';

const programsData = [
  { id: 1, title: 'Commerce', description: 'Focus on business, accounting, and finance principles.', icon: 'Briefcase' },
  { id: 2, title: 'Pre Engineering', description: 'Foundation for engineering disciplines.', icon: 'HardHat' },
  { id: 3, title: 'Pre Medical', description: 'Core sciences for medical and healthcare careers.', icon: 'Stethoscope' },
  { id: 4, title: 'Computer Science', description: 'In-depth study of computing and IT.', icon: 'Laptop' },
  { id: 5, title: 'Arts', description: 'Develop creativity and critical thinking in arts and humanities.', icon: 'Palette' },
];

// Mock icons for now, replace with actual LucideReact components later
const IconComponent = ({ name }) => {
  // In a real app, you'd map names to LucideReact components
  return <div className="w-12 h-12 mb-4 text-blue-600">[Icon: {name}]</div>;
};

const AcademicPrograms = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Academic Programs (IX-XII)</h2>
          <p className="text-xl text-gray-600">Explore our diverse academic pathways.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-gray-50 rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconComponent name={program.icon} />
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
