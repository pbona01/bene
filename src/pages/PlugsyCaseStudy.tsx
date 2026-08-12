import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function PlugsyCaseStudy() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Plugsy Case Study",
    "author": {
      "@type": "Organization",
      "name": "Benestudio"
    },
    "url": "https://benestudio.com.ng/work/plugsy",
    "description": "Case study of Plugsy web platform designed and developed by Benestudio."
  };

  return (
    <>
      <SEO
        title="Plugsy Web Platform Case Study | Benestudio"
        description="See how Benestudio approached the design and development of Plugsy, a connected web platform for professional identity and commerce."
        canonical="https://benestudio.com.ng/work/plugsy"
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
              CONNECTED WEB PLATFORM
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Plugsy
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              Plugsy is a web platform experience developed around professional identity, portfolios and commercial interactions.
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
              alt="Plugsy project interface designed by Benestudio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Benestudio Role</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                UI/UX design, frontend development and web platform implementation.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Category</h3>
              <p className="text-sm text-white/80 leading-relaxed">Connected Web Platform</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">Live URL</h3>
              <a
                href="https://plugsy.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white underline"
              >
                https://plugsy.ng/
              </a>
            </div>
          </div>

          <div className="mt-16 space-y-12 text-white/70 leading-relaxed text-base">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p>
                Plugsy was built to address the need for a unified digital platform where professionals can curate their identity, display work samples, and support direct commercial or inquiries cleanly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p>
                Creating an intuitive interface that balances identity showcase with structured action pathways. Users needed to navigate profiles and take action without cognitive friction or layout clutter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Key Experience Decisions</h2>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Streamlined visual hierarchy giving prominence to identity credentials and core actions.</li>
                <li>Mobile-first layout adapted for quick touch interactions on personal devices.</li>
                <li>High-contrast visual styling designed for readability across various screen lighting conditions.</li>
              </ul>
            </section>
          </div>

          {/* Next Project Navigation */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
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
