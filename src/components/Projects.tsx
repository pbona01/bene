import { motion } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "New Dreams",
    url: "https://newdreamss.vercel.app",
    image: "https://i.postimg.cc/MpZzkYT1/20260414-213238.jpg",
  },
  {
    title: "UBB Cakes",
    url: "https://ubbcakes.vercel.app",
    image: "https://i.postimg.cc/WzNNDrRC/20260415-082747.jpg",
  },
  {
    title: "BENE Automations",
    url: "https://beneautomations.vercel.app/",
    image: "https://i.postimg.cc/XqRsHKVz/20260415-082802.jpg",
  },
  {
    title: "CCKIS",
    url: "https://capital-city-olive.vercel.app",
    image: "https://i.postimg.cc/Tw7b3TF1/20260415-084058.jpg",
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
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="relative py-16 md:py-32 px-4 md:px-8 z-10 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Web Design Portfolio
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl text-base md:text-lg">
              Explore our recent custom website builds, high-converting landing pages, and scalable digital ecosystems designed for ambitious brands.
            </p>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-proximity pb-8 scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Pagination & Controls */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-8">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors shrink-0"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-accent-purple w-8" : "bg-white/20 hover:bg-white/40 w-2.5"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors shrink-0"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: { title: string; url: string; image: string }, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex-shrink-0 snap-center group px-2 md:px-0"
    >
      <div className="relative w-fit mx-auto glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.05)] transition-all duration-700 bg-[#0a0a0a]">
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse min-w-[250px]">
            <div className="w-8 h-8 border-2 border-accent-purple border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`h-[60vh] md:h-[70vh] max-h-[600px] w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? "opacity-100 md:opacity-80 md:group-hover:opacity-100" : "opacity-0"
          }`}
        />

        {/* Mobile Click Overlay */}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 md:hidden" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none bg-black/20 md:bg-black/0 md:group-hover:bg-black/40 transition-colors duration-700">
          <div className="pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 scale-100 md:scale-95 md:group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:delay-75">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-accent-purple hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105"
            >
              View full project <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
