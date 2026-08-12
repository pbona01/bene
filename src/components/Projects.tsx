import { motion } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export const projectsData = [
  {
    title: "Plugsy",
    url: "https://plugsy.ng/",
    image: "https://i.postimg.cc/2yKthf58/image.png",
  },
  {
    title: "New Dreams",
    url: "https://newdreamss.vercel.app",
    image: "https://i.postimg.cc/JnTYCWZQ/image.png",
  },
  {
    title: "UBB Cakes",
    url: "https://ubbcakes.vercel.app",
    image: "https://i.postimg.cc/WzNNDrRC/20260415-082747.jpg",
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(childCenter - scrollPosition);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const child = scrollContainerRef.current.children[index] as HTMLElement;
    if (child) {
      scrollContainerRef.current.scrollTo({
        left: child.offsetLeft - scrollContainerRef.current.offsetLeft,
        behavior: "smooth"
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    let nextIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= projectsData.length) nextIndex = projectsData.length - 1;
    scrollTo(nextIndex);
  };

  return (
    <section id="work" className="relative py-16 md:py-28 z-10 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 px-4 md:px-8">
          <div>
            <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Recent Projects
            </h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-accent-purple hover:border-accent-purple transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-accent-purple hover:border-accent-purple transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-5 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 scroll-smooth px-4 md:px-8"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-6">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-accent-purple w-8" : "bg-white/20 hover:bg-white/40 w-2"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: { title: string; url: string; image: string }, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="relative flex-shrink-0 snap-center group"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:border-accent-purple/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition-all duration-500 bg-[#0a0a0a]"
      >
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse min-w-[280px] min-h-[400px]">
            <div className="w-8 h-8 border-2 border-accent-purple border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading={index <= 2 ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`h-[55vh] md:h-[65vh] max-h-[560px] w-auto object-contain transition-all duration-700 group-hover:scale-[1.02] ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Clean Hover / Title Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-12 flex items-center justify-between pointer-events-none">
            <span className="text-white font-bold text-base md:text-lg tracking-tight drop-shadow-md">
              {project.title}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-medium group-hover:bg-accent-purple group-hover:border-accent-purple transition-colors">
              Visit Live <ExternalLink size={12} />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
