import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="flex sticky top-3 items-center p-1 text-gray-500" >

      {/* Left part */}
      <div className="text-[#ffffff] text-[1.1rem] font-bold md:text-[1.8rem] justify-start">
        <NavLink to="/" end>
          Manish Pandey
        </NavLink>
      </div>

      {/* Center part */}
      <div className="flex flex-1 px-3 md:px-4 flex-row text-[0.9rem] md:text-[1.1rem] justify-center items-center">
        <div className="navbar m-[0.5rem] md:m-6 md:mx-10 font-semibold">
          <NavLink to="/about" end>
            About
          </NavLink>
        </div>
        <div className="navbar m-[0.5rem] md:m-6 md:mx-10 font-semibold">
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>
        <div className="navbar m-[0.5rem] md:m-6 md:mx-10 font-semibold">
          <NavLink to="/socials" end>
            Socials
          </NavLink>
        </div>
      </div>

      {/* Right part */}
      <div className="justify-end text-[0.85rem] md:text-[1.1rem]">
        <button className="resumeBtn rounded-[0.3rem] duration-500 hover:scale-115">Resume</button>
      </div>
    </motion.div >
  )
}
