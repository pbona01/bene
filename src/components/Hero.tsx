import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      style={{ position: "relative" }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-32 pb-12 overflow-hidden z-10"
    >
      {/* Left Content: Editorial Typography */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="w-full md:w-1/2 z-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent-purple font-mono text-sm tracking-[0.4em] uppercase mb-4 block">
            Websites For Local Businesses
          </span>
          <motion.h1 
            className="text-6xl md:text-[8rem] font-black leading-[0.9] tracking-tighter uppercase text-white"
            whileHover={{ x: -5, y: -2 }}
          >
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, -5, 5, -2, 2, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="block"
            >
              GET MORE
            </motion.span>
            <motion.span
              className="text-gradient block"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, -5, 2, -2, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              CUSTOMERS
            </motion.span>
          </motion.h1>
          <p className="mt-8 text-lg md:text-xl text-white/40 max-w-md font-medium leading-relaxed">
            Get a professional website for your barbershop, salon, or local business. $300 setup. $50/month. We handle everything.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a href="mailto:hello@benestudio.com.ng" className="group relative px-8 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-all duration-300 hover:glow-neon hover:scale-105 inline-block">
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Get Your Website <ArrowUpRight size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30">Built for Real Businesses</span>
              <span className="text-sm font-bold text-white">Full Ongoing Support</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content: Live Snapshot (Iframe) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-[45%] h-[50vh] md:h-[70vh] relative mt-12 md:mt-0"
      >
        <div className="absolute inset-0 glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
          {/* Browser Frame */}
          <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 z-20">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <div className="ml-2 text-[8px] text-white/20 font-mono tracking-widest uppercase">
              newdreamss.vercel.app
            </div>
          </div>
          
          {/* Live Iframe */}
          <div className="absolute inset-0 pt-10">
            <img 
              src="https://i.postimg.cc/MpZzkYT1/20260414-213238.jpg" 
              alt="New Dreams Preview"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 transform-gpu"
            />
          </div>
          
          {/* Overlay to prevent interaction unless hovered on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-purple/20 blur-3xl rounded-full transform-gpu will-change-transform" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-cyan/20 blur-3xl rounded-full transform-gpu will-change-transform" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8 flex items-center gap-4"
      >
        <div className="w-8 h-[1px] bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
