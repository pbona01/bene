import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function UBBCakesCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "UBBCakes Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/ubbcakes",
    "description": "Case study of UBBCakes mobile-first storefront created by Benestudio."
  };

  return (
    <>
      <SEO
        title="UBBCakes Website and Ordering Experience Case Study | Benestudio"
        description="Explore the mobile-first website experience created by Benestudio for UBBCakes, designed around cake discovery and straightforward ordering."
        canonical="https://benestudio.com.ng/work/ubbcakes"
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
              FOOD AND LOCAL COMMERCE
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              UBBCakes
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              UBBCakes required a polished mobile experience that could present its cake offering clearly and make the path toward ordering simpler.
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
              alt="UBBCakes storefront designed by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Benestudio Role</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Website strategy, responsive interface design and frontend implementation.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Category</h3>
              <p className="text-sm text-white/80 leading-relaxed">Food and Local Commerce</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Live URL</h3>
              <a
                href="https://ubbcakes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white underline"
              >
                https://ubbcakes.vercel.app/
              </a>
            </div>
          </div>

          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p>
                UBBCakes is a premier bakery brand serving custom cakes and catering. Benestudio was tasked with building a web experience that highlights the visual craftsmanship of the products while streamlining customer orders and event inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p>
                Most bakery customers browse products on mobile phones. The challenge was ensuring product images loaded fast, catalog categories were easily browseable, and inquiry forms were quick to complete on mobile touchscreens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key Experience Decisions</h2>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Visual catalog presentation putting product imagery front and center.</li>
                <li>Simplified order pathway allowing customers to select cake sizes, flavors, and dates.</li>
                <li>Fast image optimization ensuring smooth performance over cellular data networks.</li>
              </ul>
            </section>
          </div>

          {/* Next Project Navigation */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
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
