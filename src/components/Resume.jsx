import React from 'react';

export default function Resume() {
    //sets the function to execture when the button is clicked.
    const onButtonClick = () => {
        const fileURL = '/assets/Dearlove_resume.pdf';

        // Create link and trigger download.
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Dearlove_Resume.pdf";
        alink.click();
    };

    return (
        <>
            <div>
                <h1>Resume</h1>
                <h3>Click the button below to download to my resume.</h3>
                <button style={{ backgroundColor: 'darkslategrey' }} onClick={onButtonClick}> Download Resume</button>
            </div>
            <div>
                <h3>Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node.JS</li>
                    <li>Typescript</li>
                    <li>PostgreSQL</li>
                    <li>ReacyJS</li>
                </ul>
            </div>
        </>
    );
}