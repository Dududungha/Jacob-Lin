import { Link } from "react-router-dom";

import home_button_pic from '../../assets/images/home_button_pic.png';

import './Navbar.css';

function Navbar() {
    return (
        <div id="navbar-body">
            <div id="home-button">
                <Link to="/"><img src={home_button_pic} alt="Home" width="50" height="50"/></Link>
            </div>
            <nav id="navbar-text">
                <Link to="Work">Work</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Extracurriculars">Extracurriculars</Link>
                <Link to="About">About</Link>
                <Link to="Inspiration">Inspiration</Link>
            </nav>
        </div>
    )
}

export default Navbar;