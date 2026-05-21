'use client';

import React, { useState } from 'react';
import { LucideMenu, LucideX } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-green-700 hover:text-blue-800">
            IBS
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</a>
          <a href="#programs" className="text-gray-700 hover:text-blue-600 transition duration-300">Academic Programs</a>
          <a href="#courses" className="text-gray-700 hover:text-blue-600 transition duration-300">Professional Courses</a>
          <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition duration-300">Faculty</a>
          <a href="#results" className="text-gray-700 hover:text-blue-600 transition duration-300">Results</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition duration-300">Testimonials</a>
          <a href="#fee" className="text-gray-700 hover:text-blue-600 transition duration-300">Fee Structure</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 right-0">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>About Us</a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Academic Programs</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Professional Courses</a>
            <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Faculty</a>
            <a href="#results" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Results</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Testimonials</a>
            <a href="#fee" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Fee Structure</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
