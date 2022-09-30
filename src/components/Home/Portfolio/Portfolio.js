import React from 'react';
import project1 from '../../../images/project-1.jpg';
import project2 from '../../../images/project-2.jpg';
import project3 from '../../../images/project-3.jpg';
import project4 from '../../../images/project-4.png';
import project5 from '../../../images/project-5.png';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            name: 'Car Shifter',
            img: project2,
            details:
                'Car Shifter is a full functional full-stack project. Admins have access to control the entire website and users. Users can create their account and purchase larger quantity of parts by making payment. Users and Admin can also set their profile information.',
            technologies: [
                'React.js',
                'Node.js',
                'Express.js',
                'MondoDb',
                'Stripe',
            ],
            liveLink: 'https://car-shifter.web.app/',
            repoLink: 'https://github.com/sabbirzzaman/car-shifter-client',
        },
        {
            name: 'Go Autocar',
            img: project1,
            details:
                'Go AutoCar is a car dealer (warehouse/inventory) management website. A full-stack project where author can manage their warehouse or inventory through this website. Also users can create their accounts and add cars to the inventory. ',
            technologies: [
                'React.js',
                'Axios',
                'Node.js',
                'Express.js',
                'MondoDb',
            ],
            liveLink: 'https://go-autocar.web.app/',
            repoLink: 'https://github.com/sabbirzzaman/go-autocar-client',
        },
        {
            name: 'ChatX',
            img: project4,
            details:
                'A real-time chat application that allows you to communicate by sending and receiving messages. Implemented infinite scroll for both chat body and conversation list for a better user experience.',
            technologies: ['React.js', 'Redux', 'Rtk Query', 'Socket.io', 'Tailwind CSS'],
            liveLink: 'https://chat-x-redux.netlify.app/',
            repoLink: 'https://github.com/sabbirzzaman/chat-x',
        },
        {
            name: 'Project Management',
            img: project5,
            details:
                'A single-page web application that allows you to empower your team to manage any type of project. Users can create teams and assign members to them. Also, the creator or member can delete a team. Users can create a project and assign it to any team and users can drag and drop it to change status.',
            technologies: ['React.js', 'Redux', 'Rtk Query', 'React DND', 'Tailwind CSS'],
            liveLink: 'https://project-management-redux.netlify.app/',
            repoLink: 'https://github.com/sabbirzzaman/project-management',
        },
        {
            name: 'Tim Walter',
            img: project3,
            details:
                'A website for professional lawyers who can provide services through this website. The author can sell services from this website. Users can create their accounts and purchase the services from this website.',
            technologies: ['VsCode', 'React.js', 'Firebase', 'ReactRouter'],
            liveLink: 'https://tim-walter.web.app/',
            repoLink: 'https://github.com/sabbirzzaman/tim-walter',
        },
    ];

    return (
        <section id="works" className="portfolioSection">
            <div className="container">
                <div className="sectionTitle">
                    <h3>Some Things I’ve Built</h3>
                </div>

                <div className="myProjects">
                    {projects.map((project, index) => (
                        <PortfolioCard
                            key={index}
                            project={project}
                        ></PortfolioCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
