import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from '../components/QueryCard';


const Queries = () => {
    const queries = useLoaderData()
    const [search, setSearch] = useState('')
    const searchQueries = queries.filter(query=>
        query.productName.toLowerCase().includes(search.toLowerCase())
    )    
    const [gridCols, setGridCols] = useState(3);
    const [activeButton, setActiveButton] = useState(3); 
    const handleButtonClick = (cols) => {
      setGridCols(cols); 
      setActiveButton(cols); 
    };
    return (
        <div className='w-10/12 mx-auto mb-20 mt-4'>
            <div className='flex justify-between mb-10'>
                
                <div class="join hidden lg:block">
                <button
              className={`btn join-item ${activeButton === 3 ? 'btn-active' : ''}`}
              onClick={() => handleButtonClick(3)}
            >
              3 Columns
            </button>
            <button
              className={`btn join-item ${activeButton === 2 ? 'btn-active' : ''}`}
              onClick={() => handleButtonClick(2)}
            >
              2 Columns
            </button>
            <button
              className={`btn join-item ${activeButton === 1 ? 'btn-active' : ''}`}
              onClick={() => handleButtonClick(1)}
            >
              1 Column
            </button>
</div>
                
                <div>
                <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search"  value={search}
              onChange={(e) => setSearch(e.target.value)}  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clip-rule="evenodd" />
  </svg>
</label>
                </div>
            </div>
            <h2 className='text-black text-center font-bold text-5xl mb-5'>Latest Community Questions</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>Explore the most recent queries from our community and share your insights.</p>
            <div className={`grid  ${gridCols === 3 ? 'sm:grid-cols-1 lg:grid-cols-3' : gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                {
                    searchQueries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;