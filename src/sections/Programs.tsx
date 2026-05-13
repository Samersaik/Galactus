import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export default function Programs() {
  const [isYearly, setIsYearly] = useState(true);

  const programs = [
    {
      name: "Basic Flex",
      monthly: "2,000",
      yearly: "10,000",
      popular: false,
      features: ["Access to Cardio Zone", "Access to Strength Equipment", "Locker Room Access", "General Fitness Assessment"]
    },
    {
      name: "Galactus Elite",
      monthly: "3,500",
      yearly: "20,000",
      popular: true,
      features: ["Unlimited Classes (Zumba, etc.)", "Personalized Diet Plan", "2 PT Sessions/Month", "Free Merchandise", "Priority Support"]
    },
    {
      name: "Transformation",
      monthly: "6,000",
      yearly: "45,000",
      popular: false,
      features: ["3x/Week Personal Training", "Weekly Nutrition Check-ins", "Full Body Composition Analysis", "Supplement Guidance", "24/7 Trainer WhatsApp Access"]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-galactus-dark relative overflow-hidden">
      <div className="absolute opacity-10 top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-galactus-red via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            Membership <span className="text-galactus-red">Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Starting at just ₹10,000 p/a. Choose a plan that fuels your journey. Limited Early Bird Offers available!
          </motion.p>
          
          {/* Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-galactus-card p-1 rounded-full border border-white/10"
          >
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${!isYearly ? 'bg-galactus-red text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${isYearly ? 'bg-galactus-red text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Annually (Save up to 40%)
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${prog.popular ? 'border-galactus-red bg-galactus-red/5' : 'border-white/10 bg-galactus-card'}`}
            >
              {prog.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-galactus-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-heading text-3xl uppercase tracking-wider text-white mb-2">{prog.name}</h3>
              <div className="flex items-baseline gap-2 mb-6 tracking-tight">
                <span className="text-4xl md:text-5xl font-bold font-sans">
                  ₹<AnimatePresence mode="wait"><motion.span key={isYearly ? 'y' : 'm'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{isYearly ? prog.yearly : prog.monthly}</motion.span></AnimatePresence>
                </span>
                <span className="text-gray-400 font-medium">/ {isYearly ? 'year' : 'month'}</span>
              </div>
              
              <div className="flex-grow space-y-4 mb-8">
                {prog.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-galactus-red shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-colors text-center ${prog.popular ? 'bg-galactus-red hover:bg-red-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
