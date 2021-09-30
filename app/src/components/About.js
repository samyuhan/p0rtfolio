import React, { useState, useEffect } from 'react';
import '../styles/About.css';

function About(){
    return (
        <div className="abt">
            {/* <img src="snow.png" alt="Picture of me snowboarding" height="200" className="mepic"></img> */}
            {/* <img src="portrait.png" alt="Picture of me" height="200" className="mepic"></img> */}
            <p className="abtme">Hello, I'm <a href="#" className="abtmehover">Sam<img src="snow.jpg" width="400px"/></a>! I just graduated from <a href="#" className="abtmehover">UC&nbsp;Berkeley<img src="berkeley.jpg" width="400px"/></a> with a degree in Data Science.
            With my tech and art background, I want to find innovative, functional, and thoughtful solutions for complex problems.
            I'm currently working from home in <a href="#" className="abtmehover">Irvine,&nbsp;CA<img src="irvine.jpg" width="400px"/></a>.
            Feel free to browse around or <a href="mailto:syuhan@berkeley.edu" className="abtmehover">contact</a> me if you have any questions!
            I created this website with HTML/CSS and React.</p>
            <p className="background">ABOUT ME</p>
        </div>
    );
}

export default About;