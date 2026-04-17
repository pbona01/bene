import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import Lenis from "lenis";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { DemoHeroGeometric } from "./components/DemoHero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background selection:bg-accent-purple selection:text-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan z-[1000] origin-left"
        style={{ scaleX }}
      />

      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <DemoHeroGeometric />
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  );
}
