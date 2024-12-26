import React from 'react';
import Banner from '../components/Banner';
import QuerySection from '../components/QuerySection';
import Services from '../components/Services';
import Review from '../components/Review';

const Home = () => {
    
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <QuerySection></QuerySection>
            </div>
            <Services></Services>
            <div>
                <h3 className='text-3xl md:text-5xl text-center font-bold mb-10'>What Our Customer Says</h3>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;