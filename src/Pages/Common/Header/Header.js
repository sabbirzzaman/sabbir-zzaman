import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-section">
            <div className="container">
                <div className="site-logo">
                    <h3>
                        SZ<span className='highlight'>.</span>
                    </h3>
                </div>

                <nav className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/">Experiences</Link>
                    <Link to="/">Works</Link>
                    <Link to="/">Contact</Link>
                    <button className='btn'>Resume</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
