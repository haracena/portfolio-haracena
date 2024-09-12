import { Modal, Carousel } from "flowbite-react";
import Image from "next/image";
import { experience } from "../data";

export default function ModalGallery({
  openModal,
  setOpenModal,
  galleryImages,
}) {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="bg-black"
      dismissible
      size={"6xl"}
    >
      <Modal.Body className="bg-neutral-950 p-0 aspect-video w-full">
        <div className="w-full aspect-video flex justify-center items-center">
          <Carousel pauseOnHover>
            {galleryImages.map((url) => (
              <img key={url} src={url} alt="pantallazo" />
            ))}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
}
