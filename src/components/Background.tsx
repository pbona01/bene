import { motion, useScroll, useTransform } from "motion/react";

export default function Background() {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers (different speeds for depth)
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]); // Slowest (furthest)
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -300]); // Medium
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -600]); // Fast (closest)
  const yExtreme = useTransform(scrollYProgress, [0, 1], [0, -900]); // Fastest
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
      {/* Animated Gradients */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent-purple/10 blur-[90px] md:blur-[120px] will-change-transform"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent-cyan/10 blur-[90px] md:blur-[120px] will-change-transform"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax Floating Elements */}
      
      {/* Background Layer (Slowest, smallest, lowest opacity) */}
      <motion.div
        style={{ y: yBg, rotate: rotate1 }}
        className="absolute top-[15%] left-[20%] w-16 h-16 border border-white/5 rounded-full backdrop-blur-sm opacity-30 will-change-transform"
      />
      <motion.div
        style={{ y: yBg, rotate: rotate2 }}
        className="absolute bottom-[40%] right-[10%] w-24 h-24 border border-white/5 rounded-xl backdrop-blur-sm opacity-30 will-change-transform"
      />

      {/* Midground Layer */}
      <motion.div
        style={{ y: yMid, rotate: rotate1 }}
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/10 rounded-2xl rotate-12 backdrop-blur-md opacity-40 will-change-transform hidden md:block"
      />
      <motion.div
        style={{ y: yMid, rotate: rotate3 }}
        className="absolute top-[60%] left-[5%] w-20 h-20 border border-white/10 rounded-full backdrop-blur-md opacity-40 will-change-transform"
      />

      {/* Foreground Layer (Fastest, largest, highest opacity) */}
      <motion.div
        style={{ y: yFg, rotate: rotate2 }}
        className="absolute bottom-[10%] left-[15%] w-48 h-48 border border-white/10 rounded-full backdrop-blur-lg opacity-50 will-change-transform hidden sm:block"
      />
      <motion.div
        style={{ y: yExtreme, rotate: rotate1 }}
        className="absolute top-[80%] right-[25%] w-64 h-64 border border-white/10 rounded-3xl backdrop-blur-xl opacity-50 will-change-transform hidden lg:block"
      />
      
      {/* Spotlight Effect (Static base, dynamic in Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
    </div>
  );
}
