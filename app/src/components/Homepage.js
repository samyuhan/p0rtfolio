import React, { useState, useEffect } from 'react';
import '../styles/Homepage.css';

const styles = {
  front: {
    background: "#242526"
  }
};

function Homepage({ currentPage, handlePageChange }) {
  // const [isTime, setTime] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setTime(true);
  //   }, 4700);
  // }, []);

  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({
        fade: 'fade-in'
      })
    }, 4700);

    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <div style={styles.front} className="front">
      <p className="title">SAMANTHA YUHAN</p>
      <p className="desc">coder.&nbsp; creator.&nbsp; aspiring designer.&nbsp;</p>

      <a href="#about" onClick={() => handlePageChange('About Me')}
        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
        <button className={`${fadeProp.fade} exp btn41-43 btn-42`}>E X P L O R E</button>
      </a>

    </div>
  );
}

export default Homepage;