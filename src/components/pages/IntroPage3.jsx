import { useRef } from "react";
import "../sass/IntroPage3.scss";

const IntroPage3 = (setPage) => {
    const step3left = useRef(null);
    const step3right = useRef(null);

    return (
    <div id="Introduction">
        <div id="left-side" ref={step3left}>
            <div>
                <h1>BMW M5</h1>
                <h3>COMPETITION</h3>
                <p>With More Newton-Meters And Horse-Powers</p>
            </div>
        <button onClick={() => {window.location.href = "/history"}}>NEXT</button>
        </div>
        <div id="right-side" ref={step3right}>
            <div id="whitebmw"></div>
        </div>
    </div>
    )
}

export default IntroPage3;