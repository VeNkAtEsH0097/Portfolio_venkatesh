"use client";
import { motion } from "framer-motion";
import { BorderBeam } from "./magicui/border-beam";
import { BackgroundBeamsWithCollision } from "./magicui/backgroundbeam";


export default function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="w-full ">
      {/* Top Section: Fixed Background */}
      <div 
        className=" h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 min-h-screen"
        
      >
        {/* Intro */}
        <div className="text-center md:text-left mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I <span  className="text-[#20C997]">'</span>M <br /> <span>VENKATESH</span> 
            <span className="text-[#20C997]">.</span>N
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Full-Stack Developer & Web Enthusiast
          </motion.p>

          {/* Download CV Button */}
          <BorderBeam duration={8} size={100}/>
        </div>
        

      </div>
      

      
    </BackgroundBeamsWithCollision>
  );
}
