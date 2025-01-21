'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const path = usePathname()
    console.log('path: ', path)

    return (
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xl'>Logo</h1>
            <ul className='flex items-center gap-6 text-sm font-medium'>
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
                <Link href={'/cart'} className='cursor-pointer'>
                    <Image src={'/cart.png'} width={20} height={20} alt='cart' />
                </Link>

                <div className='group relative cursor-pointer'>
                    <Image src={'/user.png'} width={20} height={20} alt='user' />
                    <div className='group-hover:block hidden dropdown-menu absolute right-0 '>
                        <ul className='border bg-gray-100 mt-4 w-36 px-4 py-2 flex flex-col gap-y-2'>
                            <li>Profile</li>
                            <li>My orders</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar