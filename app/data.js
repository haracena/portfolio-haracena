import { findManyTechsByIdArray } from "./technologies";

export const education = [
  {
    id: 3,
    startDate: "Abril 2020",
    endDate: "Julio 2020",
    title: "Curso de capacitación en React JS",
    description: "Escalab OTEC, Santiago - Providencia",
    file: "/assets/files/certificado-reactjs.pdf",
  },
  {
    id: 1,
    startDate: 2015,
    endDate: 2019,
    title: "Titulado de Ingeniero en Informática, Licenciado en Informática",
    description: "Universidad Inacap, La Serena",
    file: "/assets/files/certificado-titulo.pdf",
  },
  {
    id: 2,
    startDate: 2013,
    endDate: 2014,
    title: "Estudiante de Ingeniería en computación",
    description: "Universidad de La Serena",
  },
];

export const experience = [
  {
    id: 1,
    startDate: "Julio 2023",
    endDate: "Septiembre 2023",
    company: "Lisit",
    description: [
      "Desarrollo de aplicación front end para proyecto Procurement de Softys. Trabajé en módulos para la gestión de archivos por área, información de recurso humano y eventos especiales de Softys. El desarrollo fue realizado con Vue JS y CSS.",
    ],
    techStack: findManyTechsByIdArray(["vue js", "css"]),
  },
  {
    id: 2,
    startDate: "Febrero 2023",
    endDate: "Junio 2023",
    company: "Future NFT Drops",
    description: [
      "Creador autónomo de futurenftdrops.com. Cree la web app desde el diseño hecho en Figma hasta el desarrollo del mismo utilizando React con Next js (Con SSR para SEO). La mayor parte del desarrollo es Front End con las tecnologías mencionadas anteriormente y SCSS, en cuanto al Backend, implementé Supabase como BaaS.",
    ],
    techStack: findManyTechsByIdArray([
      "react js",
      "next js",
      "supabase",
      "css",
      "figma"
    ]),
    projectImage: "/assets/images/futurenftdrops.png",
    projectColor: "#6107FA"
  },
  {
    id: 99,
    startDate: "Abril 2022",
    endDate: "Mayo 2022",
    company: "Lisit",
    description: [
      "Desarrollo de landing page para la campañana invierno de Abastible. Trabajé con React js usando el framework Next js versión 12, para los estilos utilicé CSS Modules. Además implementé Google Tag Manager para monitorear la actividad de los usuarios.",
    ],
    techStack: findManyTechsByIdArray(["react js", "next js", "css"]),
    projectImage: "/assets/images/abastible.png",
    projectColor: "#EA6402"
  },

  {
    id: 3,
    startDate: "Marzo 2022",
    endDate: "Enero 2023",
    company: "Mi Examen",
    description: [
      "Desarrollo front end para aplicaciones internas de MiExamen. Trabajé con React js bajo el framework Meteor js, para crear los diseños de las interfaces utilicé Figma. Adicionalmente mejoré el front de MiExamen, adaptando los estilos a las nuevas líneas de diseño de la startup.",
      "También participé en la mejora del proceso de agendamiento de exámenes PCR, logrando un mejor UX y disminuyendo las preguntas de los usuarios sobre cómo agendar sus exámenes por la antigua plataforma.",
    ],
    techStack: findManyTechsByIdArray([
      "react js",
      "next js",
      "meteor js",
      "css",
      "figma"
    ]),
    projectImage: "/assets/images/miexamen.png",
    projectColor: "#1242C4"
  },
  {
    id: 9,
    startDate: "Junio 2019",
    endDate: "Julio 2019",
    company: "Desarrollador independiente",
    description: [
      "Desarrollo y despliegue de aplicación móvil “Ciclo Cósmico” en Google Playstore, desarrollé la app con Ionic Framework y Angular. Configuré un VPS en Digital Ocean y desarrollé un API REST con Nodejs, logrando una comunicación entre app y servidor mediante peticiones HTTP.",
    ],
    techStack: findManyTechsByIdArray(["ionic", "angular", "css", "node js", "mongo db"]),
    projectImage: "/assets/images/ciclocosmico.png",
    projectColor: "#FFFF"
  },
  {
    id: 10,
    startDate: "Enero 2019",
    endDate: "Marzo 2019",
    company: "Innoti",
    description: [
      "Práctica profesional, desarrollo de aplicación de escritorio para la gestión de planos arquitectónicos de la empresa Up-BIM, el software fue desarrollado con Electron Framework, utilizando las siguientes tecnologías: Javascript, HTML y CSS.",
    ],
    techStack: findManyTechsByIdArray([
      "html",
      "css",
      "javascript",
      "electron",
    ]),
  },
];
