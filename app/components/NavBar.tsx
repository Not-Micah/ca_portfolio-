import { navLinks } from "@/data"

const NavBar = () => {
  return (
    <nav
    className='
    flex justify-between items-center
    max-w-max w-full
    fixed top-[50px] left-1/2 transform -translate-x-1/2
    padding py-2'>

        <a 
        href="/"
        className='
        w-[50px] h-[50px]
        bg-black'>
        </a>

        <div 
        className='
        flex items-center gap-x-6'>
            {
                navLinks.map((link, index) => (
                    <a
                    key={index}
                    href={link.link}
                    className='
                    dynamic-text'>
                        {link.label}
                    </a>
                ))
            }
        </div>

    </nav>
  )
}

export default NavBar