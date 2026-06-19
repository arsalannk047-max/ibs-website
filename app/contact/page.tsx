'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [classInterest, setClassInterest] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!name || !phone || !message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, classInterest, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setClassInterest('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-green-800 to-blue-900 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mail size={48} className="mx-auto mb-4 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out for admissions, queries, or just to say hello!
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
              <div className="bg-green-700 p-3 rounded-xl shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-1">Address</h4>
                <p className="text-gray-600">Main Jinnah Road, near Mustafa Masjid, Shershah, Karachi</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
              <div className="bg-green-700 p-3 rounded-xl shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-1">Phone</h4>
                <p className="text-gray-600">+92 346 2776747</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
              <div className="bg-green-700 p-3 rounded-xl shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-1">Email</h4>
                <p className="text-gray-600">innovativebeaconschool@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
              <div className="bg-green-700 p-3 rounded-xl shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-1">Office Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 mt-6">
              <iframe
                src="https://maps.google.com/maps?q=Mustafa%20Masjid%20Shershah%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md h-fit"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />
              <select
                value={classInterest}
                onChange={(e) => setClassInterest(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600 text-gray-500"
              >
                <option value="">Select Class / Interest</option>
                <option>Class IX</option>
                <option>Class X</option>
                <option>Class XI</option>
                <option>Class XII</option>
                <option>Professional Courses</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-xl text-sm">
                  <CheckCircle2 size={18} />
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                  Please fill all required fields and try again.
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}