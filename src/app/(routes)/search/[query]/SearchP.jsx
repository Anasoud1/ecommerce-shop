'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Collection from '../../collection/CollectionComponent';


const SearchP = () => {
    const params = useParams()
    const query = params.query;

    

    return (
        <div>
            <Collection query={query} />
        </div>
    )
}

export default SearchP