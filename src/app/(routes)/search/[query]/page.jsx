'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Collection from '../../collection/page';

const SearchPage = () => {
    const params = useParams()
    const query = params.query;

    return (
        <div>
            <Collection query={query} />
        </div>
    )
}

export default SearchPage