import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NewDreamsCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "NewDreams Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/newdreams",
    "description": "Case study of NewDreams streetwear e-commerce experience designed by Benestudio."
  };

  return (
    <>
      <SEO
        title="NewDreams Fashion E-commerce Case Study | Benestudio"
        description="Explore the cinematic mobile commerce experience designed and developed by Benestudio for the NewDreams streetwear brand."
        canonical="https://benestudio.com.ng/work/newdreams"
        jsonLd={caseStudyJsonLd}
      />

      <article className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              FASHION AND E-COMMERCE
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              NewDreams
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              NewDreams required a digital storefront that carried the atmosphere of the fashion brand while keeping product exploration usable on mobile.
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
              alt="NewDreams streetwear e-commerce experience by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Benestudio Role</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Creative direction, e-commerce interface design and frontend implementation.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Category</h3>
              <p className="text-sm text-white/80 leading-relaxed">Fashion and E-commerce</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Live URL</h3>
              <a
                href="https://newdreamss.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white underline"
              >
                https://newdreamss.vercel.app/
              </a>
            </div>
          </div>

          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p>
                NewDreams is a modern streetwear brand focused on high-impact drops and limited edition collections. Benestudio developed a cinematic e-commerce storefront that captures the brand's mood and drives conversion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p>
                Fashion e-commerce requires striking lookbook visuals without sacrificing product page load times or mobile checkout usability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key Experience Decisions</h2>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Dark-mode aesthetic matching the brand's night-culture streetwear identity.</li>
                <li>Fluid animations and transitions for seamless product exploration.</li>
                <li>Mobile checkout flow minimizing steps from discovery to order placement.</li>
              </ul>
            </section>
          </div>

          {/* Next Project Navigation */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
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
