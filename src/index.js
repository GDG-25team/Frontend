import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import Navbar from './components/gloval/Navbar';
import Career from './components/resume/Career.jsx';
import Certificate from './components/resume/Certificate.jsx';
import Intro from './components/resume/Intro.jsx';
import Result from './components/resume/Result.jsx';
import Notices from './components/notice/Notices.jsx';
import NoticeDetail from './components/notice/NoticeDetail.jsx';
import Login from './Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// location 체크를 위한 컴포넌트 생성
function AppWrapper() {
  const location = useLocation();
  const pathsToExclude = ['/', '/login'];
  const shouldRenderGlobalComponent = !pathsToExclude.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white"> 
      {shouldRenderGlobalComponent && <Navbar />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume/career" element={<Career />} />
        <Route path="/resume/certificate" element={<Certificate />} />
        <Route path="/resume/intro" element={<Intro />} />
        <Route path="/resume/result" element={<Result />} />
        <Route path="/notice" element={<Notices />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </div>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
