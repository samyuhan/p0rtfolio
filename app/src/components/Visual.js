import React from 'react';
import '../styles/Visual.css';

function Visual() {
    return (
        <section className="visual-container">
            <div>
                <img src="visual/winded.jpg" className="art winded" width="700"></img>
            </div>
            <div>
                <img src="visual/phase.jpg" className="art phase" width="700"></img>
            </div>
            <div>
                <img src="visual/rainy.png" className="art rainy" width="700"></img>
            </div>
            <div>
                <img src="visual/howl.jpg" className="art howl" width="400"></img>
            </div>
            <div>
                <img src="visual/oakfest_logo.png" className="art oakfest" width="500"></img>
            </div>
            <div>
                <img src="visual/google.tif" className="art google" width="700"></img>
            </div>
            <div>
                <img src="visual/oakfest_letters.tif" className="art oakfestletters" width="700"></img>
            </div>
            <div>
                <img src="visual/cubesat.png" className="art cubesat" width="500"></img>
            </div>
            <div>
                <img src="visual/cubesat2.png" className="art cubesat2" width="500"></img>
            </div>
            <div>
                <img src="visual/power.tif" className="art power" width="400"></img>
            </div>
        </section>
    );
}

export default Visual;