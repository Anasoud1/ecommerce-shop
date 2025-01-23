'use client'
import Title from '@/components/Title'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Collection = () => {

  const [filterVisible, setFilterVisible] = useState(false)

  




  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 pt-10'>

      {/* ------- Filter ------- */}
      <div className=''>
        <h3 className='font-semibold text-xl md:text-2xl flex items-center gap-x-2'>Filters <ChevronDown onClick={() => setFilterVisible(!filterVisible)} className='cursor-pointer' size={20}/> </h3>

        <div className={`${filterVisible? 'block': 'hidden'} md:block`}>
          <div className='border p-6  flex flex-col gap-y-2 text-sm text-gray-600 mt-7'>
            <h5 className='font-semibold '>Categories</h5>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Men</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Women</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Kids</p>
            </div>
          </div>

          <div className='border p-6  flex flex-col gap-y-2 text-sm text-gray-600 mt-6'>
            <h5 className='font-semibold '>Type</h5>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Topwear</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Bottomwear</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" />
              <p>Winterwear</p>
            </div>
          </div>
        </div>

      </div>

      {/* ------- Right Side ------- */}
      <div>
        <div className='flex justify-between'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select name="" className='border px-4 py-2 text-sm'>
            <option value="">Sort by: Relevant</option>
            <option value="">Sort by: Low to High</option>
            <option value="">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 pt-6'>
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

export default Collection