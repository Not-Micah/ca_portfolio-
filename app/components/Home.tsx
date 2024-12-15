import ArrowText from "./ArrowText"

import { socialLinks } from "@/data"

const Home = () => {
  return (
    <section 
    className='
    max-w-max w-full mx-auto
    max-h-[100vh] overflow-y-scroll no-scrollbar
    mt-[50px] max-lg:mb-[100px]

    flex flex-col gap-y-6
    padding'>

      <h3
      className='
      dynamic-heading font-title'>
        I&apos;m Micah Tid
      </h3>

      <p
      className='
      dynamic-text'>
      Your friendly neighborhood frontend developer, 
      UX architect, and JavaScript engineer. I spend my days (and often nights) 
      painting the Internet canvas with Projects and lines of code, turning zeroes 
      and ones into immersive, interactive experiences,
      </p>

      <p
      className='
      dynamic-text'>
      Bona fide photochromic Lens enthusiast - sunlight or indoors, 
      I&apos;ve got it covered. I tread the path of minimalism, finding 
      beauty in simplicity and order. When I&apos;m not crafting beautiful 
      web experiences, you can find me reading Articles or swaying to 
      the rhythm of Pop Music & Jazz, losing myself in the captivating 
      flow of melodies. anyways you can Contact Me
      </p>
      
      <ArrowText text="See More About Me" link="./about" className="mt-8" />

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