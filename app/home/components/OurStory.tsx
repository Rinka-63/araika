"use client";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section id="story" className="pt-24 pb-20 px-4 md:px-10 bg-[#1A1412] min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          {/* text-2xl di mobile, md:text-6xl di desktop */}
          <h1 className="text-2xl md:text-6xl font-serif text-[#FDFCF0] mb-3 md:mb-6">
            The Soul of Araika
          </h1>
          <div className="w-12 md:w-24 h-0.5 md:h-1 bg-[#C67C4E] mx-auto"></div>
        </motion.div>

        {/* Content Section - Tetap 2 Kolom di Mobile */}
        <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            /* h-[200px] di mobile agar pas berdampingan dengan teks */
            className="relative h-[200px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-white/5"
          >
            <img
              src="/story.png"
              alt="Coffee Story"
              className="w-full h-full object-cover brightness-90"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 md:space-y-6"
          >
            {/* Ukuran font dikecilkan drastis di mobile agar muat */}
            <h2 className="text-sm md:text-3xl font-serif text-[#FDFCF0] leading-tight">
              Started from a Small Dream
            </h2>

            <div className="text-[9px] md:text-lg leading-relaxed text-white/80 space-y-2 md:space-y-4 font-light">
              <p>
                Founded in 2023, <span className="text-[#C67C4E] font-semibold">Araika</span> began
                as a small coffee cart on a busy street.
              </p>
              <p>
                We source our beans directly from local farmers.
              </p>
            </div>

            <div className="pt-2 md:pt-6">
              <blockquote className="border-l-2 md:border-l-4 border-[#C67C4E] pl-2 md:pl-6 italic text-[9px] md:text-xl text-[#C67C4E]/90 leading-tight">
                "Coffee is clarity in a busy world."
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Tetap 4 Kolom (Dikecilkan) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 gap-2 md:gap-8 mt-16 md:mt-24 text-center border-t border-white/10 pt-10"
        >
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">3+</h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Years
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">15+</h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Blends
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">50k+</h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Clients
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">12</h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Farmers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}