import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;