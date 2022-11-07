import { Link, useLocation } from "react-router-dom";

import home_button_pic from '../../assets/images/home_button_pic.png';

import './style.css';


function Navbar() {
    switch(useLocation().pathname) {
        case '/Work':
            console.log("work");
            break;
        default:
            console.log("home");
    }
    return (
        <div id="navbar-body">
            <div id="home-button">
                <Link to="/"><img src={home_button_pic} alt="Home" width="50" height="50"/></Link>
            </div>
            <nav id="navbar-text">
                <div>
                    <Link to="Work">Work</Link>
                </div>
                <div>
                    <Link to="Projects">Projects</Link>
                </div>
                <div>
                    <Link to="Extracurriculars">Extracurriculars</Link>
                </div>
                <div>
                    <Link to="About">About</Link>
                </div>
                <div>
                    <Link to="Inspiration">Inspiration</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;