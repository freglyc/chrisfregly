import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import PurchaseVanGogh from './PurchaseVanGogh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/purchase-van-gogh" element={<PurchaseVanGogh />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
);
