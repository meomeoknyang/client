import React from 'react';
import { Container, Header, ProfileSection, Avatar, UserInfo, UserName, InfoIcon, Bar, UserOptions, Option, Section, SectionTitle, GradeSlider, GradeCard, Icon, GradeTitle, GradeInfo, ImageSlider, ImageCardContainer, ImageCard, TextOverlay } from '../styles/pages/MyPage';
import ReviewIcon from '../assets/svg/review.svg';
import EditIcon from '../assets/svg/edit.svg';
import BarIcon from '../assets/svg/bar.svg'
import Grade1Icon from '../assets/svg/grade1.svg';
import Grade2Icon from '../assets/svg/grade2.svg';
import Grade3Icon from '../assets/svg/grade3.svg';
import Grade4Icon from '../assets/svg/grade4.svg';
import LocationImage from '../assets/svg/location1.svg';

const MyPage = () => {
  return (
    <Container>
      <Header>마이페이지</Header>
      <ProfileSection>
        <Avatar />
        <UserInfo>
          <UserName>감자학생, 닉네임</UserName>
          <UserOptions>
            <Option>
              <InfoIcon src={ReviewIcon} alt="ReviewInfoIcon" />
              리뷰관리
            </Option>
              <Bar src={BarIcon} alt="Bar" />
            <Option>
              <InfoIcon src={EditIcon} alt="EditInfoIcon" />
              내 정보 수정
            </Option>
          </UserOptions>
        </UserInfo>
      </ProfileSection>

      <Section>
        <SectionTitle>내 등급 확인하기</SectionTitle>
        <GradeSlider>
          <GradeCard>
            <GradeTitle>깨작학사</GradeTitle>
            <Icon src={Grade1Icon} alt="Bachelor Icon" />
            <GradeInfo>첫도장깨기 5회<br />연속도장 2회</GradeInfo>
          </GradeCard>
          <GradeCard>
            <GradeTitle>남남석사</GradeTitle>
            <Icon src={Grade2Icon} alt="Master Icon" />
            <GradeInfo>첫도장깨기 10회<br />연속도장 5회</GradeInfo>
          </GradeCard>
          <GradeCard>
            <GradeTitle>찹찹박사</GradeTitle>
            <Icon src={Grade3Icon} alt="Doctorate Icon" />
            <GradeInfo>첫도장깨기 25회<br />연속도장 10회</GradeInfo>
          </GradeCard>
          <GradeCard>
            <GradeTitle>꿀꺽교수</GradeTitle>
            <Icon src={Grade4Icon} alt="Professor Icon" />
            <GradeInfo>첫도장깨기 50회<br />연속도장 20회</GradeInfo>
          </GradeCard>
        </GradeSlider>
      </Section>

      <Section>
        <SectionTitle>내가 최근 도장 깬 장소</SectionTitle>
        <ImageSlider>
          <ImageCardContainer>
            <ImageCard src={LocationImage} alt="Location 1" />
            <TextOverlay>한식 신선샤브칼국수</TextOverlay>
          </ImageCardContainer>
          <ImageCardContainer>
            <ImageCard src={LocationImage} alt="Location 2" />
            <TextOverlay>한식 신선샤브칼국수</TextOverlay>
          </ImageCardContainer>
          <ImageCardContainer>
            <ImageCard src={LocationImage} alt="Location 3" />
            <TextOverlay>한식 신선샤브칼국수</TextOverlay>
          </ImageCardContainer>
          <ImageCardContainer>
            <ImageCard src={LocationImage} alt="Location 4" />
            <TextOverlay>한식 신선샤브칼국수</TextOverlay>
          </ImageCardContainer>
          <ImageCardContainer>
            <ImageCard src={LocationImage} alt="Location 5" />
            <TextOverlay>한식 신선샤브칼국수</TextOverlay>
          </ImageCardContainer>
        </ImageSlider>
      </Section>
    </Container>
  );
};

export default MyPage;
