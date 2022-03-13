const IntroPage1 = (props) => {
    return (
        <div id="Introduction">
          <div id="left-side" ref={props.step1left}>
            <h1>MOST POWERFUL SEDAN IN THE WORLD</h1>
            <button onClick={props.increasePage}>NEXT</button>
          </div>
          <div id="right-side" ref={props.step1right}>
            <div id="bmw-img"></div>
          </div>
        </div>
    )
}

export default IntroPage1;