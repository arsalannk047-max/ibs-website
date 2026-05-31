'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teachers = [
  {
    name: 'Sir Umair Aslam',
    qualification: 'M.Phil, M.Com, M.A Economics, B.Com',
    subject: 'Commerce & Business',
    accent: 'border-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    circle: 'bg-blue-600',
    initials: 'UA',
  },
  {
    name: 'Sir Hamid Ali',
    qualification: 'MSC Math',
    subject: 'Mathematics',
    accent: 'border-green-600',
    badge: 'bg-green-100 text-green-700',
    circle: 'bg-green-600',
    initials: 'HA',
  },
  {
    name: 'Sir Aamir',
    qualification: 'MSC Physics',
    subject: 'Physics',
    accent: 'border-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    circle: 'bg-purple-600',
    initials: 'AM',
  },
  {
    name: 'Dr. Wajeeha',
    qualification: 'MBBS',
    subject: 'Biology / Pre-Medical',
    accent: 'border-rose-500',
    badge: 'bg-rose-100 text-rose-700',
    circle: 'bg-rose-500',
    initials: 'WJ',
  },
  {
    name: 'Miss Rija',
    qualification: 'BS Chemistry',
    subject: 'Chemistry',
    accent: 'border-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    circle: 'bg-teal-600',
    initials: 'RJ',
  },
  {
    name: 'Miss Farah',
    qualification: 'M.A Islamiat',
    subject: 'Islamiat',
    accent: 'border-amber-500',
    badge: 'bg-amber-100 text-amber-700',
    circle: 'bg-amber-500',
    initials: 'FR',
  },
];

export default function FacultyPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">Meet The Team</p>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Our <span className="text-green-700">Faculty</span></h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Highly qualified and experienced educators dedicated to your success</p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${teacher.accent} overflow-hidden hover:-translate-y-1`}
            >
              <div className="p-8 text-center">
                <div className={`w-20 h-20 rounded-full ${teacher.circle} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-white text-2xl font-bold">{teacher.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${teacher.badge} mb-4`}>
                  {teacher.subject}
                </span>
                <div className="border-t pt-4">
                  <p className="text-gray-500 text-sm">{teacher.qualification}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}