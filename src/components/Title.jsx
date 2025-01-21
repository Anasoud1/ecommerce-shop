import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='pt-10 flex items-center justify-center gap-2 '>
        <h1 className='text-3xl text-gray-600'>{text1} <span className='font-bold'>{text2}</span> </h1>
        <hr className='w-11 border-[1.5px] border-black'/>
    </div>
  )
}

export default Title