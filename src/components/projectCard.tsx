import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { TfiGithub as GitIcon } from "react-icons/tfi";

interface Props {
  ProjectName: string;
  ProjectLink: string;
  children: ReactNode;
}

const itemVariant = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  show: {
    opacity: 1,
    scale: 1,
    ease: "easeOut"
  }
}

export default function ProjectCard({ ProjectName, ProjectLink, children }: Props) {
  return (
    <motion.div
      className="w-[20rem] overflow-hidden md:w-[25rem] bg-[#131313] rounded-lg m-4 md:m-8"
      variants={itemVariant}
    >
      <div className='flex justify-center align-center'>
        <motion.text className="flex justify-center items-center w-[20rem] h-[13rem] md:h-[18rem] md:w-[25rem] text-[2rem] md:text-[3rem] bg-[#1d2021] font-[Poppins] font-bold opacity-70">
          {ProjectName}
        </motion.text>
      </div>

      <div className="p-4">
        <motion.text className="text-[1rem] m-4 md:text-[1.1rem] opacity-50">
          {children}
        </motion.text>

        <motion.button
          className="hover:cursor-pointer bg-green-500/7 text-green-500/70 px-[0.6rem] mr-[1rem] mt-4 rounded-[9rem]"
          onClick={() => {
            const link = document.createElement("a");
            link.href = ProjectLink;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.click();
          }}
        >
          <GitIcon className="inline-flex align-center mb-[0.2rem] mr-[0.3rem]" /><text className="mb-[0.1rem]">Github</text>
        </motion.button>

      </div>
    </motion.div>
  )
}
