"use client";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  const {
    company,
    description,
    techStack,
    projectUrl,
    githubUrl,
    galleryImages,
    projectColor,
    startDate,
    endDate,
    isMobile
  } = project;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-full max-w-[90vw] lg:max-w-5xl p-0 md:overflow-hidden border-[#222] bg-[#0F0F0F] rounded-3xl gap-0 block md:flex h-[85vh] md:h-auto max-h-[85vh] overflow-auto">
        
        {/* Content Section (Left on Desktop) */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 overflow-y-auto bg-[#0F0F0F] border-b md:border-b-0 md:border-r border-[#222]">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: projectColor || '#3B82F6' }}
              />
              <DialogTitle className="text-3xl font-bold text-white leading-tight">
                {company}
              </DialogTitle>
            </div>
            <p className="text-sm text-gray-500 font-medium tracking-wide text-left">
              {startDate} — {endDate}
            </p>
          </DialogHeader>

          <div className="flex-1 space-y-8">
            <section>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sobre el proyecto</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                {Array.isArray(description) ? (
                  description.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {techStack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium bg-[#1A1A1A] border border-[#333] text-gray-300 rounded-full transition-colors hover:border-[#444]"
                  >
                    {tech?.name}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Footer / Links */}
          <div className="mt-10 pt-6 border-t border-[#222] flex flex-wrap gap-4">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all active:scale-95 text-sm"
              >
                Ver sitio <FaExternalLinkAlt size={12} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white border border-[#333] font-bold rounded-2xl hover:bg-[#222] hover:border-[#444] transition-all active:scale-95 text-sm"
              >
                Github <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Gallery / Main Image Section (Right on Desktop) */}
        <div className="w-full md:w-1/2 relative overflow-y-auto bg-[#151515]">
          <div className={`p-4 ${isMobile ? 'grid grid-cols-2 gap-4' : 'space-y-4'}`}>
            {galleryImages && galleryImages.length > 0 ? (
              galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-xl overflow-hidden border border-[#333] ${isMobile ? 'aspect-[9/19]' : 'aspect-video'}`}
                >
                  <Image
                    src={img}
                    alt={`${company} gallery ${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#222] flex items-center justify-center text-gray-500 w-full col-span-2">
                No gallery images available
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
