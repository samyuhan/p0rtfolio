import React from 'react';
import '../styles/Homepage.css';

const styles = {
  front: {
    background: "#242526"
  }
};

function Homepage() {
  return (
    <div style={styles.front} className="front">
      <p className="title">SAMANTHA YUHAN</p>
      <p className="desc">coder.&nbsp; creator.&nbsp; aspiring designer.&nbsp;</p> 
    </div>
  );
}

export default Homepage;