'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card'; // Assuming you have a UI component library setup
import { LucideAward, LucideCode, LucideBriefcase, LucideDollarSign, LucideCamera, LucideFileEdit, LucideBarChart, LucideUsers, LucidePenTool, LucideKeyboard } from 'lucide-react';

const coursesData = [
  { id: 1, title: 'Digital Marketing', icon: LucideAward },
  { id: 2, title: 'Daraz/E-Commerce', icon: LucideBriefcase },
  { id: 3, title: 'Graphic Designing', icon: LucidePenTool },
  { id: 4, title: 'MS Office', icon: LucideFileEdit },
  { id: 5, title: 'Video Editing', icon: LucideCamera },
  { id: 6, title: 'Advance Excel', icon: LucideBarChart },
  { id: 7, title: 'Computerized Accounting', icon: LucideDollarSign },
  { id: 8, title: 'Business & Management', icon: LucideUsers },
  { id: 9, title: 'Canva Designing', icon: LucidePenTool },
  { id: 10, title: 'Urdu InPage', icon: LucideKeyboard },
  { id: 11, title: 'AI', icon: LucideCode },
  { id: 12, title: 'Web Development', icon: LucideCode },
];

const ProfessionalCourses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Professional Courses</h2>
          <p className="text-xl text-gray-700">Upskill and advance your career with our specialized courses.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              className="group transition duration-500 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 group-hover:shadow-2xl">
                <CardHeader className="flex justify-center items-center p-6 bg-blue-50 border-b border-gray-200">
                  <course.icon className="h-16 w-16 text-green-600" />
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3 group-hover:text-green-700 transition duration-300">
                    {course.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourses;
