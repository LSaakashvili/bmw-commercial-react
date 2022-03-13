import { useRef, useState } from "react";
import LoadingVideo from '../../video/loading.mp4';

const LoadingPage2 = (props) => {
    const [paused, setPaused] = useState(false);

    const onskip = () => {
        const video = document.getElementById("video");
        props.minusOpacity();
        video.pause();
        setPaused(true);
        setTimeout(() => {
            window.location.href = "/intro"
        }, 2400);
    }

    return (
        <div id="LoadingPage" onClick={ onskip } ref={props.backgroundRef}>
            <video autoPlay id="video">
                <source src={ LoadingVideo } type="video/mp4" />
            </video>
        </div>
    )
}

export default LoadingPage2;