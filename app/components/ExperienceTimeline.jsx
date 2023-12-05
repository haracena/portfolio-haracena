import { experience } from "../data";
import ExperienceImage from "./ExperienceImage";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

export default function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {experience.map((item) => (
        <ExperienceTimelineItem
          startDate={item.startDate}
          endDate={item.endDate}
          company={item.company}
          description={item.description}
          techStack={item.techStack}
          projectImage={item?.projectImage}
          projectColor={item?.projectColor}
          projectUrl={item?.projectUrl}
          key={item.id}
        />
      ))}
    </ol>
  );
}
