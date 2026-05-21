'use client';

import React from 'react';

const FeeStructure = () => {
  const programs = [
    { name: 'Commerce', fee: 'PKR 45,000' },
    { name: 'Pre Engineering', fee: 'PKR 50,000' },
    { name: 'Pre Medical', fee: 'PKR 55,000' },
    { name: 'Computer Science', fee: 'PKR 50,000' },
    { name: 'Arts', fee: 'PKR 35,000' },
  ];

  const professionalCourses = [
    { name: 'Digital Marketing', fee: 'PKR 15,000' },
    { name: 'Daraz/E-Commerce', fee: 'PKR 18,000' },
    { name: 'Graphic Designing', fee: 'PKR 12,000' },
    { name: 'MS Office', fee: 'PKR 8,000' },
    { name: 'Video Editing', fee: 'PKR 16,000' },
    { name: 'Advance Excel', fee: 'PKR 10,000' },
    { name: 'Computerized Accounting', fee: 'PKR 14,000' },
    { name: 'Business & Management', fee: 'PKR 20,000' },
    { name: 'Canva Designing', fee: 'PKR 7,000' },
    { name: 'Urdu InPage', fee: 'PKR 5,000' },
    { name: 'AI', fee: 'PKR 25,000' },
    { name: 'Web Development', fee: 'PKR 22,000' },
  ];

  return (
    <section id="fee" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Fee Structure</h2>
          <p className="text-xl text-gray-700">Transparent and affordable fees for quality education.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">Academic Programs (IX-XII)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.name} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                <h4 className="text-2xl font-semibold text-green-700 mb-3">{program.name}</h4>
                <p className="text-xl font-bold text-blue-900">{program.fee}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">Professional Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalCourses.map((course) => (
              <div key={course.name} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                <h4 className="text-2xl font-semibold text-blue-800 mb-3">{course.name}</h4>
                <p className="text-xl font-bold text-green-700">{course.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
