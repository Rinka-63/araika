"use client";

import { motion } from "framer-motion";

export default function OwnerProfile() {
  return (
    <section className="py-28 bg-[#1A1412] relative overflow-hidden">
      {/* --- PREMIUM VERTICAL CONNECTOR --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          viewport={{ once: true }}
          className="w-[1px] bg-gradient-to-b from-transparent via-[#C67C4E] to-[#C67C4E]"
        />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-[#C67C4E] text-[8px] tracking-[0.5em] font-bold uppercase mt-2"
        >
          The Artisan
        </motion.div>
      </div>

      {/* LUXURY BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C67C4E]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Gold Line Decor */}
      <div className="absolute right-0 top-1/2 w-32 h-[1px] bg-gradient-to-l from-[#C67C4E]/20 to-transparent" />
      <div className="absolute left-0 top-1/2 w-32 h-[1px] bg-gradient-to-r from-[#C67C4E]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* AVATAR: Noir Luxury Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-t-[100px] rounded-b-3xl border border-white/10 p-1 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent z-10" />
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Master&backgroundColor=1a1412&mood=calm"
                alt="The Mastermind"
                className="w-full h-full object-cover scale-110 grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Minimalist Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="absolute -right-4 top-10 bg-[#C67C4E] w-12 h-12 rounded-full flex items-center justify-center border-4 border-[#1A1412] shadow-2xl"
            >
              <span className="text-white text-[8px] font-bold text-center leading-none tracking-tighter uppercase">
                Est.
                <br />
                2024
              </span>
            </motion.div>
          </motion.div>

          {/* BIO: High-End Typography */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#C67C4E] text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold mb-4 opacity-70">
                The Visionary Behind Araika
              </h4>
              <h3 className="text-4xl md:text-6xl font-serif text-[#FDFCF0] mb-6 tracking-tight leading-none">
                Master <span className="italic text-[#C67C4E]">Aurelius</span>
              </h3>
              <p className="text-[#FDFCF0]/50 text-base md:text-lg leading-relaxed font-light max-w-lg">
                "Kopi bagi kami bukan sekadar komoditas, melainkan sebuah
                simfoni. Di setiap ekstraksi, ada presisi rasa yang kami jaga
                demi pengalaman yang tak lekang oleh waktu."
              </p>
            </motion.div>

            {/* Premium Signature Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="h-[1px] w-12 bg-[#C67C4E]/40 hidden md:block" />
              <p className="font-serif text-[#FDFCF0] text-xl md:text-2xl italic tracking-[0.2em] opacity-90 italic">
                Aurelius V.
              </p>
              <span className="text-[#C67C4E] text-[9px] uppercase tracking-[0.3em] font-bold py-1 px-3 border border-[#C67C4E]/30 rounded-full">
                Founder & Chief Artisan
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
