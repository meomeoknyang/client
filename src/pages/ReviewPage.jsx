import React, { useState } from 'react';
import PhotoClick from '../assets/Review/PhotoClick.svg';
import Pencil from '../assets/Review/Pencil.svg';
import Close from '../assets/Review/Close.svg';
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
  ReviewTitle
} from '../styles/pages/ReviewPage';
import { useNavigate } from 'react-router-dom';

const ReviewPage = () => {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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
      setImage(URL.createObjectURL(file));
    }
  };

  const handleNextClick = () => {
    if (selectedKeywords.length === 0 || !image || !review.trim()) {
      alert('필수 항목을 채워주세요.');
      return;
    }
    navigate('/review/complete');
  };

  return (
    <PageContainer>
      <CloseButton src={Close} alt="닫기" />
      <RestaurantInfo>
        <h2>두루정 안산한양대점</h2>
        <span>1번째 도장 깨기네요!</span>
      </RestaurantInfo>
      
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
        disabled={selectedKeywords.length === 0 || !image || !review.trim()}
      >
        다음
      </NextButton>
    </PageContainer>
  );
};

export default ReviewPage;