import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"
import terminalImg from "../assets/images/terminal.png"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.6 }
      }}
      className="flex justify-center md:justify-start h-screen items-center">
      <motion.text className="about md:w-45/100 text-[1.8rem] first-letter:text-[3.2rem] md:text-[2.5rem] p-4 md:w-w/5 text-bold">
        Hey! There I&apos;m Manish Pandey.{"\n"}
        <motion.text initial={{ opacity: 0 }}
          className="animationAbt text-[1.8rem] lg:text-[2.0rem]">
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
      </motion.text>
      <img className="termImg absolute md:top-38/100 lg:top-3/10 md:right-10 w-9/10 md:w-5/10 opacity-7 " src={terminalImg} />
    </motion.div >
  )
}
