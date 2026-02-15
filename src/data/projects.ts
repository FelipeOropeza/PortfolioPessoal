import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Projeto 1",
    description: "Descrição do projeto 1",
    imageUrl: "url_da_imagem_do_projeto_1.jpg",
    languages: [
      { name: "JavaScript", icon: "url_do_ícone_js.jpg" },
      { name: "React", icon: "url_do_ícone_react.jpg" },
    ],
  },
  {
    id: 2,
    name: "Projeto 2",
    description: "Descrição do projeto 2",
    imageUrl: "url_da_imagem_do_projeto_2.jpg",
    languages: [
      { name: "Python", icon: "url_do_ícone_python.jpg" },
      { name: "Django", icon: "url_do_ícone_django.jpg" },
    ],
  },
  {
    id: 3,
    name: "Projeto 3",
    description: "Descrição do projeto 3",
    imageUrl: "url_da_imagem_do_projeto_3.jpg",
    languages: [{ name: "Go", icon: "url_do_ícone_go.jpg" }],
  },
  {
    id: 4,
    name: "Projeto 4",
    description: "Descrição do projeto 4",
    imageUrl: "url_da_imagem_do_projeto_4.jpg",
    languages: [{ name: "Ruby", icon: "url_do_ícone_ruby.jpg" }],
  },
  {
    id: 5,
    name: "Projeto 5",
    description: "Descrição do projeto 5",
    imageUrl: "url_da_imagem_do_projeto_5.jpg",
    languages: [{ name: "Java", icon: "url_do_ícone_java.jpg" }],
  },
];
