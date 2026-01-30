import { motion } from "framer-motion";
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
      className="flex flex-wrap flex-col md:flex-row mt-[7rem] justify-center md:justify-evenly items-center"
      variants={projectContainer}
      initial="hidden"
      animate="show">

      <ProjectCard
        ProjectName="UNotes"
        ProjectLink="https://github.com/manish-pandey413/ReactNative-App"
      >
        <p>A full stack cross platform mobile application to keep track and manage your expenses. Made using <text className="font-bold px-1">React Native</text> and <text className="font-semibold px-1">Expo</text>.</p>
      </ProjectCard>

      <ProjectCard
        ProjectName="YABS"
        ProjectLink="https://github.com/manish-pandey413/yabs.git"
      >
        <p>A full stack blog site, created to learn backend engineering. Made using <text className="font-bold px-1">Golang</text> and <text className="font-semibold px-1">React</text>.</p>
      </ProjectCard>

    </motion.div>
  )
}
