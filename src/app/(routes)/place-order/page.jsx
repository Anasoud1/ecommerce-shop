'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import CartTotal from '@/components/CartTotal'
import Title from '@/components/Title'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const PlaceOrder = () => {

    const { currency, totalAmount, delivery_fee, placeOrder, cartList, placeOrderStripe } = useContext(ShopContext)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')

    const router = useRouter()

    const submitHandler = (e) => {
        e.preventDefault()
        try {
            const address = {
                firstName,
                lastName,
                email,
                street,
                city,
                country,
                state,
                zipcode,
                phone
            }

            switch (paymentMethod) {
                case 'cod':
                    placeOrder(cartList, address, totalAmount)

                    break;

                case 'stripe':
                    placeOrderStripe(cartList, address, totalAmount)
                    break

                default:
                    break
            }


        } catch (error) {

        }
    }

    return (
        <div className='pt-10'>



            <form onSubmit={submitHandler} className='flex flex-col lg:flex-row gap-4 md:items-start justify-between'>

                <div className='w-full mx-auto lg:mx-0 md:max-w-[480px] flex flex-col gap-y-4'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                    <div className='grid grid-cols-2 gap-4 pt-4'>
                        <input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First name' className='border  px-4 py-1.5' />
                        <input type="text" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last name' className='border px-4 py-1.5' />
                    </div>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='border px-4 py-1.5' />
                    <input type="text" name='street' value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Street' className='border px-4 py-1.5' />
                    <div className='grid grid-cols-2 gap-4'>
                        <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' className='border px-4 py-1.5' />
                        <input type="text" name='state' value={state} onChange={(e) => setState(e.target.value)} placeholder='State' className='border px-4 py-1.5' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <input type="text" name='country' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' className='border px-4 py-1.5' />
                        <input type="number" name='zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder='zipcode' className='border px-4 py-1.5' />
                    </div>

                    <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' className='border px-4 py-1.5' />

                </div>
                <div className='pt-16 mx-auto lg:mx-0 xl:pt-0 w-full md:max-w-[480px]'>
                    {/* <CartTotal /> */}
                    <CartTotal totalAmount={totalAmount} currency={currency} delivery_fee={delivery_fee} />

                    <div className='text-xs pt-10'>
                        <Title text1={'PAYMENT'} text2={'METHOD'} size={'text-base'} />

                        <div onClick={() => setPaymentMethod('stripe')} className='flex items-center gap-6 border px-6 py-3 mt-6 cursor-pointer'>
                            <hr className={`${paymentMethod === 'stripe' ? 'bg-green-500' : ''} border w-[12px] h-[12px]  rounded-full`} />
                            <p className='text-sm flex items-center gap-2 text-blue-500 font-bold'>Stripe</p>
                        </div>

                        <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-6 border px-6 py-3 mt-6 cursor-pointer'>
                            <hr className={`${paymentMethod === 'cod' ? 'bg-green-500' : ''} border w-[12px] h-[12px]  rounded-full`} />
                            <p className='text-sm flex items-center gap-2 font-medium'>CASH ON DELIVERY</p>
                        </div>
                        <div className='pt-4 flex justify-end'>
                            <button className='py-3 px-16 bg-black text-white text-sm'>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default PlaceOrder