import React from 'react';
import profilePic from "../../assets/images/me.jpg";

//This component returns the div that contains all of the content for the About Me portion of the site.
const About = () => (
    <section>
        <h2 className="section-header">About Me</h2>
        <img src={profilePic} alt="JungHan" />
        <p>
          I don’t know much about being a Programming developer but I do know the excitement that comes after developing a new project. I have the determination and motivation to learn as much as I can
          Although I don’t speak English perfectly, I am trying to collaborate with others. In the future I hope to use my newfound skills to support other people in reaching their goals
        </p>

    </section>
);

export default About;