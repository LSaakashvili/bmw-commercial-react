import { useState } from 'react';
import Navbar from './nav';
import './sass/Specs.scss';

const Specs = () => {
    const [ navOpen, setNavOpen ] = useState(false);

    return (
    <div id="BlackBackground">
        <div id="Specs">
            <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />
            <div id="left-side">
                <div id="gray-area"></div>
                <div id="bmw-img-specs"></div>
            </div>
            <div id="right-side">
                <div id="bold">
                    <b>KEY SPECIFICATIONS OF
                        <b style={{ color:"blue" }}> BMW M5</b>
                    </b>
                        <p>The M5 is powered by a 4.4-liter twin-turbo V-8 with 600 hp and 553 lb-ft of torque. M5 Competition models get a power bump to 617 hp. EPA fuel economy ratings are 15/21 mpg city/highway with the standard eight-speed automatic transmission. We've tested an M5 reaching 60 mph in as quick as 3.0 seconds.</p>
                        <button onClick={() => window.location.href = "https://www.bmw.com"}>LINK TO BMW OFFICIAL WEBSITE</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Specs;