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
    "description": "Benestudio is a remote digital design and technology studio creating premium websites and client systems."
  };

  return (
    <>
      <SEO
        title="About Benestudio | Remote Digital Design and Technology Studio"
        description="Learn about Benestudio, a remote studio designing websites and client systems for businesses locally and internationally."
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
              A digital studio focused on work that looks good and works properly.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-base md:text-lg text-white/70 leading-relaxed">
              <p>
                Benestudio is a remote digital design and technology studio creating premium websites and client systems for businesses locally and internationally.
              </p>
              <p>
                The studio was built around a simple belief: strong digital work should not only look impressive. It should communicate clearly, guide users and support what the business is trying to achieve.
              </p>
              <p>
                Clients work directly with Benestudio from the first conversation through design, development, launch and agreed ongoing support.
              </p>

              <div className="pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors"
                >
                  Start a Conversation <ArrowUpRight size={18} />
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
                <p className="text-xs text-accent-purple font-mono uppercase tracking-wider">FOUNDER</p>
                <p className="mt-3 text-xs text-white/60 leading-relaxed">
                  Direct lead on strategy, interface design and technical implementation across all Benestudio client projects.
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
                Our 5-Stage Process to Launch Your Project
              </h2>
              <p className="mt-3 text-white/60 text-sm md:text-base max-w-2xl">
                A structured, fast-moving workflow designed to take your business from initial contact to a live, high-performing digital experience within 5–7 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 01</span>
                  <h3 className="text-base font-bold text-white mb-2">Fill Form & Book a Call</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Submit your project details via our inquiry form and pick a convenient time for a discovery conversation.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 02</span>
                  <h3 className="text-base font-bold text-white mb-2">Position</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We clarify your brand message, key user journeys, structure, and strategic project goals.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 03</span>
                  <h3 className="text-base font-bold text-white mb-2">Build</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We craft custom UI/UX design and develop a mobile-first, high-performance website or system.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 04</span>
                  <h3 className="text-base font-bold text-white mb-2">Launch</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We test performance, connect your custom domain, and push your site live within 5–7 days.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">STAGE 05</span>
                  <h3 className="text-base font-bold text-white mb-2">Support</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Ongoing technical maintenance, updates, and monitoring to keep your experience running smoothly.
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
                Visual aesthetics guided by strong typographic hierarchy, layout rhythm, and brand clarity.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold block mb-2">02</span>
              <h3 className="text-lg font-bold text-white mb-2">Practical Technology</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Modern, fast, and accessible frontend code engineered for smooth mobile performance.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold block mb-2">03</span>
              <h3 className="text-lg font-bold text-white mb-2">Direct Communication</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                No middle management or convoluted agency handoffs. You work directly with the builder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
