'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import Title from '@/components/Title'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'


const Myorders = () => {

    const { ordersItems, currency, getOrders } = useContext(ShopContext)
    const [trackOrder, setTrackOrder] = useState(false)


    useEffect(() => {
        getOrders()
    }, [trackOrder])

    useEffect(() => {
        document.title = "Orders";
    }, []);


    return (
        <>
            <Head>
                <title>{document.title}</title>
            </Head>
            <div className='pt-10'>
                <Title text1={'MY'} text2={'ORDERS'} />

                <div className='pt-10'>
                    {ordersItems.slice().reverse().map((item, index) => (

                        item.items.slice().reverse().map((el, idx) => (
                            <div key={idx} className='flex flex-col md:flex-row  justify-between items-center gap-4 border-t border-b py-4'>
                                <div className='flex gap-6 w-full md:w-1/2'>
                                    <Image src={el.image} width={100} height={100} className='w-[80px] object-contain md:max-w-[120px]' alt="" />
                                    <div className='flex flex-col gap-y-2'>
                                        <p className='text-sm md:text-lg pt-2 text-gray-500 font-bold'>{el.name}</p>
                                        <div className='flex gap-6 items-center'>
                                            <p className=' text-gray-500'>{currency} {el.price}</p>
                                            <p className=' text-gray-500'>Quanity: {el.quantity}</p>
                                            <p className=' text-gray-500'>Size: {el.size}</p>
                                        </div>
                                        <p className='text-gray-600 text-sm'>Date: <span className='text-gray-400'>{item.date}</span></p>
                                        <p className='text-gray-600 text-sm'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between w-full md:w-1/2'>
                                    <div className='text-sm flex items-center gap-2'>
                                        <hr className='border w-[10px] h-[10px] bg-green-500 rounded-full' />
                                        <p>{item.status}</p>
                                    </div>
                                    <p onClick={() => setTrackOrder(!trackOrder)} className='border text-sm px-4 py-2 text-center max-w-[120px] cursor-pointer'>Track Order</p>

                                </div>

                            </div>
                        ))

                    ))}


                </div>

            </div>
        </>

    )
}

export default Myorders