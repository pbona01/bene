import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Benestudio",
    "url": "https://benestudio.com.ng/about",
    "description": "Benestudio is a remote digital design and technology studio creating premium websites, digital products and client systems."
  };

  return (
    <>
      <SEO
        title="About Benestudio | Remote Digital Design & Technology Studio"
        description="Learn about Benestudio, a remote studio designing websites, digital products and client systems for ambitious businesses globally."
        canonical="https://benestudio.com.ng/about"
        jsonLd={aboutJsonLd}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              ABOUT BENESTUDIO
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              A digital studio focused on work that looks sharp and operates properly.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-base md:text-lg text-white/70 leading-relaxed font-light">
              <p>
                Benestudio is a remote digital design and technology studio creating websites, digital products, and client systems for ambitious businesses globally.
              </p>
              <p>
                The studio was built around a simple conviction: digital work should look exceptional while guiding user behavior and driving commercial outcomes.
              </p>
              <p>
                Clients work directly with the builder—from initial positioning and interface design to frontend engineering, deployment, and ongoing technical support.
              </p>

              <div className="pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors uppercase text-sm tracking-wider"
                >
                  Start a Project <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-black/50">
                  <img
                    src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg"
                    alt="Peter Benedict - Founder of Benestudio"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">Peter Benedict</h2>
                <p className="text-xs text-accent-purple font-mono uppercase tracking-wider font-bold">FOUNDER & LEAD BUILDER</p>
                <p className="mt-3 text-xs text-white/60 leading-relaxed">
                  Direct lead on strategy, interface design, frontend implementation and client system architecture across all Benestudio projects.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work / Process Section */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="mb-12">
              <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
                HOW WE WORK
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
                Our 5-Stage Project Execution Process
              </h2>
              <p className="mt-3 text-white/60 text-sm md:text-base max-w-2xl">
                A structured, transparent workflow designed to take your business from initial inquiry to a live, high-performing digital experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 01</span>
                  <h3 className="text-base font-bold text-white mb-2">Inquiry & Discovery</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Submit your project details via our form and schedule an initial discovery discussion to review goals.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 02</span>
                  <h3 className="text-base font-bold text-white mb-2">Positioning</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We define brand positioning, page structure, conversion pathways, and technical project scope.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 03</span>
                  <h3 className="text-base font-bold text-white mb-2">Design & Build</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We craft custom interface designs and develop a fast, mobile-first website or system.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 04</span>
                  <h3 className="text-base font-bold text-white mb-2">Launch</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We test mobile performance, connect custom domains, verify form routing, and push live.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 05</span>
                  <h3 className="text-base font-bold text-white mb-2">Support</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Ongoing technical monitoring, updates, and assistance to keep your experience running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold block mb-2">01</span>
              <h3 className="text-lg font-bold text-white mb-2">Considered Design</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Visual presentation guided by strong typographic hierarchy, layout rhythm, and brand clarity.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold block mb-2">02</span>
              <h3 className="text-lg font-bold text-white mb-2">Practical Engineering</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Modern, accessible frontend code engineered for speed and responsive mobile performance.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold block mb-2">03</span>
              <h3 className="text-lg font-bold text-white mb-2">Direct Collaboration</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                No account managers or convoluted agency handoffs. You work directly with the builder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
