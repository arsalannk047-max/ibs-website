'use client';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Star, Award, Users, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { icon: <Users size={32} />, value: '500+', label: 'Students Trained', color: 'text-blue-600' },
  { icon: <Trophy size={32} />, value: '98%', label: 'Pass Rate', color: 'text-green-600' },
  { icon: <Star size={32} />, value: '50+', label: 'A+ Grades', color: 'text-yellow-500' },
  { icon: <TrendingUp size={32} />, value: '95%', label: 'Improved Scores', color: 'text-purple-600' },
];

const achievements = [
  { title: 'Top Position Holders', desc: 'Multiple students achieved top 3 positions in board examinations across Commerce and Science groups.', icon: <Award size={28} /> },
  { title: 'University Admissions', desc: 'Our students successfully secured admissions in top universities for Business, Engineering and Medical programs.', icon: <Target size={28} /> },
  { title: 'Skill Certifications', desc: 'Students completing professional courses received industry-recognized certifications in Digital Marketing, AI, and Web Development.', icon: <Star size={28} /> },
];

export default function ResultsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Trophy size={48} className="mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-4">Our Results</h1>
          <p className="text-yellow-50 text-lg max-w-xl mx-auto">
            Celebrating the achievements and success stories of our dedicated students
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-white -mt-1">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 -translate-y-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-100"
            >
              <div className={`${stat.color} flex justify-center mb-3`}>{stat.icon}</div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Our Achievements
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-400"
              >
                <div className="text-orange-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Be Our Next Success Story</h2>
          <p className="text-blue-200 mb-6">Join hundreds of students who achieved their academic goals with IBS</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors">
            Enroll Today
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}