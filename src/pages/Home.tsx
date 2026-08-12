import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import { DemoHeroGeometric } from "../components/DemoHero";
import Projects from "../components/Projects";

const services = [
  {
    title: "Websites and Digital Experiences",
    description: "Premium, responsive websites built around clear positioning, strong user experience and measurable business actions."
  },
  {
    title: "E-commerce",
    description: "Mobile-first shopping experiences designed to make products easier to discover, understand and purchase."
  },
  {
    title: "Web Applications & Portals",
    description: "Custom web applications and interactive systems that make complex services easier for people to access and use."
  },
  {
    title: "Lead and Inquiry Systems",
    description: "Structured forms, qualification journeys, booking integrations and follow-up connections that create a more organised inquiry process."
  },
  {
    title: "Managed Digital Support",
    description: "Ongoing deployment management, website updates, integration checks and technical support after launch."
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
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Benestudio",
    "url": "https://benestudio.com.ng/",
    "logo": "https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg",
    "email": "hello@benestudio.com.ng",
    "description": "Benestudio designs and builds premium websites and client systems for ambitious businesses."
  };

  return (
    <>
      <SEO
        title="Benestudio | Premium Websites and Client Systems"
        description="Benestudio designs and builds premium websites and client systems for ambitious businesses locally and internationally."
        canonical="https://benestudio.com.ng/"
        jsonLd={homeJsonLd}
      />

      {/* Hero Section */}
      <DemoHeroGeometric />

      {/* Horizontal Rounded Projects Showcase */}
      <Projects />

      {/* Services Preview (WHAT WE BUILD) */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              Strategy, design and technology working as one.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-accent-purple/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{svc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent-purple hover:text-white transition-colors"
            >
              Learn More About Our Services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials (CLIENT EXPERIENCE) */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-t border-white/5">
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

      {/* About & Process Preview */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold">
              ABOUT BENESTUDIO
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tighter">
              Designing digital experiences with clarity, ambition and care.
            </h2>
            <p className="mt-6 text-base text-white/60 leading-relaxed">
              Benestudio is a remote digital design and technology studio helping businesses turn ideas, services and products into polished digital experiences. Every project combines considered design, practical technology and direct communication from planning through launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors"
              >
                Our 5-Stage Process & About <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 relative">
            <img
              src="https://i.postimg.cc/wj2PcjcG/bene-portrait-D65MEpe-D.jpg"
              alt="Peter Benedict - Founder of Benestudio"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
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
            Fill out our project inquiry form and book an initial call with us. We will review your goals and guide you through our 5-stage positioning, build, and launch process.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-accent-purple text-white font-bold text-base hover:bg-accent-indigo transition-all shadow-[0_0_35px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 group"
            >
              Fill Form & Book a Call <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 text-white font-bold text-base hover:bg-white/10 transition-colors border border-white/10"
            >
              View Selected Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
