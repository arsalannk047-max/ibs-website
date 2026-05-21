'use client';

import React from 'react';
import { motion } from 'framer-motion';

const facultyData = [
  { id: 1, name: 'Dr. Aisha Khan', title: 'Head of Commerce Department', image: '/images/faculty/aisha-khan.jpg' },
  { id: 2, name: 'Engr. Bilal Ahmed', title: 'Head of Engineering Department', image: '/images/faculty/bilal-ahmed.jpg' },
  { id: 3, name: 'Dr. Sana Javaid', title: 'Head of Computer Science', image: '/images/faculty/sana-javaid.jpg' },
  { id: 4, name: 'Mr. Omer Farooq', title: 'Senior Lecturer - Business Management', image: '/images/faculty/omer-farooq.jpg' },
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Our Esteemed Faculty</h2>
          <p className="text-xl text-gray-600">Meet the experts shaping our students' futures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transition duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
