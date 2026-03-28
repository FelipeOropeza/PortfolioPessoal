import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, ChevronDown } from "lucide-react";

const Banner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col items-center justify-center text-white px-6 md:px-12 max-w-7xl mx-auto overflow-hidden pt-32 pb-16"
    >
      {/* Visual Accents - Cyber Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 blur-[130px] rounded-full -z-10" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 lg:gap-20">
        
        {/* Left Content: Typography focus */}
        <div className="w-full md:w-3/5 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-widest animate-pulse"
          >
            <Terminal size={14} />
            <span>Developer_Interface.v4</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[1.1] mb-6"
          >
            <span className="block text-gray-400 text-2xl sm:text-3xl font-medium mb-2 lowercase opacity-80 opacity-60">
              {t("banner.greeting").split(" ").slice(0, 3).join(" ")}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-300% animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              {t("banner.greeting").split(" ").slice(3).join(" ")}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            {t("banner.description")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a href="#project" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
              {t("banner.btn_projects")}
            </a>
            <a href="#about" className="px-8 py-3 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 text-white font-bold rounded-lg transition-all backdrop-blur-md">
              {t("banner.btn_about")}
            </a>
          </motion.div>
        </div>

        {/* Right Content: Profile focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group cursor-crosshair z-10"
        >
          {/* Animated Ring Decor */}
          <div className="absolute inset-0 border-[1px] border-cyan-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -inset-4 border-[1px] border-blue-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] aspect-square rounded-full overflow-hidden border-2 border-white/10 p-2 bg-gray-900 group-hover:border-cyan-400/50 transition-colors duration-500 backdrop-blur-3xl shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border border-white/5">
              <img
                src={"images/FelipeCarvalho.jpeg"}
                alt="Felipe Oropeza"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
            </div>
            {/* Tech badges floating around profile - Cyber detail */}
            <div className="absolute top-2 right-2 p-2 bg-gray-950/80 rounded-lg border border-cyan-400/30 text-cyan-400 backdrop-blur-md hidden sm:block">
               <Cpu size={20} />
            </div>
            <div className="absolute bottom-6 left-2 p-2 bg-gray-950/80 rounded-lg border border-blue-400/30 text-blue-400 backdrop-blur-md hidden sm:block">
               <Database size={20} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-cyan-400 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase">SCROLL_DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
