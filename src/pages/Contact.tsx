import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Benestudio",
    "url": "https://benestudio.com.ng/contact",
    "description": "Start a web design or digital system project with Benestudio."
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const business = formData.get("business")?.toString() || "";
      const website = formData.get("website")?.toString() || "";
      const service = formData.get("service")?.toString() || "";
      const budget = formData.get("budget")?.toString() || "";
      const timeline = formData.get("timeline")?.toString() || "";
      const description = formData.get("description")?.toString() || "";

      const subject = encodeURIComponent(`Project Inquiry: ${name} (${business})`);
      const body = encodeURIComponent(
        `Name: ${name}\nWork Email: ${email}\nBusiness Name: ${business}\nCurrent Website/Link: ${website}\nService Required: ${service}\nBudget Range: ${budget}\nDesired Timeline: ${timeline}\n\nProject Description:\n${description}`
      );

      window.location.href = `mailto:hello@benestudio.com.ng?subject=${subject}&body=${body}`;
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Start a Project with Benestudio | Web Design and Client Systems"
        description="Tell Benestudio about your website or client-system project and receive a considered next step."
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
              STAGE 01 — START A PROJECT
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-4 uppercase tracking-tighter">
              Fill Form & Book a Call
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
              Tell us about your business and project goals below. Once submitted, we will schedule an initial discovery call and walk you through our 5-stage process: <span className="text-white font-medium">Position, Build, Launch, and Support</span> within 5–7 days.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6"
          >
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
                <label className="block text-xs font-mono uppercase text-white/70 mb-2">Current Website or Social Link</label>
                <input
                  type="text"
                  name="website"
                  placeholder="https://yourwebsite.com or @handle"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                />
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
                  <option value="Web Applications & Portals" className="bg-[#030303] text-white">Web Applications & Portals</option>
                  <option value="Lead & Inquiry System" className="bg-[#030303] text-white">Lead & Inquiry System</option>
                  <option value="Interior Designer System" className="bg-[#030303] text-white">Interior Designer System</option>
                  <option value="Managed Digital Support" className="bg-[#030303] text-white">Managed Digital Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/70 mb-2">Desired Timeline *</label>
                <select
                  name="timeline"
                  required
                  defaultValue="5-7 Days (Standard Studio Delivery)"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                >
                  <option value="5-7 Days (Standard Studio Delivery)" className="bg-[#030303] text-white">5-7 Days (Standard Studio Delivery)</option>
                  <option value="5-7 Days (Express Launch)" className="bg-[#030303] text-white">5-7 Days (Express Launch)</option>
                  <option value="1-2 Weeks (Phased Delivery)" className="bg-[#030303] text-white">1-2 Weeks (Phased Scope)</option>
                  <option value="Flexible / Custom Scope" className="bg-[#030303] text-white">Flexible / Custom Scope</option>
                </select>
                <span className="text-[11px] text-accent-purple font-mono block mt-1">
                  ⚡ Standard project delivery is completed in 5–7 days.
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/70 mb-2">Budget Range</label>
                <select
                  name="budget"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                >
                  <option value="Standard Project Scope" className="bg-[#030303] text-white">Standard Project Scope</option>
                  <option value="Custom Studio Scope" className="bg-[#030303] text-white">Custom Studio Scope</option>
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
                placeholder="Describe what your business does, what problem you want the website or system to solve, and any specific requirements..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all resize-none"
              />
            </div>

            <p className="text-xs text-white/40 leading-relaxed">
              By submitting this inquiry, you agree to allow Benestudio to contact you regarding your project request in accordance with our Privacy Policy.
            </p>

            {formStatus === "success" && (
              <p className="text-sm text-emerald-400 font-medium">Thank you! Your default mail application has opened with your project details.</p>
            )}
            {formStatus === "error" && (
              <p className="text-sm text-rose-400 font-medium">An error occurred. Please send your details directly to hello@benestudio.com.ng.</p>
            )}

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-accent-purple text-white hover:bg-accent-indigo font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-base"
            >
              {formStatus === "submitting" ? "Preparing Inquiry..." : "Submit Project Inquiry"}
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
