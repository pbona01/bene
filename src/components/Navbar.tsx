import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center"
    >
      <Link to="/" className="text-xl font-bold tracking-tighter text-white">
        BENE<span className="text-accent-purple">.</span>
      </Link>

      <div className="flex gap-3 sm:gap-4 md:gap-8 items-center glass px-4 md:px-6 py-2 md:py-3 rounded-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors relative group ${
                isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-accent-purple transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <Link 
        to="/contact"
        className="hidden md:block px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-accent-purple hover:text-white transition-all duration-300"
      >
        Let's Talk
      </Link>
    </motion.nav>
  );
}
