import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="navbar flex z-1 sticky top-4 items-center p-2 md:p-0 text-gray-500 rounded-[0.8rem] outline outline-[#ffffff70]" >

      {/* Left part */}
      <div className="text-[#ffffff] shrink text-[1.1rem] font-bold md:text-[1.5rem] md:ml-7 ml-2 justify-start">
        <NavLink to="/" end>
          Manish Pandey
        </NavLink>
      </div>

      {/* Right part */}
      <div className="flex flex-1 px-1 md:px-4 flex-row text-[0.8rem] md:text-[1.1rem] justify-end items-center">
        <div className="navItem decoration-white hover:underline hover:underline-offset-8 md:m-[0.5rem] mx-[0.6rem] md:mx-8 font-semibold">
          <NavLink to="/about" end>
            About
          </NavLink>
        </div>
        <div className="navItem decoration-white hover:underline hover:underline-offset-8 md:m-[0.5rem] mx-[0.6rem] mr-[0.4rem] md:mx-8 font-semibold">
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="resumeBtn rounded-[0.3rem] md:m-[0.6rem] mx-[0.6rem] md:mr-[0rem] mr-[0.1rem]">
          Resume
        </motion.button>
      </div>
    </motion.div >
  )
}
