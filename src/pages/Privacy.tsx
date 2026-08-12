import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Benestudio"
        description="Read how Benestudio handles website, inquiry and client information."
        canonical="https://benestudio.com.ng/privacy"
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 bg-[#030303]">
        <div className="max-w-4xl mx-auto space-y-8 text-white/70 leading-relaxed">
          <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
            LEGAL INFORMATION
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Privacy Policy
          </h1>

          <p className="text-sm text-white/50">Last updated: August 2026</p>

          <div className="space-y-6 text-sm md:text-base">
            <h2 className="text-xl font-bold text-white mt-8">1. Information We Collect</h2>
            <p>
              Benestudio collects information provided directly by users through contact forms, project inquiry forms, and direct email communications. This information may include your name, work email address, business name, project requirements, and budget specifications.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">2. How We Use Information</h2>
            <p>
              Information submitted to Benestudio is used solely for evaluating project inquiries, responding to communications, preparing project proposals, and delivering agreed-upon digital services. We do not sell, rent, or trade your personal data to third parties.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">3. Analytics & Cookies</h2>
            <p>
              Our website uses privacy-friendly web analytics to understand traffic patterns and improve site usability. Standard performance cookies may be utilized to monitor site stability and performance.
            </p>

            <h2 className="text-xl font-bold text-white mt-8">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your data, please contact us at hello@benestudio.com.ng.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
