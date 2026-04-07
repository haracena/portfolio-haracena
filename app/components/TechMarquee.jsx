"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { technologies } from "../technologies";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

export default function TechMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredTechs = technologies.filter((tech) => tech.grayIcon);

  return (
    <div className="relative min-h-[48px] w-full flex items-center overflow-hidden">
      {!isMounted ? (
        /* Static fallback for SSR/Initial Load to avoid jumps */
        <div className="flex justify-center gap-12 w-full opacity-20 grayscale pointer-events-none">
          {filteredTechs.slice(0, 10).map((tech, i) => (
            <Image
              key={`static-${i}`}
              width={48}
              height={48}
              src={tech.grayIcon}
              alt=""
              priority
              className="shrink-0"
            />
          ))}
        </div>
      ) : (
        /* Animated Marquee once hydrated */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <Marquee
            gradient
            gradientColor="#0E0E0E"
            gradientWidth={60}
            speed={40}
            style={{ zIndex: "-1" }}
          >
            {filteredTechs.map((tech) => (
              <div key={tech.name} className="mx-8 group relative">
                <Image
                  width={48}
                  height={48}
                  src={tech.grayIcon}
                  alt={`${tech.name} icon`}
                  className="saturate-[0.5] opacity-60 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      )}
    </div>
  );
}
