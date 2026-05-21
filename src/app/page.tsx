'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import AcademicPrograms from '@/components/AcademicPrograms';
import ProfessionalCourses from '@/components/ProfessionalCourses';
import Faculty from '@/components/Faculty';
import ResultsAchievements from '@/components/ResultsAchievements';
import Testimonials from '@/components/Testimonials';
import FeeStructure from '@/components/FeeStructure';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <AcademicPrograms />
        <ProfessionalCourses />
        <Faculty />
        <ResultsAchievements />
        <Testimonials />
        <FeeStructure />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
