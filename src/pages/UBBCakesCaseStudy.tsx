import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

export default function UBBCakesCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "UBBCakes Storefront Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/ubbcakes",
    "description": "Case study of UBBCakes mobile-first bakery storefront created by Benestudio."
  };

  return (
    <>
      <SEO
        title="UBBCakes Website & Direct Inquiry Experience Case Study | Benestudio"
        description="Explore how Benestudio built a mobile-first digital storefront for UBBCakes, replacing chat order confusion with visual galleries and direct WhatsApp ordering."
        canonical="https://benestudio.com.ng/work/ubbcakes"
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
              FOOD & LOCAL COMMERCE
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              UBBCakes
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              A mobile-first digital storefront designed to showcase artisanal cake craftsmanship and streamline customer ordering via direct messaging integration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://ubbcakes.vercel.app/"
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
              src="https://i.postimg.cc/WzNNDrRC/20260415-082747.jpg"
              alt="UBBCakes storefront interface designed by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Structured Metadata Grid */}
          <div className="mt-12 glass p-8 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-accent-purple font-bold block mb-1">CLIENT / PROJECT</span>
              <p className="text-white text-sm font-sans font-semibold">UBBCakes</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">INDUSTRY</span>
              <p className="text-white text-sm font-sans font-semibold">Artisanal Food & Local Commerce</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">WHAT WE BUILT</span>
              <p className="text-white text-sm font-sans font-semibold">Mobile Storefront & WhatsApp Order Integration</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">LIVE SITE</span>
              <a href="https://ubbcakes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-sans font-semibold underline hover:text-accent-purple">
                ubbcakes.vercel.app
              </a>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. CONTEXT & PROBLEM</span>
              <h2 className="text-2xl font-bold text-white mb-4">Order Confusion Over Messaging Apps</h2>
              <p className="mb-4">
                UBBCakes creates custom celebration cakes. Before the web storefront, customer inquiries arrived via unstructured direct messages—leading to repetitive questions regarding cake sizes, flavor options, pickup dates, and pricing estimates.
              </p>
              <p>
                The bakery needed a clean digital catalog where mobile visitors could browse products easily, understand options, and submit structured orders.
              </p>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE APPROACH</span>
              <h2 className="text-2xl font-bold text-white mb-4">Visual-First Mobile Storefront</h2>
              <p className="mb-4">
                Benestudio built a mobile-first digital storefront focused on high-resolution product imagery and intuitive ordering pathways.
              </p>
              <ul className="space-y-3 text-sm font-sans text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Visual Category Galleries:</strong> Highlighting celebration, birthday, and custom wedding cake categories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Structured Order Selection:</strong> Guided fields for selecting cake size, flavor profile, and delivery date.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Direct WhatsApp Linkage:</strong> Form submissions automatically format order details and open WhatsApp for instant fulfillment review.</span>
                </li>
              </ul>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. FUNCTIONAL OUTCOME</span>
              <h2 className="text-2xl font-bold text-white mb-4">Verified Live Storefront</h2>
              <p>
                Deployed live at <a href="https://ubbcakes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-accent-purple">ubbcakes.vercel.app</a>, replacing back-and-forth messaging with a clear, self-guided ordering experience.
              </p>
            </section>
          </div>

          {/* Bottom CTA & Next Project Navigation */}
          <div className="mt-20 glass p-10 rounded-3xl border border-white/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need an e-commerce storefront or order system?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
              Benestudio builds mobile-first storefronts engineered for smooth customer purchasing.
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
              to="/work/newdreams"
              className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-accent-purple transition-colors"
            >
              NewDreams Case Study <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
