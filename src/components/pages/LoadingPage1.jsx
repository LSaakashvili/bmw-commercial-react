import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const LoadingPage1 = (props) => {

    const changeStep = () => {
        props.minusOpacity();
        setTimeout(() => {
            props.increaseStep();
            props.plusOpacity();
        }, 2400);
    }

    return (
        <div id="LoadingPage" onClick={changeStep} ref={props.backgroundRef} style={{ display:"grid", gridTemplateColumns:"1fr" }}>
            <h2>BMW M5 2021</h2>
            <div>
             <AutoTyping
                 active
                 textRef='CLICK HERE TO CONTINUE' 
                 writeSpeed={150}
                 deleteSpeed={150}
                 delayToWrite={1000}
                 delayToDelete={2000}
                 id="autotyper"
             />
             <BlinkCursor
                 active
                 blinkSpeed={500}
                 id="autotyper"
             />
             </div>
        </div>
    )
}

export default LoadingPage1;