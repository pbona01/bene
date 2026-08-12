import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

export default function NewDreamsCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "NewDreams Storefront Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/newdreams",
    "description": "Case study of NewDreams streetwear e-commerce experience created by Benestudio."
  };

  return (
    <>
      <SEO
        title="NewDreams Streetwear E-commerce Case Study | Benestudio"
        description="Explore how Benestudio designed a cinematic dark-mode e-commerce web storefront for streetwear brand NewDreams."
        canonical="https://benestudio.com.ng/work/newdreams"
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
              FASHION & E-COMMERCE
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              NewDreams
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              A cinematic dark-mode e-commerce storefront combining high-contrast lookbook imagery with fluid mobile collection discovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://newdreamss.vercel.app/"
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
              src="https://i.postimg.cc/JnTYCWZQ/image.png"
              alt="NewDreams streetwear storefront interface by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Structured Metadata Grid */}
          <div className="mt-12 glass p-8 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-accent-purple font-bold block mb-1">CLIENT / PROJECT</span>
              <p className="text-white text-sm font-sans font-semibold">NewDreams</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">INDUSTRY</span>
              <p className="text-white text-sm font-sans font-semibold">Streetwear & Independent Fashion</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">WHAT WE BUILT</span>
              <p className="text-white text-sm font-sans font-semibold">Cinematic E-commerce Web Storefront</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">LIVE SITE</span>
              <a href="https://newdreamss.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-sans font-semibold underline hover:text-accent-purple">
                newdreamss.vercel.app
              </a>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. CONTEXT & PROBLEM</span>
              <h2 className="text-2xl font-bold text-white mb-4">Establishing a Distinct Streetwear Visual Identity</h2>
              <p className="mb-4">
                Independent streetwear brands rely heavily on atmosphere and brand attitude. Standard e-commerce templates feel generic and strip away brand authority, making limited-edition collection drops feel uninspiring.
              </p>
              <p>
                NewDreams needed a digital experience that carried the visual weight of the brand while keeping product discovery fluid on mobile devices.
              </p>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE APPROACH</span>
              <h2 className="text-2xl font-bold text-white mb-4">Dark-Mode Atmosphere & Fluid Mobile Discovery</h2>
              <p className="mb-4">
                Benestudio developed a custom dark-theme e-commerce experience designed for high visual impact and fast mobile performance.
              </p>
              <ul className="space-y-3 text-sm font-sans text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>High-Contrast Lookbook Galleries:</strong> Full-bleed imagery paired with tight typography.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Responsive Product Cards:</strong> Designed for effortless scrolling and quick sizing checks on mobile screens.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Performance Image Loading:</strong> Next-gen image compression ensuring zero layout lag during drop traffic spikes.</span>
                </li>
              </ul>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. FUNCTIONAL OUTCOME</span>
              <h2 className="text-2xl font-bold text-white mb-4">Verified Live Web Storefront</h2>
              <p>
                Deployed live at <a href="https://newdreamss.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-accent-purple">newdreamss.vercel.app</a>, delivering a digital storefront that matches the brand's creative ambition.
              </p>
            </section>
          </div>

          {/* Bottom CTA & Next Project Navigation */}
          <div className="mt-20 glass p-10 rounded-3xl border border-white/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to elevate your brand's digital presence?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
              Benestudio designs and builds custom e-commerce experiences and digital platforms.
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
              to="/work/plugsy"
              className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-accent-purple transition-colors"
            >
              Plugsy Case Study <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
