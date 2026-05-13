import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-galactus-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
          >
            Ready to <span className="text-galactus-red">Transform?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Visit us in Gole Market, or drop a message to schedule your free trial session.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-galactus-card p-8 rounded-2xl border border-white/10"
          >
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-galactus-red/10 flex items-center justify-center shrink-0 text-galactus-red">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400">13, Doctor Ln, Sector 3, DIZ Area, Gole Market, New Delhi, Delhi 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-galactus-red/10 flex items-center justify-center shrink-0 text-galactus-red">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Hours of Operation</h4>
                  <p className="text-gray-400">5:00 AM - 11:00 PM (Daily)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-galactus-red/10 flex items-center justify-center shrink-0 text-galactus-red">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Contact</h4>
                  <p className="text-gray-400">+91 96507 18460</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="w-full bg-galactus-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-galactus-red transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="w-full bg-galactus-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-galactus-red transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={4} placeholder="I want to start a membership..." className="w-full bg-galactus-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-galactus-red transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-galactus-red hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-lg px-4 py-4 transition-colors flex items-center justify-center gap-2">
                Send Request <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-auto"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9168936302528!2d77.20381417596009!3d28.6342304756637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd27d32b14e1%3A0x15b64f51a4914591!2sGalactus%20Gym!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 invert hover:invert-0 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
