import React from 'react';
import { Container, Header, MainText, HighlightText, ButtonContainer, Button, Logo, SearchIcon, NextIcon } from '../styles/pages/RandomPage';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/svg/logowhite.svg';
import searchIcon from '../assets/svg/searchicon.svg';
import nextIcon from '../assets/svg/next.svg';

const RandomPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <SearchIcon src={searchIcon} alt="Search" onClick={() => navigate('/search')} />
      <Header>오늘, 우리 점심</Header>
      <MainText>
        <HighlightText>랜덤</HighlightText>으로<br />
        고르자!
      </MainText>
      <ButtonContainer>
        <Button onClick={() => navigate('/random-menu')}>
          랜덤으로 메뉴 고를거야
          <NextIcon src={nextIcon} alt="Next" />
        </Button>
        <Button onClick={() => navigate('/custom-choice')}>
          카테고리는 내가 정할래
          <NextIcon src={nextIcon} alt="Next" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default RandomPage;