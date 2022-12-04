import React from 'react'

const Section3 = () => {
  return (
    <div className='myContainer !py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* card */}
        <div className='p-3 myShadows  rounded-lg px-6 py-16 text-center flex flex-col gap-6 items-center'>
          <div className='w-[85px]'>
            <img src="/img/icons/clock.svg" alt="" />
          </div>
          <div className='text-xl text-blue font-bold'>Fast</div>
          <div className='text-blue-dark'>The online form usually takes less than 10 minutes to complete. So before you even finish your cup of tea, you’ll already have your request submitted.</div>
        </div>
        <div className='p-3 myShadows  rounded-lg px-6 py-16 text-center flex flex-col gap-6 items-center'>
          <div className='w-[85px]'>
            <img src="/img/icons/clock.svg" alt="" />
          </div>
          <div className='text-xl text-blue font-bold'>Simple</div>
          <div className='text-blue-dark'>
            Our advanced automated system lets you request up to $5,000 by filling out a simple, clear-cut form directly from your computer, tablet, or mobile phone.
          </div>
        </div>
        <div className='p-3 myShadows  rounded-lg px-6 py-16 text-center flex flex-col gap-6 items-center'>
          <div className='w-[85px]'>
            <img src="/img/icons/clock.svg" alt="" />
          </div>
          <div className='text-xl text-blue font-bold'>Fast</div>
          <div className='text-blue-dark'>
            We don’t focus solely on your credit score. We focus on helping you and providing you with loan offers! So don’t let your credit determine your future and stop you from submitting a request with us!
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section3