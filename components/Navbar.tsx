"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logika Menutup Menu saat Klik, Scroll, atau Swipe di luar area
  useEffect(() => {
    const handleOutsideActivity = (event: Event) => {
      // Jika menu terbuka dan aktivitas terjadi di luar elemen navRef
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Deteksi klik
      document.addEventListener("mousedown", handleOutsideActivity);
      // Deteksi geser mouse (scroll wheel)
      document.addEventListener("wheel", handleOutsideActivity);
      // Deteksi geser layar (touch swipe untuk HP)
      document.addEventListener("touchmove", handleOutsideActivity);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideActivity);
      document.removeEventListener("wheel", handleOutsideActivity);
      document.removeEventListener("touchmove", handleOutsideActivity);
    };
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [pathname]);

  const isHomePage = pathname === "/";
  const navTextColor =
    !isScrolled && isHomePage && !isOpen ? "text-white" : "text-white";
  const navBgColor =
    isScrolled || isOpen
      ? "bg-[#1A1412]/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-[60] transition-all duration-300 ${navBgColor} ${navTextColor}`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5 md:py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 z-[70] group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#C67C4E]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/logo.png"
              alt="Logo Araika"
              className="w-9 h-9 md:w-11 md:h-11 object-contain relative z-10 brightness-110 contrast-110"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[#EAD8B1] text-xl md:text-2xl font-serif font-bold tracking-[0.1em] leading-none mb-0.5">
              ARAIKA
            </span>
            <span className="text-[#C67C4E] text-[7px] md:text-[8px] font-bold tracking-[0.4em] uppercase opacity-80 leading-none">
              Coffee Co.
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-[11px] lg:text-[#FDFCF0] uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group transition-colors hover:text-[#C67C4E]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#C67C4E] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-[70]">
            <button
              className={`hidden md:block px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                isScrolled || !isHomePage
                  ? "bg-[#C67C4E] text-[#2C1810] hover:bg-[#C67C4E] hover:text-[#FDFCF0]"
                  : "bg-[#C67C4E] text-[#2C1810] hover:bg-[#C67C4E] hover:text-[#FDFCF0]"
              }`}
            >
              Order Now
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 md:hidden p-2"
            >
              <span
                className={`w-6 h-0.5 bg-[#FDFCF0] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-[#FDFCF0] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-[#FDFCF0] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile - Versi Lebih Kecil & Kompak */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[100%] right-4 w-[250px] bg-[#241C1A] backdrop-blur-xl border border-white/10 shadow-2xl md:hidden overflow-hidden z-[55] rounded-2xl mt-2"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className={`block w-full px-4 py-3 text-sm font-bold tracking-widest uppercase rounded-xl transition-all ${
                      pathname === link.href
                        ? "bg-[#C67C4E]/20 text-[#C67C4E]"
                        : "text-[#FDFCF0]/80 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Divider: Putih Transparan */}
              <div className="h-[1px] bg-white/5 my-2 mx-4" />

              <div className="px-2 pb-2">
                <button className="w-full py-3 bg-[#C67C4E] text-white rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] shadow-md active:scale-95 transition-transform">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
