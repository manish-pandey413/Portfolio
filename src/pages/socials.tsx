import { motion } from "motion/react";
import Card from "../components/socialCard"

import { TfiGithub as GitIcon } from "react-icons/tfi";
import { SiLeetcode as LeetIcon } from "react-icons/si";
import { PiLinkedinLogoBold as LinkedIcon } from "react-icons/pi";
import { SiCodechef as ChefIcon } from "react-icons/si";

export default function Socials() {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8 }
      }}>
      <div className="flex flex-row flex-wrap justify-center">
        <Card icon={GitIcon} link="https://github.com/manish-pandey413" />
        <Card icon={LeetIcon} link="https://leetcode.com/u/_Manish_Pandey_/" />
        <Card icon={LinkedIcon} link="https://www.linkedin.com/in/manish-pandey-260aab325/" />
        <Card icon={ChefIcon} link="https://www.codechef.com/users/d3f4ult/" />
      </div>
    </motion.div>
  )
}
