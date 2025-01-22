import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const Myorders = () => {
    return (
        <div className='pt-10'>
            <Title text1={'MY'} text2={'ORDERS'} />

            <div className='pt-10'>
                <div className='flex flex-col md:flex-row  justify-between items-center gap-4 border-t border-b py-4'>
                    <div className='flex gap-6 w-full md:w-1/2'>
                        <Image src={'/jacket2.PNG'} width={100} height={100} className='w-[80px] object-contain md:max-w-[120px]' alt="" />
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm md:text-lg pt-2 text-gray-500 font-bold'>Men Jackets</p>
                            <div className='flex gap-6 items-center'>
                                <p className=' text-gray-500'>MAD 200</p>
                                <p className=' text-gray-500'>Quanity: 3</p>
                                <p className=' text-gray-500'>Size: S</p>
                            </div>
                            <p className='text-gray-600 text-sm'>Date: <span className='text-gray-400'>Wed Jan 15 2025</span></p>
                            <p className='text-gray-600 text-sm'>Payment: <span className='text-gray-400'>Stripe</span></p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full md:w-1/2'>
                        <p className='text-sm flex items-center gap-2'><hr className='border w-[10px] h-[10px] bg-green-500 rounded-full'/> Order Placed</p>
                        <p className='border text-sm px-4 py-2 text-center max-w-[120px]'>Track Order</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row  justify-between items-center gap-4 border-t border-b py-4'>
                    <div className='flex gap-6 w-full md:w-1/2'>
                        <Image src={'/jacket2.PNG'} width={100} height={100} className='w-[80px] object-contain md:max-w-[120px]' alt="" />
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm md:text-lg pt-2 text-gray-500 font-bold'>Men Jackets</p>
                            <div className='flex gap-6 items-center'>
                                <p className=' text-gray-500'>MAD 200</p>
                                <p className=' text-gray-500'>Quanity: 3</p>
                                <p className=' text-gray-500'>Size: S</p>
                            </div>
                            <p className='text-gray-600 text-sm'>Date: <span className='text-gray-400'>Wed Jan 15 2025</span></p>
                            <p className='text-gray-600 text-sm'>Payment: <span className='text-gray-400'>Stripe</span></p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full md:w-1/2'>
                        <p className='text-sm flex items-center gap-2'><hr className='border w-[10px] h-[10px] bg-green-500 rounded-full'/> Order Placed</p>
                        <p className='border text-sm px-4 py-2 text-center max-w-[120px]'>Track Order</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Myorders