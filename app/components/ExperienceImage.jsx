"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiFullscreenFill } from "react-icons/ri";

export default function ExperienceImage({
  id,
  imageUrl,
  color,
  projectUrl,
  setOpenModal,
  setSelectedItem,
}) {
  const handleClick = () => {
    setOpenModal(true);
    setSelectedItem(id);
  };

  return (
    <div
      onClick={handleClick}
      href={projectUrl}
      target="_blank"
      className="w-[300px] h-[150px] inline-block bg-[#1F1F1F] rounded-lg relative overflow-hidden cursor-pointer group border border-[#282828] hover:-translate-y-[2px] transition-all duration-300"
    >
      <Image
        src={imageUrl}
        width={300}
        height={150}
        alt="pantallazo"
        className="absolute top-3 left-0 rounded-[2px] md:saturate-[0.25] brightness-90 object-cover transition-all duration-300 group-hover:saturate-100 group-hover:brightness-100"
      />
      <div className="w-[3px] h-[3px] rounded-full bg-[#FF5E57] md:bg-[#333333] absolute top-[4px] left-2 group-hover:bg-[#FF5E57] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="w-[3px] h-[3px] rounded-full bg-[#FEBB2E] md:bg-[#333333] absolute top-[4px] left-[14px] group-hover:bg-[#FEBB2E] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="w-[3px] h-[3px] rounded-full bg-[#27C840] md:bg-[#333333] absolute top-[4px] left-[20px] group-hover:bg-[#27C840] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="absolute rounded-lg p-1 flex justify-center items-center right-2 -bottom-8 bg-[#1F1F1F] opacity-75 transition-all duration-300 group-hover:bottom-2">
        <RiFullscreenFill className="w-5 h-5" />
      </div>
    </div>
  );
}
