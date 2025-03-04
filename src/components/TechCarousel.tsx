import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
    // Linguagens de Programação
    "images/java-plain.svg",          // Java
    "images/csharp-plain.svg",        // C#
    "images/php-original.svg",        // PHP
    "images/javascript-plain.svg",    // JavaScript
    "images/typescript-plain.svg",    // TypeScript
    // Frameworks e Bibliotecas
    "images/react-original.svg",       // React
    "images/codeigniter-plain.svg",   // CodeIgniter
    "images/nodejs-plain.svg",        // Node.js
    // Estilos e Ferramentas
    "images/css3-plain.svg",          // CSS3
    "images/html5-plain.svg",         // HTML5
    "images/composer-original.svg",   // Composer
    "images/npm-original-wordmark.svg", // npm
    // Bancos de Dados
    "images/mysql-original.svg",      // MySQL
    "images/postgresql-plain.svg",    // PostgreSQL
    "images/mongodb-plain-wordmark.svg" // MongoDB
  ];

const TechCarousel: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleAnimationComplete = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="overflow-hidden py-10 text-white mt-20">
      <h1 className="text-center text-5xl mb-9">Technologies</h1>
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          key={animationKey}
          className="flex gap-10"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            onComplete: handleAnimationComplete,
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt="Tech logo"
              className="h-24 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechCarousel;