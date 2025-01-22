'use client'
import { AlignRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const path = usePathname()

    return (
        <div className={`flex items-center justify-between ${path == '/'? '': 'border-b pb-6'}`}>
            <Link href={'/'}><h1 className='font-bold text-xl'>eShop</h1></Link>
            
            <ul className='hidden sm:flex items-center gap-6 text-sm font-medium'>
                <Link href={'/'} className='flex flex-col items-center'>
                    <li >HOME</li>
                    <hr className={`${path === '/' ? '' : 'hidden'} w-2/4 border-none h-[1px] bg-gray-700`} />
                </Link>
                <Link href={'/collection'} className='flex flex-col items-center'>
                    <li >COLLECTION</li>
                    <hr className={`${path === '/collection' ? '' : 'hidden'} w-2/4 border-none h-[1px] bg-gray-700`} />
                </Link>
                <Link href={'/about'} className='flex flex-col items-center'>
                    <li >ABOUT</li>
                    <hr className={`${path === '/about' ? '' : 'hidden'} w-2/4 border-none h-[1px] bg-gray-700`} />
                </Link>
                <Link href={'/contact'} className='flex flex-col items-center'>
                    <li >CONTACT</li>
                    <hr className={`${path === '/contact' ? '' : 'hidden'} w-2/4 border-none h-[1px] bg-gray-700`} />
                </Link>

            </ul>
            <div className='flex items-center gap-4'>
                <Image src={'/search.png'} width={20} height={20} alt='search' />
                <Link href={'/cart'} className='cursor-pointer relative'>
                    <Image src={'/cart.png'} width={20} height={20} alt='cart' />
                    <p className='absolute bg-black text-white bottom-[-5px] right-[-5px] rounded-full w-4 text-center aspect-square leading-4 text-[8px]'>10</p>
                </Link>


                <div className='group relative cursor-pointer'>
                    <Image src={'/user.png'} width={20} height={20} alt='user' />
                    <div className='group-hover:block hidden dropdown-menu absolute right-0 '>
                        <ul className='border bg-gray-100 mt-4 w-36 px-4 py-2 flex flex-col gap-y-2'>
                            <li>Profile</li>
                            <Link href='/myorders'><li>My orders</li></Link>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>
                <AlignRight onClick={() => setVisible(true)} className='block sm:hidden cursor-pointer' />



            </div>

            {/* ------- SideBar ------- */}
            <ul className={`${visible ? 'w-full': 'w-0'} absolute top-0 right-0 bottom-0 overflow-hidden bg-white flex flex-col`}>
                <li  className='flex py-3 gap-x-3 pl-4'> <ChevronLeft onClick={() => setVisible(false)} className='cursor-pointer' size={26}/> Back</li>
                <Link onClick={() => setVisible(false)}  href={'/'} className={`${path === '/' ? 'active' : ''} border w-full py-2 pl-8`}>
                    <li >HOME</li>
                </Link>
                <Link onClick={() => setVisible(false)}  href={'/collection'} className={`${path === '/collection' ? 'active' : ''} border w-full py-2 pl-8`}>
                    <li >COLLECTION</li>
                </Link>
                <Link onClick={() => setVisible(false)}  href={'/about'} className={`${path === '/about' ? 'active' : ''} border w-full py-2 pl-8`}>
                    <li >ABOUT</li>
                </Link>
                <Link onClick={() => setVisible(false)}  href={'/contact'} className={`${path === '/contact' ? 'active' : ''} border w-full py-2 pl-8`}>
                    <li >CONTACT</li>
                </Link>
            </ul>

        </div>
    )
}

export default Navbar