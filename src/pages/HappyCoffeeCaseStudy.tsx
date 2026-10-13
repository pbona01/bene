import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";

const liveUrl = "https://happy-coffee-redesign.vercel.app/";

export default function HappyCoffeeCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Happy Coffee Concept Redesign",
    author: {
      "@type": "Organization",
      name: "Benestudio"
    },
    url: "https://benestudio.com.ng/work/happy-coffee",
    description: "A self-initiated website redesign concept created by Benestudio for Happy Coffee."
  };

  return (
    <>
      <SEO
        title="Happy Coffee Concept Redesign | Benestudio"
        description="Explore Benestudio's self-initiated website redesign concept for Happy Coffee, centered on Nigerian-grown coffee and origin-led storytelling."
        canonical="https://benestudio.com.ng/work/happy-coffee"
        ogImage="https://benestudio.com.ng/happy-coffee-concept.png"
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
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              SELF-INITIATED CONCEPT REDESIGN
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Happy Coffee
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              A bold digital redesign concept built around Nigerian-grown coffee, the Mambilla Plateau and a more expressive African brand experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple text-white font-bold text-sm hover:bg-accent-indigo transition-colors"
              >
                View Live Concept <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <div className="mt-12 rounded-3xl overflow-hidden glass border border-white/10 aspect-[16/10] relative bg-black/40">
            <img
              src="/happy-coffee-concept.png"
              alt="Happy Coffee website redesign concept showing Nigerian Blend coffee packaging"
              className="w-full h-full object-cover object-top"
              width={1440}
              height={1000}
            />
          </div>

          <div className="mt-12 glass p-8 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-accent-purple font-bold block mb-1">PROJECT</span>
              <p className="text-white text-sm font-sans font-semibold">Happy Coffee Concept</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">INDUSTRY</span>
              <p className="text-white text-sm font-sans font-semibold">Coffee & Food Culture</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">PROJECT TYPE</span>
              <p className="text-white text-sm font-sans font-semibold">Self-Initiated Redesign</p>
            </div>
            <div>
              <span className="text-accent-purple font-bold block mb-1">LIVE CONCEPT</span>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-sans font-semibold underline hover:text-accent-purple"
              >
                View the redesign
              </a>
            </div>
          </div>

          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. THE OPPORTUNITY</span>
              <h2 className="text-2xl font-bold text-white mb-4">Make Nigerian Origin the Main Story</h2>
              <p>
                The concept explores a clearer digital expression for a coffee brand with a distinctly Nigerian point of view. Instead of treating origin as supporting information, the experience makes the Mambilla Plateau, local production and everyday coffee culture central to the brand story.
              </p>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE DESIGN DIRECTION</span>
              <h2 className="text-2xl font-bold text-white mb-4">Editorial Energy with Product Clarity</h2>
              <ul className="space-y-3 text-sm font-sans text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Origin-led storytelling:</strong> Nigerian-grown coffee and the Mambilla Plateau anchor the narrative.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Bold art direction:</strong> Oversized typography, energetic colour and product-focused compositions create a memorable first impression.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                  <span><strong>Expanded brand story:</strong> Product discovery, the founder's journey and the wider impact of local coffee share one connected experience.</span>
                </li>
              </ul>
            </section>

            <section className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. CONCEPT OUTCOME</span>
              <h2 className="text-2xl font-bold text-white mb-4">A More Distinctive Digital Brand Experience</h2>
              <p>
                The live concept demonstrates how product commerce, Nigerian provenance and founder storytelling can work together in a responsive digital experience. This is an independent Benestudio design exploration and is not presented as commissioned work.
              </p>
            </section>
          </div>

          <div className="mt-20 glass p-10 rounded-3xl border border-white/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to rethink your brand's digital experience?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
              Benestudio creates distinctive websites and digital experiences for ambitious brands.
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
