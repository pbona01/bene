import { motion } from "motion/react";
import { useState } from "react";

export default function About() {
  const [activeFounder, setActiveFounder] = useState<"peter" | "paul">("paul");

  return (
    <section id="about" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4]"
        >
          {/* Orange Glow Behind */}
          <div className="absolute inset-0 bg-accent-purple blur-[80px] opacity-30 transform scale-95" />
          
          {/* Image 1: Peter */}
          <div 
            onClick={() => setActiveFounder("peter")}
            className={`absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer transition-all duration-500 ${activeFounder === "peter" ? "z-30" : "z-10"}`}
          >
            <img 
              src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg" 
              alt="Peter Benedict - Founder" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute bottom-4 left-4 glass px-4 py-2 rounded-full shadow-lg transition-opacity duration-500 ${activeFounder === "peter" ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}>
              <p className="text-xs sm:text-sm font-bold text-white">Peter Benedict</p>
              <p className="text-[10px] text-white/60 uppercase tracking-wider">CEO</p>
            </div>
          </div>

          {/* Image 2: Paul */}
          <div 
            onClick={() => setActiveFounder("paul")}
            className={`absolute bottom-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer transition-all duration-500 ${activeFounder === "paul" ? "z-30" : "z-20"}`}
          >
            <img 
              src="https://i.postimg.cc/DyHrpbH7/IMG-20260414-WA0043.jpg" 
              alt="Paul Moses - Co-Founder" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute bottom-4 right-4 glass px-4 py-2 rounded-full shadow-lg text-right transition-opacity duration-500 ${activeFounder === "paul" ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}>
              <p className="text-xs sm:text-sm font-bold text-white">Paul Moses</p>
              <p className="text-[10px] text-white/60 uppercase tracking-wider">Co-Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <span className="text-accent-purple font-mono text-sm tracking-[0.2em] uppercase font-bold">
            THE MASTERMINDS
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter">
            Meet the <span className="text-accent-purple">Founders.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            Led by Peter Benedict and Paul Moses, we specialize in high-converting web design, custom automations, and strategic digital growth. BENE Studio partners with ambitious brands to build scalable digital ecosystems that drive traffic, generate qualified leads, and maximize revenue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
