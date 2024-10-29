import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 예시 네비게이션이 필요한 페이지들 */}
        <Route path="/home" element={<Layout hasNavigation><LoginPage /></Layout>}/>

        {/* 네비게이션이 필요 없는 페이지들 */}
        <Route path="/" element={<Layout><LoginPage /></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
