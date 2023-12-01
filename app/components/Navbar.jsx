import Image from "next/image";
import { ImMail4 } from "react-icons/im";
import { FaWhatsapp, FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Navbar() {
    return <nav className="max-w-7xl mx-auto p-8 flex items-center">
        <div className="basis-full">
            <Image src={"/assets/images/logoha.png"} width={94} height={40} alt="logo" />
        </div>
        <ul className="flex justify-center gap-8 basis-full">
            <li className="cursor-pointer">Educación</li>
            <li className="cursor-pointer">Experiencia</li>
            <li className="cursor-pointer">Contacto</li>
        </ul>
        <ul className="flex items-center gap-6 text-2xl text-[#717171] basis-full justify-end">
            <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
                <FaWhatsapp className="" width={24} height={24} />
            </li>
            <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
                <ImMail4 className="" width={24} height={24} />
            </li>
            <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
                <FaGithub className="" width={24} height={24} />
            </li>
            <li className="hover:text-gray-50 cursor-pointer hover:-translate-y-[2px] transition-all duration-300">
                <FaLinkedin className="" width={24} height={24} />
            </li>
        </ul>
    </nav>
}