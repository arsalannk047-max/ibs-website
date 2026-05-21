'use client';
import { motion } from 'framer-motion';

const courses = [
  { title: "Matric (IX & X)", desc: "Science & Arts groups with expert faculty" },
  { title: "Intermediate (XI & XII)", desc: "Pre-Medical, Pre-Engineering & Commerce" },
  { title: "O/A Levels", desc: "Cambridge curriculum with experienced tutors" },
];

const ProfessionalCourses = () => {
  return (
    <section id="courses" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow p-6 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourses;
