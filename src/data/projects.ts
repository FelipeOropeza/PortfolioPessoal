import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    name: "EduTrack",
    description_pt: "Sistema avançado de gestão educacional desenvolvido com Laravel, Livewire e Alpine.js, focado em alta performance e reatividade.",
    description_en: "Advanced educational management system developed with Laravel, Livewire, and Alpine.js, focused on high performance and reactivity.",
    languages: [
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
        { name: "Livewire", icon: "https://cdn.simpleicons.org/livewire" },
        { name: "Alpine.js", icon: "https://cdn.simpleicons.org/alpinedotjs/8BC0D0" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/edutrack",
    imageUrl: "edutrack.png",
    stars: 12,
    forks: 3
  },
  {
    id: 2,
    name: "Portfolio Pessoal",
    description_pt: "Meu portfólio pessoal construído com React, Vite e Tailwind CSS, focado em alta performance e design futurista.",
    description_en: "My personal portfolio built with React, Vite, and Tailwind CSS, focused on high performance and futuristic design.",
    languages: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/PortfolioPessoal",
    imageUrl: "portfolio.png",
    stars: 10,
    forks: 2
  },
  {
    id: 3,
    name: "Supermercado System",
    description_pt: "Sistema completo de PDV e gestão de produtos para supermercados, integrando controle de estoque e vendas.",
    description_en: "Complete POS and product management system for supermarkets, integrating stock control and sales.",
    languages: [
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/supermercado",
    imageUrl: "market.png",
    stars: 8,
    forks: 1
  },
  {
    id: 4,
    name: "MVC Estrutura",
    description_pt: "Framework base construído do zero seguindo rigorosamente o padrão MVC para aplicações PHP escaláveis.",
    description_en: "Base framework built from scratch rigorously following the MVC pattern for scalable PHP applications.",
    languages: [
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "MVC", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "OOP", icon: "https://cdn.simpleicons.org/php/777BB4" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/mvc-estrutura",
    imageUrl: "mvc.png",
    stars: 15,
    forks: 2
  },
  {
    id: 5,
    name: "Weather Platform",
    description_pt: "Plataforma de clima avançada em TypeScript, consumindo APIs meteorológicas em tempo real.",
    description_en: "Advanced weather platform in TypeScript, consuming real-time meteorological APIs.",
    languages: [
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "API", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/weather-platform",
    imageUrl: "weather.png",
    stars: 10,
    forks: 1
  },
  {
    id: 6,
    name: "StockMaster",
    description_pt: "Sistema de gerenciamento de estoque robusto seguindo o padrão MVC em PHP.",
    description_en: "Robust inventory management system following the MVC pattern in PHP.",
    languages: [
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/StockMaster",
    imageUrl: "stock.png",
    stars: 12,
    forks: 4
  },
  {
    id: 7,
    name: "CodeHub Web",
    description_pt: "Interface web moderna para gerenciamento de snippets de código, desenvolvida com Vue.js.",
    description_en: "Modern web interface for managing code snippets, developed with Vue.js.",
    languages: [
        { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/codehub-web",
    imageUrl: "codehub.png",
    stars: 10,
    forks: 2
  },
  {
    id: 8,
    name: "Web Scraping Pro",
    description_pt: "Utilitário de extração de dados automatizada desenvolvido em Python.",
    description_en: "Automated data extraction utility developed in Python.",
    languages: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "Automation", icon: "https://cdn.simpleicons.org/python/3776AB" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/webScraping",
    imageUrl: "scraping.png",
    stars: 7,
    forks: 1
  },
  {
    id: 9,
    name: "Api-Postagens",
    description_pt: "API backend para um sistema de rede social, focada em performance e escalabilidade.",
    description_en: "Backend API for a social network system, focused on performance and scalability.",
    languages: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" }
    ],
    githubUrl: "https://github.com/FelipeOropeza/Api-postagens",
    imageUrl: "api.png",
    stars: 15,
    forks: 5
  }
];
