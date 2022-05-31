import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contactSection">
            <div className="container">
                <p className="title-sm">
                    <span className="highlight">Contact Me</span>
                </p>
                <h2 className='contactTitle'>Get In Touch</h2>
                <p className='contactText'>
                    Although I’m not currently looking for any new
                    opportunities, my inbox is always open. Whether you have a
                    question or just want to say hi, I’ll try my best to get
                    back to you!
                </p>

                <button className="btn btn-large">
                    Say Hello
                </button>
            </div>
        </section>
    );
};

export default Contact;
