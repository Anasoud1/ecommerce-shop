import React from 'react'

const Title = ({text1, text2, size='text-xl md:text-2xl '}) => {
  return (
    <div className='flex items-center gap-2 '>
        <h1 className={`${size} text-gray-600`}>{text1} <span className='font-semibold'>{text2}</span> </h1>
        <hr className='w-11 border-[1.5px] border-black'/>
    </div>
  )
}

export default Title