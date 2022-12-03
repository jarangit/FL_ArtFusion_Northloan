import React from 'react'

const Banner = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
        <div >
          <div className='flex flex-col gap-10  items-center'>
            <div className='flex gap-3 items-center'>
              <img src="/img/icons/logo.svg" alt="" />
              <div className='text-3xl font-bold text-[#00052ca8]'>northloan-offer</div>
            </div>
            <div className='text-5xl font-bold max-w-[60%] text-blue'>
              Get Your Personal Loan Up To $5000
            </div>
            <div>
              form
            </div>
            <div>
              <div className='flex gap-3'>
                <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
                  <div>
                    <img src="/img/icons/data.svg" alt="" />
                  </div>
                  <div className='leading-4'>
                    <div className='font-bold'>Data</div>
                    <div>protected</div>
                  </div>
                </div>
                <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
                  <div>
                    <img src="/img/icons/lock.svg" alt="" />
                  </div>
                  <div className='leading-4'>
                    <div className='font-bold'>2048</div>
                    <div>bit secured</div>
                  </div>
                </div>
                <div className='flex gap-2 items-center bg-gray-light text-blue py-2 px-4 rounded-sm'>
                  <div>
                    <img src="/img/icons/protect.svg" alt="" />
                  </div>
                  <div className='leading-4'>
                    <div className='font-bold'>SSL</div>
                    <div>security</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className=' relative h-[680px] overflow-hidden'>
          <div className='myBanner z-10' />
          <div className='relative border rotate-[10deg] w-[1500px] -right-8 overflow-hidden'>
          <div className='bg_blue h-[1090px] w-[100%] absolute]' />
          <div className='bg-[#304ffe]  h-[590px] w-[100%] absolute top-[500px] right-20' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner