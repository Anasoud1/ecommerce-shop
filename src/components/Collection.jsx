'use client'
import Image from 'next/image'

const Collection = ({ products, currency }) => {


  return (
    <div className='pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6'>
      {products.map((item, index) => (
        <div key={index} className='flex flex-col gap-y-1'>
          <div className='relative w-full min-h-[200px]'>
            <Image src={item.image[0]} fill className='object-cover' alt={item.name} sizes='100vw' />

          </div>
          <p className='text-[14px] pt-2 text-gray-500'>{item.name}</p>
          <p className='font-semibold'>{currency} {item.price}</p>
        </div>
      ))}



    </div>
  )
}

export default Collection