import Image from "next/image";
import EducationTimeLine from "./components/EducationTimeline";
import BasicTimeLine from "./components/BasicTimelineItem";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechMarquee from "./components/TechMarquee";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl my-6 mx-auto p-20 border border-[#717171] rounded-lg bg-[#0E0E0E]">
        <header className="grid grid-cols-[auto_1fr] gap-8">
          <Image
            src={"/assets/images/profile.png"}
            width={180}
            height={180}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">👋🏼 Hola! mi nombre es</p>
            <h1 className="text-5xl">Hugo Aracena</h1>
            <p className="text-gray-400">
              Ingeniero en informática, desarrollador Front end. React lover
            </p>
            <p className="text-gray-400">La Serena, Chile 📌</p>
          </div>
        </header>

        <section className="my-16">
          <TechMarquee />
        </section>

        <main>
          <section className="my-20">
            <h2 className="text-4xl mb-10">Educación</h2>
            <EducationTimeLine />
          </section>

          <section className="my-20">
            <h2 className="text-4xl mb-10">Experiencia</h2>
            <ExperienceTimeline />
          </section>
        </main>
      </div>
    </>
  );
}
