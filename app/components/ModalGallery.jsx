import { Modal, Carousel } from "flowbite-react";
import Image from "next/image";
import { experience } from "../data";
import { IoMdClose } from "react-icons/io";

export default function ModalGallery({
  openModal,
  setOpenModal,
  galleryImages,
  isMobile,
}) {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="bg-black p-0"
      dismissible
      position={"center"}
      size={"6xl"}
    >
      <div
        className={`w-full flex justify-center items-center bg-neutral-950 h-screen md:h-min ring-1 ring-black fixed top-0 left-0 inset-0 md:relative ${
          isMobile ? "aspect-[9/16] max-h-[90vh]" : "aspect-video"
        }`}
      >
        <Carousel pauseOnHover>
          {galleryImages.map((url) => (
            <Image
              width={isMobile ? 1080 : 1910}
              height={isMobile ? 1920 : 920}
              key={url}
              src={url}
              alt="pantallazo"
              className={isMobile ? "object-contain h-full w-auto" : ""}
            />
          ))}
        </Carousel>
        <button
          className="rounded-full absolute left-1/2 bottom-1/4 -translate-x-1/2 translate-y-1/2 border border-white p-2 md:hidden"
          onClick={() => setOpenModal(false)}
        >
          <IoMdClose className="text-2xl" />
        </button>
      </div>
    </Modal>
  );
}
