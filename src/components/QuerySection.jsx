import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from './QueryCard';

const QuerySection = () => {
    const queries = useLoaderData()
      
    return (
        <div className='mt-20 mb-20 w-11/12 lg:w-10/12 mx-auto'>
            <h2 className='text-black text-center font-bold text-5xl mb-5'>Latest Community Questions</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>Explore the most recent queries from our community and share your insights.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default QuerySection;