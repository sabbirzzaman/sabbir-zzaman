import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFounded.css';

const NotFounded = () => {
    const navigate = useNavigate()

    return (
        <section className="notFoundedSection">
            <div className="container">
                <p>404 | Opps! Page Not Founded</p>
                <button onClick={() => navigate('/')} className="btn btn-large">
                    Back Home
                </button>
            </div>
        </section>
    );
};

export default NotFounded;
