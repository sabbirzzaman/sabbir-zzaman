import React from 'react';
import './About.css';
import image from '../../../images/sabbirzzaman.jpg';

const About = () => {
    const skills = [
        'JavaScript (ES6)',
        'React',
        'Bootstrap',
        'Tailwind CSS',
        'Firebase',
        'Node.js',
        'Express.js',
        'MongoDB',
    ];

    return (
        <section id="about" className="aboutSection">
            <div className="container">
                <div className="sectionTitle">
                    <h3>Little About Me</h3>
                </div>

                <div className="aboutMe">
                    <div className="AboutMeContent">
                        <p>
                            As a Frontend Developer I started my journey in
                            2018. As well as work I also continued to keep
                            learning and exploring new technologies for updating
                            myself. I've made myself more efficient and
                            productive. I love to learn new technologies and
                            work on them. I have strong working skills with
                            React.js and JavaScript in Building functional UI
                            for both smaller and larger projects.
                        </p>

                        <p>
                            Quality-focused and Self-motivated trying to make
                            myself more efficient day by day to reach my target
                            to be a full-stack engineer.
                        </p>

                        <p>
                            Here are a few technologies I've been working with
                            recently:
                        </p>

                        <ul className="skillsList">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
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
