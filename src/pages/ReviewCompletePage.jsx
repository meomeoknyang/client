import React from 'react';
import Bell from '../assets/Review/Bell.svg';
import Close from '../assets/Review/Close.svg';
import {
  PageContainer,
  CloseButton,
  BellImage,
  RestaurantInfo,
  SubText,
  WhiteBox,
  ReviewButton
} from '../styles/pages/ReviewCompletePage';

const ReviewCompletePage = () => {
  return (
    <PageContainer>
      <CloseButton src={Close} alt="닫기" />
      <BellImage src={Bell} alt="종 이미지" />
      <RestaurantInfo>
        <h2>두루정 안산한양대점</h2>
        <span>1번째 도장 깨기 완료!</span>
      </RestaurantInfo>
      <SubText>지금까지 총 1번째 도장 깨기 중이에요!</SubText>
      <WhiteBox />
      <ReviewButton>방금 쓴 리뷰 보러가기</ReviewButton>
    </PageContainer>
  );
};

export default ReviewCompletePage; 