import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QueryCard from '../components/QueryCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const Queries = () => {
    const queries = useLoaderData();
    const [search, setSearch] = useState('');
    const [gridCols, setGridCols] = useState(3);
    const [activeButton, setActiveButton] = useState(3);
    const [sortOrder, setSortOrder] = useState('default');

   
    const searchQueries = queries.filter(query =>
        query.productName.toLowerCase().includes(search.toLowerCase())
    );

    
    const sortedQueries = [...searchQueries].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.recommendationCount - b.recommendationCount; // Ascending order
        } else if (sortOrder === 'desc') {
            return b.recommendationCount - a.recommendationCount; // Descending order
        }
        return 0; 
    });

    
    const handleButtonClick = (cols) => {
        setGridCols(cols);
        setActiveButton(cols);
    };

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mb-20 mt-4'>
           
            <div className='flex justify-between mb-10'>
                <div className="join hidden lg:block">
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

                {/* Search Bar */}
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
            </div>

           
            <div className="dropdown mb-6">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#2D86EB] text-white flex items-center">
                    Sorted By Recommendations <IoMdArrowDropdown />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <button onClick={() => setSortOrder('asc')}>Ascending</button>
                    </li>
                    <li>
                        <button onClick={() => setSortOrder('desc')}>Descending</button>
                    </li>
                </ul>
            </div>

          
            <h2 className='text-black text-center font-bold text-5xl mb-5'>Latest Community Questions</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>
                Explore the most recent queries from our community and share your insights.
            </p>

          
            <div className={`grid ${gridCols === 3 ? 'sm:grid-cols-1 lg:grid-cols-3' : gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                {
                    sortedQueries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;
