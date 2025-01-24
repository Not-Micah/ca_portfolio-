"use client";

import useProjectModal from "@/hooks/useProjectModal";
import { FaGithub, FaGlobeAsia, FaFileAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const sharedHeaderStyles = "text-lg text-black/80 font-bold";
const sharedLinkStyles = "font-bold text-black/30";
const sharedContainerStyles = "flex flex-col gap-y-2 pt-12 padding";
const sharedIconHeaderStyles = "flex items-center gap-x-2";

const ProjectModal = () => {
  const { onClose, isOpen, card } = useProjectModal();

  return (
    <div
      className={twMerge(
        `w-[100vw] h-[100vh] 
        fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        z-10`,
        isOpen ? "bg-black/25" : "pointer-events-none"
      )}
    >
      <div
        className={twMerge(
          `fixed right-0 top-1/2 transform -translate-y-1/2 
          max-w-[500px] w-full max-lg:w-[100vw] h-[100vh] 
          bg-white 
          transition-all duration-300`,
          sharedContainerStyles,
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={onClose}
          className="self-end text-black/80 dynamic-text font-bold"
        >
          Back to Projects.
        </button>

        <div className="w-full h-[1px] bg-black/50" />

        <h3 className="text-2xl text-black/80 font-bold mt-4 mb-2">
          {card?.card.title}
        </h3>

        <div>
          <h3 className={sharedHeaderStyles}>About</h3>
          <p className="text-black/60 mt-2">{card?.card.description}</p>
        </div>

        <div className="mt-2">
          <h3 className={sharedHeaderStyles}>Technologies</h3>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            {card?.card.tools?.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 bg-gray-200/80 text-black/50 font-semibold rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {card?.card.mainUrl && (
          <div className="mt-4 overflow-x-hidden">
            <h3 className={twMerge(sharedHeaderStyles, sharedIconHeaderStyles)}>
              <FaGlobeAsia className="text-black/50" /> Website Link
            </h3>
            <a href={card?.card.mainUrl} className={sharedLinkStyles}>
              {card?.card.mainUrl}
            </a>
          </div>
        )}

        {card?.card.githubUrl && (
          <div className="mt-4 overflow-x-hidden">
            <h3 className={twMerge(sharedHeaderStyles, sharedIconHeaderStyles)}>
              <FaGithub className="text-black/50" /> GitHub Link
            </h3>
            <a href={card?.card.githubUrl} className={sharedLinkStyles}>
              {card?.card.githubUrl}
            </a>
          </div>
        )}

        {card?.card.briefUrl && (
          <div className="mt-4 overflow-x-hidden">
            <h3 className={twMerge(sharedHeaderStyles, sharedIconHeaderStyles)}>
              <FaFileAlt className="text-black/50" /> Project Brief
            </h3>
            <a href={card?.card.briefUrl} className={sharedLinkStyles}>
              {card?.card.briefUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
