'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-green-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Institute of Business Studies (IBS)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Shaping Futures, Building Careers
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="#contact"
            className="bg-white text-green-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Enroll Now
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
      {/* Background Animations - subtle */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-grid-pattern opacity-30"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cgrid x='0' y='0' width='10' height='10' step='10' color='%23ffffff'/%3E%3C/svg%3E")' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ loop: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [-20, 20, -20], scale: [1, 1.2, 1] }}
        transition={{ loop: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [20, -20, 20], scale: [1.2, 1, 1.2] }}
        transition={{ loop: Infinity, duration: 20, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;
