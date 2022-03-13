import { useRef } from "react";
import "../sass/IntroPage2.scss";

const IntroPage2 = (props) => {
    const step2left = useRef(null);
    const step2right = useRef(null);

    const increasePage = () => {
      step2left.current.style.opacity = 0;
      step2right.current.style.opacity = 0;
      setTimeout(() => {
        props.setPage(3);
      }, 1000);
    }

    return (
    <div id="Introduction">
        <div id="left-side" ref={step2left}>
            <div id="angels-img"></div>
        </div>
        <div id="right-side" ref={step2right}>
            <h1>Angel Eyes</h1>
            <p>Angel Eyes are also known as "Halo Rings", these are a signature trademark of BMW vehicles on the headlights.</p>
            <button onClick={increasePage}>NEXT</button>
        </div>
    </div>
    )
}

export default IntroPage2;