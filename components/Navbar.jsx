'use client'
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/pencil.png";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  return (<nav className=" flex top-0 bg-[#1E2A38] z-50">
    <Link href="/">
      <div className="flex items-center p-2 gap-2">
        <Image src={logo} width={50} height={50} alt="logo" />
        <div className="font-bold text-2xl">
          <span className=" text-[#20C997]">VN</span>:<span className="text-white">Studio</span>
        </div>
      </div>
    </Link>

    {/* Hamburger icon for mobile */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="block ml-auto py-2 my-2 md:hidden cursor-pointer"
    >
      <div className=" mr-3">
        <div
          className={`bg-zinc-200 rounded-full w-8 h-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></div>
        <div
          className={`bg-zinc-200 rounded-full w-8 h-1 mt-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></div>
        <div
          className={`bg-zinc-200 rounded-full w-8 h-1 mt-1 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></div>
      </div>
    </button>
    {isOpen && (
      <div className=" md:hidden  absolute top-[62px] left-0 w-full bg-[#1E2A38] transition-all ease-in-out z-10">


        {/* <div className="relative flex h-full items-center justify-center p-4 cursor-pointer font-bold text-[#f0f0f0] hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
          <span>Contact</span>
        </div> */}
        <Link href="/resume">
        <div className="relative flex h-full items-center justify-center p-4 cursor-pointer font-bold text-[#f0f0f0] hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
          <span>Resume</span>
        </div>
        </Link>
        <div className=" group relative h-full flex flex-col items-center p-4 justify-center cursor-pointer  text-[#f0f0f0] hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
          <div className=" font-bold  ">About</div>
          {/* Submenu */}
          <div className=" group-hover:block hidden justify-center  mt-2 w-full bg-[#1E2A38]  rounded-b-md text-center">
            <Link href="/skills">
              <div className="p-4 hover:bg-white/5 transition-colors ease-in-out cursor-pointer">
                <span>Skill</span>
              </div>
            </Link>
            {/* <Link href="/resume">
              <div className="p-4 hover:bg-white/5 hover:text-zinc-200 text-[#f0f0f0] transition-colors ease-in-out cursor-pointer">
                <span>Projects</span>
              </div>
            </Link> */}
          </div>
        </div>

      </div>
    )}



    <div className="hidden md:flex flex-1 items-center justify-end">

      <div className={`relative flex h-full items-center p-4 cursor-pointer font-bold text-[#f0f0f0] 
              hover:text-teal-100 hover:bg-white/10 transition-colors ease-in-out group
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              ${pathname === "/skills" || pathname === "/about" ? "after:w-full" : "after:w-0"}`}>
        <span>About</span>
        <div className="group-hover:block hidden absolute top-full right-0 whitespace-nowrap bg-[#1E2A38]  rounded-b-md text-center z-50">
          <Link href="/skills">
            <div className="p-4  font-bold hover:bg-white/5 hover:text-teal-100 text-[#f0f0f0] transition-colors ease-in-out cursor-pointer">
              <span>Skill</span>
            </div>
          </Link>
          {/* <div className="p-4   font-bold hover:bg-white/5 hover:text-teal-100 text-[#f0f0f0] transition-colors ease-in-out cursor-pointer">
            <span>Projects</span>
          </div> */}
        </div>
      </div>
      {/* <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-[#f0f0f0] hover:text-teal-100 hover:bg-white/10 transition-colors ease-in-out">
        <span>Contact</span>
      </div> */}
      <Link href="/resume">
        <div
          className={`relative flex h-full items-center p-4 cursor-pointer font-bold text-[#f0f0f0] 
              hover:text-teal-100 hover:bg-white/10 transition-colors ease-in-out 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              ${pathname === "/resume" ? "after:w-full" : "after:w-0"}`}
        >
          <span>Resume</span>
        </div>
      </Link>
    </div>
  </nav>);
}

export default Navbar;