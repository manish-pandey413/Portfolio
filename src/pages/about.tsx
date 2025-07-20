import { motion } from "framer-motion";

const containerVariant = {
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

const childVariant = {
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

export default function About() {
  return (
    <motion.div
      className="flex p-8 text-white mt-[4rem]"
      variants={containerVariant}
      initial='hidden'
      animate='show'
    >

      <motion.div
        className="grid md:grid-cols-12 md:flex-row p-8 text-white mt-[8rem]"
        variants={containerVariant}
        initial='hidden'
        animate='show'
      >
        {/* Profile Image */}
        <motion.div className="md:col-span-3" variants={childVariant}>
          <img src="profile.png" alt="Profile Image" className="outline outline-white-300 rounded-full flex-grow m-9" />
        </motion.div>

        {/* Skills Box */}
        <motion.div className="md:col-span-9 font-light md:ml-[9rem]" variants={childVariant}>
          <h2 className="text-[1.8rem] mb-2 font-[Saira]">About Me</h2>
          <p className="text-[1.2rem] text-gray-400 font-[Saira]">
            Hello, I&apos;m Manish Pandey.<br />
            I&apos;m a self-taught programmer from India with a solid foundation in <text className="text-[#cc241d] font-bold">Data Structures and Algorithms</text>.<br />
            I&apos;m continuously exploring new technologies, contributing to <text className="text-[#fe8019] font-bold">personal projects</text>, and leveling up with each problem.<br />
            Over time, I’ve expanded my skills by working on real-world projects, exploring <text className="text-[#00db9d] font-bold">full-stack development</text>, and experimenting with new tools.
          </p>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}
