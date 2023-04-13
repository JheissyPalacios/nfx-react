import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Principal from '../components/Principal';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="container-content">
                <Principal />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;