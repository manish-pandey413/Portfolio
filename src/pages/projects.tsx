import { motion } from "framer-motion";

const projectContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
      delay: 0.3
    }
  }
}


export default function Projects() {
  return (
    <motion.div
      variants={projectContainer}
      initial="hidden"
      animate="show">
      <p className="justify-center content-center text-[2rem] h-[92vh] md:text-[3rem] font-[Poppins] font-bold opacity-40">
        Coming Soon :)
      </p>
    </motion.div>
  )
}
