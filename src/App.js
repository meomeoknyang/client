import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import RestaurantSearchPage from './pages/stamp/search/RestaurantSearchPage.jsx';
import RestaurantPage from './pages/stamp/RestaurantPage.jsx'
import CafePage from './pages/stamp/CafePage';
import DetailHomePage from './pages/stamp/detail/DetailHomePage.jsx';
import MapPage from './pages/MapPage';
import DetailMenuPage from './pages/stamp/detail/DetailMenuPage.jsx';
import DetailPicturePage from './pages/stamp/detail/DetailPicturePage.jsx';
import DetailReviewPage from './pages/stamp/detail/DetailReviewPage.jsx';
import { RestaurantProvider } from './api/Restaurant.js';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      <RestaurantProvider>
        <Routes>
          {/* 예시 네비게이션이 필요한 페이지들 */}
          <Route path="/map" element={<Layout hasNavigation><MapPage/></Layout>}/>
          <Route path="/mypage" element={<Layout hasNavigation> <MyPage/> </Layout>}/>
          <Route path="/home" element={<Layout $hasNavigation><LoginPage /></Layout>} />

          <Route path="/restaurant">
              <Route index element={<Layout $hasNavigation><RestaurantPage /></Layout>} />
              <Route path="detail/:id" element={<Layout><DetailHomePage /></Layout>} />
              <Route path="detail/:id/menu" element={<Layout><DetailMenuPage /></Layout>} />
              <Route path="detail/:id/picture" element={<Layout><DetailPicturePage /></Layout>} />
              <Route path="detail/:id/review" element={<Layout><DetailReviewPage /></Layout>} />
              <Route path="search" element={<Layout $hasNavigation><RestaurantSearchPage /></Layout>} />
            </Route>

          <Route path="/cafe" >
            <Route index element={<Layout $hasNavigation><CafePage/></Layout>}/>
          </Route>

          {/* 네비게이션이 필요 없는 페이지들 */}
          <Route path="/review" element={<Layout><ReviewPage /></Layout>} />
          <Route path="/review/complete" element={<Layout><ReviewCompletePage /></Layout>} />
        </Routes>
        </RestaurantProvider>
      </Router>
    </>
  );
}

export default App;
