import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../assets/css/about.css";

const About: React.FC = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const { t } = useTranslation();

  const blocks = [
    {
      title: t("programming_languages.title"),
      text: t("programming_languages.text"),
      techs: [
        "java-plain.svg", // Java
        "csharp-plain.svg", // C#
        "php-original.svg", // PHP
        "javascript-plain.svg", // JavaScript
        "typescript-plain.svg", // TypeScript
      ],
    },
    {
      title: t("frameworks_libraries.title"),
      text: t("frameworks_libraries.text"),
      techs: [
        "react-original.svg", // React
        "codeigniter-plain.svg", // CodeIgniter
        "nodejs-plain.svg", // Node.js
      ],
    },
    {
      title: t("tools_styling.title"),
      text: t("tools_styling.text"),
      techs: [
        "css3-plain.svg", // CSS3
        "html5-plain.svg", // HTML5
        "composer-original.svg", // Composer
        "npm-original-wordmark.svg", // npm
      ],
    },
    {
      title: t("databases.title"),
      text: t("databases.text"),
      techs: [
        "mysql-original.svg", // MySQL
        "postgresql-plain.svg", // PostgreSQL
        "mongodb-plain-wordmark.svg", // MongoDB
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prev) => (prev + 1) % blocks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="h-dvh">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center p-9">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl mb-3">
            {t("about.title")}{" "}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div
          id="about-text"
          className="space-y-6 mb-16 text-left md:text-justify"
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
              {blocks[currentBlock].title}
            </h4>

            <p className="text-lg leading-relaxed text-white text-center mb-6">
              {blocks[currentBlock].text}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {blocks[currentBlock].techs.map((tech, index) => (
                <div
                  key={index}
                  className="tech-item flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-auto"
                >
                  <img
                    src={`images/${tech}`}
                    alt={tech}
                    className="w-20 h-20 object-contain"
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
