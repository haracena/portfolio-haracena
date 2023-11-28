import Image from "next/image";
import EducationTimeLine from "./components/EducationTimeline";
import BasicTimeLine from "./components/BasicTimelineItem";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechMarquee from "./components/TechMarquee";
import HeaderImage from "./components/HeaderImage";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden max-w-5xl my-6 mx-auto p-20 border border-[#151515] rounded-lg bg-[#0E0E0E] shadow">
        <div className="w-20 h-20 bg-white rounded-full absolute top-0 left-0 blur-[150px]"></div>
        {/* <div className="w-10 h-10 bg-white rounded-full absolute bottom-0 left-1/2 -translate-x-full translate-y-full blur-[100px]"></div> */}
        <header className="grid grid-cols-[auto_1fr] gap-8 items-center">
          <HeaderImage />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">👋🏼 Hola! Mi nombre es</p>
            <h1 className="pb-1 text-5xl text-transparent bg-clip-text font-medium bg-gradient-to-r from-[#FFFFFF] to-[#686868]">Hugo Aracena</h1>
            <p className="text-gray-400">
              Ingeniero en informática, desarrollador Front end. React lover <Image src={'/assets/icons/react-gray.svg'} width={18} height={18} alt="react js icon" className="inline-block animate-[spin_3s_linear_infinite]" />
            </p>
            <p className="text-gray-400">La Serena, Chile 📌</p>
          </div>
        </header>

        <section className="my-16">
          <TechMarquee />
        </section>

        <main>
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
