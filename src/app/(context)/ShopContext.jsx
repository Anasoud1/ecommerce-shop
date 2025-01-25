'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "MAD"
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [products, setProducts] = useState([])
    const [token, setToken] = useState(null)
    const [cartItems, setCartItems] = useState({})

    const [totalItems, setTotalItems] = useState(0)
    const [updateCartCount, setUpdateCartCount] = useState(false)


    const getProductsData = async () => {
        try {

            const res = await axios.get(backendUrl + '/api/product/list')

            if (res.data.success) {
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

    const getCartLength = (cartItems) => {
        let count = 0

        for (const itemId in cartItems) {
            for (const itemSizes in cartItems[itemId])
                if (cartItems[itemId][itemSizes] > 0) {
                    count += cartItems[itemId][itemSizes]

                }
        }

        return count
    }

    const getCartUser = async (token) => {
        try {

            const res = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })

            if (res.data.success) {
                setCartItems(res.data.cartData)
                setTotalItems(getCartLength(res.data.cartData))
                // console.log(res.data.cartData)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    const addToCart = async (itemId, size) => {
        try {

            const res = await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
            setUpdateCartCount(!updateCartCount)

            toast(res.data.message)


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }

    }, [token, updateCartCount])

    useEffect(() => {
        if (token) {
            getCartUser(localStorage.getItem('token'))

        } else {
            setTotalItems(0)
            setCartItems({})
        }
    }, [token, updateCartCount])




    const value = {
        products, currency,
        token, setToken, backendUrl,
        addToCart, totalItems, cartItems, getCartUser,
        updateCartCount
    }


    return (products.length > 0 ?
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider> :
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
    )
}

export default ShopContextProvider