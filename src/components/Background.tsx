import { motion, useScroll, useTransform } from "motion/react";

export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Gradients */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-purple/10 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent-cyan/10 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/5 rounded-2xl rotate-12 backdrop-blur-sm"
      />
      <motion.div
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[30%] left-[10%] w-48 h-48 border border-white/5 rounded-full backdrop-blur-sm"
      />
      
      {/* Spotlight Effect (Static base, dynamic in Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
    </div>
  );
}
