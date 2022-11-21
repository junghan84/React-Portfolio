import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const Portfolio = () => {

    //Set up a useState and set it to 'About' to start with. This will make the site load the 'About' page 
    //when it is initially loaded. The currentPage and setCurrentPage will handle tracking which page the
    //user is currently viewing and rerendering the site when the page changes.
    const [currentPage, setCurrentPage] = useState('About');

    //This method uses a switch statement to render the apporpriate component in the pages directory based on
    // what the currentPage in the useState is.
    const renderPage = () => {
        switch (currentPage) {
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    //return the JSX. The Nav also gets the currentPage and setCurrentPage passed to it as props so Nav can 
    //handle rendering and highlighting the page titles in the navigation bar.
    return (
        <div>
            <header className="header">
                <h1>JungHan Seo</h1>
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </header>
            <main className="content-wrapper">
                {renderPage(currentPage)}
            </main>
            <Footer />
        </div>
    );
}

export default Portfolio;