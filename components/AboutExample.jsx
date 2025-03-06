"use client";
import { motion } from "framer-motion";
import { BorderBeam } from "./magicui/border-beam";

export default function AboutSec() {
  return (
    <section className="  h-32" >
      {/* Floating Card */}
      
      <motion.div
        className="bg-[#333b50] text-white max-w-md md:max-w-3xl hidden md:block mx-auto p-8 md:p-12 rounded-3xl shadow-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        
        
        <p className="mt-4 text-lg text-white ">
          I'm a passionate Full-Stack Developer specializing in 
          <strong> React, Next.js, and mobile development</strong>. 
          With hands-on experience in <strong>building scalable web applications</strong> and 
          implementing <strong>secure backend systems</strong>, I strive to create seamless user experiences.
        </p>
        <p className="mt-4 text-lg text-white">
          💼 Currently working at <strong>Capgemini</strong> as a Full-Stack Developer.<br />
          🚀 Previously interned at <strong>Digikraft</strong>, where I worked on <strong>web development, validation, and backend integration</strong>.
        </p>
        <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
              Download CV
            </button>
        
          
      </motion.div>
      
    </section>
    
  );
}
