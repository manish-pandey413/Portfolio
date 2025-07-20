import { NavLink } from "react-router";
import { motion } from "motion/react"

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="navbar flex z-50 fixed top-4 left-4 right-4 items-center p-2 md:p-0 text-gray-500 rounded-[0.8rem] outline outline-[#ffffff70]" >

      {/* Left part */}
      <div className="text-[#ffffff] text-[0.9rem] font-bold md:text-[1.5rem] md:ml-7 ml-2 justify-start">
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
            link.download = "Resume.pdf"
            link.click();
          }}
          className="flex flex-row bg-[#00DB9D]/80 active:bg-[#00DB9D]/50 transition-colors duration-150 justify-center items-center resumeBtn rounded-[0.3rem] px-2 py-[0.1rem] md:my-4">
          <svg
            className="md:w-[1.3rem] w-[1rem] h-[1rem] md:h-[1.4rem] mr-[0.4rem] mb-[0.1rem] md:mb-0"
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
            <g className="md:animate-bounce">
              <path d="M11 2 v10" />
              <path d="M17 9 l-6 6-6-6" />
            </g>
          </svg>Resume
        </motion.button>
      </div>
    </motion.div >
  )
}
