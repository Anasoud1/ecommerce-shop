import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Abous Us",
};

const About = () => {
  return (
    <div className='pt-10 '>
      <div className='flex justify-center'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='pt-16 w-full xl:w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-y-16 xl:gap-x-32 lg:gap-x-20'>
        <Image src={'/about.jpg'} width={300} height={200} alt='about'/>
        <div className='flex flex-col gap-y-6'>
          <p className='text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, velit temporibus quibusdam at perspiciatis odio corporis fuga voluptas sapiente voluptates sunt earum incidunt ipsam, expedita distinctio fugit a totam quaerat veniam aliquam voluptate! Sint, enim modi? Dicta molestiae ad ea.</p>
          <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat praesentium excepturi consequuntur odit molestias nam ipsam, minima unde possimus quasi at esse aperiam asperiores veniam sunt aut cupiditate alias dolorum quo! Quae, quo explicabo? A unde laborum in illo sit.</p>
          <h5 className='font-semibold'>Our mission</h5>
          <p className='text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minima fugiat, amet doloribus animi tempore corporis dolore obcaecati ullam quod atque in id facere. Facere eveniet architecto consequatur voluptate blanditiis.</p>        
        </div>
      </div>

      <div className='pt-16'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='grid grid-cols-1 lg:grid-cols-3 pt-10 text-sm'>
          <div className='border px-10 py-8 md:p-16'>
            <h3 className='font-bold pb-6'>Quality Assurance:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil cum, beatae perspiciatis repellendus ipsa tenetur eum exercitationem fugiat consectetur?</p>
          </div>

          <div className='border px-10 py-8 md:p-16'>
            <h3 className='font-bold pb-6'>Convenience:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum illum est unde dolor neque.</p>
          </div>

          <div className='border px-10 py-8 md:p-16'>
            <h3 className='font-bold pb-6'>Exceptional Customer Service::</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo odio, blanditiis perferendis illo aperiam fugiat architecto numquam quas.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About