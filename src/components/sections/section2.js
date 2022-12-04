import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const Section2 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  !py-24 items-center'>
      <div className=' overflow-hidden h-[760px]'>
        <div className='relative rotate-[8deg] w-full h-[2000px] -left-32 -top-16  overflow-hidden'>
          <div className='bg-[url("/public/img/image1.png")] bg-cover bg-no-repeat w-[1200px] h-[770px] top-24 myFlip absolute z-10' />
          <div className='absolute w-full h-full  bg_blue' />
        </div>
      </div>
      <div className='flex flex-col gap-6 px-6'>
        <div className='text-4xl text-blue font-bold'>Fast. Reliable. Transparent.</div>
        <div className='leading-8'>We offer free and straightforward services without any hidden fees or charges on our part. And as we care about your comfort and safety, we enable you to submit a request without having to worry about any obligations or threats to your data security.</div>
        <div className='flex gap-3 flex-wrap'>
          <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
            <div>
              <AiOutlineCheck size={20} />
            </div>
            <div>
              Quick Response
            </div>
          </div>
          <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
            <div>
              <AiOutlineCheck size={20} />
            </div>
            <div>
              Quick Response
            </div>
          </div>
          <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
            <div>
              <AiOutlineCheck size={20} />
            </div>
            <div>
              Quick Response
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2