import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import HomeBody from './components/homepage/homebody';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeBody />} />
    </Routes>
  </BrowserRouter>
  </div>
);

reportWebVitals();
