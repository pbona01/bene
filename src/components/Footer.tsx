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

            <div className="mt-12 flex flex-col sm:flex-row gap-8">
              {/* Founder */}
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-purple/30 shadow-[0_0_20px_rgba(249,115,22,0.15)] shrink-0">
                  <img 
                    src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg" 
                    alt="Peter Benedict" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Peter Benedict</h3>
                  <p className="text-white/40 text-sm">Founder & CEO</p>
                </div>
              </div>

              {/* Co-Founder */}
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-purple/30 shadow-[0_0_20px_rgba(249,115,22,0.15)] shrink-0">
                  <img 
                    src="https://i.postimg.cc/DyHrpbH7/IMG-20260414-WA0043.jpg" 
                    alt="Co-Founder" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Paul Moses</h3>
                  <p className="text-white/40 text-sm">Co-Founder</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 md:items-end w-full md:w-auto">
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const business = formData.get('business');
                const message = formData.get('message');
                
                const subject = encodeURIComponent(`New Lead from ${name} (${business})`);
                const body = encodeURIComponent(`Name: ${name}\nBusiness: ${business}\n\nMessage:\n${message}`);
                
                window.location.href = `mailto:hello@benestudio.com.ng?subject=${subject}&body=${body}`;
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full md:w-[400px] flex flex-col gap-4 glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">Start a Project</h3>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all" 
              />
              <input 
                type="text" 
                name="business" 
                placeholder="Business Name" 
                required 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all" 
              />
              <textarea 
                name="message" 
                placeholder="Project details..." 
                required 
                rows={3} 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all resize-none" 
              />
              <button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-accent-purple hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
              >
                Send Inquiry <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>

            <div className="flex gap-6 md:gap-8 mt-4">
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
