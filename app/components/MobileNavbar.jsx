"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { ImMail4 } from "react-icons/im";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full lg:hidden bg-neutral-900 bg-opacity-10 p-4 fixed top-0 z-50 flex justify-between items-center backdrop-blur-sm">
      <Image
        src={"/assets/images/logoha.png"}
        width={94 / 1.5}
        height={40 / 1.5}
        alt="logo"
      />
      <FaAlignRight
        width={32}
        height={32}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "w-screen h-screen bg-neutral-900 bg-opacity-75 fixed top-0 left-0",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      ></div>
      <aside
        className={clsx(
          "absolute top-0 right-0 p-8 w-[240px] bg-[#161616] h-screen overflow-hidden transition-all duration-300 ",
          isOpen ? "" : "translate-x-full"
        )}
      >
        <div className="w-8 h-8 bg-white rounded-full absolute top-0 left-0 blur-3xl"></div>
        <div className="flex items-center mb-8">
          <Image
            src={"/assets/images/logoha.png"}
            width={94 / 1.5}
            height={40 / 1.5}
            alt="logo"
          />
          <IoClose
            width={48}
            height={48}
            className="ml-auto text-2xl"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </div>
        <ul className="flex flex-col gap-6">
          <ScrollLink
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            to="languages"
            smooth
            offset={-60}
            duration={300}
          >
            <li className="cursor-pointer text-gray-300 hover:text-white transition-all duration-300">
              Idiomas
            </li>
          </ScrollLink>
          <ScrollLink
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            to="education"
            smooth
            offset={-60}
            duration={300}
          >
            <li className="cursor-pointer text-gray-300 hover:text-white transition-all duration-300">
              Educación
            </li>
          </ScrollLink>

          <ScrollLink
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            to="experience"
            smooth
            offset={-60}
            duration={300}
          >
            <li className="cursor-pointer text-gray-300 hover:text-white transition-all duration-300">
              Experiencia
            </li>
          </ScrollLink>
        </ul>

        <div className="h-[1px] w-full bg-neutral-800 my-8"></div>

        <ul className="flex flex-col justify-center gap-6 basis-full">
          <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
            <Link
              className="flex gap-2 items-center"
              href={"mailto: haracena.dev@gmail.com"}
            >
              <ImMail4 className="text-lg" />
              Correo electrónico
            </Link>
          </li>
          <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
            <Link
              className="flex gap-2 items-center"
              href="https://wa.me/56961519811"
              target="_blank"
            >
              <FaWhatsapp className="text-lg" />
              Whatsapp
            </Link>
          </li>
          <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
            <Link
              className="flex gap-2 items-center"
              href={"https://github.com/haracena"}
              target="_blank"
            >
              <FaGithub className="text-lg" />
              Github
            </Link>
          </li>
          <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
            <Link
              className="flex gap-2 items-center"
              href={"https://www.linkedin.com/in/hugo-aracena-29147818b/"}
              target="_blank"
            >
              <FaLinkedin className="text-lg" />
              Linkedin
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
