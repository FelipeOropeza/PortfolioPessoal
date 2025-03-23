import "../assets/css/project.css"

const projects = [
    { id: 1, name: "Projeto 1", description: "Descrição do projeto 1" },
    { id: 2, name: "Projeto 2", description: "Descrição do projeto 2" },
    { id: 3, name: "Projeto 3", description: "Descrição do projeto 3" },
    { id: 4, name: "Projeto 4", description: "Descrição do projeto 4" },
    { id: 5, name: "Projeto 5", description: "Descrição do projeto 5" },
  ];
  
  const Project: React.FC = () => {
    return (
      <section id="project" className="p-6 mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md h-48 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Project;
  