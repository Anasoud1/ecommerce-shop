'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import Title from '@/components/Title'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'


const Product = () => {

    // const productId = React.use(params).id
    const params = useParams()
    const productId = params.id

    const { products, currency, addToCart } = useContext(ShopContext)

    const [product, setProduct] = useState(false)
    const [image, setImage] = useState('')
    const [size, setSize] = useState()
    const [relatedProduct, setRelatedProduct] = useState([])
    const router = useRouter()

    const getProductData = async () => {

        products.map(item => {
            if (item._id === productId) {
                setProduct(item)
                setImage(item.image[0])
                return null
            }
        })

    }

    const handleAddToCart = () => {
        if (!size) {
            toast('Select size')
        } else {
            addToCart(productId, size)
        }
        // console.log('size: ', size)
    }

    useEffect(() => {
        getProductData()
    }, [productId, products])

    useEffect(() => {
        if (product) {
            let productCopy = products.slice()

            productCopy = productCopy.filter(item => item.category === product.category)
            productCopy = productCopy.filter(item => item.subCategory === product.subCategory)
            productCopy = productCopy.filter(item => item !== product)

            setRelatedProduct(productCopy.slice(0, 5))

        }

    }, [product])

    useEffect(() => {
        document.title = "Product";
    }, []);


    return (product && relatedProduct ?
        <>
            <Head>
                <title>{document.title}</title>
            </Head>
            <div className='pt-10'>

                <div className='flex flex-col sm:flex-row sm:gap-x-10 justify-between'>

                    {/* ------- Left side ------- */}
                    <div className='flex-1 flex flex-col-reverse sm:flex-row gap-x-4'>

                        <div className='flex pt-4 sm:pt-0 md:pt-0 gap-x-6 sm:flex-col  sm:justify-normal sm:w-[18.7%] w-full'>
                            {product.image.map((item, index) => (
                                <Image onClick={() => setImage(item)} key={index} className='min-w-[20%] sm:w-full  sm:mb-3 ' src={item} width={100} height={100} alt='product' />

                            ))}


                        </div>
                        <div className='relative w-full sm:w-[80%] min-h-[300px] '>
                            {<Image className='w-full h-auto object-contain object-top' src={image} fill sizes='50vw' priority alt='product' />}
                        </div>
                    </div>

                    {/* ------- Right side ------- */}

                    <div className='flex-1 flex flex-col gap-6 pt-10 sm:pt-0'>
                        <h3 className='font-medium text-xl'>{product.name}</h3>
                        <div className='flex gap-1'>
                            <Image src={'/star.png'} width={20} height={20} alt='star' />
                            <Image src={'/star.png'} width={20} height={20} alt='star' />
                            <Image src={'/star.png'} width={20} height={20} alt='star' />
                            <Image src={'/star.png'} width={20} height={20} alt='star' />
                            <Image src={'/empty_star.png'} width={20} height={20} alt='star' />
                            <p className='text-sm'>(122)</p>
                        </div>
                        <p className='font-semibold text-3xl'>{currency} {product.price}</p>
                        <p className='text-gray-500'>{product.description}</p>
                        <div>
                            <p className='pb-2'>Select Size</p>
                            <div className='flex gap-3'>
                                {product.sizes.map((item, index) => (
                                    <button onClick={() => setSize(item)} key={index} className={`bg-gray-50 border px-4 py-2 ${size === item ? 'border-orange-600' : ''}`}>{item}</button>
                                    // <button onClick={() => setSize(size.includes(item)? size.filter(el => el !== item): [...size, item])} key={index} className={`bg-gray-50 border px-4 py-2 ${size.includes(item) ? 'border-orange-600': ''}`}>{item}</button>

                                ))}


                            </div>
                        </div>
                        <div>
                            <button onClick={handleAddToCart} className='bg-black text-white px-8 py-3 text-sm'>ADD TO CART</button>
                        </div>

                        <hr className='w-full border' />
                        <p className='text-gray-500 text-sm'>100% Original product. <br /> Cash on delivery available on this product. <br />Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>


                {/* ------- Description ------- */}

                <div className='pt-20'>
                    <div className='flex'>
                        <button className='border px-6 py-3  text-sm font-bold'>Description</button>
                        <button className='border px-6 py-3  text-sm'>Reviews (122)</button>
                    </div>
                    <div className='border px-6 py-4 flex flex-col gap-4 text-sm text-gray-400'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia, debitis ipsum maiores repellat, totam rerum nisi, iure velit optio hic atque dolor sunt. Explicabo illum dolores quisquam. Quod, eveniet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi provident perferendis quaerat earum ut vel impedit aperiam delectus ab nulla!</p>
                    </div>
                </div>

                {/* ------- Related Product ------- */}
                <div className='pt-20'>
                    <div className='flex justify-center'>
                        <Title text1={'RELATED'} text2={'PRODUCTS'} />
                    </div>
                    <div className='pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6'>
                        {relatedProduct.map((item, index) => (
                            <div onClick={() => router.push(`/product/${item._id}`)} key={index} className='flex flex-col gap-y-1 cursor-pointer'>
                                <div className='relative min-h-[200px]'>
                                    <Image src={item.image[0]} fill sizes={'50vw'} priority className='object-cover' alt="" />

                                </div>
                                <p className='text-[14px] pt-2 text-gray-500'>{item.name}</p>
                                <p className='font-semibold'>{currency} {item.price}</p>
                            </div>
                        ))}





                    </div>
                </div>

            </div>
        </>

        : <div ></div>)
}

export default Product