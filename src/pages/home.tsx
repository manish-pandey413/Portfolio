import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"
import terminalImg from "../assets/images/terminal.png"
import { TfiGithub as GitIcon } from "react-icons/tfi";
import { SiLeetcode as LeetIcon } from "react-icons/si";
import { PiLinkedinLogoBold as LinkedIcon } from "react-icons/pi";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.6 }
      }}
      className="flex justify-center font-[Montserrat] md:justify-start h-screen items-center"
    >
      <motion.text className="about md:w-45/100 text-[1.8rem] md:first-letter:text-[3.2rem] md:text-[2.2rem] p-4 md:w-w/5 text-bold">
        Hey! There I&apos;m Manish Pandey<br />

        {/* Animated about section */}
        <motion.text initial={{ opacity: 0 }}
          className="animationAbt text-[1.8rem] lg:text-[2.0rem] px-[1rem] pt-[0.5rem] pb-[0.85rem]">
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

        {/* Terminal Image */}
        <img className="termImg absolute md:top-38/100 lg:top-25/100 md:right-10 w-9/10 md:w-5/10 opacity-7 " src={terminalImg} />

        {/* Higlighted line  */}
        <motion.div className="py-[0.6rem] md:py-[0.2rem]">
          <motion.text className="text-[1.2rem] opacity-70">
            Blending <motion.text className="bg-[#0d2847] text-[#3b9eff] px-[1rem] pt-[0.2rem] pb-[0.3rem] rounded-lg">code</motion.text> and <motion.text className="bg-[#331e0b] text-[#ff801f] px-[1rem] pt-[0.2rem] pb-[0.3rem] rounded-lg">creativity</motion.text> to solve real problems.
          </motion.text>
        </motion.div>

        {/* Icons */}
        <motion.nav
          className="flex gap-[5rem] text-[2.2rem] py-[2.2rem] flex-row justify-center items-center">

          <a href="https://github.com/manish-pandey413" target='_blank' rel="noopener noreferrer" >
            <GitIcon className="homeIcon hover:animate-pulse" />
          </a>
          <a href="https://leetcode.com/u/_Manish_Pandey_/" target='_blank' rel="noopener noreferrer" >
            <LeetIcon className="homeIcon hover:animate-pulse" />
          </a>
          <a href="https://www.linkedin.com/in/manish-pandey-260aab325/" target='_blank' rel="noopener noreferrer" >
            <LinkedIcon className="homeIcon hover:animate-pulse" />
          </a>
        </motion.nav>

      </motion.text>
    </motion.div >
  )
}
