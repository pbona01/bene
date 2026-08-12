import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";

const projects = [
  {
    name: "Plugsy",
    category: "Connected Web Platform",
    summary: "Built for creators, freelancers and service professionals needing a central hub. Benestudio designed and developed a mobile-optimized platform that unifies portfolio showcases, service details, social proof and direct contact options in one location.",
    caseStudyUrl: "/work/plugsy",
    liveUrl: "https://plugsy.ng/",
    image: "https://i.postimg.cc/2yKthf58/image.png"
  },
  {
    name: "UBBCakes",
    category: "Food & Local Commerce",
    summary: "Built for an artisanal cake studio facing order confusion over messaging apps. Benestudio engineered a mobile-first digital storefront with visual cake galleries, clear flavor options and a direct WhatsApp ordering flow that streamlined customer inquiries.",
    caseStudyUrl: "/work/ubbcakes",
    liveUrl: "https://ubbcakes.vercel.app/",
    image: "https://i.postimg.cc/WzNNDrRC/20260415-082747.jpg"
  },
  {
    name: "NewDreams",
    category: "Fashion & E-commerce",
    summary: "Built for a high-concept streetwear brand seeking a distinct digital visual identity. Benestudio developed a cinematic dark-mode e-commerce web storefront with smooth product discovery and responsive collection navigation.",
    caseStudyUrl: "/work/newdreams",
    liveUrl: "https://newdreamss.vercel.app/",
    image: "https://i.postimg.cc/JnTYCWZQ/image.png"
  }
];

export default function Work() {
  const workBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://benestudio.com.ng/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Work",
        "item": "https://benestudio.com.ng/work"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Selected Web Design and Client Systems Work | Benestudio"
        description="Explore selected websites, commerce experiences and client systems designed and developed by Benestudio."
        canonical="https://benestudio.com.ng/work"
        jsonLd={workBreadcrumb}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              SELECTED WORK
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter max-w-4xl">
              Projects built around real businesses, products and audiences.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              A selection of websites and digital experiences designed and developed by Benestudio across technology, commerce, food and fashion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.15 }}
                className="glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-accent-purple/50 transition-all duration-500 group"
              >
                <div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-black/50 border border-white/5 relative">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.category}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-accent-purple text-xs font-mono uppercase tracking-wider block mb-2 font-bold">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-3">{project.name}</h2>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{project.summary}</p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Link
                    to={project.caseStudyUrl}
                    className="text-xs font-bold text-white hover:text-accent-purple transition-colors flex items-center gap-1"
                  >
                    View Case Study <ArrowUpRight size={14} />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1 ml-auto"
                  >
                    Visit Live Website <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 glass p-12 rounded-3xl border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm">
              We work with ambitious businesses locally and internationally to build tailored digital solutions.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors inline-block uppercase text-sm tracking-wider"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
