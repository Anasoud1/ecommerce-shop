import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const Product = ({ params }) => {
    return (
        <div className='pt-10'>

            <div className='flex flex-col sm:flex-row sm:gap-x-10 justify-between'>

                {/* ------- Left side ------- */}
                <div className='flex-1 flex flex-col-reverse sm:flex-row gap-x-4'>

                    <div className='flex pt-4 sm:pt-0 md:pt-0 gap-x-6 sm:flex-col  sm:justify-normal sm:w-[18.7%] w-full'>
                        <Image className='min-w-[20%] sm:w-full  sm:mb-3 '  src={'/jacket2.PNG'} width={100} height={100} alt='product' />
                        <Image className='min-w-[20%] sm:w-full  sm:mb-3' src={'/jacket2.PNG'} width={100} height={100} alt='product' />
                        <Image className='min-w-[20%] sm:w-full  sm:mb-3' src={'/jacket2.PNG'} width={100} height={100} alt='product' />
                        <Image className='min-w-[20%] sm:w-full  sm:mb-3' src={'/jacket2.PNG'} width={100} height={100} alt='product' />

                    </div>
                    <div className='relative w-full sm:w-[80%] min-h-[300px] '>
                        <Image className='w-full h-auto object-contain object-top' src={'/jacket2.PNG'} fill alt='product' />
                    </div>
                </div>

                {/* ------- Right side ------- */}

                <div className='flex-1 flex flex-col gap-6 pt-10 sm:pt-0'>
                    <h3 className='font-medium text-xl'>Men Business Jackets</h3>
                    <div className='flex gap-1'>
                        <Image src={'/star.png'} width={20} height={10} alt='star'/>
                        <Image src={'/star.png'} width={20} height={10} alt='star'/>
                        <Image src={'/star.png'} width={20} height={10} alt='star'/>
                        <Image src={'/star.png'} width={20} height={10} alt='star'/>
                        <Image src={'/empty_star.png'} width={20} height={10}  alt='star'/>
                        <p className='text-sm'>(122)</p>
                    </div>
                    <p className='font-semibold text-3xl'>MAD 205.56</p>
                    <p className='text-gray-500'>LUKER CMSS Spring Summer Men Business Jackets solid Mens Thin Jackets Coats Casual Men's Outerwear Male Coat Bomber Jacket</p>
                    <div>
                        <p className='pb-2'>Select Size</p>
                        <div className='flex gap-3'>
                            <p className='bg-gray-50 border px-4 py-2'>S</p>
                            <p className='bg-gray-50 border px-4 py-2'>M</p>
                            <p className='bg-gray-50 border px-4 py-2'>L</p>
                            <p className='bg-gray-50 border px-4 py-2'>XL</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-black text-white px-8 py-3 text-sm'>ADD TO CART</button>
                    </div>

                    <hr className='w-full border' />
                    <p className='text-gray-500 text-sm'>100% Original product. <br /> Cash on delivery available on this product. <br />Easy return and exchange policy within 7 days.</p>
                </div>
            </div>


            {/* ------- Description ------- */}

            <div className='pt-20'>
                <div className='flex'>
                    <button className='border px-6 py-3  text-sm font-bold'>Description</button>
                    <button className='border px-6 py-3  text-sm'>Reviews (122)</button>
                </div>
                <div className='border px-6 py-4 flex flex-col gap-4 text-sm text-gray-400'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia, debitis ipsum maiores repellat, totam rerum nisi, iure velit optio hic atque dolor sunt. Explicabo illum dolores quisquam. Quod, eveniet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi provident perferendis quaerat earum ut vel impedit aperiam delectus ab nulla!</p>
                </div>
            </div>

            {/* ------- Related Product ------- */}
            <div className='pt-20'>
                <div className='flex justify-center'>
                    <Title text1={'RELATED'} text2={'PRODUCTS'} />
                </div>
                <div className='pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6'>
                    <div className='flex flex-col gap-y-1'>
                        <Image src={'/jacket2.PNG'} width={100} height={100} className='w-full' alt="" />
                        <p className='text-[14px] pt-2 text-gray-500'>Men Jackets</p>
                        <p className='font-semibold'>MAD 200</p>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <Image src={'/jacket2.PNG'} width={100} height={100} className='w-full' alt="" />
                        <p className='text-[14px] pt-2 text-gray-500'>Men Jackets</p>
                        <p className='font-semibold'>MAD 200</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product