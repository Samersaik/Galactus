import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop" 
          alt="Gym aesthetic background" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark & Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-galactus-dark via-galactus-dark/70 to-galactus-dark/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-galactus-red/10 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start pt-12 sm:pt-24 pb-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-3 py-1 rounded-full border border-galactus-red/40 bg-galactus-red/10 text-galactus-red uppercase tracking-widest text-xs font-semibold"
        >
          Premium Unisex Fitness Center in New Delhi
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.9] text-white mb-6"
        >
          Unleash Your<br /> Inner <span className="text-galactus-red mix-blend-lighten">Galactus</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl text-center sm:text-left"
        >
          Your Destination for Personal Training, Nutrition, and Diet Guidance. Let's Crush Those Goals Together!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#programs" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-galactus-red hover:bg-red-700 text-white font-semibold rounded-md transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            Join Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/919650718460" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-galactus-dark text-white font-semibold rounded-md transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            <Play className="w-5 h-5 fill-current" />
            Book Free Trial
          </a>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[10%] w-32 h-32 bg-galactus-red/20 rounded-full blur-[60px] hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-[10%] w-40 h-40 bg-galactus-blue/20 rounded-full blur-[70px] hidden md:block"
      />
    </section>
  );
}
