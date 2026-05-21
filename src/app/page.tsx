import Navbar from '../../app/components/Navbar';
import Hero from '../../app/components/Hero';
import Courses from '../../app/components/Courses';
import Contact from '../../app/components/Contact';
import Footer from '../../app/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Contact />
      <Footer />
    </main>
  );
}