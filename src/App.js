import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RandomPage from './pages/RandomPage'; 
import SplashPage from './pages/SplashPage';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        {/* 예시 네비게이션이 필요한 페이지들 */}
        <Route path="/home" element={<Layout hasNavigation><HomePage /></Layout>} />
        <Route path="/random" element={<Layout hasNavigation><RandomPage /></Layout>} />

        {/* 네비게이션이 필요 없는 페이지들 */}
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
