import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

interface CursorBlinkerProps{
  className?: string;
}


const CursorBlinker: React.FC<CursorBlinkerProps> = ({
  className
}) => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={twMerge("inline-block h-6 w-[5px] bg-[#0f0]", className)}
    />
  );
}

export default CursorBlinker;