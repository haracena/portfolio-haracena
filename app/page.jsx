import Image from 'next/image'
import EducationTimeLine from './components/EducationTimeline'
import BasicTimeLine from './components/BasicTimelineItem'
import ExperienceTimeline from './components/ExperienceTimeline'
import TechMarquee from './components/TechMarquee'
import HeaderImage from './components/HeaderImage'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import AnimatedBadge from './components/AnimatedBadge'
import { HoverEffect } from './components/CardHoverEffect'
import { projects } from './data'

export default function Home() {
    return (
        <>
            <div className="relative overflow-hidden max-w-5xl my-6 mx-auto p-4 sm:p-12 lg:px-24 py-8 sm:border sm:border-[#151515] sm:rounded-2xl sm:bg-[#0E0E0E] sm:bg-opacity-80 sm:backdrop-blur-sm sm:shadow">
                {/* <div className="hidden sm:block py-1 px-8 absolute top-3 right-10 rotate-45 translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-indigo-800 to-indigo-700 text-sm text-gray-50 shadow">
          Open to work
        </div> */}
                <header className="grid grid-cols-1 justify-items-center md:grid-cols-[auto_1fr] md:gap-12 md:items-center">
                    <HeaderImage />
                    <div className="flex flex-col gap-2 text-center md:text-start">
                        <span className="mt-2 flex md:hidden self-center">
                            <AnimatedBadge />
                        </span>
                        <h1 className="flex justify-center md:justify-start items-center gap-4 pb-1 text-4xl sm:text-4xl text-transparent bg-clip-text font-medium bg-gradient-to-b from-[#FFFFFF] to-[#686868]">
                            Hugo Aracena
                            <span className="mt-1 hidden lg:flex self-center">
                                <AnimatedBadge />
                            </span>
                        </h1>
                        <p
                            className="text-gray-400"
                            style={{ textWrap: 'balance' }}
                        >
                            Ingeniero en informática, desarrollador web con
                            experiencia en Front End. Apasionado por la
                            tecnología.{' '}
                            {/* <Image
                src={"/assets/icons/react-gray.svg"}
                width={18}
                height={18}
                alt="react js icon"
                className="inline-block animate-[spin_3s_linear_infinite]"
              /> */}
                        </p>
                        <p className="text-gray-400">
                            La Serena, Chile{' '}
                            <CiLocationOn className="inline-block" />
                        </p>
                        <div className="mt-4 flex justify-center md:justify-start gap-2">
                            <a
                                href={'https://github.com/haracena'}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
                            >
                                <FaGithub className="text-lg" />
                                Github
                            </a>
                            <a
                                href={
                                    'https://www.linkedin.com/in/hugo-aracena-29147818b/'
                                }
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
                </header>

                <section className="my-16">
                    <TechMarquee />
                </section>

                <main>
                    <section className="my-20" id="experience">
                        <h2 className="text-4xl mb-10 text-transparent bg-clip-text font-medium bg-gradient-to-br from-[#FFFFFF] to-[#686868]">
                            Experiencia
                        </h2>
                        <ExperienceTimeline />
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
                                    src={'/assets/icons/chile.svg'}
                                    width={32}
                                    height={32}
                                    alt="bandera chile"
                                />{' '}
                                Español - Nativo
                            </div>
                            <div className="flex items-center gap-4 p-6 border border-[#151515] rounded-2xl group hover:bg-gradient-to-b from-[#0E0E0E] to-[#121212]">
                                <Image
                                    className="brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-300"
                                    src={'/assets/icons/usa.svg'}
                                    width={32}
                                    height={32}
                                    alt="bandera estados unidos"
                                />{' '}
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
    )
}
