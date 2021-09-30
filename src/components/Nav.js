import React, { useEffect } from 'react';
import '../styles/Nav.css';

function Nav({ currentPage, handlePageChange }) {
    useEffect(() => { document.body.style.display = 'block' }, [])

    return (
        <nav>
            <ul>
                <li className="nav-item underline">
                    <a href="#about" onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        ABOUT
                    </a>
                </li>
                <li className="nav-item underline">
                    <a href="#visual" onClick={() => handlePageChange('Visual')}
                        className={currentPage === 'Visual' ? 'nav-link active' : 'nav-link'}>
                        VISUAL
                    </a>
                </li>
                <li className="nav-item underline">
                    <a href="#research" onClick={() => handlePageChange('Research')}
                        className={currentPage === 'Research' ? 'nav-link active' : 'nav-link'}>
                        RESEARCH
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        <button className="resumebtn">
                            <span class="resumespan">RESUME</span>
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;