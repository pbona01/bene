import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  caseStudyUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "happy-coffee",
    title: "Happy Coffee",
    category: "CONCEPT REDESIGN / COFFEE",
    description: "A bold editorial redesign concept celebrating Nigerian-grown coffee, local origin and modern African brand culture.",
    image: "/happy-coffee-concept.png",
    liveUrl: "https://happy-coffee-redesign.vercel.app/",
    caseStudyUrl: "/work/happy-coffee",
  },
  {
    id: "plugsy",
    title: "Plugsy",
    category: "PLATFORM / WEBSITE",
    description: "A utility marketplace designed to make finding and accessing everyday digital services easier.",
    image: "https://i.postimg.cc/2yKthf58/image.png",
    liveUrl: "https://plugsy.ng/",
    caseStudyUrl: "/work/plugsy",
  },
  {
    id: "newdreams",
    title: "NewDreams",
    category: "FASHION / ECOMMERCE",
    description: "A fashion storefront built around stronger product presentation and a cleaner mobile buying experience.",
    image: "https://i.postimg.cc/JnTYCWZQ/image.png",
    liveUrl: "https://newdreamss.vercel.app",
    caseStudyUrl: "/work/newdreams",
  },
  {
    id: "ubbcakes",
    title: "UBB Cakes",
    category: "FOOD / COMMERCE",
    description: "A mobile-first bakery experience designed to make discovering products and starting an order easier.",
    image: "https://i.postimg.cc/WzNNDrRC/20260415-082747.jpg",
    liveUrl: "https://ubbcakes.vercel.app",
    caseStudyUrl: "/work/ubbcakes",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-16 md:py-28 z-10 bg-[#030303] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-14">
        <span className="text-accent-purple font-mono text-xs tracking-[0.3em] uppercase font-bold block mb-2">
          SELECTED WORK
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          SELECTED DIGITAL WORK.
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/60 max-w-xl font-light">
          Client work and concept redesigns across technology, fashion, food and commerce.
        </p>
      </div>

      {/* Infinite Continuous Work Loop Track */}
      <div className="relative w-full overflow-x-auto md:overflow-hidden no-scrollbar touch-pan-x py-2">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {/* Primary Set (Accessible) */}
          <div className="flex gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} isClone={false} />
            ))}
          </div>

          {/* Cloned Set (Visual loop duplicate, hidden from screen readers & keyboard focus) */}
          <div className="flex gap-6" aria-hidden="true">
            {projectsData.map((project) => (
              <ProjectCard key={`clone-${project.id}`} project={project} isClone={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Understated Section End Action */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 md:mt-14 flex justify-end">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest text-white/70 hover:text-accent-purple transition-colors font-bold group"
        >
          VIEW ALL WORK <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project, isClone }: { project: ProjectItem; isClone: boolean }) {
  return (
    <article
      className="w-[300px] sm:w-[380px] md:w-[440px] flex-shrink-0 rounded-3xl glass border border-white/10 hover:border-accent-purple/50 transition-all duration-500 overflow-hidden bg-[#0a0a0a] flex flex-col group shadow-xl"
    >
      {/* Browser Window Bar */}
      <div className="bg-black/80 px-4 py-2.5 flex items-center justify-between border-b border-white/10 rounded-t-3xl">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 px-3 py-0.5 max-w-[180px] truncate">
          {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
        <div className="w-8" />
      </div>

      {/* Website Preview Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-black/50 border-b border-white/5">
        <img
          src={project.image}
          alt={isClone ? "" : `${project.title} website interface`}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>

      {/* Project Meta & Information */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="text-accent-purple font-mono text-xs font-bold uppercase tracking-wider block mb-1">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-white/60 leading-relaxed mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <Link
            to={project.caseStudyUrl}
            tabIndex={isClone ? -1 : 0}
            aria-hidden={isClone}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-accent-purple transition-colors"
          >
            View Case Study <ArrowUpRight size={14} />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isClone ? -1 : 0}
            aria-hidden={isClone}
            className="text-[11px] font-mono text-white/40 hover:text-white transition-colors flex items-center gap-1"
          >
            Live Site <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}
