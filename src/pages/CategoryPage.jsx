import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomPageContainer, HeaderWrapper, BackIcon, Header } from '../styles/pages/CategoryPage';
import { TabContainer, Tab, ExampleBox } from '../styles/pages/RandomMenuPage';
import backIcon from '../assets/svg/back.svg';
import svgExample from '../assets/svg/example3D.svg';

const CategoryPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('식당'); 

  const handleTabClick = (tab) => setSelectedTab(tab);

  return (
    <CustomPageContainer>
      <HeaderWrapper>
        <BackIcon src={backIcon} alt="뒤로가기" onClick={() => navigate('/custom')} />
        <Header>카테고리 OO</Header>
      </HeaderWrapper>

      <TabContainer>
        <Tab selected={selectedTab === '식당'} onClick={() => handleTabClick('식당')}>
          식당
        </Tab>
        <Tab selected={selectedTab === '카페'} onClick={() => handleTabClick('카페')}>
          카페
        </Tab>
      </TabContainer>

      <ExampleBox>
        <img src={svgExample} alt="3D 예시" />
      </ExampleBox>
    </CustomPageContainer>
  );
};

export default CategoryPage;