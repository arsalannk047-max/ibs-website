'use client';

import React from 'react';
import { LucideFacebook, LucideTwitter, LucideInstagram, LucideLinkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-green-400 mb-4">IBS</h4>
            <p className="text-gray-300">Shaping Futures, Building Careers</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook"><LucideFacebook className="w-6 h-6 hover:text-green-400 transition duration-300" /></a>
              <a href="#" aria-label="Twitter"><LucideTwitter className="w-6 h-6 hover:text-green-400 transition duration-300" /></a>
              <a href="#" aria-label="Instagram"><LucideInstagram className="w-6 h-6 hover:text-green-400 transition duration-300" /></a>
              <a href="#" aria-label="LinkedIn"><LucideLinkedin className="w-6 h-6 hover:text-green-400 transition duration-300" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#programs" className="hover:text-white">Academic Programs</a></li>
              <li><a href="#courses" className="hover:text-white">Professional Courses</a></li>
              <li><a href="#faculty" className="hover:text-white">Faculty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#fee" className="hover:text-white">Fee Structure</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Contact Info</h4>
            <p className="text-gray-300 mb-3">Main Jinnah Road, near Mustafa Masjid, Shershah, Karachi</p>
            <p className="text-gray-300 mb-3">+92 346 2776747</p>
            <p><a href="mailto:innovativebeaconschool@gmail.com" className="text-gray-300 hover:text-white">innovativebeaconschool@gmail.com</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Institute of Business Studies (IBS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
