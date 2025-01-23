'use client'
import React, { useContext } from 'react'
import Title from './Title'
import Collection from './Collection'
import { ShopContext } from '@/app/(context)/ShopContext'

const BestSeller = () => {

    const {products, currency} = useContext(ShopContext)

    const bestSeller = products.filter(item => item.bestSeller).slice(0,5)
  
  return (
    <div className='pt-16'>
      <div className='flex justify-center'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
      </div>
        
      <p className='text-center text-xs md:text-base pt-6 w-[75%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt voluptatem quaerat, dolor perferendis dignissimos.</p>
      <Collection products={bestSeller} currency={currency}/>
    </div>
  )
}

export default BestSeller