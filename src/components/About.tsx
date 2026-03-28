import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutBlocks } from "../data/about";
import { Code2, Sparkles, BrainCircuit, Rocket } from "lucide-react";

const About: React.FC = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prev) => (prev + 1) % aboutBlocks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const icons = [<Code2 />, <Sparkles />, <BrainCircuit />, <Rocket />];

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative Cyber Grid Background Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Personal Info & Console */}
        <div className="lg:col-span-7 space-y-10">
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black uppercase tracking-[0.2em] text-white flex items-center gap-4"
            >
              <span className="w-12 h-1 bg-cyan-500 rounded-full" />
              {t("about.title")}
            </motion.h2>
          </div>

          <div className="relative group">
            {/* Terminal/Console Container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            
            <div className="relative glass-cyber p-8 rounded-2xl border border-white/10 shadow-black shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <span className="ml-4 text-[10px] uppercase font-bold tracking-widest text-gray-400">profile_metadata.json</span>
              </div>

              <div className="space-y-6 text-gray-300 font-medium">
                <p className="text-lg leading-relaxed flex gap-3">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span>
                    {t("about.greeting")} <span className="text-white font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{t("about.name")}</span>, {t("about.description")}
                  </span>
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-cyan-400/30 pl-4 py-1 italic opacity-90">
                  {t("about.technologies")}
                </p>
                <p className="text-lg leading-relaxed font-bold text-white bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                  <span className="text-blue-400">#</span> {t("about.opportunity")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Skills Display (Dynamic Blocks) */}
        <div className="lg:col-span-5 relative w-full h-[450px]">
          <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.4em] mb-8 text-center lg:text-left drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]">
             SYSTEM.TECH_STACK_OVERVIEW
          </h3>

          <div className="relative h-full w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBlock}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 glass-cyber p-8 rounded-2xl border border-cyan-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center"
              >
                <div className="mb-6 p-4 bg-cyan-400/5 rounded-2xl text-cyan-400 border border-cyan-400/10">
                  {React.cloneElement(icons[currentBlock] as React.ReactElement<{ size: number }>, { size: 36 })}
                </div>

                <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                  {t(aboutBlocks[currentBlock].titleKey)}
                </h4>

                <p className="text-gray-400 text-sm mb-10 min-h-[48px]">
                  {t(aboutBlocks[currentBlock].textKey)}
                </p>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full px-2">
                  {aboutBlocks[currentBlock].techs.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "rgba(34,211,238,0.1)" }}
                      className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10 transition-colors cursor-pointer group/tech"
                    >
                      <img
                        src={`images/${tech}`}
                        alt={tech}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Tabs - Visual indicators for carousel */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {aboutBlocks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBlock(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${currentBlock === idx ? 'w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
