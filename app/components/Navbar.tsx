'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'About', 'Courses', 'Faculty', 'Results', 'Contact'];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="IBS Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
          Enroll Now
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-green-700 font-medium">
              {link}
            </a>
          ))}
          <button className="mt-2 w-full bg-green-700 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;