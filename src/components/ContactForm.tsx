'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucidePhone, LucideMail, LucideMapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the form data to an API
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-700 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl">We'd love to hear from you!</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="lg:w-1/3 bg-white bg-opacity-10 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <LucidePhone className="w-8 h-8 text-green-400" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+923462776747" className="hover:text-blue-300">+92 346 2776747</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LucideMail className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:innovativebeaconschool@gmail.com" className="hover:text-green-300">innovativebeaconschool@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LucideMapPin className="w-8 h-8 text-red-400" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Main Jinnah Road, near Mustafa Masjid, Shershah, Karachi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:w-2/3 bg-white bg-opacity-10 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Send us a message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-800"
              ></textarea>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
