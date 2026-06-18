'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f2e]">

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e]/80 via-[#0a0f2e]/70 to-[#0a0f2e]/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-8"
        >
          <GraduationCap size={16} className="text-yellow-400" />
          Welcome to Institute of Business Studies
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Shape Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Future Today
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Professional Coaching for Classes IX, X, XI & XII — Commerce, Science, Arts & Professional Courses in Karachi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="/courses" className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center justify-center gap-2">
            Explore Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/contact" className="group border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2">
            Contact Us
            <Phone size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: <Users size={24} />, value: '500+', label: 'Students' },
            { icon: <GraduationCap size={24} />, value: '10+', label: 'Expert Teachers' },
            { icon: <BookOpen size={24} />, value: '15+', label: 'Courses' },
            { icon: <Award size={24} />, value: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/15 transition-colors"
            >
              <div className="text-yellow-400 flex justify-center mb-2">{stat.icon}</div>
              <p className="text-white text-2xl font-bold">{stat.value}</p>
              <p className="text-blue-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z" fill="#f9fafb"/>
        </svg>
      </div>

    </section>
  );
}