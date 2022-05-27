import React from 'react';
import LeftSidebar from '../../Common/LeftSidebar/LeftSidebar';
import RightSidebar from '../../Common/RightSidebar/RightSidebar';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <main className="homePage">
            <div className="pageContainer">
                <LeftSidebar></LeftSidebar>
                <div className="pageMainContainer">
                    <Banner></Banner>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </main>
    );
};

export default Home;
