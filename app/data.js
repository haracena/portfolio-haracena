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
      "Creador autónomo de futurenftdrops.com, la web consiste en listar próximas colecciones de NFT, los usuarios pueden ver la lista de colecciones y trambíen crear una cuenta para subir sus propias colecciones.",
      "Cree la web app desde el diseño hecho en Figma hasta el desarrollo del mismo utilizando React con Next js versión 13 (Con SSR para SEO). Los estilos de la web fueron creados con SCSS, en cuanto al Backend, implementé Supabase como BaaS, conectado mediante peticiones HTTP usando API Route Handlers de Next JS.",
    ],
    techStack: findManyTechsByIdArray([
      "react js",
      "next js",
      "supabase",
      "css",
      "figma",
    ]),
    projectImage: "/assets/images/futurenftdrops.png",
    projectUrl: "https://www.futurenftdrops.com/",
    projectColor: "#6107FA",
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
    projectUrl: "https://abastible-invierno.vercel.app/",
    projectColor: "#EA6402",
  },

  {
    id: 3,
    startDate: "Marzo 2022",
    endDate: "Enero 2023",
    company: "Mi Examen",
    description: [
      "Participé en el desarrollo de distintas aplicaciones MiExamen. Desarrollé el front end de Himalia, aplicación web para la gestión de horas de pacientes en laboratorios clínicos. También trabajé en el front end de la landing page de Mi Examen y su web app para pedir PCR a domicilio en la región de Santiago.",
      "Aporté con mejoras en el front end de MiExamen, adaptando los estilos a las nuevas líneas de diseño de la startup. Mejoramos el proceso de agendamiento de exámenes PCR, logrando un mejor UX y disminuyendo las preguntas de los usuarios sobre cómo agendar sus exámenes por la antigua plataforma.",
      "Trabajé con React js bajo el framework Meteor js para la app web y Next js para el landing page, para crear los diseños de las interfaces utilicé Figma.",
    ],
    techStack: findManyTechsByIdArray([
      "react js",
      "next js",
      "meteor js",
      "css",
      "figma",
    ]),
    projectImage: "/assets/images/miexamen.png",
    projectUrl: "https://miexamen-landing.vercel.app/",
    projectColor: "#1242C4",
  },
  {
    id: 9,
    startDate: "Junio 2019",
    endDate: "Julio 2019",
    company: "Desarrollador independiente",
    description: [
      "Desarrollo y despliegue de aplicación móvil “Ciclo Cósmico” en Google Playstore. La app consiste en mostrar horóscopos diarios, compatibilidad de signos zodiacales, entre otras funciones.",
      "Programé la app con Ionic Framework y Angular. Configuré un VPS en Digital Ocean y desarrollé un API REST con Node js y Mongo DB, logrando una comunicación entre app y servidor mediante peticiones HTTP.",
    ],
    techStack: findManyTechsByIdArray([
      "ionic",
      "angular",
      "css",
      "node js",
      "mongo db",
    ]),
    projectImage: "/assets/images/ciclocosmico.png",
    projectUrl:
      "https://play.google.com/store/apps/details?id=io.ionic.ciclocosmico&hl=es",
    projectColor: "#FFFF",
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
