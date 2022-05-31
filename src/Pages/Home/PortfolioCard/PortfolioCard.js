import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ project }) => {
    const { name, img, details, technologies, liveLink, repoLink } = project;

    return (
        <div className="projectCard">
            <div className="projectContent">
                <p className="title-sm">
                    <span className="highlight">Featured Post</span>
                </p>

                <a href={liveLink} target="_blank" rel="noreferrer"><h4 className="projectName">{name}</h4></a>

                <p className="projectDetails text-sm">{details}</p>

                <div className="projectTechList">
                    {technologies.map((tech, index) => (
                        <p key={index} className="title-sm">
                            {tech}
                        </p>
                    ))}
                </div>

                <div className="projectLink">
                    <a href={repoLink} target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                        >
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-external-link"
                        >
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="projectImg">
                <a href={liveLink} target="_blank" rel="noreferrer">
                    <img src={img} alt={name} />
                </a>
            </div>
        </div>
    );
};

export default PortfolioCard;
