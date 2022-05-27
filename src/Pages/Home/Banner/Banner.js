import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className='bannerSection'>
            <div className="container">
                <p className='title-sm'><span className='highlight'>Hi, my name is</span></p>
                <h1>Sabbir Zzaman.</h1>
                <h1 className='title-dim'>I build things for the web.</h1>

                <p className='banner-text'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

                <button className="btn btn-banner">Little About Me</button>
            </div>
        </section>
    );
};

export default Banner;