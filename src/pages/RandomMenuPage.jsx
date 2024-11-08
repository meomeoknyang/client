import React, { useState } from 'react';
import { Container, HeaderWrapper, BackIcon, Header, TabContainer, Tab, ExampleBox, ResultModal, CloseButton, ButtonContainer, Button } from '../styles/pages/RandomMenuPage';
import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/svg/back.svg';
import svgExample from '../assets/svg/example3D.svg';

const RandomMenuPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('식당');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');

  const handleTabClick = (tab) => setSelectedTab(tab);
  const handleRandomPick = () => {
    const randomResults = ['마라미방', '정직유부', '한그릇'];
    const randomResult = randomResults[Math.floor(Math.random() * randomResults.length)];
    setResult(randomResult);
    setShowResult(true);
  };

  return (
    <Container>
      <HeaderWrapper>
        <BackIcon src={backIcon} alt="뒤로가기" onClick={() => navigate('/random')} />
        <Header>랜덤뽑기</Header>
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

      {/* Pick Button */}
      <ButtonContainer>
        <Button onClick={handleRandomPick}>
          {selectedTab === '식당' ? '식당 메뉴 뽑기' : '카페 메뉴 뽑기'}
        </Button>
      </ButtonContainer>

      {/* Result Modal */}
      {showResult && (
        <ResultModal>
          <CloseButton onClick={() => setShowResult(false)}>X</CloseButton>
          <h2>{selectedTab} 메뉴 랜덤뽑기 결과</h2>
          <p>{result}</p>
        </ResultModal>
      )}
    </Container>
  );
};

export default RandomMenuPage;
