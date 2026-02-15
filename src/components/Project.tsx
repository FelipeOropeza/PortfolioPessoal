import React from "react";
import { projects } from "../data/projects";

const Project: React.FC = () => {
  return (
    <section id="project" className="px-4 sm:px-6 md:px-10 py-16 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-300 mb-10 text-center">
        My Projects
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              bg-gray-800
              p-6
              rounded-lg
              shadow-md
              text-white
              flex
              flex-col
              transition-transform
              duration-300
              hover:-translate-y-1
            "
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="
                w-full
                aspect-video
                object-cover
                rounded-lg
                mb-4
              "
            />

            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.languages.map((language, index) => (
                <img
                  key={index}
                  src={language.icon}
                  alt={language.name}
                  title={language.name}
                  className="w-6 h-6"
                />
              ))}
            </div>

            <button
              className="
                mt-auto
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                transition-colors
              "
            >
              Detalhes
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
