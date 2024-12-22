import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from '../components/QueryCard';

const Queries = () => {
    const queries = useLoaderData()
    console.log(queries);
    
    return (
        <div className='w-10/12 mx-auto'>
            <p>{queries.length}</p>
            <div className='grid grid-cols-3 gap-6'>
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;