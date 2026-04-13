import { motion } from "motion/react";
import { useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "BENE Automations",
    url: "https://beneautomations.vercel.app/",
  },
  {
    title: "New Dreams",
    url: "https://newdreamss.vercel.app",
  },
  {
    title: "Capital City",
    url: "https://capital-city-olive.vercel.app",
  },
  {
    title: "UBB Cakes",
    url: "https://ubbcakes.vercel.app",
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Selected Works
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: { title: string; url: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-[85vw] md:w-[600px] flex-shrink-0 snap-center aspect-[4/3] md:aspect-video flex items-center justify-center group"
    >
      <div className="relative w-full h-full glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.05)] transition-all duration-700">
        {/* Live Iframe */}
        <div className="absolute inset-0 bg-black">
          <iframe
            src={project.url}
            className="w-full h-full border-none opacity-100 md:opacity-70 md:group-hover:opacity-100 scale-105 md:scale-100 md:group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none md:pointer-events-auto origin-center"
            title={project.title}
          />
        </div>

        {/* Mobile Click Overlay */}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 md:hidden" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none bg-black/20 md:bg-black/0 md:group-hover:bg-black/20 transition-colors duration-700">
          <div className="pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 scale-100 md:scale-90 md:group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:delay-75">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black text-sm font-bold hover:bg-accent-purple hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105"
            >
              View Project <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
