"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import menuData from "@/data/Menu.json";

export default function FeaturedMenu() {
  const favorites = menuData.filter((item) => item.isFavorite).slice(0, 3);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi untuk reset timer auto-slide
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // Efek Auto-Slide setiap 3 detik
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === favorites.length - 1 ? 0 : prevIndex + 1,
        ),
      3000,
    );

    return () => resetTimeout();
  }, [index, favorites.length]);

  return (
    <LazyMotion features={domAnimation}>
      <section className="pt-10 pb-20 px-6 md:px-10 bg-[#1A1412] overflow-hidden relative">
        {/* --- VERTICAL CONNECTOR LINE --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <m.div
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            viewport={{ once: true }}
            className="w-[1px] bg-gradient-to-b from-transparent via-[#C67C4E]/50 to-[#C67C4E]"
          />
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-2 h-2 rounded-full bg-[#C67C4E] -mt-1 shadow-[0_0_10px_#C67C4E]"
          />
        </div>
        {/* ------------------------------ */}

        <div className="max-w-6xl mx-auto pt-10">
          {" "}
          {/* Tambah padding top agar garis tidak menabrak teks */}
          {/* HEADER */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] mb-4">
              Our Signature
            </h2>
            <div className="w-16 h-1 bg-[#C67C4E] mx-auto rounded-full" />
          </m.div>
          {/* CAROUSEL CONTAINER (Isi tetap sama seperti kode kamu) */}
          {/* ... sisa kode carousel dan grid ... */}
          <div className="relative w-full max-w-sm mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8 mb-16">
            {/* MOBILE SLIDER */}
            <div className="block md:hidden relative h-[420px] w-full">
              {/* ... isi slider ... */}
              <AnimatePresence mode="wait">
                <m.div
                  key={favorites[index].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="bg-[#241C1A] rounded-3xl border border-white/5 shadow-2xl overflow-hidden h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`${favorites[index].img}?w=600&q=75`}
                        alt={favorites[index].nama}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#C67C4E] px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                        Favorite
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-[#FDFCF0] mb-2">
                        {favorites[index].nama}
                      </h3>
                      <p className="text-xs text-white/40 line-clamp-2 mb-4">
                        {favorites[index].deskripsi}
                      </p>
                      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] text-[#C67C4E] font-bold uppercase tracking-widest">
                          Price
                        </span>
                        <p className="text-[#FDFCF0] font-serif text-xl italic font-bold">
                          {favorites[index].harga}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              </AnimatePresence>
              {/* DOTS */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                {favorites.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === i ? "w-6 bg-[#C67C4E]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8 w-full col-span-3">
              {favorites.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ y: -10 }}
                  className="bg-[#241C1A] rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={`${item.img}?w=600&q=75`}
                      alt={item.nama}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241C1A] via-transparent opacity-80" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-[#FDFCF0] mb-3 group-hover:text-[#C67C4E] transition-colors">
                      {item.nama}
                    </h3>
                    <p className="text-sm text-white/40 mb-6 line-clamp-2">
                      {item.deskripsi}
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center">
                      <p className="text-[#FDFCF0] font-serif text-2xl italic">
                        {item.harga}
                      </p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
          {/* EXPLORE BUTTON */}
          <div className="text-center mt-12">
            <Link href="/menu">
              <m.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C67C4E] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl"
              >
                Explore Full Menu
              </m.button>
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
