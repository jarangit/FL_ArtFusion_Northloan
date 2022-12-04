import React from 'react'

const Section4 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
      <div className='pl-6 col-span-1'>
        <div className='flex flex-col gap-10'>
          <div className='text-5xl text-blue font-bold'>How It Works</div>
          <div>Spoiler alert: it works perfectly</div>
          <div className='flex flex-col gap-6'>
            {/* items */}
            <div className='flex  gap-6'>
              <div className=' h-20 w-20 flex justify-center items-center text-3xl rounded-md bg-gray-light text-blue'>1</div>
              <div className='flex w-2/3 flex-col gap-2'>
                <div className='text-blue text-xl font-bold'>Submit A Request</div>
                <div>All paperwork is gone! The whole process is completely online. Just fill in a few details about yourself and hit “Get Started”!</div>
              </div>
            </div>
            <div className='flex  gap-6'>
              <div className=' h-20 w-20 flex justify-center items-center text-3xl rounded-md bg-gray-light text-blue'>2</div>
              <div className='flex w-2/3 flex-col gap-2'>
                <div className='text-blue text-xl font-bold'>Check The Offers</div>
                <div>
                If the offer suits your needs and desires, and you agree with all the terms — simply e-sign the deal and get ready to enjoy the money!
                </div>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className=' h-20 w-20 flex justify-center items-center text-3xl rounded-md bg-gray-light text-blue'>3</div>
              <div className='flex w-2/3 flex-col gap-2'>
                <div className='text-blue text-xl font-bold'>Receive Your Money</div>
                <div>
                Once you submit your request, get your offer, and e-sign it, you’ll be able to get the funds to your bank account in no time!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' relative h-[680px] overflow-hidden col-span-2'>
        <div className='relative rotate-[10deg] w-[1900px] -right-8 overflow-hidden'>
          <div className='bg-[url("/public/img/image2.png")] bg-cover absolute w-[1000px] h-[800px] z-10 left-[0] myFlip' />
          <div className='bg_blue h-[1090px] w-[100%] absolute]' />
          <div className='bg-[#304ffe]  h-[590px] w-[100%] absolute top-[500px] right-20' />
        </div>
      </div>
    </div>
  )
}

export default Section4