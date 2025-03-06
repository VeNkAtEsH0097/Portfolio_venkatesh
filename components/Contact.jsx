"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter, FaFacebook, FaGithub, FaDribbble } from "react-icons/fa";

function ContactMe() {
    const [isOpen, setIsOpen] = useState(false);

    // Icons expanding to the left
    const leftIcons = [
        { x: -70, icon: <FaInstagram className="text-pink-500" />, label: 'Instagram', link: 'https://www.instagram.com/yourprofile' },
        { x: -140, icon: <FaLinkedin className="text-blue-600" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/yourprofile' },
        { x: -210, icon: <FaEnvelope className="text-red-500" />, label: 'Email', link: 'mailto:youremail@example.com' },
        { x: -280, icon: <FaWhatsapp className="text-green-500" />, label: 'WhatsApp', link: 'https://wa.me/yourphonenumber' },
    ];

    // Icons expanding to the right
    const rightIcons = [
        { x: 160, icon: <FaTwitter className="text-blue-400" />, label: 'Twitter', link: 'https://twitter.com/yourprofile' },
        { x: 220, icon: <FaFacebook className="text-blue-700" />, label: 'Facebook', link: 'https://www.facebook.com/yourprofile' },
        { x: 290, icon: <FaGithub className="text-gray-800" />, label: 'GitHub', link: 'https://github.com/yourprofile' },
        { x: 360, icon: <FaDribbble className="text-pink-400" />, label: 'Dribbble', link: 'https://dribbble.com/yourprofile' },
    ];

    return (

        <motion.div
        className="flex flex-col justify-center items-center h-fit p-4 bg-[#333b50]/60 rounded-tr-full rounded-tl-full"
        initial={{ y: 200, opacity: 0 }}  // Starts from below
        whileInView={{ y: 0, opacity: 1, scale: 1 }} // Animates when the component enters the viewport
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }} 
        >
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>

            <div className="relative">
                {/* Contact Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative bg-[#2193b0] hover:bg-[#6dd5ed]/90 text-white p-4 rounded-full shadow-lg text-lg font-semibold"
                >
                    Contact Me
                </motion.button>

                {/* Social Icons with AnimatePresence for exit animation */}
                <AnimatePresence>
                    {isOpen && [...leftIcons, ...rightIcons].map((pos, index) => (
                        <motion.a
                            key={index}
                            href={pos.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: pos.x, opacity: 1 }}
                            exit={{ x: 0, opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="absolute top-0.5 transform -translate-y-1/2 flex justify-center items-center bg-white p-3 rounded-full shadow-md text-xl"
                            title={pos.label}
                            whileHover={{ scale: 1.2 }}
                        >
                            {pos.icon}
                        </motion.a>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default ContactMe;
