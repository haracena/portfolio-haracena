import { education } from "../data";
import BasicTimeLineItem from "./BasicTimelineItem";

export default function EducationTimeLine() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {education.map((item) => (
        <BasicTimeLineItem
          startDate={item.startDate}
          endDate={item.endDate}
          title={item.title}
          description={item.description}
          file={item?.file}
          key={item.id}
        />
      ))}
    </ol>
  );
}
