import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutBlocks } from "../data/about";

const About: React.FC = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prev) => (prev + 1) % aboutBlocks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center p-9">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl mb-3">
            {t("about.title")}{" "}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div
          id="about-text"
          className="space-y-6 mb-16 text-left md:text-justify px-2 sm:px-0 break-words whitespace-normal"
        >
          <p className="text-lg leading-relaxed text-white">
            {t("about.greeting")}{" "}
            <span className="font-semibold text-sky-400">
              {t("about.name")}{" "}
            </span>
            {t("about.description")}{" "}
            <span className="font-semibold">{t("about.technologies")} </span>
            <span className="font-semibold"> {t("about.interests")} </span>.
          </p>

          <p className="text-lg leading-relaxed text-white">
            <span className="font-semibold">{t("about.opportunity")}</span>
          </p>
        </div>

        <div className="space-y-12">
          <motion.div
            key={currentBlock}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.0 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 text-center mb-8">
              {t("about.title_tech")}{" "}
            </h3>

            <h4 className="text-xl font-semibold text-white text-center mb-4">
              {t(aboutBlocks[currentBlock].titleKey)}
            </h4>

            <p className="text-lg leading-relaxed text-white text-center mb-6">
              {t(aboutBlocks[currentBlock].textKey)}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {aboutBlocks[currentBlock].techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24"
                >
                  <img
                    src={`PortfolioPessoal/images/${tech}`}
                    alt={tech}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
