"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Komponen Pendukung Animasi Angka
function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(direction === "down" ? value : 0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative pt-24 pb-10 bg-[#1A1412] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-2xl md:text-6xl font-serif text-[#FDFCF0] mb-3 md:mb-6">
            The Soul of Araika
          </h1>
          <div className="w-12 md:w-24 h-0.5 md:h-1 bg-[#C67C4E] mx-auto"></div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-[200px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-white/5"
          >
            <img
              src="/story.png"
              alt="Coffee Story"
              className="w-full h-full object-cover brightness-90"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 md:space-y-6"
          >
            <h2 className="text-sm md:text-3xl font-serif text-[#FDFCF0] leading-tight">
              Started from a Small Dream
            </h2>
            <div className="text-[9px] md:text-lg leading-relaxed text-white/80 space-y-2 md:space-y-4 font-light">
              <p>
                Founded in 2023,{" "}
                <span className="text-[#C67C4E] font-semibold">Araika</span>{" "}
                began as a small coffee cart.
              </p>
              <p>We source our beans directly from local farmers.</p>
            </div>
            <div className="pt-2 md:pt-6">
              <blockquote className="border-l-2 md:border-l-4 border-[#C67C4E] pl-2 md:pl-6 italic text-[9px] md:text-xl text-[#C67C4E]/90 leading-tight">
                "Coffee is clarity in a busy world."
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* KONEKTOR DI ATAS STATS */}
        <div className="flex flex-col items-center mt-20 -mb-px">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[1px] bg-gradient-to-b from-transparent via-[#C67C4E]/50 to-[#C67C4E]"
          />
          {/* Titik Cahaya/Dot tepat di atas garis border stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="w-1.5 h-1.5 rounded-full bg-[#C67C4E] shadow-[0_0_8px_#C67C4E]"
          />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 gap-2 md:gap-8 text-center border-white/10 pt-10"
        >
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">
              <Counter value={3} />+
            </h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Years
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">
              <Counter value={15} />+
            </h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Blends
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">
              <Counter value={50} />
              <span>k+</span>
            </h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Clients
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-4xl font-bold text-[#C67C4E]">
              <Counter value={12} />
            </h3>
            <p className="text-white/50 uppercase text-[6px] md:text-xs tracking-tighter md:tracking-[0.3em] mt-1">
              Farmers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
