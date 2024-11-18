import React, { useEffect, useState } from 'react';
import PhotoClick from '../assets/svg/PhotoClick.svg';
import Pencil from '../assets/svg/Pencil.svg';
import Close from '../assets/svg/Close.svg';
import ReviewGrayStar from '../assets/svg/ReviewGrayStar.svg';
import ReviewYellowStar from '../assets/svg/ReviewYellowStar.svg';
import Loading from '../assets/Login/Loading.gif';
import {
  PageContainer,
  CloseButton,
  RestaurantInfo,
  Section,
  QuestionTitle,
  Required,
  KeywordButton,
  ImageUploadBox,
  UploadedImage,   
  ReviewInput,
  ReviewTextArea,
  CharCount,
  NextButton,
  KeywordContainer,
  Divider,
  ReviewTitle,
  StarContainer,
  StarImage,
  LoadingOverlay,
  LoadingImage
} from '../styles/pages/ReviewPage';
import { useNavigate, useParams } from 'react-router-dom';
import { useRestaurant } from '../utils/api/Restaurant';
import axiosInstance from '../utils/axiosConfig';

const CafeReviewPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [userVisitCount, setUserVisitCount] = useState(0);

  const fetchRestaurantData = async (id) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/cafes/${id}/`);
      if (response.data.status === 'success') {
        setRestaurantData(response.data);
        setUserVisitCount(response.data.data.visit_count);
      }
    } catch (err) {
      setError(err);
      console.error('Restaurant data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRestaurantData(id);
    }
  }, [id]);

  if (loading) {
    return (
      <LoadingOverlay>
        <LoadingImage src={Loading} alt="로딩중" />
      </LoadingOverlay>
    );
  }

  if (error) return <div>에러가 발생했습니다.</div>;

  if (!restaurantData?.data) return null;

  const restaurantName = restaurantData.data.name;
  // console.log('Restaurant Name:', restaurantName);
  // console.log('Full Restaurant Data:', restaurantData.data);

  const keywords = [
    '여기 없어지면 에리카 퇴학합니다.',
    '지갑 지키고 싶을 때, 여기 추천',
    '할머니 집 같이 정 많은 식당',
    '동기들과 함께라면 럭키비키',
    '재료가 살아있네~'
  ];

  const handleKeywordSelect = (keyword) => {
    setSelectedKeywords(prev => {
      if (prev.includes(keyword)) {
        return prev.filter(k => k !== keyword);
      }
      return [...prev, keyword];
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleNextClick = async () => {
    if (selectedKeywords.length === 0 || !imageFile || !review.trim() || rating === 0) {
      alert('필수 항목을 채워주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('place_type', 'cafe');
      formData.append('place_id', id);
      formData.append('rating', rating);
      formData.append('comment', review);
      
      const keywordIndices = selectedKeywords.map(keyword => 
        keywords.indexOf(keyword) + 1
      );
      
      keywordIndices.forEach((keywordIndex) => {
        formData.append('keywords', [keywordIndex]);
      });

      if (imageFile) {
        formData.append('images', imageFile);
      }

      const response = await axiosInstance.post(
        `/reviews/place/cafe/${id}/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        navigate(`/cafes/review/${id}/complete`, {
          state: { userVisitCount: userVisitCount }
        });
      } else {
        alert('리뷰 등록에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Review submission error:', error);
      alert('리뷰 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <CloseButton src={Close} alt="닫기" onClick={handleClose} />
      <RestaurantInfo>
        <h2>{restaurantName || '식당'}</h2>
        <span>{(userVisitCount || 0) + 1}번째 도장 깨기네요!</span>
      </RestaurantInfo>
      
      <Section>
        <QuestionTitle>
          이 가게에 별점을 남겨주세요! <Required>필수</Required>
        </QuestionTitle>
        <StarContainer>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarImage
              key={star}
              src={star <= rating ? ReviewYellowStar : ReviewGrayStar}
              alt={`별점 ${star}점`}
              onClick={() => setRating(star)}
            />
          ))}
        </StarContainer>
      </Section>

      <Section>
        <QuestionTitle>
          가게에 가장 어울리는 키워드는? <Required>필수</Required>
        </QuestionTitle>
        <KeywordContainer>
          {keywords.map((keyword) => (
            <KeywordButton 
              key={keyword}
              isSelected={selectedKeywords.includes(keyword)} 
              onClick={() => handleKeywordSelect(keyword)}
            >
              {keyword}
            </KeywordButton>
          ))}
        </KeywordContainer>
      </Section>

      <Section>
        <QuestionTitle>
          사진과 한 줄 리뷰를 작성해주세요. <Required>필수</Required>
        </QuestionTitle>
        <ImageUploadBox onClick={() => document.getElementById('imageInput').click()}>
          {image ? (
            <UploadedImage src={image} alt="업로드된 이미지" />
          ) : (
            <>
              <img src={PhotoClick} alt="사진 추가" />
              <span>사진을 추가하려면 클릭하세요.</span>
            </>
          )}
        </ImageUploadBox>
        <input
          type="file"
          id="imageInput"
          hidden
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Divider />
        <ReviewTitle>
          <img src={Pencil} alt="연필" />
          <span>리뷰를 작성해주세요</span>
        </ReviewTitle>
        <ReviewInput>
          <ReviewTextArea
            placeholder="욕설, 비방, 명예훼손성 표현은 누군가에게 상처가 될 수 있습니다."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength={400}
          />
        </ReviewInput>
        <CharCount>
          <span className="current">{review.length}</span>
          <span className="max">/400</span>
        </CharCount>
      </Section>

      <NextButton 
        onClick={handleNextClick}
        disabled={selectedKeywords.length === 0 || !image || !review.trim() || rating === 0 || isSubmitting}
      >
        다음
      </NextButton>
      {isSubmitting && (
        <LoadingOverlay>
          <LoadingImage src={Loading} alt="로딩중" />
        </LoadingOverlay>
      )}
    </PageContainer>
  );
};

export default CafeReviewPage;