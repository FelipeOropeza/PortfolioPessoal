import React, { useState, useEffect } from "react";
import { Menu, X, Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const navLinks = [
    { title: t("nav.home"), href: "#home" },
    { title: t("nav.about"), href: "#about" },
    { title: t("nav.projects"), href: "#project" },
    { title: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 rounded-full mx-4 sm:mx-10 px-8 shadow-2xl' : 'bg-transparent'}`}>
        
        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-black group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
            F
          </div>
          <span className="text-sm font-bold tracking-[0.2em] hidden sm:block group-hover:text-cyan-400 transition-colors uppercase">
            ORopeza<span className="text-cyan-400">_</span>System
          </span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-xs font-bold items-center uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-300 py-2 block"
              >
                {link.title}
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                ></motion.span>
              </a>
            </li>
          ))}
          
          {/* Language Switcher */}
          <li className="pl-4 border-l border-white/10 ml-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full hover:bg-white/10 hover:border-cyan-400/30 border border-transparent transition-all active:scale-95"
            >
              <Globe size={14} className="text-cyan-400" />
              <span className="text-[10px]">{i18n.language.toUpperCase()}</span>
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
             onClick={toggleLanguage}
             className="p-2 bg-white/5 rounded-lg border border-white/10"
          >
            <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
          </button>
          <button 
            className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-400/20" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click to close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              className="absolute top-[80px] right-6 left-6 sm:left-auto sm:w-[320px] bg-gray-900/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col gap-6 md:hidden z-40"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xl font-black text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors uppercase tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            
              <div className="flex justify-between mt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Connect_Now</span>
                <div className="flex gap-4">
                  <Github size={20} className="text-gray-400 hover:text-white" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
