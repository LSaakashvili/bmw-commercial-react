import { Spiral as Hamburger } from 'hamburger-react';

const Navbar = (props) => {

    return (
        <nav style={{ position:"fixed", top:"3vw", right:"4vw" }}> 
        <div id="left-nav"></div>
        <ul>
        {props.navOpen &&
        <div id="ul">
        <li>
        <a href="/intro">INTRODUCTION</a>
        </li>
        
        <li>
        <a href="/history">HISTORY</a>
        </li>
        
        <li>
        <a href="/specs">SPECS</a>
        </li>
        </div>
        }
        <div id="hamburger">
        <Hamburger toggled={props.navOpen} toggle={props.setNavOpen} />
        </div>
        </ul>
      </nav>
    )
}

export default Navbar;