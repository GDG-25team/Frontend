import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/gloval/Navbar';
import Resume from './components/Resume.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
