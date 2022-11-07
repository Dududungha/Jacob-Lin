import './style.css';
import tako_jl from '../../assets/images/tako_jl.jpg';

import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="page-body">
            <div id="home-intro">
                <h1>Hello World! I'm Jacob Lin.</h1>
                <img src={tako_jl} alt="tako" width="500" height="auto"/>
                <h3>You can check out my work experience <Link to="Work">here</Link></h3>
                <h3>and my projects <Link to="Projects">here</Link></h3>
                <h3><Link to="Extracurriculars">here</Link> are some of my extracurriculars</h3>
                <h2>This website is a work in progress. I'll be updating the look and adding more as I go :{')'}.</h2>
            </div>
        </div>
    )
}

export default Home;