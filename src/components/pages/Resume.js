import React from 'react';
import resume from "../../assets/downloads/ethanseoresume.pdf";

//By default, the filename gets an extra string appended to the end, i.e. filename.2be81a27.pdf
//Here I'm using a series of splits and a concat to trimg away the excess file name and just make it filename.pdf.
//I could have explicitly named it donwload="filename.pdf" in the download link, but I wanted to try and not use
//hardcoded filenames.
const resumeName = resume.split('/')[3].split('.')[0].concat(".pdf");


//This component returns the div that contains all of the content for the Resume portion of the site.
const Resume = () => (
    <section>
        <h2 className="section-header">Resume</h2>
        <p className="download-link">Download my <a href={resume} download={resumeName}>resume</a></p>

        <h3 className="list-header">Front-end proficiencies</h3>
        <ul className="prof-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>

        <h3 className="list-header">Back-end proficiencies</h3>
        <ul className="prof-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
        </ul>
    </section>
);

export default Resume;