import { experiences } from "@/data";
import { CiCalendar } from "react-icons/ci";

const TimeLinePoint = () => {
  return (
    <div className="
    w-[15px] h-[15px] rounded-full
    bg-white border-2 border-black" />
  )
}

const TimeLine = () => {

    return (
      <section 
      className='
      max-w-max w-full mx-auto
      mt-[50px] mb-[120px]
      flex flex-col gap-y-6
      padding
      '>
  
        <h3
        className='
        dynamic-heading font-title mb-5'>
          About
        </h3>

        <div 
        className="
        flex flex-col gap-y-20 relative">

          <div className="
          w-[1px] h-full bg-black/50 
          absolute left-[7.5px]
          -z-10" />

          {
            experiences.map((experience, index) => (
              <div 
              key={index}
              className="w-full flex gap-x-4">

                <div className="max-w-[50px] w-full max-lg:max-w-[25px]">
                  <TimeLinePoint />
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-center max-lg:flex-col max-lg:items-start">

                    <h3 className="text-black/80 font-bold text-xl
                    flex items-center gap-x-4">{experience.title} {experience.icon}</h3>

                    <p className="text-black/80 font-bold underline
                    flex items-center gap-x-2"><CiCalendar /> {experience.date}</p>
                    
                  </div>

                  <div className="text-black/50 dynamic-text">{experience.description}</div>

                </div>
                
              </div>
            ))
          }

        </div>
  
      </section>
    )
  }
  
  export default TimeLine;