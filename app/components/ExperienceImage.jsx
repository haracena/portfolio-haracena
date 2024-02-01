import Image from "next/image";
import Link from "next/link";

export default function ExperienceImage({ imageUrl, color, projectUrl }) {
  return (
    <Link href={projectUrl} target="_blank">
      <div
        href={projectUrl}
        target="_blank"
        className="w-[300px] h-[150px] inline-block bg-[#1F1F1F] rounded-lg relative overflow-hidden cursor-pointer group border border-[#282828] hover:-translate-y-[2px] transition-all duration-300"
      >
        <Image
          src={imageUrl}
          width={300}
          height={150}
          alt="Abastible"
          className="absolute top-3 left-0 rounded-[2px] md:saturate-[0.25] brightness-90 object-cover transition-all duration-300 group-hover:saturate-100 group-hover:brightness-100"
        />
        <div className="w-[3px] h-[3px] rounded-full bg-[#FF5E57] md:bg-[#333333] absolute top-[4px] left-2 group-hover:bg-[#FF5E57] group-hover:opacity-60 transition-all duration-300"></div>
        <div className="w-[3px] h-[3px] rounded-full bg-[#FEBB2E] md:bg-[#333333] absolute top-[4px] left-[14px] group-hover:bg-[#FEBB2E] group-hover:opacity-60 transition-all duration-300"></div>
        <div className="w-[3px] h-[3px] rounded-full bg-[#27C840] md:bg-[#333333] absolute top-[4px] left-[20px] group-hover:bg-[#27C840] group-hover:opacity-60 transition-all duration-300"></div>
        <div className="absolute rounded-lg flex justify-center items-center right-2 -bottom-6 bg-[#1F1F1F] opacity-75 transition-all duration-300 group-hover:bottom-2">
          <Image
            className=""
            src={"/assets/icons/linkarrow.svg"}
            width={24}
            height={24}
            alt="arrow link icon"
          />
        </div>
      </div>
    </Link>
  );
}
