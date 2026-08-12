import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

export default function PlugsyCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Plugsy Web Platform Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/plugsy",
    "description": "Case study of Plugsy connected web platform designed and developed by Benestudio."
  };

  return (
    <>
      <SEO
        title="Plugsy Web Platform Case Study | Benestudio"
        description="See how Benestudio designed and developed Plugsy, a mobile-optimized connected web platform for digital identity and commercial interactions."
        canonical="https://benestudio.com.ng/work/plugsy"
        jsonLd={caseStudyJsonLd}
      />

      <article className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Selected Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              CONNECTED WEB PLATFORM
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Plugsy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              A mobile-optimized web platform unifying professional identity, portfolio showcases, and direct commercial interactions into a singular experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://plugsy.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple text-white font-bold text-sm hover:bg-accent-indigo transition-colors"
              >
                Visit Live Website <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Featured Screenshot */}
          <div className="mt-12 rounded-3xl overflow-hidden glass border border-white/10 aspect-[16/9] relative bg-black/40">
            <img
              src="https://i.postimg.cc/2yKthf58/image.png"
              alt="Plugsy web platform interface designed by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Structured Metadata Grid */}
          <div className="mt-12 glass p-8 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-accent-purple font-bold block mb-1">CLIENT / PROJECT</span>
              <p className="text-white text-sm font-sans font-semibold">Plugsy</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">INDUSTRY</span>
              <p className="text-white text-sm font-sans font-semibold">Creator Tech & Professional Identity</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">WHAT WE BUILT</span>
              <p className="text-white text-sm font-sans font-semibold">Connected Web Platform & UX System</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">LIVE SITE</span>
              <a href="https://plugsy.ng/" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-sans font-semibold underline hover:text-accent-purple">
                plugsy.ng
              </a>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. CONTEXT & PROBLEM</span>
              <h2 className="text-2xl font-bold text-white mb-4">Fragmented Digital Identity Across Scattered Links</h2>
              <p className="mb-4">
                Creators, service professionals, and modern founders frequently struggle with fragmented online presence. Work samples, social proof, contact details, and booking links are scattered across separate platforms, resulting in dropped intent when prospective clients attempt to engage.
              </p>
              <p>
                Plugsy needed a unified, mobile-first digital destination where users could present a crisp professional identity and guide visitors toward concrete action.
              </p>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE APPROACH</span>
              <h2 className="text-2xl font-bold text-white mb-4">How Benestudio Solved It</h2>
              <p className="mb-4">
                We designed a clean visual framework prioritizing identity clarity, high visual contrast, and immediate access to primary actions.
              </p>
              <ul className="space-y-3 text-sm font-sans text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Mobile-First Interface Architecture:</strong> Optimized touch layout for effortless navigation on smartphones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Clear Action Hierarchy:</strong> Primary contact, service details, and work showcases placed above the fold.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Fast Page Loads:</strong> Lightweight frontend code ensuring fast performance under mobile network conditions.</span>
                </li>
              </ul>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. FUNCTIONAL OUTCOME</span>
              <h2 className="text-2xl font-bold text-white mb-4">Verified Live Platform</h2>
              <p>
                Plugsy was successfully launched and deployed live at <a href="https://plugsy.ng/" target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-accent-purple">plugsy.ng</a>, delivering a central digital anchor that presents user identity with clarity and commercial readiness.
              </p>
            </section>
          </div>

          {/* Bottom CTA & Next Project Navigation */}
          <div className="mt-20 glass p-10 rounded-3xl border border-white/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Building a platform or custom web application?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
              Benestudio designs and builds web experiences tailored to your commercial goals.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold text-sm tracking-wider hover:bg-accent-indigo transition-colors inline-block uppercase"
            >
              Start a Project
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-white/40">NEXT CASE STUDY</span>
            <Link
              to="/work/ubbcakes"
              className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-accent-purple transition-colors"
            >
              UBBCakes Case Study <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
