import step_jl from "../../assets/images/step_jl.jpg";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import paper from "../../assets/images/paper.png";
import resume_pdf from "../../assets/images/Jacob_Lin_Resume.pdf";

import './style.css';

function About() {
    return (
        <div className="page-body">
            <div style={{textAlign:"center"}}>
                <img src={step_jl} alt="step" width="500px"/>
            </div>
            <h1>About Me</h1>
            <p>Hey! I'm Jacob Lin. I'm currently in my second year studying Computer Science at University of California - San Diego. I'm still exploring where I want to go with Computer Science, but I would especially love to work in Virtual Reality (just thinking about where this could go gets me so excited!). Currently I have the most experience with frontend work in web and app development. Beyond that, I’ve been a part of the Association for Computing Machinery at UCSD as their Bit-Byte director and as the Vice President Membership, and it has been such a treat organizing events and working with my team to create a comfortable space for anyone interested in computing.</p>
            <h1>Education</h1>
            <div>
                <h2>B.S. Computer Science - University of California, San Diego</h2>
                <h3>2020 - 2024</h3>
                <h3>Coursework</h3>
                <ul>
                    <li>Advanced Data Structures</li>
                    <li>Computer Organization and Systems Programming</li>
                    <li>Design and Analysis of Algorithms</li>
                    <li>Software Engineering</li>
                    <li>Components and Design for Digital Systems</li>
                </ul>
            </div>
            <div id="contact">
                <a href={resume_pdf}><img src={paper} alt="resume" height="50px"/></a>
                <a href="https://github.com/Dududungha"><img src={github} alt="github" height="50px"/></a>
                <a href="https://www.linkedin.com/in/jacobcdlin/"><img src={linkedin} alt="linkedin" height="50px"/></a>
            </div>
        </div>
    )
}

export default About;