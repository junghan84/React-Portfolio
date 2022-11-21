import React from 'react';

const Footer = () => {

    //Set up the links I want to have in my footer in an array so I can map them in the return statement.
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/junghan84'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/junghan-seo-994996138'
        },
        {
            name: 'JungHan Seo',
            url: 'mailto:junghanseo84@gmail.com'
        }
    ];

    //Return a list containing the links to all of the sites listed above. NOTE: The rel="noopener noreferrer" in the links was added
    //on the reccomendation of a warning I received when compiling this code. It is to prevent the possability of a new tab being hijacked.
    return (
        <footer className="footer">
            <ul className="nav-list footer-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>

    );
}

export default Footer;