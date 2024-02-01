import Image from "next/image";

export default function HeaderImage() {
  return (
    <div className="relative w-[240px] h-[240px] flex justify-center items-center">
      <Image
        src={"/assets/images/profile-color.png"}
        width={180}
        height={180}
        alt="profile image"
        className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
        priority
      />
      <Image
        src={"/assets/images/profile-color.png"}
        width={180}
        height={180}
        alt="profile image"
        className="rounded-full animate-[pulse3_2s_ease-in-out_infinite] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-[0.06] z-40"
      />
      <Image
        src={"/assets/images/profile-color.png"}
        width={180}
        height={180}
        alt="profile image"
        className="rounded-full animate-[pulse2_2s_ease-in-out_infinite] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2] opacity-[0.04] z-40"
      />
      <Image
        src={"/assets/images/profile-color.png"}
        width={180}
        height={180}
        alt="profile image"
        className="rounded-full animate-[pulse1_2s_ease-in-out_infinite] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3] opacity-[0.02] z-40"
      />
    </div>
  );
}
