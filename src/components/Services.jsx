import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Services = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mb-20'>
            <h2 className='text-3xl md:text-5xl text-center font-bold mb-5'>What We Offer</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>Discover how we make finding the perfect product easier, smarter, and tailored just for you</p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                {/* card 1 */}
            <div className='px-4 py-8 border border-gray-200 rounded-md'>
                <img className='mx-auto w-20 h-20' src="https://i.ibb.co.com/KV5Sx5c/ser1.png" alt="" />
                <Bounce cascade="true">
                <h3 className='text-xl font-semibold text-center mt-4 mb-3'>Personalized Recommendations</h3>
                <p className='text-center'>Find the perfect product based on your preferences and search history.</p>
                <div className='flex justify-center items-center mt-6'>
                <button className='btn btn-md bg-[#2D86EB] text-white '>Explore now →</button>
                </div>
                </Bounce>
                
               
                
            </div>
            <div className='px-4 py-8 border border-gray-200 rounded-md'>
                <img className='mx-auto w-20 h-20' src="https://i.ibb.co.com/19Nnn5x/ser-2.png" alt="" />
                <Bounce cascade="true">
                <h3 className='text-xl font-semibold text-center mt-4 mb-3'>Comprehensive Search</h3>
                <p className='text-center'>Explore and filter products effortlessly to meet your needs.</p>
                <div className='flex justify-center items-center mt-6'>
                <button className='btn btn-md bg-[#F9B851] text-white '>Explore now →</button>
                </div>
                </Bounce>
                
                
            </div>
            <div className='px-4 py-8 border border-gray-200 rounded-md'>
                <img className='mx-auto w-20 h-20' src="https://i.ibb.co.com/tsDtSq3/ser-3.png" alt="" />
               <Bounce cascade="true">
               <h3 className='text-xl font-semibold text-center mt-4 mb-3'>Smart Assistance</h3>
                <p className='text-center'>Compare products and make informed decisions with ease.</p>
                <div className='flex justify-center items-center mt-6'>
                <button className='btn btn-md bg-[#2D86EB] text-white '>Explore now →</button>
                </div>
               </Bounce>
                
            </div>
            </div>
        </div>
    );
};

export default Services;