import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Star, GitBranch } from "lucide-react";
import { projects } from "../data/projects";

const Project: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase"
            >
              <div className="w-12 h-px bg-cyan-400" />
              <span>PROJECT_DATABASE</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              {t("nav.projects")}
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm md:text-right font-medium leading-relaxed">
            {t("projects.subtitle") || "A selection of my recent works and technical experiments across different stacks."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-500">
                  <Github size={28} className="text-gray-400 group-hover:text-cyan-400" />
                </div>
                <div className="flex gap-3 translate-y-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white rounded-xl border border-white/10 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                {i18n.language === "pt" ? project.description_pt : project.description_en}
              </p>

              {/* Stats & Languages */}
              <div className="mt-auto space-y-5">
                <div className="flex items-center justify-between text-xs text-gray-500 font-black tracking-widest uppercase">
                  <div className="flex gap-4">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                        <Star size={14} /> {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                        <GitBranch size={14} /> {project.forks}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.languages.map((language, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                      title={language.name}
                    >
                      <img
                        src={language.icon}
                        alt=""
                        className="w-4 h-4"
                      />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{language.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center justify-center gap-3
                    w-full
                    bg-gradient-to-r from-gray-800 to-gray-900
                    hover:from-cyan-600 hover:to-blue-700
                    text-white font-black text-xs uppercase tracking-[0.2em]
                    py-5
                    rounded-2xl
                    border border-white/5
                    hover:border-transparent
                    shadow-xl
                    transition-all duration-500
                    active:scale-[0.98]
                  "
                >
                  <span>SOURCE_CODE()</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <a
            href="https://github.com/FelipeOropeza?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-6 bg-transparent border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] overflow-hidden rounded-2xl transition-all hover:border-cyan-400 shadow-2xl"
          >
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
            <span className="group-hover:text-black transition-colors flex items-center gap-3">
              EXPLORE_FULL_ARCHIVE() <ExternalLink size={18} />
            </span>
          </a>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest font-black">
            System found 70+ technical repositories in cloud
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
