import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Projects from './pages/Projects/Projects';
import Extracurriculars from './pages/Extracurriculars/Extracurriculars';
import About from './pages/About/About';
import Inspiration from './pages/Inspiration/Inspiration';

function App() {
  return (
    <div id="App">
      <HashRouter basename="/">
        <Navbar />
        <div id="body">
          <Routes>
            <Route path="" element={<Home />}/>
            <Route path="Work" element={<Work />}/>
            <Route path="Projects" element={<Projects />}/>
            <Route path="Extracurriculars" element={<Extracurriculars />}/>
            <Route path="About" element={<About />}/>
            <Route path="Inspiration" element={<Inspiration />}/>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
