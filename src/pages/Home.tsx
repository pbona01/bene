import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { DemoHeroGeometric } from "../components/DemoHero";
import Projects from "../components/Projects";

const corePillars = [
  {
    num: "01",
    title: "WEBSITES",
    description: "Premium marketing, service, portfolio and commerce experiences engineered for clarity, speed and high conversion.",
    capabilities: ["Custom UI/UX Interface Design", "Responsive Frontend Engineering", "Brand & Product Positioning", "SEO & Speed Optimization"]
  },
  {
    num: "02",
    title: "DIGITAL PRODUCTS",
    description: "Customer-facing web applications, portals, and interactive platforms built with intuitive user workflows.",
    capabilities: ["Interactive Portals & Dashboards", "Design Systems & Component Libraries", "Identity & Workspace Layouts", "E-commerce Storefronts"]
  },
  {
    num: "03",
    title: "CLIENT SYSTEMS",
    description: "Structured inquiry qualification, booking calendars, CRM automation and follow-up pipelines behind the website.",
    capabilities: ["Multi-step Project Qualification Forms", "Consultation Booking Integrations", "CRM & Email Pipeline Connections", "Automated Lead Acknowledgements"]
  }
];

const homeFaqs = [
  {
    q: "What types of businesses does Benestudio work with?",
    a: "We partner with ambitious founders, service businesses, commerce brands, digital products, and specialized creative studios (such as residential interior designers) ready to look sharper and operate smarter."
  },
  {
    q: "Can you redesign or upgrade an existing website?",
    a: "Yes. We frequently take existing websites or outdated templates and transform them into custom, high-performing digital experiences with integrated client qualification systems."
  },
  {
    q: "How long does a typical studio project take?",
    a: "Turnaround depends on project scope, content readiness, and review speed. Most standard studio websites and client systems are designed, built, and deployed within a focused 1–3 week execution window."
  },
  {
    q: "What is required from us before starting?",
    a: "We need an understanding of your core business goals, target audience, brand assets (logos, colors, copy), and project priorities. We guide you through the positioning process step-by-step."
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. Benestudio operates as a remote digital studio and works with clients globally across various time zones."
  },
  {
    q: "Do you provide ongoing technical support after launch?",
    a: "Yes. We offer Managed Digital Support plans covering domain maintenance, deployment checks, regular updates, and ongoing technical assistance."
  }
];

const testimonials = [
  {
    quote: "Working with Benestudio completely elevated how our storefront looks and operates online. The mobile experience is seamless.",
    author: "Client",
    role: "E-commerce Founder"
  },
  {
    quote: "Benestudio delivered our cake storefront with extreme attention to detail and care. Orders and inquiries became much easier to handle.",
    author: "UBBCakes Team",
    role: "Bakery Storefront"
  },
  {
    quote: "Clear communication from day one. Our digital platform was built cleanly and launched right on schedule.",
    author: "Platform Partner",
    role: "Technology Client"
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Benestudio",
    "url": "https://benestudio.com.ng/",
    "logo": "https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg",
    "email": "hello@benestudio.com.ng",
    "description": "Benestudio designs and builds premium websites, digital products and client systems for ambitious businesses."
  };

  return (
    <>
      <SEO
        title="Benestudio | Premium Websites, Digital Products & Client Systems"
        description="Benestudio designs and builds premium websites, digital products and client systems for ambitious businesses globally."
        canonical="https://benestudio.com.ng/"
        jsonLd={homeJsonLd}
      />

      {/* Hero Section */}
      <DemoHeroGeometric />

      {/* Horizontal Rounded Projects Showcase */}
      <Projects />

      {/* Core Positioning Pillars */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              Websites, Digital Products & Client Systems.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl">
              We design the customer-facing digital experience AND the inquiry systems behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-2">{pillar.num}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{pillar.description}</p>
                </div>
                <div>
                  <ul className="space-y-2 text-xs font-mono text-white/70 pt-4 border-t border-white/5">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent-purple shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:text-left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent-purple hover:text-white transition-colors"
            >
              Explore Full Studio Capabilities <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How a Client System Works (Interactive Flow) */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              THE CLIENT SYSTEM DIFFERENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              From Visitor Attention To Qualified Lead.
            </h2>
            <p className="mt-3 text-white/60 text-sm md:text-base max-w-xl">
              A website should do more than exist. It should guide interest and organize inquiries automatically.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 text-center">
            {[
              { step: "01", label: "VISITOR", sub: "Discovers Website" },
              { step: "02", label: "WEBSITE", sub: "Clear Value Positioning" },
              { step: "03", label: "INQUIRY", sub: "Guided Form Flow" },
              { step: "04", label: "QUALIFICATION", sub: "Budget & Scope Fit" },
              { step: "05", label: "BOOKING", sub: "Calendar Connection" },
              { step: "06", label: "CRM", sub: "Organized Follow-Up" },
            ].map((item, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border border-white/10 flex flex-col justify-center items-center">
                <span className="text-accent-purple font-mono text-xs font-bold block mb-1">{item.step}</span>
                <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider block">{item.label}</span>
                <span className="text-white/40 text-[11px] mt-1">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              CLIENT EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              What clients say after working with Benestudio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                <p className="text-sm text-white/80 leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-bold text-white">{t.author}</p>
                  <p className="text-xs text-accent-purple font-mono">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Objection Handling Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              Everything You Need To Know Before Starting.
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 text-white font-bold text-base md:text-lg focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-accent-purple transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-24 md:py-36 px-4 md:px-8 bg-[#030303] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            START YOUR PROJECT
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Have Something <br /> Worth Building?
          </h2>
          <p className="mt-6 text-base md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light">
            Tell us about your business or project. We review every inquiry directly and provide a clear proposal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-accent-purple text-white font-bold text-sm tracking-wider hover:bg-accent-indigo transition-all shadow-[0_0_35px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 group uppercase"
            >
              START A PROJECT <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 text-white font-bold text-sm tracking-wider hover:bg-white/10 transition-colors border border-white/10 uppercase"
            >
              VIEW OUR WORK
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
