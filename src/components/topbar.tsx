import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="navbar flex z-50 fixed top-4 left-4 right-4 items-center p-[0.6rem] md:p-2 text-gray-500 rounded-[0.8rem]" >

      {/* Left part */}
      <div className="text-[#ffffff] text-[0.9rem] font-bold md:text-[1.8rem] md:ml-7 ml-1 font-[Saira] justify-start">
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
        <div className="navItem decoration-white hover:underline hover:underline-offset-8 md:m-[0.5rem] mx-[0.6rem] mr-[0.8rem] md:mx-8 font-semibold">
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "https://github.com/manish-pandey413/Portfolio/raw/master/src/assets/Resume.pdf";
            link.click();
          }}
          className="resumeBtn flex flex-row bg-[#00DB9D]/20 text-[#00DB9D] active:bg-[#00DB9D]/50 transition-colors duration-150 justify-center items-center rounded-[1rem] px-[0.8rem] md:px-[1.4rem] py-[0.2rem] md:my-[0.4rem] pb-[0.25rem]">
          <svg
            className="md:w-[1.3rem] w-[1rem] h-[1rem] md:h-[1.4rem] mr-[0.4rem] -ml-[0.1rem] mb-[0.1rem] md:mb-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 20 h18" />
            <path d="M2 17 v3" />
            <path d="M20 17 v3" />
            <g className="animate-bounce">
              <path d="M11 2 v10" />
              <path d="M17 9 l-6 6-6-6" />
            </g>
          </svg>Resume
        </motion.button>
      </div>
    </motion.div >
  )
}
