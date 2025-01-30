'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Collection from '../../collection/page';
import Head from 'next/head'


const SearchPage = () => {
    const params = useParams()
    const query = params.query;

    useEffect(() => {
        document.title = "Search";
    }, []);

    return (
        <div>
            <Head>
                <title>{document.title}</title>
            </Head>
            <Collection query={query} />
        </div>
    )
}

export default SearchPage