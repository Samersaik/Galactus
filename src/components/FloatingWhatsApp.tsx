import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useAnimation } from 'motion/react';
import { useEffect } from 'react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919650718460"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Pulse effect */}
      <div className="absolute w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-20"></div>
    </motion.a>
  );
}
