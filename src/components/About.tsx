import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Conversion Rate Optimization",
    "UI/UX Design",
    "Web Development",
    "SEO Strategy",
    "Brand Identity",
    "Lead Generation",
  ];

  return (
    <section id="about" className="relative py-16 md:py-32 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-accent-purple font-mono text-sm tracking-[0.3em] uppercase">
            Why Work With Us
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter uppercase">
            Leads, Sales, <br /> and Growth
          </h2>
          <p className="mt-8 text-lg text-white/50 max-w-md leading-relaxed">
            We don't just build pretty websites. We build strategic digital assets designed to convert visitors into high-value clients. Our approach combines stunning design with proven marketing principles to deliver measurable ROI for your business.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-accent-purple/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent-purple group-hover:scale-150 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
