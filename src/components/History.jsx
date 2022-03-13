import { useState } from 'react';
import Navbar from './nav';
import './sass/HistoryPage.scss';
import MaterialTimeline from './Timelines/Timeline';

const HistoryComponent = () => {
    const [ navOpen, setNavOpen ] = useState(false);

    return (
      <div id="BlackBackground">
          <div id="HistoryPage">
            <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />
              <div id="left-side">
                  <div>
                    <b>THE HISTORY ABOUT 
                        <b style={{ color:"blue" }}> BMW M5</b>
                    </b>
                  </div>
                  <button onClick={() => window.location.href = "/specs"}>NEXT</button>
            </div>
            <div id="right-side" style={{ marginTop:"80px" }}>
                <MaterialTimeline />
            </div>
          </div>
       </div>
    )
}

export default HistoryComponent;