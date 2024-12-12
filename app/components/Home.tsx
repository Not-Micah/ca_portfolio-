import { socialLinks } from "@/data"

const Home = () => {
  return (
    <section 
    className='
    max-w-max w-full mx-auto
    max-h-[100vh]
    mt-[250px]

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
      I've got it covered. I tread the path of minimalism, finding 
      beauty in simplicity and order. When I'm not crafting beautiful 
      web experiences, you can find me reading Articles or swaying to 
      the rhythm of Pop Music & Jazz, losing myself in the captivating 
      flow of melodies. anyways you can Contact Me
      </p>

      <a 
      href=""
      className='
      dynamic-text mt-8'>
        See More About Me
      </a>

      <div 
      className='
      flex items-center gap-x-4'>
        {socialLinks.map((social, index) => (
          <a
          key={index}
          href={social.link}
          className="mt-4">
            {social.icon}
          </a>
        ))}
      </div>

    </section>
  )
}

export default Home