'use client'
import React, { useContext } from 'react'
import Title from './Title'
import Collection from './Collection'
import { ShopContext } from '@/app/(context)/ShopContext'

const LatestCollection = () => {

  const {products, currency} = useContext(ShopContext)

  return (
    <div className='pt-16'>
      <div className='flex justify-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
      </div>
      
      <p className='text-center text-xs md:text-base  pt-6 w-[75%] mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nemo tempora aliquid in, natus repudiandae!</p>
      <Collection products={products.slice(0,10)} currency={currency}/>
    </div>
  )
}

export default LatestCollection