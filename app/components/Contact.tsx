'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">Get in touch with us today</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-green-700 p-3 rounded-xl">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Address</h4>
                <p className="text-gray-600">Main Jinnah Road, near Mustafa Masjid, Shershah, Karachi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-700 p-3 rounded-xl">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Phone</h4>
                <p className="text-gray-600">+92 346 2776747</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-700 p-3 rounded-xl">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Email</h4>
                <p className="text-gray-600">innovativebeaconschool@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />
              <button className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;