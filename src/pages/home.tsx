import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <motion.div className="flex justify-center lg:justify-start h-screen items-center">
      <motion.text initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: "easeIn", duration: 0.8 }
        }}
        className="about  md:w-5/10 text-[1.8rem] first-letter:text-[3.2rem] lg:text-[2.5rem] p-4 lg:w-w/5 text-bold">
        Hey! There I&apos;m Manish Pandey.
        <motion.text initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "easeIn", duration: 0.8 }
          }}
          className="animationAbt text-[1.8rem] lg:text-[2.0rem] p-1 m-1">
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
    </motion.div >
  )
}
