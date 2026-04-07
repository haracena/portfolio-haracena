import Image from "next/image";
import EducationTimeLine from "./components/EducationTimeline";
import BasicTimeLine from "./components/BasicTimelineItem";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechMarquee from "./components/TechMarquee";
import HeaderImage from "./components/HeaderImage";
import ProjectsGrid from "./components/ProjectsGrid";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import AnimatedBadge from "./components/AnimatedBadge";
import { HoverEffect } from "./components/CardHoverEffect";
import { projects, experience, independentProjects } from "./data";
import ProfileComposition from "./components/ProfileComposition";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden max-w-5xl my-6 mx-auto p-4 sm:p-12 lg:px-24 py-8 sm:border sm:border-[#151515] sm:rounded-2xl sm:bg-[#0E0E0E] sm:bg-opacity-80 sm:backdrop-blur-sm sm:shadow">
        <header className="relative flex flex-col-reverse md:grid justify-items-center md:grid-cols-[1fr_260px] md:gap-16 md:items-center pt-6 md:pt-0">
          <div className="fadeInLeft flex flex-col gap-4 text-center md:text-start py-6">
            <span className="mt-2 flex md:hidden self-center">
              <AnimatedBadge />
            </span>
            <h1 className="flex justify-center md:justify-start items-center gap-4 pb-1 text-4xl sm:text-5xl uppercase text-transparent bg-clip-text font-bold bg-gradient-to-b from-[#FFFFFF] to-[#686868]">
              Hugo Aracena
            </h1>
            <p className="text-gray-400" style={{ textWrap: "pretty" }}>
              Ingeniero en informática, desarrollador de software frontend con
              experiencia creando aplicaciones web modernas y escalables.
              {/* <Image
                src={"/assets/icons/react-gray.svg"}
                width={18}
                height={18}
                alt="react js icon"
                className="inline-block animate-[spin_3s_linear_infinite]"
              /> */}
            </p>
            <p className="text-gray-500 text-sm">
              La Serena, Chile <CiLocationOn className="inline-block" />
            </p>
            <div className="mt-2 flex justify-center md:justify-start gap-2">
              <a
                href={"https://github.com/haracena"}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                Github
              </a>
              <a
                href={"https://www.linkedin.com/in/hugo-aracena-29147818b/"}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
                Linkedin
              </a>
            </div>
            {/* <span className="mt-2 flex lg:hidden self-center">
              <AnimatedBadge />
            </span> */}
          </div>
          <ProfileComposition />
        </header>

        <section className="my-16">
          <TechMarquee />
        </section>

        <main>
          <section className="my-20" id="independent-projects">
            <h2 className="text-3xl sm:text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
              Proyectos Recientes
            </h2>
            <ProjectsGrid items={independentProjects} />
          </section>

          <section className="my-20" id="experience">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
              Experiencia
            </h2>
            <ExperienceTimeline items={experience} />
          </section>

          <section className="my-20" id="projects">
            <h2 className="text-4xl pb-1 mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
              Otros proyectos
            </h2>
            <HoverEffect items={projects} />
          </section>

          <section className="my-20" id="education">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
              Educación
            </h2>
            <EducationTimeLine />
          </section>

          <section className="mt-20" id="languages">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
              Idiomas
            </h2>
            <div className="flex justify-start gap-6 flex-wrap">
              <div className="flex items-center gap-4 p-6 border border-[#151515] rounded-2xl group hover:bg-gradient-to-b from-[#0E0E0E] to-[#121212]">
                <Image
                  className="brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-300"
                  src={"/assets/icons/chile.svg"}
                  width={32}
                  height={32}
                  alt="bandera chile"
                />{" "}
                Español - Nativo
              </div>
              <div className="flex items-center gap-4 p-6 border border-[#151515] rounded-2xl group hover:bg-gradient-to-b from-[#0E0E0E] to-[#121212]">
                <Image
                  className="brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-300"
                  src={"/assets/icons/usa.svg"}
                  width={32}
                  height={32}
                  alt="bandera estados unidos"
                />{" "}
                English - Intermediate
              </div>
            </div>
          </section>
        </main>

        {/* <p className="text-center text-sm">
          <span className="mr-1 animate-[wobble_1.5s_linear_infinite] inline-block text-gray-300">
            👋🏼
          </span>
          Saludos, hablamos pronto!
        </p> */}
      </div>
    </>
  );
}
