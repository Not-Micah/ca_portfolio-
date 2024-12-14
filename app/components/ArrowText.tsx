import { twMerge } from 'tailwind-merge';
import './arrow-text.css'; 

interface ArrowTextProps {
    text: string;
    link?: string;
    className?: string;
}

const ArrowText: React.FC<ArrowTextProps> = ({ text, link, className }) => {
    return (
        <div
        className={
          twMerge(`
          flex items-center gap-x-4
          group`, className)
        }>

          <a 
          href='/about'
          className="dynamic-text text-black/80 group-hover:underline">
            {text}
          </a>

          <svg 
          className='arrow-animate'
          width="24" height="24" 
          xmlns="http://www.w3.org/2000/svg">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
          </svg>

        </div>
    );
}

export default ArrowText;
