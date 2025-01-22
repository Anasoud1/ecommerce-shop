import React from 'react'
import Title from './Title'
import Collection from './Collection'

const BestSeller = () => {
  return (
    <div className='pt-16'>
      <div className='flex justify-center'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
      </div>
        
      <p className='text-center text-xs md:text-base pt-6 w-[75%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt voluptatem quaerat, dolor perferendis dignissimos.</p>
      <Collection />
    </div>
  )
}

export default BestSeller