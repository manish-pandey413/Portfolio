import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { TfiGithub as GitIcon } from "react-icons/tfi";
import { SiLeetcode as LeetIcon } from "react-icons/si";
import { PiLinkedinLogoBold as LinkedIcon } from "react-icons/pi";

const socialContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.8
    }
  }
}

const avariant = {
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

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { ease: "easeOut", delay: 0.3 }
      }}
      className="flex justify-center pt-[5rem] font-[Montserrat] h-[92vh] items-center"
    >
      <motion.text className="text-[1.8rem] transform -translate-y-1/10  md:text-[2.2rem] m-2 text-bold">
        <motion.text className="text-[2.5rem] md:text-[3.8rem]">H</motion.text>ey! There I&apos;m Manish Pandey<br />

        {/* Animated about section */}
        <motion.text initial={{ opacity: 0 }}
          className="rounded-[0.7rem] bg-[#132d21] text-[#33b074] text-[1.8rem] lg:text-[2.0rem] px-[1rem] pt-[0.2rem] pb-[0.60rem]">
          <TypeAnimation
            sequence={[
              "I'm a problem solver.",
              2000,
              "I'm a programmer.",
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ display: 'inline-block' }}
            repeat={0}
          />
        </motion.text>
        <br />

        {/* Higlighted line  */}
        <motion.div className="p-[0.1rem]">
          <motion.text className="text-[1.1rem] opacity-60">
            Blending <motion.text className="bg-[#0d2847] text-[#3b9eff] px-[0.6rem] pb-[0.25rem] rounded-lg">code</motion.text> and <motion.text className="bg-[#331e0b] text-[#ff801f] px-[0.6rem] pb-[0.25rem] rounded-lg">creativity</motion.text> to solve real problems.
          </motion.text>
        </motion.div>

        {/* Icons */}
        <motion.div
          variants={socialContainer}
          initial="hidden"
          animate="show"
          className="flex gap-[5rem] text-[2.2rem] py-[1.2rem] flex-row justify-center items-center">

          <motion.a href="https://github.com/manish-pandey413" target='_blank' rel="noopener noreferrer" variants={avariant} >
            <GitIcon className="homeIcon hover:animate-pulse" />
          </motion.a>
          <motion.a href="https://leetcode.com/u/_Manish_Pandey_/" target='_blank' rel="noopener noreferrer" variants={avariant}>
            <LeetIcon className="homeIcon hover:animate-pulse" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/manish-pandey-260aab325/" target='_blank' rel="noopener noreferrer" variants={avariant}>
            <LinkedIcon className="homeIcon hover:animate-pulse" />
          </motion.a>
        </motion.div>

      </motion.text>
    </motion.div >
  )
}
