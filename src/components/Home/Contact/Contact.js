import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contactSection">
            <div className="container">
                <p className="title-sm">
                    <span className="highlight">Contact Me</span>
                </p>
                <h2 className="contactTitle">Get In Touch</h2>
                <p className="contactText">
                    My inbox is always open. If you want to work with me or for
                    any kind of inquiry please feel free to send me a message. I
                    would love to connect and have a conversation with you!
                </p>

                <a
                    href="mailto:sabbirzzaman7@gmail.com"
                    className="btn btn-large"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
