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
    startDate: "Marzo 2024",
    endDate: "Junio 2024",
    company: "Lisit",
    description: [
      "Desarrollé el frontend de una aplicación interna para Lisit, destinada a gestionar la salud financiera y operacional de proyectos existentes.",
      "Implementé distintos módulos para la gestión de proyectos, incluyendo: información de proyecto, pricing, planificación, facturación, resumen financiero, y diversas reporterías.",
      "El proyecto fue desarrollado desde cero utilizando React.js, Typescript, Tailwind, TanStack Query, TanStack Table, Zustand, entre otras tecnologías.",
    ],
    techStack: findManyTechsByIdArray(["react js", "typescript", "tailwind"]),
  },
  {
    id: 1,
    startDate: "Julio 2023",
    endDate: "Septiembre 2023",
    company: "Lisit",
    description: [
      "Desarrollé una aplicación frontend para el proyecto Procurement de Softys. Trabajé en módulos para la gestión de archivos por área, información de recurso humano y eventos especiales de Softys. El desarrollo fue realizado con Vue JS y CSS.",
    ],
    techStack: findManyTechsByIdArray(["vue js", "css"]),
  },
  {
    id: 2,
    startDate: "Febrero 2023",
    endDate: "Junio 2023",
    company: "Future NFT Drops",
    description: [
      "Creador autónomo de futurenftdrops.com, una web dedicada a listar próximas colecciones de NFT. Los usuarios pueden explorar la lista de colecciones y crear una cuenta para subir sus propias colecciones.",
      "Creé la web app desde el diseño en Figma hasta el desarrollo completo, utilizando React con Next.js versión 13 (con SSR para SEO). Los estilos de la web fueron desarrollados con SCSS, y para el backend, implementé Supabase como BaaS, conectado mediante peticiones HTTP usando API Route Handlers de Next.js.",
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
      "Desarrollé una landing page para la campaña de invierno de Abastible. Utilicé React.js con el framework Next.js versión 12 y CSS Modules para los estilos. Implementé Google Tag Manager para monitorear la actividad de los usuarios.",
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
      "Participé en el desarrollo de diversas aplicaciones para MiExamen.",
      "Desarrollé el frontend de Himalia, una aplicación web para la gestión de horas de pacientes en laboratorios clínicos.",
      "También trabajé en el frontend de la landing page de MiExamen y en su web app para solicitar pruebas PCR a domicilio en la región de Santiago.",
      "Aporté mejoras en el frontend de MiExamen, adaptando los estilos a las nuevas líneas de diseño de la startup y optimizando el proceso de agendamiento de exámenes PCR. Esto resultó en una mejor experiencia de usuario (UX) y una reducción significativa en las consultas de usuarios sobre cómo agendar sus exámenes en la plataforma.",
      "Trabajé con React.js bajo el framework Meteor.js para la app web, y con Next.js para la landing page. Utilicé Figma para crear los diseños de las interfaces.",
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
      "Desarrollo y despliegue de la aplicación móvil “Ciclo Cósmico” en Google Play Store. La app ofrece horóscopos diarios, compatibilidad de signos zodiacales, entre otras funciones.",
      "Programé la aplicación utilizando Ionic Framework y Angular. Configuré un VPS en DigitalOcean y desarrollé un API REST con Node.js y MongoDB, facilitando la comunicación entre la app y el servidor mediante peticiones HTTP.",
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
      "Práctica profesional: desarrollo de aplicación de escritorio para la gestión de planos arquitectónicos de la empresa Up-BIM, aporté en el desarrollo del software utilizando Electron Framework, empleando tecnologías como JavaScript, HTML y CSS.",
    ],
    techStack: findManyTechsByIdArray([
      "html",
      "css",
      "javascript",
      "electron",
    ]),
  },
];
