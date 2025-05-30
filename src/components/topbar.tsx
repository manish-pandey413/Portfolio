import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="flex sticky top-0 backdrop-blur-lg w-full text-gray-500" >
      <div className='flex flex-row absolute right-0'>
        <div className="navbar m-[0.3rem] px-2 lg:px-7 py-[0.2rem]">
          <NavLink to="/" end>
            Home
          </NavLink>
        </div>
        <div className="navbar m-[0.3rem] px-2 lg:px-7 py-[0.2rem]">
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>
        <div className="navbar m-[0.3rem] px-2 lg:px-7 py-[0.2rem]">
          <NavLink to="/socials" end>
            Socials
          </NavLink>
        </div>
      </div>
      <button className="resumeBtn duration-500 hover:scale-120">Resume</button>
    </motion.div >
  )
}
