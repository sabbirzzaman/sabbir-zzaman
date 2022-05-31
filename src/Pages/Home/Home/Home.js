import React from 'react';
import LeftSidebar from '../../Common/LeftSidebar/LeftSidebar';
import RightSidebar from '../../Common/RightSidebar/RightSidebar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css';

const Home = () => {
    return (
        <main className="homePage">
            <div className="pageContainer">
                <LeftSidebar></LeftSidebar>
                <div className="pageMainContainer">
                    <Banner></Banner>
                    <About></About>
                    <Portfolio></Portfolio>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </main>
    );
};

export default Home;
