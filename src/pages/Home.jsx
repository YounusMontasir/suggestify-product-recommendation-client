import React from 'react';
import Banner from '../components/Banner';
import QuerySection from '../components/QuerySection';
import Services from '../components/Services';
import Review from '../components/Review';
import FAQ from '../components/FAQ';

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
            <h2 className='text-3xl md:text-5xl text-center font-bold mb-5'>Frequently Asked Questions</h2>
            <p className='text-[#6C727C] text-center font-medium mb-10'>Answers to Your Most Common Questions</p>
                <FAQ></FAQ>
            </div>
            <div>
                <h3 className='text-3xl md:text-5xl text-center font-bold mb-5'>What Our Customer Says</h3>
                <p className='text-[#6C727C] text-center font-medium mb-10'>Real Reviews from Our Valued Customers</p>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;