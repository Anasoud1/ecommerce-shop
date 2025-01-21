import React from 'react'
import Image from "next/image";
import hero_img from "../../public/hero_img.png"


const Hero = () => {
    return (
        <div className="border border-black flex flex-col items-center justify-center md:flex-row">
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
                <div className='flex flex-col gap-y-2'>
                    <div className="flex items-center gap-4 ">
                        <hr className="w-11 border-black border-[1px] text-black" />
                        <p className="text-base font-medium">OUR BEST SELLERS</p>
                    </div>
                    <h1 className="text-3xl prata lg:text-5xl">Latest Arrivals</h1>
                    <div className="flex items-center gap-4">
                        <p className="text-base font-medium">SHOP NOW</p>
                        <hr className="w-11 border-black border-[1px] text-black" />
                    </div>
                </div>

            </div>
            <Image src={hero_img} className='w-full sm:w-1/2' alt="hero" />
        </div>
    )
}

export default Hero