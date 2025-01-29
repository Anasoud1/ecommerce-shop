'use client'
import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'


const SearchBar = ({setSearchBar}) => {
    const [query, setQuery] = useState()
    const router = useRouter()

    const handleEnter = (e) => {
        if (e.key == "Enter"){
            router.push(`/search/${query}`)
        }
    }
    return (
        <div className='border-b bg-gray-50 flex justify-center items-center gap-x-4'>
            <div className='px-6 py-2 border my-4 rounded-full w-2/3 md:w-[480px] bg-white flex  justify-between'>
                <input onChange={e => setQuery(e.target.value)} onKeyDown={handleEnter} type="text" placeholder='Search' className='outline-none w-full' />
                <Search />
            </div>
            <X size={14} onClick={() => setSearchBar(false)} className='cursor-pointer' />
        </div>
    )
}

export default SearchBar