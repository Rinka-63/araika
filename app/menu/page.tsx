"use client";

import { useState, useMemo } from "react";
import menuData from "@/data/Menu.json";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  Variants,
} from "framer-motion";

/* =========================
   TYPE DEFINITIONS
========================= */
interface MenuItem {
  id: number;
  nama: string;
  harga: string;
  img: string;
  deskripsi: string;
  kategori: string;
}

/* =========================
   VARIANTS (SMOOTH ANIMATION)
========================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // Lebih cepat untuk grid padat
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

/* =========================
   MENU CARD (OPTIMIZED FOR 4x2 GRID)
========================= */
function MenuCard({ item }: { item: MenuItem }) {
  return (
    <m.div
      layout
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="bg-[#241C1A] rounded-2xl md:rounded-3xl border border-white/5 shadow-xl overflow-hidden flex flex-col group h-full transition-all duration-300 hover:border-[#C67C4E]/30"
    >
      {/* IMAGE AREA - Tinggi disesuaikan agar proporsional di grid kecil */}
      <div className="relative h-40 md:h-64 overflow-hidden bg-[#1A1412]">
        <img
          src={`${item.img}?w=500&q=75`}
          alt={item.nama}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#C67C4E] px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[7px] md:text-[10px] font-black text-white uppercase tracking-widest z-10">
          {item.kategori}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A] via-transparent to-transparent opacity-80" />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-3 md:p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-xs md:text-xl font-serif text-[#FDFCF0] leading-tight mb-1 md:mb-3 group-hover:text-[#C67C4E] transition-colors line-clamp-1">
          {item.nama}
        </h3>

        {/* Deskripsi diperhalus: hanya muncul 1 baris di mobile */}
        <p className="text-[9px] md:text-sm text-[#FDFCF0]/40 line-clamp-1 md:line-clamp-2 leading-relaxed mb-3 md:mb-6 font-light">
          {item.deskripsi}
        </p>

        {/* Price Row */}
        <div className="mt-auto flex justify-between items-center pt-2 md:pt-4 border-t border-white/5">
          <span className="hidden md:block text-[8px] md:text-[10px] uppercase tracking-widest text-[#C67C4E] font-bold">
            Price
          </span>
          <p className="text-[#FDFCF0] font-serif text-sm md:text-xl italic font-bold">
            {item.harga}
          </p>
        </div>
      </div>
    </m.div>
  );
}

export default function FullMenuPage() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(menuData.map((i) => i.kategori))],
    [],
  );

  const filteredMenu = useMemo(() => {
    return filter === "All"
      ? menuData
      : menuData.filter((item) => item.kategori === filter);
  }, [filter]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="py-20 md:py-32 px-3 md:px-10 min-h-screen bg-[#1A1412]">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <m.div className="text-center mb-10">
            <h1 className="text-3xl md:text-6xl font-serif text-[#FDFCF0] mb-4">
              Our Masterpiece
            </h1>
            <div className="w-12 md:w-20 h-1 bg-[#C67C4E] mx-auto rounded-full" />
          </m.div>

          {/* TAB FILTER (Scrollable di Mobile) */}
          <div className="sticky top-16 z-30 bg-[#1A1412]/90 backdrop-blur-md py-4 mb-8 border-b border-white/5 overflow-x-auto no-scrollbar">
            <div className="flex justify-center min-w-full md:min-w-0">
              {/* min-w-full dan justify-center di atas memastikan dia center jika muat */}
              <div className="flex gap-2 md:gap-3 px-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                      filter === cat
                        ? "bg-[#C67C4E] text-white border-[#C67C4E] shadow-lg"
                        : "bg-white/5 text-white/60 border-white/10 hover:border-[#C67C4E]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID SYSTEM: 2 kolom mobile, 4 kolom desktop */}
          <m.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((item) => (
                <MenuCard key={item.id} item={item as MenuItem} />
              ))}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
