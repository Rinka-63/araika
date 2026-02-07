"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6288803960792" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] group flex items-center"
    >
      {/* Label Tooltip Luxury */}
      <span className="mr-[-12px] pr-10 pl-5 py-2.5 bg-[#241C1A] text-[#FDFCF0] text-[10px] font-bold uppercase tracking-[0.2em] rounded-l-full border border-[#C67C4E]/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl">
        WhatsApp Araika
      </span>

      {/* Circle Icon Container */}
      <div className="relative">
        {/* Ambient Pulse Effect */}
        <div className="absolute inset-0 bg-[#C67C4E] blur-xl opacity-30 animate-pulse rounded-full" />

        <div className="relative bg-[#241C1A] border border-[#C67C4E]/50 text-[#C67C4E] p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#C67C4E] group-hover:shadow-[0_0_20px_rgba(198,124,78,0.3)]">
          {/* Shine Sweep Effect */}
          <motion.div
            animate={{ x: ["-150%", "150%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative z-10"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-1.996 0-3.951-.502-5.694-1.455l-6.298 1.674zm5.103-4.473l.366.217c1.458.865 3.132 1.322 4.86 1.322 4.904 0 8.891-3.987 8.891-8.892 0-2.376-.925-4.61-2.603-6.289s-3.911-2.602-6.287-2.602c-4.904 0-8.891 3.987-8.891 8.891 0 1.764.52 3.484 1.503 4.975l.238.361-1.002 3.65 3.735-.983z" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
