'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import CartTotal from '@/components/CartTotal'
import Title from '@/components/Title'
import { Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const Cart = () => {

  const { cartList, currency } = useContext(ShopContext)

  const router = useRouter()

  // console.log(cartList)

  return (
    <div className='pt-10'>
      <Title text1={'YOUR'} text2={'CART'} />

      <div className='pt-10'>
        {cartList.map((item, index) => (
          <div key={index} className='grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 border-t border-b py-4 items-center'>

            <div className='flex gap-6  '>
              <div className='relative w-[100px] min-h-[100px]'>
                <Image src={item.image} fill className='w-1/4 md:max-w-[100px] object-cover' sizes='50vw' alt={item.name} />

              </div>
              <div className='flex flex-col gap-y-2'>
                <p className='text-xs md:text-lg pt-2 text-gray-500 font-bold'>{item.name}</p>
                <div className='flex gap-6 items-center'>
                  <p className='font-medium text-gray-500'>{currency} {item.price}</p>
                  <span className='border bg-gray-50 py-1 px-3'>{item.size}</span>
                </div>
              </div>
            </div>
            <input type="number" defaultValue={item.quantity} value={item.quantity} className='border w-[40px] md:w-[80px] h-[30px] pl-2' />
            <Trash2Icon size={20} className='cursor-pointer' />
          </div>
        ))}



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