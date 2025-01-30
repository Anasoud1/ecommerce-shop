import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Contact US",
};

const Contact = () => {
  return (
    <div className='pt-10'>
      <div className='flex justify-center'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row gap-20 pt-16 lg:w-[80%] lg:mx-auto justify-center'>
        <Image className='w-full flex-1' src={'/contact.jpg'} width={300} height={300} alt='contact'/>
        <div className='flex-1'>
          <h3 className='py-6 text-lg font-bold'>Our Store</h3>
          <p>193 Angle Boulevard de la Résistance <br/>Marrakech, Morocco</p>

          <p className='pt-8'>Tel: (+212) 655-511-414</p>
          <p>Email: admin@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact