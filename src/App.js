import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import ReStampPage from './pages/stamp/ReStampPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import StampSearchPage from './pages/stamp/StampSearchPage';
import CaStampPage from './pages/stamp/CaStampPage';
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
          <Route path="/stamp/restaurant" >
            <Route index element={<Layout $hasNavigation> <ReStampPage/></Layout>}/>
          </Route>
          <Route path='/stamp/restaurant/detail' element={<Layout><StampDetailPage/></Layout>} />

          <Route path="/stamp/cafe" >
            <Route index element={<Layout $hasNavigation> <CaStampPage/></Layout>}/>
          </Route>
          <Route path='/stamp/search' element={<Layout $hasNavigation><StampSearchPage/></Layout>} />
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
