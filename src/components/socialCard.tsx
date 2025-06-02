import type { IconType } from "react-icons"

interface CardProps {
  icon: IconType,
  link: string,
}

const Card = (props: CardProps) => {
  return (
    <>
      <a href={props.link} target='_blank' rel="noopener noreferrer" >
        <div className="flex md:text-[3.3rem] text-[3rem] m-2 md:m-[1.7rem] rounded-[0.9rem] bg-[#1d2021] duration-500 hover:scale-105">
          <props.icon className="m-[2rem] lg:m-[5rem]" />
        </div>
      </a>
    </>
  )
}

export default Card
