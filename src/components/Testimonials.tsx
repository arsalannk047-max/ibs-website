'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    id: 1,
    name: 'Ahmed Khan',
    program: 'Commerce Graduate',
    quote: 'IBS provided me with the foundational knowledge and practical skills needed to excel in the commerce field. The faculty's guidance was invaluable.',
    image: '/images/testimonials/ahmed-khan.jpg'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    program: 'Computer Science Student',
    quote: 'The computer science program at IBS is outstanding. The curriculum is up-to-date, and the professors are highly knowledgeable. It has prepared me well for my future career.',
    image: '/images/testimonials/fatima-ali.jpg'
  },
  {
    id: 3,
    name: 'Usman Qureshi',
    program: 'Digital Marketing Course Alumnus',
    quote: 'The digital marketing course at IBS was a game-changer for my career. I gained practical skills and confidence to launch my own online business.',
    image: '/images/testimonials/usman-qureshi.jpg'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Student Testimonials</h2>
          <p className="text-xl text-gray-700">Hear from our successful students.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="mySwiper"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img src={testimonial.image} alt={testimonial.name} className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-green-500" />
                  <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-800 italic mb-4">{testimonial.quote}</p>
                    <h4 className="text-2xl font-bold text-blue-900 mb-1">{testimonial.name}</h4>
                    <p className="text-md text-gray-600">{testimonial.program}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
