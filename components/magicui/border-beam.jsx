import { motion } from "framer-motion";

export const BorderBeam = ({ duration, size }) => {
  return (
    <motion.div
      className="w-full h-2 bg-[#20C997]" // Styling for the beam
      initial={{ width: 0 }}
      animate={{ width: `${size}%` }} // The width will animate to the `size` prop
      transition={{ duration: duration }}
    />
  );
};
