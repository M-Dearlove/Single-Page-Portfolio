import React from 'react';
import PageLayout from "./PageLayout";
import '../styles/resume.css';

export default function Resume() {
    //sets the function to execute when the button is clicked.
    const onButtonClick = () => {
        const fileURL = '/assets/Dearlove_resume.pdf';

        // Create link and trigger download.
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Dearlove_Resume.pdf";
        alink.click();
    };

    return (
        <PageLayout title="Resume" width="narrow">
            <div className="resume-container">
                <div className="resume-download">
                    <h3>Click the button below to download my resume.</h3>
                    <button className="download-button" onClick={onButtonClick}>Download Resume</button>
                </div>
                <div className="proficiencies">
                    <h3>Proficiencies</h3>
                    <ul className="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Bootstrap</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>GraphQL</li>
                        <li>NWScript</li>
                    </ul>
                </div>
            </div>
        </PageLayout>
    );
}