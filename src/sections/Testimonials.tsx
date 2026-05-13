import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "Rohit K.", text: "Best gym in Delhi! The trainers are super attentive and the vibe is purely motivating. Dropped 10kgs in 3 months.", rating: 5 },
    { name: "Sneha M.", text: "Zumba classes here are amazing. Very spacious and airy environment. The equipment is totally upgraded.", rating: 5 },
    { name: "Amit S.", text: "Perfect location near CP. Highly rated for a reason - the personal training is top notch and diet guidance is practical.", rating: 5 },
    { name: "Kavya D.", text: "Friendly environment, safe for women, and great amenities. Recommend their transformation program!", rating: 4.5 },
    { name: "Varun R.", text: "Finally found a gym where coaches actually care about your form. Galactus truly unleashes your best version.", rating: 5 },
    { name: "Neha T.", text: "Premium facility, metallic aesthetics are really cool, and the heavy lifting section is perfect. 10/10.", rating: 5 }
  ];

  // Double the array for seamless infinite scroll
  const scrollData = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-galactus-dark relative overflow-hidden">
      <div className="absolute opacity-5 top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-galactus-blue via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            What Our <span className="text-galactus-red">Members</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Join hundreds of satisfied members who have transformed their lives with us. Average rating: 4.8★
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full overflow-hidden flex pb-8">
        
        {/* Gradient Masks for fade effect on edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-galactus-dark to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-galactus-dark to-transparent z-10"></div>

        <motion.div 
          className="flex space-x-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {scrollData.map((t, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[400px] shrink-0 bg-galactus-card border border-white/5 p-8 rounded-2xl flex flex-col relative group hover:border-galactus-red/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-galactus-red/10 transition-colors" />
              
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(t.rating) ? 'fill-galactus-red text-galactus-red' : 'text-gray-600'} ${i === 4 && t.rating === 4.5 ? 'fill-galactus-red/50' : ''}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 flex-grow leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-galactus-red to-galactus-blue grid place-items-center font-bold text-white uppercase shadow-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
