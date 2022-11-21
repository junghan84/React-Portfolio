import React from 'react';

//Array of projects. If projects in the portfolio are changed or added, all you should need to do is edit/add the objects here.
//style here is used in the stylesheet to provide a unique background image for each project.
const projects = [
    {
        name: "Note-Taker",
        liveURL: "https://junghan84.github.io/Note_Taker/",
        ghURL: "https://github.com/junghan84/Note_Taker",
        tech: "HTML/CSS/JSON",
        style: "Note-Taker"
    },
    {
        name: "weather-dashborder",
        liveURL: "https://junghan84.github.io/weather_Dashborder/",
        ghURL: "https://github.com/junghan84/weather_Dashborder",
        tech: "HTML/CSS/JSON/API",
        style: "weather-dashborder"
    },
    {
        name: "NoSQL-Social-Network-API",
        liveURL: "https://junghan84.github.io/NoSQL-Social-Network-API/",
        ghURL: "https://github.com/junghan84/NoSQL-Social-Network-API",
        tech: "Node.js/Mysql",
        style: "NoSQL-Social-Network-API"
    },
    {
        name: "Progressive-Web-Applications-PWA-Text-Editor",
        liveURL: "https://junghan84.github.io/-Progressive-Web-Applications-PWA-Text-Editor/",
        ghURL: "https://github.com/junghan84/-Progressive-Web-Applications-PWA-Text-Editor",
        tech: "JavaScript/Webpack/IndexDB/Node.js/Express",
        style: "Progressive-Web-Applications-PWA-Text-Editor"
    },
    {
        name: "community-vision",
        liveURL: "https://community-vision.herokuapp.com/",
        ghURL: "https://github.com/alexmayberry/community-vision",
        tech: "React/Express/MongoDB/Cloudinary Widget",
        style: "community-vision"
    },
]



//This component returns the div that contains all of the content for the Projects portion of the site.
const Projects = () => (
    <section>
        <h2 className="section-header">Projects</h2>
            <div className="project-wrapper">
                {projects.map(project => (
                    <div className={`${project.style} project-item`} key={project.name}> 
                        <div className="project-header">
                            <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="project-title">
                                {project.name}
                            </a>
                            <a href={project.ghURL} target="_blank" rel="noopener noreferrer" className="project-github">
                                GitHub
                            </a>
                        </div>
                        <p className="project-tech">{project.tech}</p>
                    </div>
                    
                ))}
            </div>
            
    </section>
);

export default Projects;