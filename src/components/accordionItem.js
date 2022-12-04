import React, { useState, useEffect } from 'react'
import { IoIosArrowDown, } from 'react-icons/io'
const AccordionItem = ({ title, content, id }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (id <= 3) {
      setShow(true)
    }
  }, [id])

  return (
    <div className='px-6 rounded-md '>
      <div className='flex justify-between  p-4 rounded-lg cursor-pointer bg-gray-light '
        onClick={() => setShow(!show)}
      >
        <div className=' text-blue '>
          {title}
        </div>
        <div className={`flex justify-center items-center transition-all text-blue ${show ? "rotate-180" : ""}`}>
          <IoIosArrowDown size={20} />
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 bg-white  text-blue-dark ${show ? "max-h-[500px] p-3" : "max-h-0"}`}>
        {content === "table" ? (
          <table className="table-auto w-[400px] text-center border-border border">
            <thead>
              <tr>
                <th className='border border-border' >Minimum</th>
                <th className='border border-border' >Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-border'>65 days</td>
                <td className='border border-border'>84 months</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className='text-sm'>
            {content}
          </div>
        )}
      </div>
    </div>
  )
}

export default AccordionItem