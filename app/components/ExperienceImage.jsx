// "use client"
// import { useState } from "react";
import Image from "next/image";

export default function ExperienceImage({ imageUrl, color }) {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  return (
    <div 
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave} 
      // style={{borderColor: isHovering ? color: null}} 
      className="w-[300px] h-[150px] bg-[#1F1F1F] rounded-lg relative overflow-hidden cursor-pointer group border border-[#282828] hover:-translate-y-[2px] transition-all duration-300">
      <Image
        src={imageUrl}
        width={300}
        height={150}
        alt="Abastible"
        className="absolute top-4 left-0 rounded-[2px] saturate-[0.25] brightness-90 object-cover transition-all duration-300 group-hover:saturate-100 group-hover:brightness-100"
      />
      <div className="w-[3px] h-[3px] rounded-full bg-[#282828] absolute top-[6px] left-2 group-hover:bg-[#FF5E57] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="w-[3px] h-[3px] rounded-full bg-[#282828] absolute top-[6px] left-[14px] group-hover:bg-[#FEBB2E] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="w-[3px] h-[3px] rounded-full bg-[#282828] absolute top-[6px] left-[20px] group-hover:bg-[#27C840] group-hover:opacity-60 transition-all duration-300"></div>
      <div className="absolute rounded-lg flex justify-center items-center right-2 -bottom-6 bg-[#1F1F1F] opacity-75 transition-all duration-300 group-hover:bottom-2">
        <Image className="" src={"/assets/icons/linkarrow.svg"} width={24} height={24} alt="arrow link icon" />
      </div>
    </div>
  );
}
