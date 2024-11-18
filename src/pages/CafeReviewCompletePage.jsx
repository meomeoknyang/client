import React, { useEffect, useState } from 'react';
import Close from '../assets/svg/Close.svg';
import ReviewCompleteStamp from '../assets/ReviewCompleteStamp.png';
import Loading from '../assets/Login/Loading.gif';
import {
  PageContainer,
  CloseButton,
  RestaurantInfo,
  SubText,
  StampImage,
  ReviewButton,
  LoadingOverlay,
  LoadingImage
} from '../styles/pages/ReviewCompletePage';
import { useRestaurant } from '../utils/api/Restaurant';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosConfig';

const CafeReviewCompletePage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const userVisitCount = location.state?.userVisitCount || 0;
  const { restaurantData, loading, error, fetchRestaurantData } = useRestaurant();
  const [totalReviewCount, setTotalReviewCount] = useState(0);

  const fetchTotalReviewCount = async () => {
    try {
      // console.log('Fetching total review count...');
      const response = await axiosInstance.get('/reviews/counts');
      // console.log('Total review count response:', response.data);
      
      if (response.data.status === 'success') {
        setTotalReviewCount(response.data.data);
      }
    } catch (error) {
      console.error('Total review count fetch error:', error);
      if (error.response) {
        console.log('Error response:', error.response.data);
      }
    }
  };

  const handleNavigateToReviews = () => {
    navigate(`/cafes/detail/${id}/review`);
  };

  useEffect(() => {
    if (id) {
      fetchRestaurantData(id);
      fetchTotalReviewCount();
    }
  }, [id, fetchRestaurantData]);

  if (loading) return (
    <LoadingOverlay>
      <LoadingImage src={Loading} alt="로딩중" />
    </LoadingOverlay>
  );
  if (error) return <div>에러가 발생했습니다.</div>;
  const restaurantName = restaurantData?.data?.name || '카페';

  return (
    <PageContainer>
      <CloseButton 
        src={Close} 
        alt="닫기" 
        onClick={handleNavigateToReviews}
      />
      <RestaurantInfo>
        <h2>{restaurantName}</h2>
        <span>{(userVisitCount || 0) + 1}번째 도장 깨기 완료!</span>
      </RestaurantInfo>
      <SubText>지금까지 총 {totalReviewCount}번째 도장 깨기 중이에요!</SubText>
      <StampImage src={ReviewCompleteStamp} alt="도장 이미지" />
      <ReviewButton onClick={handleNavigateToReviews}>
        방금 쓴 리뷰 보러가기
      </ReviewButton>
    </PageContainer>
  );
};

export default CafeReviewCompletePage; 