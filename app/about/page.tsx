'use client';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  { title: 'Quality Education', desc: 'We deliver concept-based teaching that builds real understanding, not just rote memorization.' },
  { title: 'Experienced Faculty', desc: 'Our teachers are highly qualified professionals dedicated to student success.' },
  { title: 'Modern Approach', desc: 'We combine traditional academic coaching with modern professional skill courses.' },
  { title: 'Personal Attention', desc: 'Small class sizes ensure every student gets the guidance they need.' },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-teal-700 via-emerald-700 to-green-800 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">About IBS</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Institute of Business Studies — Shaping Futures, Building Careers since our founding in Karachi
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Institute of Business Studies (IBS) is a Karachi-based coaching institute dedicated to helping
              students from Classes IX to XII excel academically while also preparing them for the modern
              professional world. We offer specialized coaching in Commerce, Pre-Engineering, Pre-Medical,
              Computer Science, and Arts, along with practical professional courses such as Digital Marketing,
              Web Development, AI, and more — equipping our students with both academic excellence and
              real-world skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-emerald-50 p-8 rounded-2xl border-l-4 border-emerald-600"
            >
              <Target size={32} className="text-emerald-700 mb-4" />
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide accessible, high-quality education that empowers students with the knowledge,
                skills, and confidence needed to succeed in academics and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600"
            >
              <Eye size={32} className="text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be Karachi&apos;s leading institute for academic coaching and professional skill development,
                shaping confident future leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-emerald-800 mb-12"
          >
            Why Choose IBS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 size={24} className="text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-emerald-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart size={36} className="mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white mb-4">Join the IBS Family</h2>
          <p className="text-emerald-100 mb-6">Take the first step towards a brighter future with us</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors">
            Get In Touch
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}