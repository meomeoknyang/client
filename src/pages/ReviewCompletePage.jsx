import React, { useEffect } from 'react';
import Bell from '../assets/svg/Bell.svg'
import Close from '../assets/svg/Close.svg';
import {
  PageContainer,
  CloseButton,
  BellImage,
  RestaurantInfo,
  SubText,
  WhiteBox,
  ReviewButton
} from '../styles/pages/ReviewCompletePage';
import { useRestaurant } from '../utils/api/Restaurant';
import { useParams } from 'react-router-dom';

const ReviewCompletePage = () => {
  const {id} = useParams();
  const { restaurantData, loading, error, fetchRestaurantData } = useRestaurant();
  useEffect(() => {
    if (id) {
      fetchRestaurantData(id);
    }
  }, [id, fetchRestaurantData]);
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  const restaurantName = restaurantData?.data?.name || '식당';
  const visitCount = restaurantData?.data?.visit_count || 0;
  return (
    <PageContainer>
      <CloseButton src={Close} alt="닫기" />
      <BellImage src={Bell} alt="종 이미지" />
      <RestaurantInfo>
        <h2>{restaurantName}</h2>
        <span>{visitCount}번째 도장 깨기 완료!</span>
      </RestaurantInfo>
      <SubText>지금까지 총 1번째 도장 깨기 중이에요!</SubText>
      <WhiteBox />
      <ReviewButton>방금 쓴 리뷰 보러가기</ReviewButton>
    </PageContainer>
  );
};

export default ReviewCompletePage; 