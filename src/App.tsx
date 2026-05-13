import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Facilities from './sections/Facilities';
import Programs from './sections/Programs';
import Trainers from './sections/Trainers';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="antialiased bg-galactus-dark min-h-screen selection:bg-galactus-red selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Programs />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
