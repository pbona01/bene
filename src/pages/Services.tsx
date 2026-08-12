import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

const servicePillars = [
  {
    id: "websites",
    num: "01",
    title: "Websites & Digital Experiences",
    forWho: "Ambitious businesses, creative studios, and companies looking to establish or elevate their online presence with a bespoke, high-converting web destination.",
    problemSolved: "Generic templates, weak brand positioning, confusing user navigation, or poor mobile performance that hurts prospective client trust.",
    whatsIncluded: [
      "Brand positioning & user journey mapping",
      "Custom UI/UX interface design",
      "Responsive frontend development",
      "Content structure & conversion optimization",
      "Speed optimization & baseline technical SEO"
    ]
  },
  {
    id: "products",
    num: "02",
    title: "Digital Products & Web Portals",
    forWho: "Founders, tech teams, and service providers needing custom web platforms, portals, or software interfaces built with clarity and precision.",
    problemSolved: "Cluttered user interfaces and confusing user workflows that hinder user adoption and customer satisfaction.",
    whatsIncluded: [
      "User flows & interactive interface design",
      "Custom design system & component library",
      "Frontend platform development",
      "Customer dashboards & identity interfaces",
      "E-commerce & custom product storefronts"
    ]
  },
  {
    id: "systems",
    num: "03",
    title: "Client & Lead Inquiry Systems",
    forWho: "Service businesses, agencies, and specialized studios (including interior design studios) that need a structured pipeline to capture and qualify client inquiries.",
    problemSolved: "Unqualified leads, messy email threads, delayed response times, and lost prospective client opportunities.",
    whatsIncluded: [
      "Multi-step project qualification questionnaires",
      "Automated instant email acknowledgements",
      "CRM pipeline integrations (e.g. HubSpot, Pipedrive)",
      "Consultation booking calendar connections"
    ]
  },
  {
    id: "support",
    num: "04",
    title: "Managed Digital Support",
    forWho: "Business owners who want ongoing peace of mind knowing their website and client systems are maintained by experts post-launch.",
    problemSolved: "Technical downtime, unapplied updates, broken links, and lack of dedicated technical assistance.",
    whatsIncluded: [
      "Managed cloud deployment & domain monitoring",
      "Regular content updates & feature enhancements",
      "Performance and security checks",
      "Direct technical support & guidance"
    ]
  }
];

export default function Services() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design, Custom Web Apps and Client Systems",
    "provider": {
      "@type": "Organization",
      "name": "Benestudio",
      "url": "https://benestudio.com.ng/"
    },
    "description": "Benestudio provides web design, e-commerce, custom web portals, inquiry systems, and managed support."
  };

  return (
    <>
      <SEO
        title="Websites, Digital Products & Client Systems | Benestudio Services"
        description="Explore Benestudio capabilities across premium websites, custom digital products, client inquiry systems and ongoing digital support."
        canonical="https://benestudio.com.ng/services"
        jsonLd={servicesJsonLd}
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
              WHAT WE BUILD
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter max-w-4xl">
              Websites, Digital Products and Client Systems.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-light">
              Benestudio combines strategy, interface design and technology to build websites, products and client systems that look exceptional and operate smoothly.
            </p>
          </motion.div>

          <div className="space-y-12">
            {servicePillars.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <span className="text-accent-purple font-mono text-xs font-bold block mb-2">{svc.num}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{svc.title}</h2>
                    <div className="space-y-4 text-sm text-white/70">
                      <div>
                        <strong className="text-white block font-semibold mb-1">Who it is for:</strong>
                        <p>{svc.forWho}</p>
                      </div>
                      <div>
                        <strong className="text-white block font-semibold mb-1">Problem it solves:</strong>
                        <p>{svc.problemSolved}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:pl-8 lg:border-l lg:border-white/10">
                    <div>
                      <strong className="text-white text-sm font-semibold block mb-3">What is included:</strong>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80 mb-8">
                        {svc.whatsIncluded.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-accent-purple shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-indigo transition-colors"
                      >
                        Start a Project <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center glass p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your digital presence?</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm">
              Contact Benestudio to discuss your requirements and receive a clear proposal for your project.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold text-sm tracking-wider hover:bg-accent-indigo transition-all inline-block uppercase"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
