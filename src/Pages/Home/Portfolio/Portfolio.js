import React from 'react';
import project1 from '../../../images/project-1.png';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            name: 'Halcyon Theme',
            img: project1,
            details:
                'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            technologies: [
                'VS Code',
                'Sublime Text',
                'Atom',
                'iTerm2',
                'Hyper',
            ],
            liveLink: '#',
            repoLink: '#',
        },
        {
            name: 'Halcyon Theme',
            img: project1,
            details:
                'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            technologies: [
                'VS Code',
                'Sublime Text',
                'Atom',
                'iTerm2',
                'Hyper',
            ],
            liveLink: '#',
            repoLink: '#',
        },
        {
            name: 'Halcyon Theme',
            img: project1,
            details:
                'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            technologies: [
                'VS Code',
                'Sublime Text',
                'Atom',
                'iTerm2',
                'Hyper',
            ],
            liveLink: '#',
            repoLink: '#',
        },
    ];

    return (
        <section className="portfolioSection">
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
