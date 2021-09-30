import React from 'react';
import '../styles/Footer.css';

const styles = {
  footing: {
    textAlign: "center",
    bottom: "0"
  },
  i: {
    fontSize: "20px",
    margin: "15px"
  }
};

function Footer() {
  return (
    <footer style={styles.footing} className="footer">
      <a href="https://github.com/samyuhan"><button class="footerbtn"><i class="fa fa-github" style={styles.i}></i></button></a>
      <a href="https://www.linkedin.com/in/samanthayuhan/"><button class="footerbtn"><i class="fa fa-linkedin" style={styles.i}></i></button></a>
      <a href="mailto:syuhan@berkeley.edu"><button class="footerbtn"><i class="fa fa-envelope" style={styles.i}></i></button></a>
    </footer>
  );
}

export default Footer;