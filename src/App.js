import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import RandomPage from './pages/RandomPage'; 
import RandomMenuPage from './pages/RandomMenuPage';
import CategoryPage from './pages/CategoryPage';
import CustomchoicePage from './pages/CustomchoicePage';
import SplashPage from './pages/SplashPage';
import CustomPage from './pages/CustomPage';
import StampPage from './pages/StampPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* 예시 네비게이션이 필요한 페이지들 */}
          <Route path="/random" element={<Layout hasNavigation> <RandomPage/></Layout>}/>
          <Route path="/stamp" element={<Layout hasNavigation> <StampPage/></Layout>}/>
          <Route path="/map" element={<Layout hasNavigation> </Layout>}/>
          <Route path="/mypage" element={<Layout hasNavigation> </Layout>}/>
          <Route path="/randommenu" element={<Layout hasNavigation><RandomMenuPage /></Layout>} />
          <Route path="/custom" element={<Layout hasNavigation><CustomPage /></Layout>} />
          <Route path="/category" element={<Layout hasNavigation><CategoryPage /></Layout>} />
          <Route path="/customchoice" element={<Layout hasNavigation><CustomchoicePage /></Layout>} />
          {/* 네비게이션이 필요 없는 페이지들 */}
          <Route path="/" element={<Layout><SplashPage /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/review" element={<Layout><ReviewPage /></Layout>} />
          <Route path="/review/complete" element={<Layout><ReviewCompletePage /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
