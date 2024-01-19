import Image from "next/image";
import TechBadge from "./TechBadge";
import ExperienceImage from "./ExperienceImage";

export default function ExperienceTimelineItem({
  startDate,
  endDate,
  company,
  description,
  techStack,
  projectImage,
  projectUrl,
  projectColor,
}) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-2.5 h-2.5 text-indigo-700 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
          <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-50 dark:text-white">
        {company}
        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
          Latest
        </span> */}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-indigo-400">
        {`${startDate} - ${endDate}`}
      </time>

      {description.map((paragraph) => (
        <p
          className="mb-4 text-base font-normal text-gray-400 dark:text-gray-400"
          key={paragraph}
        >
          {paragraph}
        </p>
      ))}

      <div className="flex gap-3 flex-wrap">
        {techStack.map((tech) => (
          <div
            className="py-1 px-3 bg-neutral-900 border border-neutral-800 flex gap-2 items-center rounded-full"
            key={tech.name}
          >
            <Image
              src={tech.colorIcon}
              height={20}
              width={20}
              alt={`${tech.name} icon`}
            />
            <span className="text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>

      {projectImage && (
        <div className="my-4">
          <ExperienceImage
            imageUrl={projectImage}
            projectUrl={projectUrl}
            color={projectColor}
          />
        </div>
      )}
    </li>
  );
}
