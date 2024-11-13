import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import RestaurantPage from './pages/stamp/RestaurantPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import RestaurantSearchPage from './pages/stamp/RestaurantSearchPage.jsx';
import CafePage from './pages/stamp/CafePage';
import StampDetailPage from './pages/stamp/StampDetailPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* 예시 네비게이션이 필요한 페이지들 */}
          <Route path="/home" element={<Layout $hasNavigation><LoginPage /></Layout>} />
          <Route path="/restaurant" >
            <Route index element={<Layout $hasNavigation> <RestaurantPage/></Layout>}/>
          </Route>
          <Route path='/restaurant/detail' element={<Layout><StampDetailPage/></Layout>} />

          <Route path="/cafe" >
            <Route index element={<Layout $hasNavigation> <CafePage/></Layout>}/>
          </Route>
          <Route path='/restaurant/search' element={<Layout $hasNavigation><RestaurantSearchPage/></Layout>} />
          <Route path="/random" element={<Layout $hasNavigation> </Layout>}/>
          <Route path="/mypage" element={<Layout $hasNavigation> </Layout>}/>
          <Route path="/home" element={<Layout hasNavigation><LoginPage /></Layout>} />
          <Route path="/random" element={<Layout hasNavigation> </Layout>}/>
          <Route path="/map" element={<Layout $hasNavigation><MapPage /></Layout>} />
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
