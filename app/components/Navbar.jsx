"use client";
import Image from "next/image";
import { ImMail4 } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto p-8 hidden lg:flex items-center">
      <div className="basis-full">
        <Image
          src={"/assets/images/logoha.png"}
          width={94}
          height={40}
          alt="logo"
        />
      </div>
      <ul className="flex justify-center gap-8 basis-full">
        <ScrollLink to="experience" smooth offset={-40} duration={300}>
          <li className="cursor-pointer text-gray-300 hover:text-indigo-500 transition-all duration-300">
            Experiencia
          </li>
        </ScrollLink>

        <ScrollLink to="projects" smooth offset={-40} duration={300}>
          <li className="cursor-pointer text-gray-300 hover:text-indigo-500 transition-all duration-300">
            Proyectos
          </li>
        </ScrollLink>

        <ScrollLink to="education" smooth offset={-40} duration={300}>
          <li className="cursor-pointer text-gray-300 hover:text-indigo-500 transition-all duration-300">
            Educación
          </li>
        </ScrollLink>
        <ScrollLink to="languages" smooth offset={-40} duration={300}>
          <li className="cursor-pointer text-gray-300 hover:text-indigo-500 transition-all duration-300">
            Idiomas
          </li>
        </ScrollLink>
      </ul>
      <ul className="flex items-center gap-6 text-2xl text-gray-300 basis-full justify-end">
        <li className="hover:text-indigo-500 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
          <Link
            href={"https://www.linkedin.com/in/hugo-aracena-29147818b/"}
            target="_blank"
          >
            <FaLinkedin className="" width={24} height={24} />
          </Link>
        </li>

        <li className="hover:text-indigo-500 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
          <Link href={"mailto: haracena.dev@gmail.com"}>
            <ImMail4 className="" width={24} height={24} />
          </Link>
        </li>
        <li className="hover:text-indigo-500 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
          <Link href={"https://github.com/haracena"} target="_blank">
            <FaGithub className="" width={24} height={24} />
          </Link>
        </li>
        <li className="hover:text-indigo-500 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
          <Link href="https://wa.me/56961519811" target="_blank">
            <RiWhatsappFill className="w-7 h-7" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
