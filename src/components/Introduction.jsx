import React, { useRef, useState } from 'react';
import './sass/IntroPage1.scss';
import IntroPage2 from './pages/IntroPage2';
import IntroPage3 from './pages/IntroPage3';
import Navbar from './nav';
import IntroPage1 from './pages/IntroPage1';

const Introduction = () => {
  const [ page, setPage ] = useState(1);
  const [ navOpen, setNavOpen ] = useState();

  const step1left = useRef(null);
  const step1right = useRef(null);
  
  const increasePage = () => {
    step1left.current.style.opacity = 0;
    step1right.current.style.opacity = 0;
    setNavOpen(false);
    setTimeout(() => {
      setPage(2);
    }, 1000);
  }

  return (
      <div id="BlackBackground">
      <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />

        { page === 1 && 
        
        <IntroPage1 increasePage={increasePage} step1left={step1left} step1right={step1right} />
        
        }

        { page === 2 &&
        
        <IntroPage2 setPage={setPage} />
        
        }

        { page === 3 &&
        
        <IntroPage3 />

        }
      </div>
  )
}

export default Introduction;