import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/gloval/Navbar';
import Career from './components/resume/Career.jsx';
import Certificate from './components/resume/Certificate.jsx';
import Intro from './components/resume/Intro.jsx';
import Result from './components/resume/Result.jsx';
import Notices from './components/notice/Notices.jsx';
import NoticeDetail from './components/notice/NoticeDetail.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-white"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume/career" element={<Career />} />
          <Route path="/resume/certificate" element={<Certificate />} />
          <Route path="/resume/intro" element={<Intro />} />
          <Route path="/resume/result" element={<Result />} />
          <Route path="/notice" element={<Notices />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
        </Routes> 
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
