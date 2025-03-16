import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from "./PageLayout";
import '../styles/Portfolio.css';
export default function Portfolio() {
    const projects = [
        {
            title: "Ship-N-Go",
            image: "/images/small mailbox.png",
            link: "https://m-dearlove.github.io/Ship-N-Go/",
            github: "https://github.com/M-Dearlove/Ship-N-Go",
            alt: "Ship-N-Go"
        },
        {
            title: "Spoonfed",
            image: "/images/spoonfed.jpg",
            link: "http://spoonfed-prod.onrender.com",
            github: "https://github.com/M-Dearlove/spoonfed",
            alt: "Spoonfed"
        }
    ]

    return (
        <PageLayout title="My Portfolio" width="max">
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div
                            className="card h-100 shadow"
                            style={{
                                backgroundColor: '#f5f1ed',
                                transition: 'transform 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="card-img-top"
                                    style={{ height: '12rem', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title h5 fw-semibold text-dark mb-2">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.github}
                                        className="text-primary text-decoration-none"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        <i className="bi bi-github me-1"></i>
                                        GitHub Repository
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}