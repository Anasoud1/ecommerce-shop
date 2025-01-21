import Image from 'next/image'
import React from 'react'

const OurPolicy = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-[160px] pb-20 text-sm md:text-base'>
        <div className='flex flex-col gap-y-2 items-center'>
            <Image src={'/exchange.png'} width={40} height={40} alt='exchange'/>
            <h5 className='font-semibold'>Easy Exchange Policy</h5>
            <p className='text-gray-500'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
            <Image src={'/high-quality.png'} width={40} height={40} alt='exchange'/>
            <h5 className='font-semibold'>7 Days Return Policy</h5>
            <p className='text-gray-500'>We provide 7 daysfree return policy

</p>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
            <Image src={'/support.png'} width={40} height={40} alt='exchange'/>
            <h5 className='font-semibold'>Best Customer Support</h5>
            <p className='text-gray-500'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy