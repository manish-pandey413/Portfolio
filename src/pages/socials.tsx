import { motion } from "motion/react";
import Card from "../components/socialCard"

import { TfiGithub as GitIcon } from "react-icons/tfi";
import { SiLeetcode as LeetIcon } from "react-icons/si";
import { PiLinkedinLogoBold as LinkedIcon } from "react-icons/pi";
import { SiCodechef as ChefIcon } from "react-icons/si";
import { FaTwitterSquare as Twitter } from "react-icons/fa";
import { FaReddit as Reddit } from "react-icons/fa6";
import { AiFillDiscord as Discord } from "react-icons/ai";

export default function Socials() {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8 }
      }}>
      <div className="flex flex-row flex-wrap p-3 justify-center">
        <Card icon={GitIcon} link="https://github.com/manish-pandey413" />
        <Card icon={LeetIcon} link="https://leetcode.com/u/_Manish_Pandey_/" />
        <Card icon={LinkedIcon} link="https://www.linkedin.com/in/manish-pandey-260aab325/" />
        <Card icon={ChefIcon} link="https://www.codechef.com/users/d3f4ult/" />
        <Card icon={Twitter} link="https://x.com/Man1sh_Pandey?t=S9BEwhk7l4rxeSdEXAJ1cg&s=09" />
        <Card icon={Reddit} link="https://www.reddit.com/user/QWERTY--__--/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
        <Card icon={Discord} link="https://discord.com/users/918382617584349194/" />
      </div>
    </motion.div>
  )
}
