"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mainTitle = "Experience the Art of Coffee";

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1A1412]" // BG Espresso
    >
      {/* BACKGROUND IMAGE WITH PARALLAX */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
          className="w-full h-full object-cover brightness-[0.6]"
          alt="Premium Coffee"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#1A1412]" />
      </motion.div>

      {/* CONTENT BOX */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Container Motion untuk Trigger Looping */}
        <motion.div
          initial="hidden"
          whileInView="visible" // Menggunakan whileInView agar terulang
          viewport={{ once: false, amount: 0.1 }} // once: false agar looping
          className="flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="text-[#C67C4E] text-[10px] md:text-xs font-bold uppercase mb-6 tracking-[0.4em]"
          >
            Crafted with Passion Since 2018
          </motion.span>

          {/* TEXT WITH SHIMMER EFFECT */}
          <h1 className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-5xl md:text-8xl font-serif mb-8 leading-[1.1]">
            {mainTitle.split(" ").map((word, i) => (
              <span
                key={i}
                className="relative overflow-hidden inline-block py-1"
              >
                <motion.span
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 },
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    y: {
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    },
                    backgroundPosition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#C67C4E] to-white bg-[length:200%_auto] drop-shadow-sm"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Divider Line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 },
            }}
            transition={{ delay: 1, duration: 1 }}
            className="w-32 h-[1px] bg-white/40 mb-8"
          />

          {/* Italic Quote */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-white text-lg md:text-2xl font-light italic tracking-[0.1em] drop-shadow-md"
          >
            "Rasa yang bercerita, aroma yang menetap."
          </motion.p>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#C67C4E]"
          />
        </div>
      </div>
    </section>
  );
}
