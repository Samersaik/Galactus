import { motion } from 'motion/react';
import { Target, Trophy, Flame } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Star Rating", value: "4.8/5", icon: <Trophy className="w-6 h-6 text-galactus-red" /> },
    { label: "Expert Trainers", value: "10+", icon: <Target className="w-6 h-6 text-galactus-red" /> },
    { label: "Hours Open", value: "18 hrs", icon: <Flame className="w-6 h-6 text-galactus-red" /> },
  ];

  return (
    <section id="about" className="py-24 bg-galactus-dark relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-galactus-red/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-square relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(230,0,0,0.15)] border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop" 
                alt="Galactus Gym Trainers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-galactus-dark via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-galactus-card border border-white/10 p-6 rounded-xl shadow-2xl max-w-[200px]"
            >
              <h4 className="font-heading text-4xl text-galactus-red mb-1">Central Delhi</h4>
              <p className="text-sm text-gray-400">Located in the heart of Gole Market, near CP.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6 uppercase">
              More Than Just A <span className="text-galactus-red">Gym</span>.
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Galactus Gym, we are dedicated to building a motivating and empowering community right in the heart of Delhi. Whether you're a beginner or an advanced athlete, our facility is designed to help you crush your limits.
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Experience our airy, premium space equipped with top-of-the-line machinery. Backed by highly rated expert trainers, we offer personalized programs, nutrition counseling, and high-energy group classes like Zumba to keep you moving forward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="mb-3">{stat.icon}</div>
                  <div className="font-heading text-4xl text-white tracking-wide">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
