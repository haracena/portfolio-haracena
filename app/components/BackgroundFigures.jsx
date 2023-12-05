"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BackgroundFigures() {
  const [position, setPosition] = useState(0);
  const translateX = Math.round(position / 12);
  const translateY = Math.round(position / 16);
  const rotate = Math.round(position / 20);

  // console.log(`scroll: ${position} translateX: ${translateX}`);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // scroll position
    // console.log(scrollPosition);
    setPosition(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed flex justify-center w-[1024px] h-[50vh] max-w-5xl left-1/2 -translate-x-1/2 top-32 -z-10">
      <Image
        className="absolute -top-10 -left-20 -z-10 opacity-50"
        src={"/assets/images/torus.png"}
        width={150}
        height={170}
        alt="figure"
        style={{
          transform: `translateX(-${translateX}px) translateY(-${translateY}px) rotate(-${rotate}deg)`,
        }}
      />
      <Image
        className="absolute bottom-0 -left-20 -z-10 opacity-50"
        src={"/assets/images/cubeleft.png"}
        width={150}
        height={136}
        alt="figure"
        style={{
          transform: `translateX(-${translateX}px) translateY(${translateY}px) rotate(-${rotate}deg)`,
        }}
      />
      <Image
        className="absolute -top-8 -right-20 -z-10 opacity-50"
        src={"/assets/images/cubreright.png"}
        width={150}
        height={132}
        alt="figure"
        style={{
          transform: `translateX(${translateX}px) translateY(-${translateY}px) rotate(${rotate}deg)`,
        }}
      />
      <Image
        className="absolute bottom-0 -right-20 -z-10 opacity-50"
        src={"/assets/images/cheese.png"}
        width={150}
        height={134}
        alt="figure"
        style={{
          transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}
