import { motion } from "framer-motion";

const itemVariant = {
  hidden: {
    opacity: 0,
    x: -40
  },
  show: {
    opacity: 1,
    x: 0,
    ease: "easeOut"
  }
}

export default function ProjectCard() {
  return (
    <motion.div
      className="w-[25rem] h-[25rem] bg-[#1d2021] p-4 rounded-lg m-4"
      variants={itemVariant}
    >
      <motion.text className="justify-center my-[4rem] content-center text-[2rem] md:text-[3rem] font-[Poppins] font-bold opacity-40">
        Nothing Yet :(
      </motion.text>
    </motion.div>
  )
}
