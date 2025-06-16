import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
      className="flex bg-[transparent] backdrop-blur-lg sticky top-4 pt-2 items-center text-gray-500" >

      {/* Left part */}
      <div className="text-[#ffffff] shrink text-[1.1rem] font-bold md:text-[1.9rem] md:ml-2 justify-start">
        <NavLink to="/" end>
          Manish Pandey
        </NavLink>
      </div>

      {/* Center part */}
      <div className="flex flex-1 px-3 md:px-4 flex-row text-[0.8rem] md:text-[1.1rem] justify-end items-center">
        <div className="navbar decoration-white hover:underline hover:underline-offset-8 m-[0.5rem] md:m-6 md:mx-10 font-semibold">
          <NavLink to="/about" end>
            About
          </NavLink>
        </div>
        <div className="navbar decoration-white hover:underline hover:underline-offset-8 m-[0.5rem] md:m-6 md:mx-10 font-semibold">
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>
      </div>

      {/* Right part */}
      <div className="justify-end text-[0.85rem] md:text-[1.2rem]">
        <motion.button
          whileHover={{ scale: 1.17 }}
          transition={{ duration: 0.3 }}
          className="resumeBtn rounded-[0.3rem]">
          Resume
        </motion.button>
      </div>
    </motion.div >
  )
}
