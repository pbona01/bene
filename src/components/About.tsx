import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4]"
        >
          {/* Orange Glow Behind */}
          <div className="absolute inset-0 bg-accent-purple blur-[80px] opacity-30 transform scale-95" />
          
          <img 
            src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg" 
            alt="Bene - Founder" 
            className="relative w-full h-full object-cover object-center rounded-3xl z-10 border border-white/5 shadow-2xl"
            referrerPolicy="no-referrer"
          />
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
            THE MASTERMIND
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter">
            Led by <span className="text-accent-purple">Bene.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            We specialize in high-converting web design, custom automations, and strategic digital growth. BENE Studio partners with ambitious brands to build scalable digital ecosystems that drive traffic, generate qualified leads, and maximize revenue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
