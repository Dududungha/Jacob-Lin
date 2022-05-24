import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Routes, Route} from "react-router-dom";

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Links" element={<Links />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
