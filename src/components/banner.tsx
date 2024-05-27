import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="bg-[#1493A4]">
      <div className="flex items-center gap-x-6 px-8 py-1 lg:px-8 sm:px-3.5 before:flex-1 after:flex-1 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <p className="text-sm leading-6 text-white">
            Call Us On:
            {/* <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg> */}
          </p>
          <a
            href="#"
            className="flex flex-row gap-2 items-center rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-[#1493A4] underline shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1493A4]"
            >
              <path
                d="M13.9141 10.6484C14.1328 10.7578 14.2969 11.0039 14.2969 11.2773C14.2969 11.3047 14.2969 11.3594 14.2969 11.4141L13.6406 14.2578C13.5586 14.5586 13.3125 14.75 13.0117 14.75C5.98438 14.75 0.324219 9.08984 0.324219 2.0625C0.324219 1.76172 0.515625 1.51562 0.816406 1.43359L3.66016 0.777344C3.71484 0.777344 3.76953 0.75 3.79688 0.75C4.07031 0.75 4.31641 0.914062 4.42578 1.16016L5.73828 4.22266C5.76562 4.30469 5.79297 4.38672 5.79297 4.46875C5.79297 4.6875 5.68359 4.87891 5.54688 4.98828L3.87891 6.35547C4.89062 8.48828 6.58594 10.1836 8.71875 11.1953L10.0859 9.52734C10.1953 9.39062 10.3867 9.28125 10.5781 9.28125C10.6875 9.28125 10.7695 9.30859 10.8516 9.33594L13.9141 10.6484Z"
                fill="currentColor"
              />
            </svg>
            306-782-1224
          </a>
        </div>
        {/* Close button */}
        {/* <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
