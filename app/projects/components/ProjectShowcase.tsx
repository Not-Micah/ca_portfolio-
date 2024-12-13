import { projects } from "@/data";

interface CardProps {
  title?: string;
  description?: string;
  img?: string;
  tools?: string[];
  mainUrl?: string;
  githubUrl?: string;
}
const Card: React.FC<CardProps> = ({ 
  title, description, 
  img, tools, 
  mainUrl, githubUrl }) => {
  return (
    <div 
      className="
        relative group
        w-full rounded-lg
        bg-black/10 backdrop-blur-[1px]
        border-2 border-black/10
      ">

      <img 
        src={img} 
        alt="Project Image" 
        className="w-full h-auto" 
      />

      <div className="
      w-full h-full
      bg-gradient-to-b from-[#00000000] to-[#00000000] group-hover:to-black/60
      absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="
        w-full h-full
        flex flex-col justify-end gap-y-1
        p-4
        transform translate-y-[20px] opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-300">

          <h3 className="dynamic-text font-semibold text-white 
          bg-black/50 p-1">{title}</h3>

          <p className="dynamic-text text-white 
          bg-black/50 p-1">{description}</p>

          <div className="
          flex items-center gap-x-2 flex-wrap">
            {
              tools?.map((item, index) => (
                <div 
                key={index}
                className="
                px-2 py-1
                bg-white/30 text-white
                dynamic-text text-bold">
                  {item}
                </div>
              ))
            }
          </div>

        </div>
      </div>

    </div>
  );
};

const ProjectShowcase = () => {
  const oddProjects = projects.filter((_, index) => index % 2 !== 0);
  const evenProjects = projects.filter((_, index) => index % 2 === 0);

  return (
    <section 
      className="
        max-w-max w-full mx-auto
        my-[50px]
        flex flex-col gap-y-6
        padding
      "
    >
      <h3 className="dynamic-heading font-title">Projects</h3>

      <div 
        className="
          flex flex-col gap-y-6
          lg:flex-row lg:gap-x-6
        "
      >
        {/* Odd Projects */}
        <div className="flex flex-col gap-y-6 lg:w-1/2">
          {oddProjects.map((project, index) => (
            <Card 
              key={index} 
              description={project.description}
              githubUrl={project.githubUrl}
              img={project.img}
              mainUrl={project.mainUrl}
              title={project.title}
              tools={project.tools}
            />
          ))}
        </div>

        {/* Even Projects */}
        <div className="flex flex-col gap-y-6 lg:w-1/2">
          {evenProjects.map((project, index) => (
            <Card 
              key={index} 
              description={project.description}
              githubUrl={project.githubUrl}
              img={project.img}
              mainUrl={project.mainUrl}
              title={project.title}
              tools={project.tools}
            />
          ))}
        </div>
      </div>

      {/* Collapsed single-column layout for smaller screens */}
      <div 
        className="
          flex flex-col gap-y-6
          lg:hidden
        "
      >
        {projects.map((project, index) => (
            <Card 
              key={index} 
              description={project.description}
              githubUrl={project.githubUrl}
              img={project.img}
              mainUrl={project.mainUrl}
              title={project.title}
              tools={project.tools}
            />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
