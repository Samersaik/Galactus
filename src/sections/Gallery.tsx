import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2669&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2669&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2670&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-galactus-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            The <span className="text-galactus-red">Atmosphere</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Step inside our premium universe. Take a look at our upgraded equipment, vibrant community, and powerful workout spaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={`Gallery ${idx + 1}`} 
              />
              <div className="absolute inset-0 bg-galactus-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-galactus-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="font-heading text-white text-2xl tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">GALACTUS VIBE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
