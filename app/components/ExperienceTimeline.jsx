"use client";
import { useState } from "react";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import ModalGallery from "./ModalGallery";

export default function ExperienceTimeline({ items }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryImages =
    items?.find((item) => item.id === selectedItem)?.galleryImages ?? [];
  const isMobile = items?.find((item) => item.id === selectedItem)?.isMobile;

  if (!items) return null;

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {items.map((item) => (
          <ExperienceTimelineItem
            id={item.id}
            startDate={item.startDate}
            endDate={item.endDate}
            company={item.company}
            description={item.description}
            techStack={item.techStack}
            projectImage={item?.projectImage}
            galleryImages={item?.galleryImages}
            projectColor={item?.projectColor}
            projectUrl={item?.projectUrl}
            setOpenModal={setOpenModal}
            setSelectedItem={setSelectedItem}
            isMobile={item?.isMobile}
            key={item.id}
          />
        ))}
      </ol>
      <ModalGallery
        openModal={openModal}
        setOpenModal={setOpenModal}
        galleryImages={galleryImages}
        isMobile={isMobile}
      />
    </>
  );
}
