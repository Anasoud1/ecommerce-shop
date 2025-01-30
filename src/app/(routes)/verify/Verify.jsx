'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'


const Verify = () => {
  const { verifyOrderStripe, token } = useContext(ShopContext)
  const searchParams = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')


  useEffect(() => {
    if (token) {
      verifyOrderStripe(success, orderId)
    }
  }, [token])


  return (

    <div className="flex justify-center mt-20">
      <div className="flex flex-col items-center gap-6">
        <div className='relative w-[150px] min-h-[150px]'>
          <Image src='/verified.gif' alt='check' fill sizes='50vw' className='object-contain' />

        </div>
        <h1 className="text-center text-2xl sm:text-4xl font-extrabold mb-2 ">Payment Successfull</h1>
        {/* <Link href='/' className='p-2 text-white font-bold rounded-md bg-green-600'>Go to Home</Link> */}

      </div>
    </div>


  )
}

export default Verify