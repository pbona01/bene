import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left: Images */}
        <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
          {/* Orange Glow Behind */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-accent-purple blur-[80px] rounded-full" 
          />
          
          {/* Image 1: Paul (Back / Top Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -40, y: -40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.1, type: "spring", bounce: 0.2 }}
            className="absolute top-0 left-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 group cursor-pointer"
          >
            <img 
              src="https://i.postimg.cc/DyHrpbH7/IMG-20260414-WA0043.jpg" 
              alt="Paul Moses - Co-Founder" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 glass px-5 py-2.5 rounded-full shadow-lg border border-white/10 flex flex-col">
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">Paul Moses</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">CO-FOUNDER</p>
            </div>
          </motion.div>

          {/* Image 2: Peter (Front / Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-30 group cursor-pointer"
          >
            <img 
              src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg" 
              alt="Peter Benedict - Founder & CEO" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-2.5 rounded-full shadow-lg border border-white/10 text-center flex flex-col items-center">
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">Peter Benedict</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">CEO</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <span className="text-accent-purple font-mono text-sm tracking-[0.2em] uppercase font-bold">
            WE HANDLE EVERYTHING
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter">
            Your Website, <br /><span className="text-accent-purple">Done For You.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            We are Peter and Paul. We know running a business is hard enough without worrying about tech. For a <strong>$300 one-time setup</strong> and <strong>$50/month</strong>, we build your site, host it securely, and provide ongoing support. No hidden fees. No technical stress.
          </p>
          
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple text-xs">✓</div>
              Fast Turnaround
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple text-xs">✓</div>
              Easy Maintenance
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple text-xs">✓</div>
              Focuses on Getting You Results
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
