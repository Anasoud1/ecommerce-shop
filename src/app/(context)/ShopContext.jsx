'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "MAD"
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [products, setProducts] = useState([])
    const [token , setToken] = useState(localStorage.getItem('token'))


    



    const getProductsData = async () => {
        try {
            const res = await axios.get(backendUrl + '/api/product/list')

            if (res.data.success){
                // console.log(res.data)
                setProducts(res.data.products)
            } else {
                toast.error(res.data.message)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    const value = {
        products, currency,
        token, setToken, backendUrl
    }


  return (products.length > 0 ?
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider> : null
  )
}

export default ShopContextProvider