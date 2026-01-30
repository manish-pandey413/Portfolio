import { motion, useInView } from "motion/react";
import { NavLink } from "react-router";
import { FaExternalLinkAlt as OutLink } from "react-icons/fa";
import { useRef } from "react";
import avatar from "../assets/avatar.png"

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
      delay: 0.4,
    }
  }
}

const childVariant = {
  slideVariant: {
    hidden: { opacity: 0, x: -200, },
    show: { opacity: 1, x: 0, ease: "easeOut" }
  },

  popVariant: {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, ease: "easeOut" }
  }
}


export default function About() {
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const isAboutVisible = useInView(aboutRef, { root: containerRef, amount: 0.1 });

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col p-8 text-white  md:mt-[4rem]"
      variants={containerVariant}
      initial='hidden'
      animate='show'
    >

      <motion.div
        ref={aboutRef}
        className="grid md:grid-cols-20 md:flex-row text-white mt-[8rem] md:mt-[7rem]"
        variants={containerVariant}
        initial='hidden'
        animate={isAboutVisible ? 'show' : 'hidden'}
      >
        {/* Profile Image */}
        <motion.div className="flex md:col-span-5 md:col-start-14 md:order-1 h-[18] md:h-[17rem] justify-center m-2 md:mb-0 mb-[3rem]" variants={childVariant.popVariant}>
          <img src={avatar} className="avatar rounded-[50rem] opacity-65" />
        </motion.div>

        {/* Skills Box */}
        <motion.div className="md:col-span-11 font-light md:mr-[4rem]" variants={childVariant.slideVariant}>
          <h2 className="text-[1.8rem] md:text-[2rem] font-semibold mb-3 font-[Montserrat] text-gray-300">About Me</h2>
          <p className="text-[1.2rem] md:text-[1.3rem] text-gray-400 font-[Montserrat]">
            I&apos;m a self-taught programmer from India with a solid foundation in <text className="font-bold px-2 text-gray-400">Data Structures and Algorithms.</text>
            I&apos;m continuously exploring new technologies, contributing to personal <NavLink to="/projects" end className="px-2 font-bold inline-flex items-center gap-1 text-gray-400">Projects<OutLink size={12} /></NavLink> and leveling up with each problem.
            I’ve expanded my skills by working on real-world projects, exploring <text className="font-bold px-2 text-gray-400">Full-stack Development</text> and experimenting with new tools.
          </p>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
