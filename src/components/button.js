import { BiRightArrowAlt } from 'react-icons/bi'
import React, { useEffect } from 'react'
const Button = ({ showBut }) => {
  useEffect(() => {

  }, [showBut])

  return (
    <div className={`w-full  fixed  text-center transition-all z-50 duration-500 ${showBut ? "bottom-5" : "-bottom-20"}`}>
      <a href="/form-loan">
        <button className=' h-[85px] w-[360px] bg-[#ffd740] rounded-md text-blue-dark'>
          <div className='flex  gap-3 justify-center items-center text-xl font-bold'>
            Get Started
            <BiRightArrowAlt size={20} />
          </div>
        </button>
      </a>
    </div>
  )
}

export default Button