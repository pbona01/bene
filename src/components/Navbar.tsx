import { motion } from "motion/react";

export default function Navbar() {
  const navItems = ["Work", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center"
    >
      <div className="text-xl font-bold tracking-tighter text-white">
        BENE<span className="text-accent-purple">.</span>
      </div>

      <div className="flex gap-3 sm:gap-4 md:gap-8 items-center glass px-4 md:px-6 py-2 md:py-3 rounded-full">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-purple transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <a 
        href="mailto:pbona717@gmail.com"
        className="hidden md:block px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-accent-purple hover:text-white transition-all duration-300"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
}
