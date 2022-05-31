import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const [header, setHeader] = useState('headerSection');

    const listenScrollEvent = () => {
        window.scrollY < 10
      ? setHeader("headerSection")
      : setHeader("headerSectionScroll")
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={header}>
            <div className="pageContainer">
                <div className="siteLogo">
                    <h3 onClick={() => navigate('/')}>
                        SZ<span className="highlight">.</span>
                    </h3>
                </div>

                <nav className="navigation">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                    <a
                        className="btn header-btn"
                        href="https://drive.google.com/file/d/13p4L7j4LV8nipclBB2hMljCogXkLVJSZ/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
