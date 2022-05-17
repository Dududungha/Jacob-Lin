import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/Jacob-Lin" element={<App />}>
            <Route path="" element={<Home />}/>
            <Route path="About" element={<About />}/>
            <Route path="Links" element={<Links />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
