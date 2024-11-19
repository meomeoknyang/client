import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import RandomPage from './pages/RandomPage'; 
import RandomMenuPage from './pages/RandomMenuPage';
import CategoryPage from './pages/CategoryPage';
import CustomchoicePage from './pages/CustomchoicePage';
import SplashPage from './pages/SplashPage';
import CustomPage from './pages/CustomPage';
import StampPage from './pages/StampPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';

import DetailHomePage from './pages/stamp/detail/DetailHomePage.jsx';
import MapPage from './pages/MapPage';
import DetailMenuPage from './pages/stamp/detail/DetailMenuPage.jsx';
import DetailPicturePage from './pages/stamp/detail/DetailPicturePage.jsx';
import DetailReviewPage from './pages/stamp/detail/DetailReviewPage.jsx';
import { RestaurantProvider } from './utils/api/Restaurant.js';
import SignupPage from './pages/SignupPage';
import SignupDetailPage from './pages/SignupDetailPage';

import CafePage from './pages/stamp/CafePage';
import CafeDetailHomePage from './pages/stamp/detail/CafeDetailHomePage.jsx';
import CafeDetailMenuPage from './pages/stamp/detail/CafeDetailMenuPage.jsx';
import CafeDetailPicturePage from './pages/stamp/detail/CafeDetailPicturePage.jsx';
import CafeDetailReviewPage from './pages/stamp/detail/CafeDetailReviewPage.jsx';
import CafeSearchPage from './pages/stamp/search/CafeSearchPage.jsx';
import CafeReviewPage from './pages/CafeReviewPage.jsx'
import CafeReviewCompletePage from './pages/CafeReviewCompletePage.jsx';
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
          <Route path="/mypage" element={<Layout hasNavigation> <MyPage/> </Layout>}/>
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
