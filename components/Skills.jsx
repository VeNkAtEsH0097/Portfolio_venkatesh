"use client";
import { motion } from "framer-motion";
import skillsBg from "@/assets/images/skillss.jpg";
import Link from "next/link";
import ContactMe from "./Contact";

export default function SkillsSection() {
  return (
    <section
      className="relative w-full h-full flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${skillsBg.src})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Makes background stay while scrolling
      }}
    >
      <div className=" mt-60 mb-60 static">
        
          <motion.h2
            className="text-5xl font-extrabold "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className=" text-black">My</span> <span className="text-[#20C997] ">Skills</span>
          </motion.h2>
        

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            React.js
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            Next.js
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            Node.js
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            Tailwind CSS
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            PostgreSQL
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
            Prisma
          </div>
        </motion.div>

      </div>
      <Link href="/skills">
      <motion.div
        className=" -mt-36 "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-[#20C997] p-2 flex justify-center items-center font-extrabold">

          <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-[#677182]"></div>
          <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-[#56677A]"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-[#4A5765]"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-[#B0B9C3]"></div>
          <p className="z-10">View more</p>
        </button>
      </motion.div>
      </Link>
      

      <div className=" w-full px-4 pt-10">
        <ContactMe />
      </div>
    </section>
  );
}
