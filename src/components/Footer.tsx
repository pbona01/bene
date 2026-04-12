import { motion } from "motion/react";
import { ArrowUpRight, Github, X, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "X", icon: <X size={18} />, url: "https://x.com/BonaPeter169777" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
    { name: "Github", icon: <Github size={18} />, url: "#" },
  ];

  return (
    <footer id="contact" className="relative py-16 md:py-24 px-4 md:px-8 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter uppercase leading-none">
              Ready To <br /> Create?
            </h2>
            <p className="mt-6 text-base text-white/40 max-w-sm leading-relaxed">
              We're always open to new projects and collaborations. 
              Let's build something extraordinary together.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 md:items-end">
            <motion.a
              href="mailto:pbona717@gmail.com"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold text-white hover:text-accent-purple transition-colors flex items-center gap-2 md:gap-3 group break-all"
            >
              pbona717@gmail.com <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
            </motion.a>

            <div className="flex gap-8">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-accent-purple transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/30 font-mono tracking-widest uppercase">
            © 2026 BENE STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none" />
    </footer>
  );
}
