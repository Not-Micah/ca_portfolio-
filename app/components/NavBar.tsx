"use client";

import { navLinks } from "@/data";
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";
import { MouseEventHandler } from "react";

import TransitionLink from "./TransitionLink";

interface NavBarModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const NavBarModal: React.FC<NavBarModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        z-20
        w-[100vw] h-[100vh]
        fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white/50 backdrop-blur-sm
        flex flex-col gap-y-16
        padding py-20
        transition-all duration-300
        ${!isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
    >
      <button
        onClick={onClose}
        className="text-right text-lg font-bold uppercase text-black/50"
      >
        Close Menu
      </button>

      <div className="flex flex-col gap-y-8">
        {navLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <TransitionLink
              className="text-xl font-bold uppercase text-black/80"
              href={link.href}
            >
              {link.label}
            </TransitionLink>
            <div className="w-full h-[1px] bg-black/80" />
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav
      className="
    flex justify-between items-center
    max-w-max w-full mx-auto
    mt-[75px] mb-[100px]
    padding py-2"
    >
      <TransitionLink href="/" className="w-[50px] h-[50px]">
        <img src="./logo.png" className="w-full h-full object-cover" />
      </TransitionLink>

      <div
        className="
        flex items-center gap-x-6 max-lg:hidden"
      >
        {navLinks.map((link, index) => (
          <TransitionLink
            key={index}
            href={link.href}
            className="
            relative group
            dynamic-text"
          >
            {link.label}
            <div
              className="
                w-[0%] group-hover:w-[150%] h-[1px] bg-black/80
                absolute -bottom-[10px] left-1/2 transform -translate-x-1/2
                transition-all duration-300
                "
            />
          </TransitionLink>
        ))}
      </div>

      <button className="lg:hidden" onClick={() => setIsModalOpen(true)}>
        <RxHamburgerMenu size={30} />
      </button>

      <NavBarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default NavBar;
