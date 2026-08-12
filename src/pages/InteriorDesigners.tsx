import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

const faqs = [
  {
    q: "How does the homeowner project qualification form work?",
    a: "We integrate a multi-step project application on your website that asks homeowners about their project scope, property location, target budget range, and timeline before they can schedule a consultation."
  },
  {
    q: "Can the system connect to our existing CRM or email calendar?",
    a: "Yes. The inquiry system can be connected to standard third-party platforms such as HubSpot, Pipedrive, Calendly, Google Workspace, or custom email workflows."
  },
  {
    q: "Will my team be able to access leads on mobile devices?",
    a: "Yes. Inquiries submitted through the system trigger instant notifications and can be routed directly to your mobile email or CRM application for immediate review."
  },
  {
    q: "Does Benestudio guarantee lead volumes or revenue?",
    a: "No. We build high-converting, professional website systems and qualification pathways, but actual inquiry volume depends on your brand marketing, market demand, and prospective client reach."
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
    "description": "Specialised digital system for interior design studios combining portfolio websites, homeowner qualification, and CRM pipeline setup."
  };

  return (
    <>
      <SEO
        title="Websites and Client Systems for Interior Designers | Benestudio"
        description="Benestudio builds premium portfolio websites, project qualification and consultation systems for full-service interior-design studios."
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
              SPECIALISED DIGITAL SYSTEM
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Websites and client systems for interior-design studios.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              Present your strongest projects, qualify serious homeowners and keep every inquiry organised from first visit to consultation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors inline-flex items-center justify-center gap-2"
              >
                Request a Project Review <ArrowUpRight size={18} />
              </Link>
              <a
                href="#included"
                className="px-8 py-4 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-colors border border-white/10 inline-flex items-center justify-center"
              >
                See What Is Included
              </a>
            </div>
          </motion.div>

          {/* Section 1: The current inquiry problem */}
          <div className="mt-16 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">01. THE PROBLEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Unqualified Inquiries & Disorganized Follow-ups</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Interior design studios frequently spend valuable consultation hours responding to unvetted requests with mismatched budgets, incomplete project scopes, or unrealistic timelines. Without a structured qualification step, high-value residential projects get lost in standard inbox clutter.
            </p>
          </div>

          {/* Section 2: The specialised website system */}
          <div className="mt-12 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">02. THE SYSTEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Specialised Studio System</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
              The system combines a premium portfolio website with a structured project application, consultation booking and an organised CRM pipeline.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Every design element—from high-resolution project imagery galleries to clear design phase breakdowns—is crafted to establish authority and guide serious homeowners toward taking action.
            </p>
          </div>

          {/* Section 3: Homeowner project qualification */}
          <div className="mt-12 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">03. QUALIFICATION</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Homeowner Project Qualification</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Instead of a basic contact form, the website integrates a guided project questionnaire. Prospective clients specify property type, room scope, estimated budget range, and target start date—ensuring your studio evaluates fit before booking a call.
            </p>
          </div>

          {/* Section 4: Consultation booking */}
          <div className="mt-12 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">04. BOOKING</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Seamless Consultation Booking</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Qualified homeowners are seamlessly routed to your team's consultation calendar (e.g. via Calendly or Google Calendar integration), eliminating back-and-forth scheduling emails.
            </p>
          </div>

          {/* Section 5: CRM and mobile lead access */}
          <div className="mt-12 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">05. CRM INTEGRATION</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">CRM & Mobile Lead Access</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Inquiries may be configured through a suitable third-party CRM platform (such as HubSpot or Pipedrive) and made accessible on mobile devices so your design team can review new client opportunities anywhere.
            </p>
          </div>

          {/* Section 6: Automated inquiry acknowledgement */}
          <div className="mt-12 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">06. ACKNOWLEDGEMENT</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Automated Inquiry Acknowledgement</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              When a homeowner submits a project application, they immediately receive a branded, professional acknowledgement email setting expectations for the review process and outlining next steps.
            </p>
          </div>

          {/* Section 7: What the client receives */}
          <div id="included" className="mt-16 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">07. DELIVERABLES</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Your Studio Receives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Custom dark-theme studio website with portfolio showcases</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Multi-step homeowner qualification form</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Consultation calendar scheduling integration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Third-party CRM pipeline connection setup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Automated client email acknowledgement workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent-purple shrink-0 mt-0.5" />
                <span>Mobile device accessibility & quick notification testing</span>
              </div>
            </div>
          </div>

          {/* Section 8: Implementation process */}
          <div className="mt-16 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">08. PROCESS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <strong className="text-accent-purple font-mono block mb-2">STAGE 1</strong>
                <h3 className="font-bold text-white mb-1">Discovery & Framing</h3>
                <p className="text-white/60 text-xs">We analyze your studio's target homeowner demographic, project scope requirements, and consultation workflow.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <strong className="text-accent-purple font-mono block mb-2">STAGE 2</strong>
                <h3 className="font-bold text-white mb-1">Design & Integration</h3>
                <p className="text-white/60 text-xs">We build the portfolio interface, design the qualification questionnaire, and connect calendar and CRM systems.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <strong className="text-accent-purple font-mono block mb-2">STAGE 3</strong>
                <h3 className="font-bold text-white mb-1">Testing & Deployment</h3>
                <p className="text-white/60 text-xs">We test form submissions across mobile devices, verify CRM lead routing, and deploy to your custom domain.</p>
              </div>
            </div>
          </div>

          {/* Section 9: Common questions */}
          <div className="mt-16 glass p-8 md:p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">09. FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/5 pb-6 last:border-none">
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Final CTA */}
          <div className="mt-16 text-center glass p-12 rounded-3xl border border-white/10">
            <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-2">10. GET STARTED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to upgrade your studio's digital system?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm">
              Discuss your studio's web design and qualification workflow directly with Benestudio.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors inline-block"
            >
              Request a Project Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
