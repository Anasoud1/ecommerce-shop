import React from 'react'

const Footer = () => {
  return (
    <div className='pt-32'>
      <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] text-center md:text-start md:gap-x-14 gap-y-16'>
        <div>
          <h1 className='text-xl font-semibold pb-4'>eShop</h1>
          <p className='text-[14px] text-gray-600 w-full md:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam earum debitis vitae id molestiae dolorum ratione, esse molestias aliquid. Error aliquam in eligendi ab aut ullam, blanditiis exercitationem nisi minima.</p>

        </div>

        <div>
          <h1 className='text-xl font-semibold pb-4'>COMPANY</h1>
          <p className='text-[14px] text-gray-600'>Home</p>
          <p className='text-[14px] text-gray-600'>About us</p>
          <p className='text-[14px] text-gray-600'>Delivery</p>
          <p className='text-[14px] text-gray-600'>Privacy policy</p>
        </div>

        <div>
          <h1 className='text-xl font-semibold pb-4'>GET IN TOUCH</h1>
          <p className='text-[14px] text-gray-600'>+212 456 156 612</p>
          <p className='text-[14px] text-gray-600'>contact@demo.com</p>
          
        </div>
      </div>
      
      <hr className='border w-full my-6' />
      <p className='text-center text-gray-600 text-sm'>@Copyright 2025 - All Right Reserved.</p>
    </div>
  )
}

export default Footer