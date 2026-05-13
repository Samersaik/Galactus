import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: "Vikram Singh",
      specialty: "Head Coach / Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      specialty: "Zumba & HIIt Expert",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: "Rahul Verma",
      specialty: "Transformation Specialist",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: "Aarti Mehra",
      specialty: "Certified Nutritionist & Yoga",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-galactus-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            Expert <span className="text-galactus-red">Trainers</span>
          </motion.h2>
          <div className="w-24 h-1 bg-galactus-red mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Meet the driving force behind your transformation. Our highly rated trainers bring years of experience, personalized attention, and pure energy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-galactus-dark border border-white/5">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-galactus-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-galactus-red flex items-center justify-center text-white hover:bg-white hover:text-galactus-dark transition-colors"><Instagram className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-full bg-galactus-red flex items-center justify-center text-white hover:bg-white hover:text-galactus-dark transition-colors"><Twitter className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-2xl uppercase tracking-wider text-white">{trainer.name}</h3>
                <p className="text-galactus-red font-medium text-sm mt-1">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
