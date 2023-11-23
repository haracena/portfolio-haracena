import Image from "next/image";
import { technologies } from "../technologies";
import Marquee from "react-fast-marquee";

export default function TechMarquee() {
  return (
    <Marquee
      pauseOnHover
      gradient
      gradientColor="#0E0E0E"
      gradientWidth={40}
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      {technologies
        .filter((tech) => tech.grayIcon)
        .map((tech) => (
          <Image
            width={48}
            height={48}
            src={tech.grayIcon}
            alt={`${tech.name} icon`}
            key={tech.name}
            className="mx-6 hover:scale-125 transition-all duration-300"
          />
        ))}
    </Marquee>
  );
}
