import Image from "next/image";
import AnimatedBadge from "./AnimatedBadge";

export default function ProfileComposition() {
  return (
    <div className="relative md:absolute fadeInDown overflow-hidden rounded-full md:-top-20 md:right-4 mx-auto w-[200px] h-[200px] md:w-[260px] md:h-[360px] bg-gradient-to-br from-[#ffffffe4] to-[#686868] md:rounded-t-none md:rounded-b-full shadow-[0_0_14px_0_#9B9B9B]">
      <div className="absolute top-14 left-1/2 -translate-x-1/2 hidden md:block">
        <AnimatedBadge />
      </div>
      <Image
        src={"/assets/images/profile.webp"}
        width={256}
        height={256}
        alt="profile"
        priority
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
      />
    </div>
  );
}
