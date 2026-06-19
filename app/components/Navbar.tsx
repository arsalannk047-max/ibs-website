'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Results', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.webp"
              alt="IBS Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <a href="/contact" className="hidden md:block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
          Enroll Now
        </a>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          {links.map((link) => (
            <a key={link.name} href={link.href}
              className="block py-2 text-gray-700 hover:text-green-700 font-medium">
              {link.name}
            </a>
          ))}
          <a href="/contact" className="mt-2 block text-center w-full bg-green-700 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;