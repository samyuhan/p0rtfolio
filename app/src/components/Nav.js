import React, { useEffect } from 'react';
import '../styles/Nav.css';

function Nav({ currentPage, handlePageChange }) {
    useEffect(() => { document.body.style.display = 'block' }, [])

    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <a href="#about" onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
                        ABOUT
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#visual" onClick={() => handlePageChange('Visual')}
                        className={currentPage === 'Visual' ? 'nav-link active' : 'nav-link'}>
                        VISUAL
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#research" onClick={() => handlePageChange('Research')}
                        className={currentPage === 'Research' ? 'nav-link active' : 'nav-link'}>
                        RESEARCH
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        CONTACT
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        RESUME
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;