"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1412] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-serif font-bold text-3xl tracking-tighter text-[#EAD8B1]">
              ARAIKA
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Menghadirkan harmoni rasa dalam setiap cangkir. Kami percaya kopi
              adalah jembatan cerita antara petani dan penikmatnya.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C67C4E] hover:border-[#C67C4E] transition-all cursor-pointer">
                <span className="text-[10px] text-white">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C67C4E] hover:border-[#C67C4E] transition-all cursor-pointer">
                <span className="text-[10px] text-white">TW</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-[#C67C4E] text-[10px] uppercase tracking-[0.3em] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/"
                  className="text-[#FDFCF0]/60 hover:text-[#C67C4E] text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-[#FDFCF0]/60 hover:text-[#C67C4E] text-sm transition-colors"
                >
                  Full Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#FDFCF0]/60 hover:text-[#C67C4E] text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-[#C67C4E] text-[10px] uppercase tracking-[0.3em] font-bold">
              Visit Us
            </h4>
            <p className="text-[#FDFCF0]/60 text-sm text-center md:text-left leading-loose">
              Jl.Slamet Riyadi No. 123
              <br />
              Surakarta, Indonesia
              <br />
              <span className="text-white/30">Setiap Hari: 08:00 - 22:00</span>
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-widest text-center">
            © 2026 Araika Coffee Co.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
