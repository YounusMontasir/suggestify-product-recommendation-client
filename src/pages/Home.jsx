import React from 'react';
import Banner from '../components/Banner';
import QuerySection from '../components/QuerySection';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <QuerySection></QuerySection>
            </div>
        </div>
    );
};

export default Home;