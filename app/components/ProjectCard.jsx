"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project, onClick }) {
  const { company, projectSubtitle, projectIcon, galleryImages, projectColor, layout } = project;
  
  const isHorizontal = layout === "horizontal";
  const mockups = galleryImages?.slice(0, isHorizontal ? 3 : 3) || [];

  return (
    <motion.div
      onClick={onClick}
      className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] w-full transition-all duration-500 shadow ${isHorizontal ? 'md:col-span-2 h-[280px]' : 'h-[280px] min-[896px]:h-[360px]'}`}
      style={{ backgroundColor: projectColor || '#1A1A1A' }}
      whileHover="hover"
      initial="initial"
    >
      <div className={`h-full flex flex-col ${isHorizontal ? 'md:flex-row' : ''}`}>
        {/* Content Section */}
        <div className={`p-8 pb-0 flex gap-5 ${isHorizontal ? 'md:w-1/2 md:pb-8 md:pr-0 items-center' : 'items-start'}`}>
          {projectIcon && (
            <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src={projectIcon}
                alt={`${company} icon`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-1">
              {company}
            </h3>
            <p className="text-sm text-white/90 font-medium leading-tight max-w-[200px]">
              {projectSubtitle}
            </p>
          </div>
        </div>

        {/* Mockups Section */}
        <div className={`relative flex-1 ${isHorizontal ? 'md:w-1/2' : 'h-1/2'}`}>
          {!isHorizontal ? (
            /* Mobile Mockups Layout (Vertical Card) */
            <div className="absolute -bottom-[25vw] min-[512px]:-bottom-[45vw] md:-bottom-[110px] min-[816px]:-bottom-[140px] lg:-bottom-[80px] left-1/2 -translate-x-1/2 w-[110%] h-[120%] flex justify-center items-end px-4 gap-2">
              {mockups.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { 
                      y: idx === 1 ? 20 : 60,
                      rotate: idx === 0 ? -5 : idx === 2 ? 5 : 0,
                    },
                    hover: { 
                      y: idx === 1 ? -10 : 30,
                      scale: 1.05,
                      transition: { duration: 0.35, ease: "easeOut" }
                    }
                  }}
                  className={`relative w-full aspect-[9/19] rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#0D0D0D] z-${idx === 1 ? '30' : '20'} ${idx === 1 ? '-mx-4' : ''}`}
                >
                  <Image
                    src={img}
                    alt={`${company} mobile mockup ${idx}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop Mockups Layout (Horizontal Card) */
            <div className="absolute top-8 md:top-4 right-6 min-[824px]:right-12 w-[100%] h-[100%]">
              {mockups.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { 
                      x: idx * 40,
                      y: idx * 40,
                      // rotate: -idx * 2
                    },
                    hover: { 
                      x: idx * 20,
                      y: idx * 24,
                      scale: 1.01,
                      transition: { duration: 0.35, ease: "easeOut" }
                    }
                  }}
                  className="absolute top-0 right-0 w-[90%] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0D0D0D]"
                  style={{ zIndex: 10 - idx }}
                >
                  <Image
                    src={img}
                    alt={`${company} desktop mockup ${idx}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Subtle Glow Overlay on Hover */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 0.1 }
        }}
        style={{
          background: 'radial-gradient(circle at top right, white, transparent)'
        }}
      />
    </motion.div>
  );
}
