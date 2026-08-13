import { motion } from "motion/react";
import { ArrowUpRight, Github, X, Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const socialLinks = [
    { name: "X", icon: <X size={18} />, url: "https://x.com/BonaPeter169777" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "https://instagram.com" },
    { name: "Github", icon: <Github size={18} />, url: "https://github.com" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const business = formData.get("business")?.toString() || "";
      const website = formData.get("website")?.toString() || "";
      const service = formData.get("service")?.toString() || "";
      const timeline = formData.get("timeline")?.toString() || "";
      const budget = formData.get("budget")?.toString() || "";
      const message = formData.get("message")?.toString() || "";

      const subject = encodeURIComponent(`Project Inquiry: ${name} (${business})`);
      const body = encodeURIComponent(
        `Name: ${name}\nWork Email: ${email}\nBusiness Name: ${business}\nCurrent Website/Link: ${website}\nService Required: ${service}\nBudget Range: ${budget}\nDesired Timeline: ${timeline}\n\nProject Description:\n${message}`
      );

      window.location.href = `mailto:hello@benestudio.com.ng?subject=${subject}&body=${body}`;
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <footer id="contact" className="relative py-16 md:py-24 px-4 md:px-8 z-10 overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter uppercase leading-none">
              Have Something <br /> Worth Building?
            </h2>
            <p className="mt-6 text-base text-white/50 max-w-sm leading-relaxed">
              Tell us about your business or project. We design and build custom websites and client systems tailored to your goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase font-mono tracking-wider text-white/50">
              <Link to="/work" className="hover:text-white transition-colors">Work</Link>
              <span>•</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>•</span>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <span>•</span>
              <Link to="/interior-designers" className="hover:text-white transition-colors">Interior Designers</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <div className="flex items-center">
                <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#050505] shadow-[0_0_20px_rgba(249,115,22,0.2)] shrink-0">
                  <img 
                    src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg" 
                    alt="Peter Benedict - Founder" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                  Peter Benedict
                </h3>
                <p className="text-accent-purple text-xs md:text-sm tracking-widest mt-0.5 md:mt-1 uppercase">FOUNDER</p>
                <a href="mailto:hello@benestudio.com.ng" className="text-xs text-white/60 hover:text-white transition-colors mt-1 font-mono">
                  hello@benestudio.com.ng
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 md:items-end w-full">
            {!isContactPage ? (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:max-w-lg glass p-8 rounded-3xl border border-white/10 shadow-2xl text-left"
              >
                <span className="text-accent-purple font-mono text-xs uppercase tracking-widest font-bold block mb-2">
                  STUDIO ENGAGEMENT
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Start Your Project
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Ready to launch your website or client system? Fill out our inquiry form to discuss your goals directly with Peter Benedict.
                </p>
                
                <div className="space-y-3 mb-6 text-xs font-mono text-white/70 bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="flex justify-between">
                    <span className="text-white/40">STUDIO FOCUS:</span>
                    <span className="text-white font-bold">Websites & Client Systems</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white/40">DIRECT LEAD:</span>
                    <span className="text-white font-bold">Peter Benedict (Founder)</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white/40">TURNAROUND:</span>
                    <span className="text-white font-bold">Scope-based delivery</span>
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-accent-purple text-white hover:bg-accent-indigo font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm shadow-[0_0_25px_rgba(249,115,22,0.3)]"
                >
                  Start a Project
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            ) : (
              <div className="w-full md:max-w-md glass p-8 rounded-3xl border border-white/10 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Benestudio Remote Studio</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  Working with ambitious founders, business owners, and growing teams globally.
                </p>
                <div className="space-y-2 text-xs font-mono text-white/70">
                  <p>EMAIL: <a href="mailto:hello@benestudio.com.ng" className="text-white underline">hello@benestudio.com.ng</a></p>
                  <p>AVAILABILITY: Accepting select client projects</p>
                  <p>DELIVERY: Scope-based turnaround</p>
                </div>
              </div>
            )}

            <div className="flex gap-6 md:gap-8 mt-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-accent-purple transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-white/30 font-mono tracking-widest uppercase">
            © 2026 BENESTUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none" />
    </footer>
  );
}
