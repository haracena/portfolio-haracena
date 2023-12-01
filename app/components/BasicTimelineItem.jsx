export default function BasicTimeLineItem({
  startDate,
  endDate,
  title,
  description,
  file,
}) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {`${startDate} - ${endDate}`}
      </time>
      <h3 className="text-lg font-semibold text-gray-50 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {file && (
        <a
          href={file}
          download
          class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-[#171717] text-gray-400 border border-[#272727] hover:border-[#1C1C1C] hover:text-white hover:bg-[#141414] focus:ring-gray-700 transition-all duration-300"
        >
          <svg
            class="w-3.5 h-3.5 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>{" "}
          Descargar certificado
        </a>
      )}
    </li>
  );
}
