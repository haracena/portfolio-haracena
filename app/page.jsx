import Image from "next/image";
import EducationTimeLine from "./components/EducationTimeline";
import BasicTimeLine from "./components/BasicTimelineItem";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechMarquee from "./components/TechMarquee";
import HeaderImage from "./components/HeaderImage";
import { FaWhatsapp, FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden max-w-5xl my-6 mx-auto px-24 py-8 border border-[#151515] rounded-2xl bg-[#0E0E0E] bg-opacity-80 backdrop-blur-sm shadow">
        <div className="py-1 px-8 absolute top-3 right-10 rotate-45 translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-[#151515] to-[#0E0E0E] text-sm text-gray-50">Open to work</div>
        <header className="grid grid-cols-[auto_1fr] gap-12 items-center">
          <HeaderImage />
          <div className="flex flex-col gap-2">
            {/* <p className="text-sm text-gray-400">👋🏼 Hola! Mi nombre es</p> */}
            <h1 className="pb-1 text-5xl text-transparent bg-clip-text font-medium bg-gradient-to-b from-[#FFFFFF] to-[#686868]">Hugo Aracena</h1>
            <p className="text-gray-400">
              Ingeniero en informática, desarrollador Front end. React lover <Image src={'/assets/icons/react-gray.svg'} width={18} height={18} alt="react js icon" className="inline-block animate-[spin_3s_linear_infinite]" />
            </p>
            <p className="text-gray-400">La Serena, Chile</p>
            <div className="mt-4 flex gap-2">
              <a
            href={"#"}
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
          >
                          <FaGithub className="text-lg" />
            Github
          </a>
              <a
            href={"#"}
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
          >
              <FaLinkedin className="text-lg" />
            Linkedin
          </a>

            </div>
          </div>
        </header>

        <section className="my-16">
          <TechMarquee />
        </section>

        <main>
          <section className="my-20">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">Idiomas</h2>
            <div className="flex justify-start gap-6">
              <div className="flex items-center gap-4 p-6 border border-[#151515] rounded-2xl group hover:bg-gradient-to-b from-[#0E0E0E] to-[#121212]"><Image className="brightness-75 saturate-0 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-300" src={"/assets/icons/chile.png"} width={32} height={32} /> Español - Nativo</div>
              <div className="flex items-center gap-4 p-6 border border-[#151515] rounded-2xl group hover:bg-gradient-to-b from-[#0E0E0E] to-[#121212]"><Image className="brightness-75 saturate-0 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-300" src={"/assets/icons/usa.png"} width={32} height={32} /> English - Intermediate</div>
            </div>
          </section>

          <section className="my-20">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">Educación</h2>
            <EducationTimeLine />
          </section>

          <section className="my-20">
            <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">Experiencia</h2>
            <ExperienceTimeline />
          </section>
        </main>
      </div>
    </>
  );
}
