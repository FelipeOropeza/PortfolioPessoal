import "../assets/css/project.css";

const projects = [
  {
    id: 1,
    name: "Projeto 1",
    description: "Descrição do projeto 1",
    imageUrl: "url_da_imagem_do_projeto_1.jpg", // Adicionar URL da imagem
    languages: [
      { name: "JavaScript", icon: "url_do_ícone_js.jpg" },
      { name: "React", icon: "url_do_ícone_react.jpg" }
    ]
  },
  {
    id: 2,
    name: "Projeto 2",
    description: "Descrição do projeto 2",
    imageUrl: "url_da_imagem_do_projeto_2.jpg",
    languages: [
      { name: "Python", icon: "url_do_ícone_python.jpg" },
      { name: "Django", icon: "url_do_ícone_django.jpg" }
    ]
  },
  {
    id: 3,
    name: "Projeto 3",
    description: "Descrição do projeto 3",
    imageUrl: "url_da_imagem_do_projeto_3.jpg",
    languages: [
      { name: "Go", icon: "url_do_ícone_go.jpg" }
    ]
  },
  {
    id: 4,
    name: "Projeto 4",
    description: "Descrição do projeto 4",
    imageUrl: "url_da_imagem_do_projeto_4.jpg",
    languages: [
      { name: "Ruby", icon: "url_do_ícone_ruby.jpg" }
    ]
  },
  {
    id: 5,
    name: "Projeto 5",
    description: "Descrição do projeto 5",
    imageUrl: "url_da_imagem_do_projeto_5.jpg",
    languages: [
      { name: "Java", icon: "url_do_ícone_java.jpg" }
    ]
  }
];

const Project: React.FC = () => {
  return (
    <section id="project" className="p-6 mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md h-auto text-white"
          >
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex space-x-2 mb-4">
              {project.languages.map((language, index) => (
                <img
                  key={index}
                  src={language.icon}
                  alt={language.name}
                  className="w-6 h-6"
                />
              ))}
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Detalhes
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
