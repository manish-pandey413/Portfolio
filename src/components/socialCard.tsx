import type { IconType } from "react-icons"
import { memo } from "react"

interface CardProps {
  icon: IconType,
  link: string,
}

const Card = memo((props: CardProps) => {
  return (
    <>
      <a href={props.link} target='_blank' rel="noopener noreferrer" >
        <div className="flex md:text-[4.5rem] text-[3rem] m-2 md:m-[1.0rem] rounded-[0.9rem] bg-[#1d2021] duration-300 hover:scale-115">
          <props.icon className="m-[2rem] lg:m-[3rem]" />
        </div>
      </a>
    </>
  )
});

export default Card
