import React from 'react';
import './About.css';
import image from '../../../images/sabbirzzaman.jpg';

const About = () => {
    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB']

    return (
        <section className="aboutSection">
            <div className="container">
                <div className="sectionTitle">
                    <h3>Little About Me</h3>
                </div>

                <div className="aboutMe">
                    <div className="AboutMeContent">
                        <p>
                            Hello! My name is Brittany and I enjoy creating
                            things that live on the internet. My interest in web
                            development started back in 2012 when I decided to
                            try editing custom Tumblr themes — turns out hacking
                            together a custom reblog button taught me a lot
                            about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I’ve had the privilege of
                            working at an advertising agency, a start-up, a huge
                            corporation, and a student-led design studio. My
                            main focus these days is building accessible,
                            inclusive products and digital experiences at
                            Upstatement for a variety of clients.
                        </p>

                        <p>
                            Here are a few technologies I’ve been working with
                            recently:
                        </p>

                        <ul className='skillsList'>
                            {
                                skills.map(skill => <li>{skill}</li>)
                            }
                        </ul>
                    </div>
                    <div className="AboutMeImg">
                        <img src={image} alt="Sabbir Zzaman" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
