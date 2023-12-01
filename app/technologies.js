export const technologies = [
  {
    name: "HTML",
    grayIcon: "/assets/icons/html-gray.svg",
    colorIcon: "/assets/icons/html.svg",
  },
  {
    name: "CSS",
    grayIcon: "/assets/icons/css-gray.svg",
    colorIcon: "/assets/icons/css.svg",
  },
  {
    name: "Javascript",
    grayIcon: "/assets/icons/javascript-gray.svg",
    colorIcon: "/assets/icons/javascript.svg",
  },
  {
    name: "React JS",
    grayIcon: "/assets/icons/react-gray.svg",
    colorIcon: "/assets/icons/react.svg",
  },
  {
    name: "Next JS",
    grayIcon: "/assets/icons/nextjs-gray.svg",
    colorIcon: "/assets/icons/nextjs.svg",
  },
  {
    name: "SASS",
    grayIcon: "/assets/icons/sass-gray.svg",
    colorIcon: "/assets/icons/sass.svg",
  },
  {
    name: "tailwind",
    grayIcon: "/assets/icons/tailwind-gray.svg",
    colorIcon: "/assets/icons/tailwind.svg",
  },
  {
    name: "Node JS",
    grayIcon: "/assets/icons/nodejs-gray.svg",
    colorIcon: "/assets/icons/nodejs.svg",
  },
  {
    name: "Ionic",
    grayIcon: "/assets/icons/ionic-gray.svg",
    colorIcon: "/assets/icons/ionic.svg",
  },
  {
    name: "Git",
    grayIcon: "/assets/icons/git-gray.svg",
    colorIcon: "/assets/icons/git.svg",
  },
  {
    name: "Electron",
    grayIcon: "",
    colorIcon: "/assets/icons/electron.svg",
  },
  {
    name: "Vue JS",
    grayIcon: "",
    colorIcon: "/assets/icons/vuejs.svg",
  },
  {
    name: "Meteor JS",
    grayIcon: "",
    colorIcon: "/assets/icons/meteor.svg",
  },
  {
    name: "Angular",
    grayIcon: "",
    colorIcon: "/assets/icons/angular.svg",
  },
  {
    name: "Supabase",
    grayIcon: "",
    colorIcon: "/assets/icons/supabase.svg",
  },
  {
    name: "Mongo DB",
    grayIcon: "",
    colorIcon: "/assets/icons/mongodb.svg",
  },
  {
    name: "Figma",
    grayIcon: "",
    colorIcon: "/assets/icons/figma.svg",
  },
];

export const findManyTechsByIdArray = (list) => {
  return list.map((item) =>
    technologies.find(
      (tech) => tech.name.toLocaleLowerCase() == item.toLocaleLowerCase()
    )
  );
};
