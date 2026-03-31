import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "New Dreams",
    url: "https://newdreamss.vercel.app",
  },
  {
    title: "Capital City",
    url: "https://capital-city-olive.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: { title: string; url: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="relative w-full aspect-[4/3] md:aspect-video flex items-center justify-center group"
    >
      <div className="relative w-full h-full glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.05)] transition-all duration-700">
        {/* Live Iframe */}
        <div className="absolute inset-0">
          <iframe
            src={project.url}
            className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            title={project.title}
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <motion.div style={{ y }} className="pointer-events-auto">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-accent-purple hover:text-white transition-all shadow-2xl scale-110"
            >
              {project.title} <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
