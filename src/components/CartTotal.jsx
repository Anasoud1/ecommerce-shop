import React from 'react'
import Title from './Title'

const CartTotal = () => {
  return (
    <div>
        <Title text1={'CART'} text2={'TOTAL'} />
          <div className='pt-6 text-sm'>
            <div className='flex justify-between gap-6 border-b pb-2'>
              <p>SubTotal</p>
              <p>MAD 200.00</p>
            </div>
            <div className='flex justify-between gap-6 border-b py-2'>
              <p>Shipping Fee</p>
              <p>MAD 10.00</p>
            </div>
            <div className='flex justify-between gap-6 font-bold py-2'>
              <p>Total</p>
              <p>MAD 210.00</p>
            </div>
          </div>
    </div>
  )
}

export default CartTotal