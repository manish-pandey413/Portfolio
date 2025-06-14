import { motion } from "motion/react";
import Card from "../components/socialCard"

import { TfiGithub as GitIcon } from "react-icons/tfi";
import { SiLeetcode as LeetIcon } from "react-icons/si";
import { PiLinkedinLogoBold as LinkedIcon } from "react-icons/pi";
import { SiCodechef as ChefIcon } from "react-icons/si";
import { FaTwitterSquare as Twitter } from "react-icons/fa";
import { FaReddit as Reddit } from "react-icons/fa6";
import { AiFillDiscord as Discord } from "react-icons/ai";
import type { IconType } from "react-icons";

interface LinkObj {
  icon: IconType | string;
  link: string;
}

const linkArr: LinkObj[] = [
  { icon: GitIcon, link: "https://github.com/manish-pandey413" },
  { icon: LeetIcon, link: "https://leetcode.com/u/_Manish_Pandey_/" },
  { icon: LinkedIcon, link: "https://www.linkedin.com/in/manish-pandey-260aab325/" },
  { icon: ChefIcon, link: "https://www.codechef.com/users/d3f4ult/" },
  { icon: Twitter, link: "https://x.com/Man1sh_Pandey?t=S9BEwhk7l4rxeSdEXAJ1cg&s=09" },
  { icon: Reddit, link: "https://www.reddit.com/user/QWERTY--__--/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" },
  { icon: Discord, link: "https://discord.com/users/918382617584349194/" }
]

export default function Socials() {
  return (
    <>
      <motion.div className="flex flex-wrap p-10 md:p-20 justify-center" >
        {
          linkArr.map(element => (
            <Card icon={element.icon} link={element.link} />
          ))
        }
      </motion.div>
    </>
  )
}
