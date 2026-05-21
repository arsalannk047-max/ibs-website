'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: '98%', label: 'Graduation Rate' },
  { id: 2, value: '1500+', label: 'Successful Graduates' },
  { id: 3, value: '50+', label: 'Annual Awards' },
  { id: 4, value: '100%', label: 'Placement Rate' },
];

const StatsCounter = ({ value, label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = 0;
    const duration = 2000; // 2 seconds

    const updateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.floor(value.replace(/[^0-9]/g, '') * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(parseInt(value.replace(/[^0-9]/g, '')));
      }
    };

    requestAnimationFrame(updateCount);
  }, [value]);

  return (
    <div className="text-center px-4">
      <h3 className="text-5xl font-bold text-green-700 mb-2 tabular-nums">
        {count}
        {value.includes('%') && '%'}
      </h3>
      <p className="text-xl text-gray-700">{label}</p>
    </div>
  );
};

const ResultsAchievements = () => {
  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Results & Achievements</h2>
          <p className="text-xl text-gray-700">See the impact of our education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <StatsCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsAchievements;
