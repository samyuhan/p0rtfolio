import React from 'react';
import '../styles/Visual.css';

function Visual() {
    return (
        <section className="visual-container">
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/winded.jpg" className="art winded" width="500"></img>
                <p className="artdesc">Winded, watercolor.</p>
            </div>
            <div class="parallax__layer parallax__layer--mid">
                <img src="visual/phase.jpg" className="art phase" width="500"></img>
                <p className="artdesc">Phase, white charcoal on black paint.</p>
            </div>
            <div class="parallax__layer parallax__layer--back">
                <img src="visual/rainy.png" className="art rainy" width="500"></img>
                <p className="artdesc">Rainy, illustration on tablet.</p>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/howl.jpg" className="art howl" width="300"></img>
                <p className="artdesc">The Howl, pen stipple.</p>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/oakfest_logo.png" className="art oakfest" width="300"></img>
                <p className="artdesc">Oakfest logo, pencil.</p>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/google.tif" className="art google" width="500"></img>
                <p className="artdesc">Google logo, made with photoshop.</p>
            </div>
            <div class="parallax__layer parallax__layer--mid">
                <img src="visual/oakfest_letters.tif" className="art oakfestletters" width="500"></img>
                <p className="artdesc">Oakfest shirt logo, made with illustrator.</p>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/cubesat.png" className="art cubesat" width="300"></img>
                <p className="artdesc">Irvine CubeSat logo, made with photoshop.</p>
            </div>
            <div class="parallax__layer parallax__layer--back">
                <img src="visual/cubesat2.png" className="art cubesat2" width="300"></img>
                <p className="artdesc">Irvine CubeSat prototype logo, made with photoshop.</p>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <img src="visual/power.tif" className="art power" width="200"></img>
                <p className="artdesc">Team Power logo, made with photoshop.</p>
            </div>
        </section>
    );
}

export default Visual;