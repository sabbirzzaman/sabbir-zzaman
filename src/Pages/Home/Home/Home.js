import React from 'react';
import LeftSidebar from '../../Common/LeftSidebar/LeftSidebar';
import RightSidebar from '../../Common/RightSidebar/RightSidebar';
import './Home.css';

const Home = () => {
    return (
        <section className="homeSection">
            <div className="pageContainer">
                <LeftSidebar></LeftSidebar>
                <RightSidebar></RightSidebar>
            </div>
        </section>
    );
};

export default Home;
