import Image from "next/image";

export default function ExperienceImage({ imageUrl }) {
  return (
    <div className="w-[300px] h-[150px] bg-[#1F1F1F] rounded-lg relative overflow-hidden cursor-pointer group border border-[#0E0E0E] hover:border-gray-700 transition-all duration-300">
      <Image
        src={imageUrl}
        width={300}
        height={150}
        alt="Abastible"
        className="absolute top-5 left-5 rounded-md saturate-[0.25] brightness-90 object-cover transition-all duration-300 group-hover:saturate-100 group-hover:brightness-100 group-hover:top-3 group-hover:left-3 shadow"
      />
    </div>
  );
}
