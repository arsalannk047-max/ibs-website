'use client';

import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Shaping Futures, Building Careers</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/institute-interior.jpg" alt="IBS Institute" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">Welcome to the Institute of Business Studies (IBS), a premier educational institution located in the heart of Karachi. For years, IBS has been dedicated to providing high-quality education and fostering a dynamic learning environment for students aiming to build successful careers in the business world.</p>
            <p className="mb-6">Our mission is to empower students with the knowledge, skills, and ethical values necessary to excel in their chosen fields. We are committed to nurturing talent, encouraging innovation, and preparing our graduates to be leaders and entrepreneurs in an ever-evolving global market.</p>
            <p>Join us at IBS and take the first step towards a bright and prosperous future. We are more than just an institute; we are a community dedicated to your success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
