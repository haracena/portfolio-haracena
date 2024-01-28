"use client"
import { useEffect } from "react";
import {initFlowbite} from "flowbite"
import { ImMail4 } from "react-icons/im";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";



import Link from "next/link";

export default function SpeedDial() {

    useEffect(() => {
        initFlowbite()
    },[])
    
    return (
      <div data-dial-init className="fixed end-6 bottom-6 group">
        <div
          id="speed-dial-menu-default"
          className="flex flex-col items-center hidden mb-4 space-y-2"
        >
          <Link href="https://wa.me/56961519811" target="_blank">
            <button
              type="button"
              data-tooltip-target="tooltip-whatsapp"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
            >
              <FaWhatsapp className="text-2xl text-indigo-800" />
              <span className="sr-only">Whatsapp</span>
            </button>
          </Link>
          <div
            id="tooltip-whatsapp"
            role="tooltip"
            className="absolute z-50 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Whatsapp
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link href={"mailto: haracena.dev@gmail.com"}>
            <button
              type="button"
              data-tooltip-target="tooltip-email"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
            >
              <IoIosMail className="text-2xl text-indigo-800" />
              <span className="sr-only">Email</span>
            </button>
          </Link>
          <div
            id="tooltip-email"
            role="tooltip"
            className="absolute z-50 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Email
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <Link
            href={"https://www.linkedin.com/in/hugo-aracena-29147818b/"}
            target="_blank"
          >
            <button
              type="button"
              data-tooltip-target="tooltip-linkedin"
              data-tooltip-placement="left"
              className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
            >
              <FaLinkedin className="text-2xl text-indigo-800" />
              <span className="sr-only">Linkedin</span>
            </button>
          </Link>
          <div
            id="tooltip-linkedin"
            role="tooltip"
            className="absolute z-50 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Linkedin
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex items-center justify-center text-white bg-indigo-700 rounded-full w-14 h-14 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-none group transition-all duration-300"
        >
          <IoChatbox className="text-2xl group-hover:scale-110 transition-all duration-300" />
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    );
    
}