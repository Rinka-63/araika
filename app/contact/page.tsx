"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-10 bg-[#1A1412]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#FDFCF0] mb-4">
            Get in Touch
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Punya pertanyaan tentang biji kopi kami atau ingin memesan tempat
            untuk acara spesial? Kami siap melayani Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#241C1A] p-8 rounded-3xl border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-serif text-[#FDFCF0] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Item Info */}
                {[
                  {
                    icon: <FiMapPin size={24} />,
                    title: "Location",
                    desc: "Jl. Slamet Riyadi No. 123, Surakarta",
                  },
                  {
                    icon: <FiPhone size={24} />,
                    title: "Phone",
                    desc: "+62 812 3456 7890",
                  },
                  {
                    icon: <FiMail size={24} />,
                    title: "Email",
                    desc: "hello@araika.coffee",
                  },
                  {
                    icon: <FiClock size={24} />,
                    title: "Opening Hours",
                    desc: "Setiap Hari: 08.00 - 22.00",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="p-4 bg-[#C67C4E]/10 rounded-2xl text-[#C67C4E]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#FDFCF0] tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-white/50 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#241C1A] p-8 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C67C4E]">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1A1412] px-4 py-4 rounded-xl border border-white/10 text-white focus:border-[#C67C4E] focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C67C4E]">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#1A1412] px-4 py-4 rounded-xl border border-white/10 text-white focus:border-[#C67C4E] focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C67C4E]">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A1412] px-4 py-4 rounded-xl border border-white/10 text-white focus:border-[#C67C4E] focus:outline-none transition-all"
                  placeholder="Subjek"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C67C4E]">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#1A1412] px-4 py-4 rounded-xl border border-white/10 text-white focus:border-[#C67C4E] focus:outline-none transition-all resize-none"
                  placeholder="Tuliskan pesan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C67C4E] text-white py-4 rounded-xl font-bold hover:bg-[#A6633B] transition-all shadow-lg uppercase tracking-[0.2em] text-xs"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
