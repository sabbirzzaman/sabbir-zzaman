import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section id="home" className="bannerSection">
            <div className="container">
                <p className="title-sm">
                    <span className="highlight">Hi, my name is</span>
                </p>
                <h1>Sabbir Zzaman.</h1>
                <h1 className="title-dim">I build things for the web.</h1>

                <p className="banner-text">
                    I’m a frontend developer specializing in building functional
                    web applications. Interested in the entire frontend spectrum
                    and working on ambitious projects with positive people.
                </p>

                <a href="#contact" className="btn btn-large">
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Banner;
