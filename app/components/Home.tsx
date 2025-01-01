import ArrowText from "./ArrowText"

import { socialLinks } from "@/data"

const Home = () => {
  return (
    <section 
    className='
    max-w-max w-full mx-auto
    max-h-[100vh] overflow-y-scroll no-scrollbar
    mt-[50px] mb-[20px] max-lg:mb-[100px]

    flex flex-col gap-y-6
    padding'>

      <h3
      className='
      dynamic-heading font-title'>
        I&apos;m Micah Tid
      </h3>

      <p className='dynamic-text'>
        Just your neighborhood full-stack developer! Specializing in <span className="font-medium">React, TailwindCSS, Next.js, and Firebase</span>, 
        I spend my evenings creating interactive web canvases <span className="font-medium">inspired by the little things around me.</span>
        <br /> <br />
        I&apos;m <span className="font-medium">experienced in backend architecture and database management</span>, but I have a soft spot for minimalist, 
        clean front-end designs—there&apos;s just something special about easy-to-navigate web apps! When I&apos;m not coding, you&apos;ll 
        find me swimming, training calisthenics, dabbling in robotics <span className="font-medium">(a proud STEM enthusiast!)</span>, or reading the Bible. 
        Feel free to check out the rest of my portfolio!
      </p>

      
      <ArrowText text="See More About Me" link="/about" className="mt-8" />

      <div 
      className='
      flex items-center gap-x-4'>
        {socialLinks.map((social, index) => (
          <a
          key={index}
          href={social.href}
          className="mt-4">
            {social.icon}
          </a>
        ))}
      </div>

    </section>
  )
}

export default Home