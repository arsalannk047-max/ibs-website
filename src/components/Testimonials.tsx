'use client';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Ahmed Ali", text: "IBS ne meri zindagi badal di — matric mein A+ aaya!", grade: "Matric Student" },
  { name: "Sara Khan", text: "Best teachers and study environment in Karachi.", grade: "Intermediate Student" },
  { name: "Usman Malik", text: "Fee structure bohot reasonable hai aur results excellent.", grade: "Parent" },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow p-6 border border-blue-100"
            >
              <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
              <p className="font-bold text-blue-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
