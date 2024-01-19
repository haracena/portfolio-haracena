import Image from "next/image";
import { technologies } from "../technologies";
import Marquee from "react-fast-marquee";

export default function TechMarquee() {
  return (
    <Marquee
      gradient
      gradientColor="#0E0E0E"
      gradientWidth={40}
    >
      {technologies
        .filter((tech) => tech.colorIcon)
        .map((tech) => (
          <Image
            width={48}
            height={48}
            src={tech.colorIcon}
            alt={`${tech.name} icon`}
            key={tech.name}
            className="mx-6 saturate-[0.75]"
          />
        ))}
    </Marquee>
  );
}
