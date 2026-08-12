import { motion, useScroll, useTransform } from "motion/react";

function AmbientShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  className = "",
}: {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [rotate, rotate + 3, rotate],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.12] to-orange-500/[0.08] backdrop-blur-[2px] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(249,115,22,0.08)]"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Background() {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers (different speeds for depth)
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transform-gpu bg-[#030303]">
      {/* Warm Ambient Radial Gradients matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-amber-500/[0.04] blur-3xl" />
      
      <motion.div
        className="absolute -top-[15%] left-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[130px] will-change-transform"
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[-10%] w-[55%] h-[55%] rounded-full bg-amber-500/10 blur-[140px] will-change-transform"
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[5%] w-[45%] h-[45%] rounded-full bg-orange-600/10 blur-[120px] will-change-transform"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Geometric Ambient Pills / Shapes across pages */}
      <AmbientShape
        delay={0.2}
        width={500}
        height={110}
        rotate={14}
        className="top-[8%] -left-[10%] md:-left-[4%]"
      />
      <AmbientShape
        delay={0.4}
        width={420}
        height={95}
        rotate={-16}
        className="top-[32%] -right-[8%] md:-right-[3%]"
      />
      <AmbientShape
        delay={0.6}
        width={360}
        height={85}
        rotate={10}
        className="top-[62%] -left-[6%] md:-left-[2%]"
      />
      <AmbientShape
        delay={0.8}
        width={450}
        height={100}
        rotate={-12}
        className="bottom-[8%] -right-[6%] md:-right-[2%]"
      />

      {/* Parallax Geometric accents */}
      <motion.div
        style={{ y: yBg, rotate: rotate1 }}
        className="absolute top-[25%] left-[25%] w-20 h-20 border border-amber-500/10 rounded-2xl backdrop-blur-sm opacity-40 will-change-transform hidden md:block"
      />
      <motion.div
        style={{ y: yMid, rotate: rotate2 }}
        className="absolute top-[55%] right-[20%] w-28 h-28 border border-orange-500/10 rounded-3xl backdrop-blur-sm opacity-40 will-change-transform hidden md:block"
      />
      <motion.div
        style={{ y: yFg }}
        className="absolute bottom-[25%] left-[15%] w-16 h-16 border border-amber-500/15 rounded-full backdrop-blur-sm opacity-50 will-change-transform hidden sm:block"
      />

      {/* Spotlight Mesh Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.03)_0%,transparent_60%)]" />
    </div>
  );
}

