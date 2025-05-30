import type { IconType } from "react-icons"

interface CardProps {
  icon: IconType,
  link: string,
}

const Card = (props: CardProps) => {
  return (
    <>
      <a href={props.link} target='_blank' rel="noopener noreferrer" >
        <div className="flex justify-center items-center">
          <div className="icons h-2/3 lg:w-w md:text-[3.3rem] text-[3rem] m-2 rounded-[0.5rem] bg-[#1d2021] duration-500 hover:scale-105">
            <props.icon className="m-[3rem] lg:m-[7rem]" />
          </div>
        </div>
      </a>
    </>
  )
}

export default Card
