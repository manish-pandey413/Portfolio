import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8 }
      }}>
      <p className="justify-center my-[4rem] content-center text-[2rem] md:text-[3rem] font-[Poppins] font-bold opacity-40">
        Nothing Yet :(
      </p>
    </motion.div>
  )
}
