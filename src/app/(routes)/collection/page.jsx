'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import Title from '@/components/Title'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const Collection = ({query}) => {

  const [filterVisible, setFilterVisible] = useState(false)
  const router = useRouter()
  const { products, currency, setProducts } = useContext(ShopContext)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [productFilter, setProductFilter] = useState(products.slice())
  const [sortType, setSortType] = useState('relevant')

  


  const toogleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(category.filter(el => el !== e.target.value))
    } else {
      setCategory([...category, e.target.value])
    }
    
  }

  const toogleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter(el => el !== e.target.value))
    } else {
      setSubCategory([...subCategory, e.target.value])
    }
    
  }

  const applySort = () => {

    let copyfilter = productFilter.slice()

      switch (sortType){
        case 'low to high':
          setProductFilter(copyfilter.sort((a,b) => a.price - b.price))
          break
        
        case 'high to low':
          setProductFilter(copyfilter.sort((a,b) => b.price - a.price))

          break
        default:
          applyFilter()
          break
        
      }
  }

  const applyFilter = () => {
    let copyProduct = products.slice() 
    
    if (query) {
      const newProduct = products.slice().filter(item => item.name.toLowerCase().includes(query))
      if (newProduct.length){
        copyProduct = newProduct
      }
  
    }

    if (category.length > 0){
      copyProduct = copyProduct.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0){
      copyProduct = copyProduct.filter(item => subCategory.includes(item.subCategory))
    }

    setProductFilter(copyProduct)
  }

  useEffect(() => {
    applyFilter()
    // applySort()
  } , [category, subCategory, products])

  useEffect(() => {
    applySort()
  } , [sortType])

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 pt-10'>

      {/* ------- Filter ------- */}
      <div className=''>
        <h3 className='font-semibold text-xl md:text-2xl flex items-center gap-x-2'>Filters <ChevronDown onClick={() => setFilterVisible(!filterVisible)} className='cursor-pointer' size={20} /> </h3>

        <div className={`${filterVisible ? 'block' : 'hidden'} md:block`}>
          <div className='border p-6  flex flex-col gap-y-2 text-sm text-gray-600 mt-7'>
            <h5 className='font-semibold '>Categories</h5>
            <div className='flex gap-x-2'>
              <input type="checkbox" value={'Men'} onChange={toogleCategory}/>
              <p>Men</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" value={'Women'} onChange={toogleCategory}/>
              <p>Women</p>
            </div>
            <div className='flex gap-x-2'>
              <input type="checkbox" value={'Kids'} onChange={toogleCategory}/>
              <p>Kids</p>
            </div>
          </div>

          <div className='border p-6  flex flex-col gap-y-2 text-sm text-gray-600 mt-6'>
            <h5 className='font-semibold '>Type</h5>
            <div className='flex gap-x-2'>
              <input type="checkbox"  value={'Topwear'} onChange={toogleSubCategory}/>
              <p>Topwear</p>
            </div>
            <div className='flex gap-x-2' >
              <input type="checkbox" value={'Bottomwear'} onChange={toogleSubCategory}/>
              <p>Bottomwear</p>
            </div>
            <div className='flex gap-x-2' >
              <input type="checkbox" value={'Winterwear'} onChange={toogleSubCategory}/>
              <p>Winterwear</p>
            </div>
          </div>
        </div>

      </div>

      {/* ------- Right Side ------- */}
      <div>
        <div className='flex justify-between'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} size='text-base sm:text-2x' />
          <select name="" className='border px-4 py-2 text-sm' onChange={(e) => setSortType(e.target.value)}>
            <option value="relevant" >Sort by: Relevant</option>
            <option value="low to high">Sort by: Low to High</option>
            <option value="high to low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 pt-6'>
          {productFilter.map((item, index) => (
            <div onClick={() => router.push(`/product/${item._id}`)} key={index} className='flex flex-col gap-y-1 cursor-pointer'>
              <div  className='relative h-[200px]'>
                <Image src={item.image[0]} fill sizes={'50vw'} className='object-cover object-top' priority  alt={item.name} />

              </div>
              <p className='text-[14px] pt-2 text-gray-500'>{item.name}</p>
              <p className='font-semibold'>{currency} {item.price}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Collection