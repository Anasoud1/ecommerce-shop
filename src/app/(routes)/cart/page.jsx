'use client'
import CartTotal from '@/components/CartTotal'
import Title from '@/components/Title'
import { Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Cart = () => {

  const router = useRouter()

  return (
    <div className='pt-10'>
      <Title text1={'YOUR'} text2={'CART'} />

      <div className='pt-10'>
        <div className='grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 border-t border-b py-4 items-center'>
          <div className='flex gap-6  '>
            <Image src={'/jacket2.PNG'} width={50} height={50} className='w-1/4 md:max-w-[100px]' alt="" />
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs md:text-lg pt-2 text-gray-500 font-bold'>Men Jackets</p>
              <div className='flex gap-6 items-center'>
                <p className='font-medium text-gray-500'>MAD 200</p>
                <span className='border bg-gray-50 py-1 px-3'>M</span>
              </div>
            </div>
          </div>
          <input type="number" placeholder='1' className='border w-[40px] md:w-[80px] h-[30px] pl-2' />
          <Trash2Icon size={20} className='cursor-pointer' />
        </div>

        <div className='grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 border-t border-b py-4 items-center'>
          <div className='flex gap-6  '>
            <Image src={'/jacket2.PNG'} width={50} height={50} className='w-1/4 md:max-w-[100px]' alt="" />
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs md:text-lg pt-2 text-gray-500 font-bold'>Men Jackets</p>
              <div className='flex gap-6 items-center'>
                <p className='font-medium text-gray-500'>MAD 200</p>
                <span className='border bg-gray-50 py-1 px-3'>M</span>
              </div>
            </div>
          </div>
          <input type="number" placeholder='1' className='border w-[40px] md:w-[80px] h-[30px] pl-2' />
          <Trash2Icon size={20} className='cursor-pointer' />
        </div>
      </div>

      {/* ------- Cart Total ------- */}
      <div className='pt-16 flex justify-end'>
        <div className='w-full sm:max-w-[450px]'>
          <CartTotal />
          <div className='flex justify-end pt-6'>
            <button onClick={() => router.push('/place-order')} className='py-3 px-8 bg-black text-white text-sm'>PROCEED TO CHECKOUT</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart