import { motion } from "motion/react";
import ProjectCard from "../components/projectCard";


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
      className="flex flex-col pt-4 flex-wrap md:flex-row justify-center items-center"
      variants={projectContainer}
      initial="hidden"
      animate="show">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </motion.div>
  )
}
