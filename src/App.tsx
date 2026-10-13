import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import PlugsyCaseStudy from "./pages/PlugsyCaseStudy";
import UBBCakesCaseStudy from "./pages/UBBCakesCaseStudy";
import NewDreamsCaseStudy from "./pages/NewDreamsCaseStudy";
import HappyCoffeeCaseStudy from "./pages/HappyCoffeeCaseStudy";
import Services from "./pages/Services";
import AboutPage from "./pages/AboutPage";
import InteriorDesigners from "./pages/InteriorDesigners";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-background selection:bg-accent-purple selection:text-white">
      <ScrollToTop />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan z-[1000] origin-left"
        style={{ scaleX }}
      />

      <Background />
      <Navbar />
      
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/plugsy" element={<PlugsyCaseStudy />} />
          <Route path="/work/ubbcakes" element={<UBBCakesCaseStudy />} />
          <Route path="/work/newdreams" element={<NewDreamsCaseStudy />} />
          <Route path="/work/happy-coffee" element={<HappyCoffeeCaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/interior-designers" element={<InteriorDesigners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
