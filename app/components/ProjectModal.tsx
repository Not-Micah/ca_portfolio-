"use client";

import useProjectModal from "@/hooks/useProjectModal";

const ProjectModal = () => {
    const { onClose, isOpen, card } = useProjectModal();

  return (
    <div 
    className={`   
    w-[100vw] h-[100vh]
    fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
    ${isOpen && "bg-black/25 z-10"}`}>

        <div 
        className={`
        fixed right-0 top-1/2 transform -translate-y-1/2
        max-w-[500px] w-full max-lg:w-[100vw] h-[100vh]
        bg-white
        flex flex-col justify-between
        pt-12
        
        transition-all duraiton-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>

            <div className="
            flex flex-col gap-y-4
            padding">
                <button
                onClick={onClose}
                className="
                self-end
                text-black/80 dynamic-text font-bold">
                    Back to Projects.
                </button>

                <div className="w-full h-[1px] bg-black/50" />

                <h3 className="text-xl text-black/80 font-bold">{card?.card.title}</h3>

                <div className="">
                    <h3 className="text-lg text-black/80 font-bold">About</h3>
                    <p className="text-black/60 mt-2">{card?.card.description}</p>
                </div>

                <div className="">
                    <h3 className="text-lg text-black/80 font-bold">Technologies</h3>
                    <div 
                    className="flex items-center gap-x-4 flex-wrap
                    mt-2">
                        {
                            card?.card.tools?.map((item, index) => (
                                <div 
                                key={index}
                                className="
                                py-1 px-2 
                                bg-gray-200/80 text-black/50 font-semibold
                                rounded-lg">
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="w-full h-[50px] bg-black">

            </div>

        </div>
    </div>
  )
}

export default ProjectModal