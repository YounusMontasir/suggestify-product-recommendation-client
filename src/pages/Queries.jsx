import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from '../components/QueryCard';

const Queries = () => {
    const queries = useLoaderData()
    console.log(queries);
    
    return (
        <div className='w-10/12 mx-auto mb-20 mt-20'>
            <h2 className='text-black text-center font-bold text-5xl mb-5'>Latest Community Questions</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>Explore the most recent queries from our community and share your insights.</p>
            <div className='grid grid-cols-3 gap-6'>
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;