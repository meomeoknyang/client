import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import StampPage from './pages/StampPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* 예시 네비게이션이 필요한 페이지들 */}
          <Route path="/home" element={<Layout hasNavigation><LoginPage /></Layout>} />
          <Route path="/stamp" element={<Layout hasNavigation> <StampPage/></Layout>}/>
          <Route path="/random" element={<Layout hasNavigation> </Layout>}/>
          <Route path="/map" element={<Layout hasNavigation><MapPage /></Layout>} />
          <Route path="/mypage" element={<Layout hasNavigation> </Layout>}/>
          {/* 네비게이션이 필요 없는 페이지들 */}
          <Route path="/" element={<Layout><LoginPage /></Layout>} />
          <Route path="/review" element={<Layout><ReviewPage /></Layout>} />
          <Route path="/review/complete" element={<Layout><ReviewCompletePage /></Layout>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
