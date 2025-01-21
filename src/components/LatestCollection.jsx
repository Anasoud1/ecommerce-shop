import React from 'react'
import Title from './Title'
import Collection from './Collection'

const LatestCollection = () => {
  return (
    <div>
      <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
      <p className='text-center text-xs pt-6 w-[75%] mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nemo tempora aliquid in, natus repudiandae!</p>
      <Collection />
    </div>
  )
}

export default LatestCollection