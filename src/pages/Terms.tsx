import SEO from "../components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use | Benestudio"
        description="Review the terms governing the use of the Benestudio website and its services."
        canonical="https://benestudio.com.ng/terms"
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-4xl mx-auto space-y-8 text-white/70 leading-relaxed">
          <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
            LEGAL INFORMATION
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Terms of Use
          </h1>

          <p className="text-sm text-white/50">Last updated: August 2026</p>

          <div className="space-y-6 text-sm md:text-base">
            <h2 className="text-xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Benestudio website (benestudio.com.ng), you agree to comply with and be bound by these Terms of Use.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">2. Intellectual Property</h2>
            <p>
              All visual designs, interface elements, original branding, graphics, and written content presented on this website are the property of Benestudio unless otherwise stated. Case studies showcase past client engagements where intellectual property rights are governed by specific project agreements.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">3. Services & Proposals</h2>
            <p>
              Information on this website regarding services, capabilities, and system features is provided for informational purposes. Formal project scopes, timelines, deliverables, and commercial terms are established exclusively through executed client agreements.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">4. Contact Information</h2>
            <p>
              For inquiries regarding these terms, please contact hello@benestudio.com.ng.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
