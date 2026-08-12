"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 3,
                delay,
                ease: [0.16, 1, 0.3, 1] as any,
                opacity: { duration: 1.5 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "WEBSITES • DIGITAL PRODUCTS • CLIENT SYSTEMS",
    title1 = "Digital Experiences",
    title2 = "That Move Business",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: 0.4 + i * 0.2,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303] pt-32 sm:pt-36 md:pt-40 pb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-amber-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-orange-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-amber-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-yellow-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-orange-400/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-amber-400/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {badge && (
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8"
                        >
                            <Circle className="h-2 w-2 fill-orange-500/80" />
                            <span className="text-xs sm:text-sm text-white/60 tracking-wide font-mono uppercase">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white/90 to-amber-400 "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Benestudio designs and builds premium websites, digital products and client systems for ambitious businesses ready to look sharper, operate smarter and turn attention into action.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link to="/work" className="px-8 py-4 rounded-full bg-accent-purple text-white font-bold hover:bg-accent-indigo transition-colors shadow-[0_0_30px_rgba(249,115,22,0.3)] tracking-wider text-xs sm:text-sm">
                                VIEW OUR WORK
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-colors border border-white/10 tracking-wider text-xs sm:text-sm">
                                START A PROJECT
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
