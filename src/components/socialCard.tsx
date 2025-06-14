import { motion } from "motion/react"
import type { IconType } from "react-icons"
import { memo } from "react"

interface CardProps {
  icon: IconType | string,
  link: string,
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
};

const Card = memo((props: CardProps) => {
  return (
    <>
      <a href={props.link} target='_blank' rel="noopener noreferrer" >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex md:text-[4.5rem] text-[3rem] m-2 md:m-[1.0rem] rounded-[0.9rem] bg-[#1d2021]"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <props.icon className="m-[2rem] lg:m-[3rem]" />
        </motion.div>
      </a>
    </>
  )
});

export default Card
