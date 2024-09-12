"use client";
import { useState } from "react";
import { experience } from "../data";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import ModalGallery from "./ModalGallery";

export default function ExperienceTimeline() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryImages =
    experience.find((item) => item.id === selectedItem)?.galleryImages ?? [];

  console.log(galleryImages);

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experience.map((item) => (
          <ExperienceTimelineItem
            id={item.id}
            startDate={item.startDate}
            endDate={item.endDate}
            company={item.company}
            description={item.description}
            techStack={item.techStack}
            projectImage={item?.projectImage}
            projectColor={item?.projectColor}
            projectUrl={item?.projectUrl}
            setOpenModal={setOpenModal}
            setSelectedItem={setSelectedItem}
            key={item.id}
          />
        ))}
      </ol>
      <ModalGallery
        openModal={openModal}
        setOpenModal={setOpenModal}
        galleryImages={galleryImages}
      />
    </>
  );
}
