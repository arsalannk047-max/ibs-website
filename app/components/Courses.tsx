'use client';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Briefcase } from 'lucide-react';

const Courses = () => {
  const academic = [
    { name: 'Commerce', desc: 'Accounting, Economics, Business Studies' },
    { name: 'Pre Engineering', desc: 'Physics, Chemistry, Mathematics' },
    { name: 'Pre Medical', desc: 'Biology, Chemistry, Physics' },
    { name: 'Computer Science', desc: 'Programming, Networking, IT' },
    { name: 'Arts', desc: 'Humanities, Social Sciences, Languages' },
  ];

  const professional = [
    'Digital Marketing', 'Daraz (E-Commerce)', 'Graphic Designing',
    'MS Office', 'Video Editing', 'Advance Excel',
    'Computerized Accounting', 'Business & Management', 'Canva Designing',
    'Urdu InPage', 'AI (Artificial Intelligence)', 'Web Development',
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 text-lg">Choose your path to success</p>
        </motion.div>

        <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <BookOpen size={28} /> Academic Programs (Classes IX-XII)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {academic.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-700"
            >
              <h4 className="text-lg font-bold text-blue-900 mb-2">{course.name}</h4>
              <p className="text-gray-600 text-sm">{course.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <Monitor size={28} /> Professional Courses
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {professional.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-t-4 border-green-600 hover:border-blue-700"
            >
              <Briefcase size={24} className="mx-auto mb-2 text-green-700" />
              <p className="text-sm font-semibold text-gray-800">{course}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;