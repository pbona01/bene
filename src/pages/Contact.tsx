import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { trackEvent } from "../lib/analytics";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    business: string;
    service: string;
  } | null>(null);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Benestudio",
    "url": "https://benestudio.com.ng/contact",
    "description": "Start a website, digital product or client system project with Benestudio."
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const formData = new FormData(e.currentTarget);
      
      // Honeypot check
      const hp = formData.get("website_hp")?.toString();
      if (hp && hp.trim() !== "") {
        // Silent bot reject
        setFormStatus("success");
        return;
      }

      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const business = formData.get("business")?.toString() || "";
      const website = formData.get("website")?.toString() || "";
      const service = formData.get("service")?.toString() || "";
      const budget = formData.get("budget")?.toString() || "";
      const timeline = formData.get("timeline")?.toString() || "";
      const source = formData.get("source")?.toString() || "";
      const description = formData.get("description")?.toString() || "";

      setSubmittedData({ name, email, business, service });

      // Analytics tracking
      trackEvent({ name: "submit_inquiry", service, timeline });

      const subject = encodeURIComponent(`Project Inquiry: ${name} (${business})`);
      const body = encodeURIComponent(
        `Name: ${name}\nWork Email: ${email}\nPhone / WhatsApp: ${phone}\nBusiness Name: ${business}\nCurrent Website/Link: ${website}\nService Required: ${service}\nBudget Range: ${budget}\nDesired Timeline: ${timeline}\nHow Heard: ${source}\n\nProject Description:\n${description}`
      );

      // Trigger mailto link directly
      window.location.href = `mailto:hello@benestudio.com.ng?subject=${subject}&body=${body}`;
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Start a Project with Benestudio | Web Design, Digital Products & Systems"
        description="Tell Benestudio about your business goals and receive a clear project proposal and execution plan."
        canonical="https://benestudio.com.ng/contact"
        jsonLd={contactJsonLd}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              STAGE 01 — INQUIRY
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Start Your Project
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
              Tell us about your business goals below. Once submitted, we will review your request and schedule a discovery call to guide you through our <span className="text-white font-medium">Position, Design, Build, Launch & Support</span> framework.
            </p>
          </motion.div>

          {formStatus === "success" && submittedData ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-8 md:p-12 rounded-3xl border border-accent-purple/50 space-y-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-purple/20 border border-accent-purple text-accent-purple flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Inquiry Received</h2>
              <p className="text-white/70 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you <strong className="text-white">{submittedData.name}</strong>. Your project details for <strong className="text-white">{submittedData.business}</strong> have been prepared. Your default email app should have launched automatically.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:hello@benestudio.com.ng?subject=Inquiry%20Follow-up%20${encodeURIComponent(submittedData.name)}`}
                  className="px-6 py-3 rounded-full bg-accent-purple text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-indigo transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> Send Direct Email
                </a>
                <a
                  href="https://wa.me/2348123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                >
                  <MessageSquare size={16} /> Contact via WhatsApp
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6"
            >
              {/* Honeypot Field */}
              <input type="text" name="website_hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Business Name *</label>
                  <input
                    type="text"
                    name="business"
                    required
                    placeholder="e.g. Studio Apex"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Phone / WhatsApp (Optional)</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+234..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Current Website / Social Link</label>
                  <input
                    type="text"
                    name="website"
                    placeholder="https://yourwebsite.com or @handle"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">How Did You Hear About Us? (Optional)</label>
                  <select
                    name="source"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  >
                    <option value="Referral / Word of Mouth" className="bg-[#030303] text-white">Referral / Word of Mouth</option>
                    <option value="Social Media (Instagram / X / LinkedIn)" className="bg-[#030303] text-white">Social Media (Instagram / X / LinkedIn)</option>
                    <option value="Google Search" className="bg-[#030303] text-white">Google Search</option>
                    <option value="Selected Work / Live Site" className="bg-[#030303] text-white">Selected Work / Live Site</option>
                    <option value="Other" className="bg-[#030303] text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Service Required *</label>
                  <select
                    name="service"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  >
                    <option value="Websites & Digital Experiences" className="bg-[#030303] text-white">Websites & Digital Experiences</option>
                    <option value="E-commerce Storefront" className="bg-[#030303] text-white">E-commerce Storefront</option>
                    <option value="Digital Products & Web Portals" className="bg-[#030303] text-white">Digital Products & Web Portals</option>
                    <option value="Client & Lead Inquiry System" className="bg-[#030303] text-white">Client & Lead Inquiry System</option>
                    <option value="Interior Designer System" className="bg-[#030303] text-white">Interior Designer System</option>
                    <option value="Managed Digital Support" className="bg-[#030303] text-white">Managed Digital Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Desired Timeline *</label>
                  <select
                    name="timeline"
                    required
                    defaultValue="As soon as possible"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  >
                    <option value="As soon as possible" className="bg-[#030303] text-white">As soon as possible</option>
                    <option value="Within 1-2 weeks" className="bg-[#030303] text-white">Within 1–2 weeks</option>
                    <option value="Within 1 month" className="bg-[#030303] text-white">Within 1 month</option>
                    <option value="Flexible / Planning phase" className="bg-[#030303] text-white">Flexible / Planning phase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-2">Budget Scope</label>
                  <select
                    name="budget"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  >
                    <option value="Standard Studio Scope" className="bg-[#030303] text-white">Standard Studio Scope</option>
                    <option value="Custom Platform Scope" className="bg-[#030303] text-white">Custom Platform Scope</option>
                    <option value="To Be Discussed" className="bg-[#030303] text-white">To Be Discussed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/70 mb-2">Project Description *</label>
                <textarea
                  name="description"
                  required
                  rows={5}
                  placeholder="Describe your business, target audience, key problems to solve, and what success looks like for this project..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all resize-none"
                />
              </div>

              <p className="text-xs text-white/40 leading-relaxed">
                By submitting this inquiry, you agree to allow Benestudio to contact you regarding your project request in accordance with our Privacy Policy.
              </p>

              {formStatus === "error" && (
                <p className="text-sm text-rose-400 font-medium">An error occurred. Please send your details directly to hello@benestudio.com.ng.</p>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-accent-purple text-white hover:bg-accent-indigo font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
              >
                {formStatus === "submitting" ? "Preparing Inquiry..." : "Submit Project Inquiry"}
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
