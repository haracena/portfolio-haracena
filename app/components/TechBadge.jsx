import Image from "next/image";

export default function TechBadge(iconUrl, techName) {
  return (
    <div className="flex gap-2 items-center">
      <Image src={iconUrl} height={24} width={24} alt={`${techName} icon`} />
      <span className="text-gray-100">{techName}</span>
    </div>
  );
}
