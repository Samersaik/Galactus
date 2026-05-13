import { motion } from 'motion/react';
import { Dumbbell, Activity, HeartPulse, Music, Flame, Apple } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: "Strength Training",
      description: "Modern strength machines and comprehensive free weights zone.",
      icon: <Dumbbell className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop"
    },
    {
      title: "Cardio Zone",
      description: "Top-tier treadmills, ellipticals, and climbers for maximum endurance.",
      icon: <HeartPulse className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2574&auto=format&fit=crop"
    },
    {
      title: "Functional Training",
      description: "Dedicated space for HIIT, kettlebells, and bodyweight exercises.",
      icon: <Activity className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Zumba & Group Classes",
      description: "High-energy sessions to burn calories while having fun.",
      icon: <Music className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Personal Training",
      description: "1-on-1 coaching customized to your exact fitness goals.",
      icon: <Flame className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Nutrition Counseling",
      description: "Expert diet guidance to complement your workout routine.",
      icon: <Apple className="w-8 h-8 text-galactus-red" />,
      bgImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-galactus-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            Premium <span className="text-galactus-red">Facilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Train in an airy, motivating space equipped with upgraded machinery and specialized zones tailored for total body transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background cover image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={fac.bgImage} 
                  alt={fac.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-galactus-dark/80 group-hover:bg-galactus-dark/60 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-lg border border-white/10 transition-transform duration-300 group-hover:-translate-y-2">
                  {fac.icon}
                </div>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {fac.title}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-gray-300 text-sm">
                    {fac.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
