'use client';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Atom, HeartPulse, Monitor, Palette, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const academic = [
  { name: 'Commerce', desc: 'Accounting, Economics, Business Studies, Statistics', icon: <Calculator size={28} />, color: 'bg-blue-600' },
  { name: 'Pre Engineering', desc: 'Physics, Chemistry, Mathematics', icon: <Atom size={28} />, color: 'bg-indigo-600' },
  { name: 'Pre Medical', desc: 'Biology, Chemistry, Physics', icon: <HeartPulse size={28} />, color: 'bg-rose-600' },
  { name: 'Computer Science', desc: 'Programming, Networking, IT Fundamentals', icon: <Monitor size={28} />, color: 'bg-emerald-600' },
  { name: 'Arts', desc: 'Humanities, Social Sciences, Languages', icon: <Palette size={28} />, color: 'bg-amber-600' },
];

const professional = [
  'Digital Marketing', 'Daraz (E-Commerce)', 'Graphic Designing',
  'MS Office', 'Video Editing', 'Advance Excel',
  'Computerized Accounting', 'Business & Management', 'Canva Designing',
  'Urdu InPage', 'AI (Artificial Intelligence)', 'Web Development',
];

export default function CoursesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen size={48} className="mx-auto mb-4 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Academic excellence for Classes IX-XII plus career-focused professional skill courses
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900 mb-2 text-center"
          >
            Academic Programs
          </motion.h2>
          <p className="text-gray-500 text-center mb-12">For Classes IX, X, XI & XII</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academic.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className={`${course.color} text-white p-6 flex items-center justify-center`}>
                  {course.icon}
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm">{course.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-2 text-center"
          >
            Professional Courses
          </motion.h2>
          <p className="text-blue-300 text-center mb-12">Build career-ready skills for the modern world</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {professional.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300"
              >
                <p className="text-white font-semibold text-sm">{course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-yellow-400 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Enroll?</h2>
          <p className="text-blue-800 mb-6">Join IBS today and take the first step towards your future</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors">
            Contact Us <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}