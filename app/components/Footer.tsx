'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IBS</span>
            </div>
            <div>
              <p className="font-bold text-white text-sm">Institute of</p>
              <p className="font-bold text-white text-sm">Business Studies</p>
            </div>
          </div>
          <p className="text-blue-200 text-sm">Shaping Futures, Building Careers</p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            {['Home', 'About', 'Courses', 'Faculty', 'Results', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-yellow-400">Contact Info</h4>
          <div className="space-y-3 text-blue-200 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-green-400 shrink-0" />
              <p>Main Jinnah Road, near Mustafa Masjid, Shershah, Karachi</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-400" />
              <p>+92 346 2776747</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-green-400" />
              <p>innovativebeaconschool@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-blue-700 text-center text-blue-300 text-sm">
        <p>© 2024 Institute of Business Studies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;