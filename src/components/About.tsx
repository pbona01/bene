import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Creative Direction",
    "UI/UX Design",
    "Motion Design",
    "Frontend Engineering",
    "3D Interaction",
    "Vibecoding",
  ];

  return (
    <section id="about" className="relative py-32 px-8 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-accent-purple font-mono text-sm tracking-[0.3em] uppercase">
            About Me
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter uppercase">
            The Vision <br /> Behind The <br /> Motion
          </h2>
          <p className="mt-8 text-lg text-white/50 max-w-md leading-relaxed">
            I specialize in building digital experiences that don't just work—they feel alive. 
            By combining high-end design with ultra-smooth motion, I create interfaces that 
            resonate with users on a visceral level.
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
