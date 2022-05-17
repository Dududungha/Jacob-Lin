import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
