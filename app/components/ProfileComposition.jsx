import Image from "next/image";
import AnimatedBadge from "./AnimatedBadge";

export default function ProfileComposition() {
  return (
    <div className="relative md:absolute isolate fadeInDown overflow-hidden rounded-full md:-top-20 md:right-4 mx-auto w-[200px] h-[200px] md:w-[260px] md:h-[348px] bg-gradient-to-br from-[#ffffffc5] to-[#686868] md:rounded-t-none md:rounded-b-full shadow-[0_0_14px_0_#787878]">
      <div className="absolute top-14 z-10 left-1/2 -translate-x-1/2 hidden md:block">
        <AnimatedBadge />
      </div>
      <Image
        src={"/assets/images/profile-hd.webp"}
        width={256}
        height={256}
        alt="profile"
        priority
        className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 pointer-events-none"
      />
      <div className="absolute top-0 left-1/2 w-full h-[200%] opacity-50 pointer-events-none animate-scroll-down">
        <img
          src={"/assets/images/projects-composition.webp"}
          alt="projects composition"
          className="h-1/2 w-full object-cover"
        />
        <img
          src={"/assets/images/projects-composition.webp"}
          alt="projects composition"
          className="h-1/2 w-full object-cover -mt-3"
        />
      </div>
    </div>
  );
}
