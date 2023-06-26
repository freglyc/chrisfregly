import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import VanConversion from './VanConversion';
import TheRoad from './TheRoad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="van-conversion" element={<VanConversion />} />
        <Route path="the-road" element={<TheRoad />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
);
