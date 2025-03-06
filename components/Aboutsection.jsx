"use client";
import { motion } from "framer-motion";
import { BorderBeam } from "./magicui/border-beam";

export default function AboutSection() {
  return (
    <section className="relative z-10 flex items-center justify-center h-32 bg-black backdrop-blur-lg">
      {/* Floating Card */}
      
      <motion.div
        className="bg-[#333b50] text-white max-w-3xl mx-auto p-8 md:p-12 rounded-3xl shadow-xl text-center"
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
        <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
              Download CV
            </button>
          </motion.div>
          
      </motion.div>
      
    </section>
    
  );
}
