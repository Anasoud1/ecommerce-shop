'use client'
import CartTotal from '@/components/CartTotal'
import Title from '@/components/Title'
import React, { useState } from 'react'

const PlaceOrder = () => {

    const [paymentMethod, setPaymentMethod] = useState('cod')

  return (
    <div className='pt-10'>
        
        

        <div className='flex flex-col lg:flex-row gap-4 md:items-start justify-between'>
            
            <form className='w-full mx-auto lg:mx-0 md:max-w-[480px] flex flex-col gap-y-4'>
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
                <div className='grid grid-cols-2 gap-4 pt-4'>
                    <input type="text" placeholder='First name' className='border  px-4 py-1.5'/>
                    <input type="text" placeholder='Last name' className='border px-4 py-1.5'/>
                </div>
                <input type="email" placeholder='Email Address' className='border px-4 py-1.5'/>
                <input type="text" placeholder='Street' className='border px-4 py-1.5'/>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder='City' className='border px-4 py-1.5'/>
                    <input type="text" placeholder='State' className='border px-4 py-1.5'/>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder='Country' className='border px-4 py-1.5'/>
                    <input type="number" placeholder='zipcode' className='border px-4 py-1.5'/>
                </div>

                <input type="text" placeholder='phone' className='border px-4 py-1.5'/>

            </form>             
            <div className='pt-16 mx-auto lg:mx-0 xl:pt-0 w-full md:max-w-[480px]'>
                <CartTotal />
                <div className='text-xs pt-10'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} size={'text-base'}/>
                    
                    <div onClick={() => setPaymentMethod('stripe')} className='flex items-center gap-6 border px-6 py-3 mt-6 cursor-pointer'>
                        <hr className={`${paymentMethod === 'stripe'? 'bg-green-500': ''} border w-[12px] h-[12px]  rounded-full`}/>
                        <p className='text-sm flex items-center gap-2 text-blue-500 font-bold'>Stripe</p>
                    </div>

                    <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-6 border px-6 py-3 mt-6 cursor-pointer'>
                        <hr className={`${paymentMethod === 'cod'? 'bg-green-500': ''} border w-[12px] h-[12px]  rounded-full`}/>
                        <p className='text-sm flex items-center gap-2 font-medium'>CASH ON DELIVERY</p>
                    </div>
                    <div className='pt-4 flex justify-end'>
                        <button className='py-3 px-16 bg-black text-white text-sm'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PlaceOrder