import React, { useEffect, useRef, useState } from "react";
import './sass/LoadingPage.scss';
import CursorPlay from "./cursors/play.png";
import LoadingPage1 from "./pages/LoadingPage1";
import LoadingPage2 from "./pages/LoadingPage2";

const LoadingPage = () => {
    const backgroundRef = useRef(null);
    const cursorRef = useRef(null);

    const [ page, setPage ] = useState(1);

    useState(() => {
        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, []);

    const increaseStep = () => {
        setPage(2);
    }

    const minusOpacity = () => {
        backgroundRef.current.style.opacity = "0";
    }

    const plusOpacity = () => {
        backgroundRef.current.style.opacity = "100";
    }

    return (

    <div id="BlackBackground">
    <img id="CustomCursor" src={CursorPlay} ref={cursorRef} />

    { page === 1 && 
    <LoadingPage1 plusOpacity={plusOpacity} minusOpacity={minusOpacity}
                  increaseStep={increaseStep} page={page} backgroundRef={backgroundRef}
                  />
    }

    { page === 2 &&
    <LoadingPage2 minusOpacity={minusOpacity} backgroundRef={backgroundRef} />
    }

    </div>

    )
}

export default LoadingPage;