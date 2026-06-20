import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}