import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomPageContainer, HeaderWrapper, BackIcon, Header, ButtonContainer, Button, NextIcon, ExampleBox } from '../styles/pages/CustomPage';
import { TabContainer, Tab } from '../styles/pages/RandomMenuPage';
import backIcon from '../assets/svg/back.svg';
import svgExample from '../assets/svg/example3D2.svg';
import nextIcon from '../assets/svg/next.svg';

const CustomPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('식당');

  const handleTabClick = (tab) => setSelectedTab(tab);

  return (
    <CustomPageContainer>
      <HeaderWrapper>
        <BackIcon src={backIcon} alt="뒤로가기" onClick={() => navigate('/random')} />
        <Header>커스텀 OO</Header>
      </HeaderWrapper>

      {/* Tab Container */}
      <TabContainer>
        <Tab selected={selectedTab === '식당'} onClick={() => handleTabClick('식당')}>식당</Tab>
        <Tab selected={selectedTab === '카페'} onClick={() => handleTabClick('카페')}>카페</Tab>
      </TabContainer>

      {/* Example Box */}
      <ExampleBox>
        <img src={svgExample} alt="3D 예시" />
      </ExampleBox>

      {/* Navigation Buttons */}
      <ButtonContainer>
        <Button onClick={() => navigate('/category')}>
          카테고리 설정하기
          <NextIcon src={nextIcon} alt="Next" />
        </Button>
        <Button onClick={() => navigate('/customchoice')}>
          선택지 적고 고르기
          <NextIcon src={nextIcon} alt="Next" />
        </Button>
      </ButtonContainer>
    </CustomPageContainer>
  );
}

export default CustomPage;