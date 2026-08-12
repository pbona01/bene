import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

const faqs = [
  {
    q: "How does the homeowner project qualification form work?",
    a: "We integrate a multi-step project questionnaire into your website asking prospective homeowners about project scope (e.g. full home, single room, renovation), property location, estimated budget range, and desired start date before scheduling a consultation."
  },
  {
    q: "Can the system connect to our existing CRM or calendar?",
    a: "Yes. Inquiries and consultation bookings seamlessly sync with popular third-party tools such as Calendly, Google Calendar, HubSpot, Pipedrive, or direct email notifications."
  },
  {
    q: "Will our studio team receive instant mobile alerts?",
    a: "Yes. Submitted project applications automatically trigger instant email or push notifications so your design team can review new homeowner opportunities immediately from mobile devices."
  },
  {
    q: "Is Avery House an active client project?",
    a: "Avery House is a self-initiated concept project created by Benestudio to demonstrate how high-end interior design portfolios, project application flows, and consultation systems integrate seamlessly."
  }
];

export default function InteriorDesigners() {
  const systemJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Websites and Client Systems for Interior Design Studios",
    "provider": {
      "@type": "Organization",
      "name": "Benestudio",
      "url": "https://benestudio.com.ng/"
    },
    "description": "Specialised digital system for interior design studios combining portfolio websites, homeowner qualification, and consultation booking."
  };

  return (
    <>
      <SEO
        title="Websites & Client Systems for Interior Design Studios | Benestudio"
        description="Benestudio builds premium portfolio websites, homeowner project qualification and consultation systems for residential interior design studios."
        canonical="https://benestudio.com.ng/interior-designers"
        jsonLd={systemJsonLd}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              SPECIALISED STUDIO SYSTEM
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mt-4 uppercase tracking-tighter leading-tight">
              YOUR PORTFOLIO GETS ATTENTION. <br />
              <span className="text-accent-purple">YOUR WEBSITE SHOULD TURN IT INTO PROJECTS.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              Benestudio builds premium websites and client-inquiry systems for residential interior-design studios. Present your strongest work, qualify serious homeowners, and organize consultation inquiries effortlessly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                Start a Project <ArrowUpRight size={18} />
              </Link>
              <a
                href="#included"
                className="px-8 py-4 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-colors border border-white/10 inline-flex items-center justify-center text-sm uppercase tracking-wider"
              >
                See System Deliverables
              </a>
            </div>
          </motion.div>

          {/* Full Conversion Journey Flow Diagram */}
          <div className="glass p-8 rounded-3xl border border-white/10 mb-16">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-4">THE HOMEOWNER JOURNEY FLOW</span>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
              {[
                { step: "01", label: "DISCOVERY", sub: "Social / Search / Referral" },
                { step: "02", label: "WEBSITE", sub: "Portfolio & Studio Authority" },
                { step: "03", label: "PROJECT FIT", sub: "Scope & Style Breakdown" },
                { step: "04", label: "QUALIFICATION", sub: "Budget & Timeline Form" },
                { step: "05", label: "CONSULTATION", sub: "Calendar Booking" },
                { step: "06", label: "CRM & FOLLOW-UP", sub: "Organized Studio Pipeline" }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 p-4 rounded-2xl border border-white/5 flex flex-col justify-center">
                  <span className="text-accent-purple font-mono text-xs font-bold block mb-1">{item.step}</span>
                  <span className="text-white font-bold text-xs uppercase tracking-wider block">{item.label}</span>
                  <span className="text-white/40 text-[10px] mt-1">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Concept Showcase: Avery House */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-16">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="bg-accent-purple/20 text-accent-purple font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-accent-purple/30">
                  SELF-INITIATED DEMONSTRATION CONCEPT
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">Avery House Interior Studio System</h2>
              </div>
              <span className="text-xs font-mono text-white/50">Demonstration Showcase</span>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              To demonstrate how our specialized studio system operates, we designed Avery House—a high-end residential interior studio concept pairing full-screen project imagery with structured homeowner qualification and direct calendar booking.
            </p>
          </div>

          {/* Section 1: The Problem */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. THE PROBLEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Unqualified Inquiries & Lost Consultation Hours</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Interior design studios frequently spend valuable consultation hours responding to unvetted requests with mismatched budgets, incomplete scopes, or unrealistic timelines. Without a structured qualification step, high-value residential inquiries get lost in standard inbox clutter.
            </p>
          </div>

          {/* Section 2: The Solution */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE SYSTEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Portfolio + Qualification + Booking</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
              The Benestudio Interior System combines a visual portfolio website with a structured homeowner project questionnaire, consultation booking calendar, and CRM pipeline connection.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Every detail—from room galleries to design phase breakdowns—is crafted to establish design authority and guide serious prospective clients toward taking action.
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div id="included" className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-16">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. DELIVERABLES</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Your Studio Receives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Custom studio portfolio website showcasing residential projects</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Multi-step homeowner project qualification questionnaire</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Consultation scheduling calendar integration (Calendly/Google)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Third-party CRM lead pipeline setup (HubSpot/Pipedrive)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Automated client email acknowledgement workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Mobile device optimization & instant alert testing</span>
              </div>
            </div>
          </div>

          {/* Section FAQ */}
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-16">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">04. FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common Studio Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/5 pb-6 last:border-none">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center glass p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">START YOUR SYSTEM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to upgrade your studio's digital experience?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm">
              Discuss your studio's portfolio website and homeowner qualification workflow directly with Benestudio.
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
