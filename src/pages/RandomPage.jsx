import React from 'react';
import { Container, Header, MainText, ButtonContainer, Button } from '../styles/pages/RandomPage';
import { useNavigate } from 'react-router-dom';

const RandomPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>오늘, 우리 점심</Header>
      <MainText>랜덤으로 고르자!</MainText>
      <ButtonContainer>
        <Button onClick={() => navigate('/random-menu')}>랜덤으로 메뉴 고를거야</Button>
        <Button onClick={() => navigate('/custom-choice')}>카테고리는 내가 정할래</Button>
      </ButtonContainer>
    </Container>
  );
};

export default RandomPage;