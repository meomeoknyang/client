import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #F0F0F3;
  min-height: 100vh;
  padding: 1.25rem;
  font-family: 'Noto Sans KR', sans-serif !important;
  position: relative;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 0.544rem;
  right: 1.25rem;
  cursor: pointer;
`;

export const RestaurantInfo = styled.div`
  margin-top: 2.544rem;
  margin-bottom: 2.813rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem; /* 135% */
    letter-spacing: -0.0375rem;
  }
  
  span {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem; /* 135% */
    letter-spacing: -0.0375rem;
  }
`;

export const Section = styled.div`
  background: white;
  border-radius: 0.625rem;
  padding: 1.75rem 1.438rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 0 0.625rem 0.625rem rgba(0, 0, 0, 0.02);
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const KeywordButton = styled.button`
  border: 0.063rem solid ${props => props.isSelected ? '#FF6F00' : 'rgba(0, 0, 0, 0.1)'};
  background-color: ${props => props.isSelected ? '#FFF0E3' : '#FFFFFF'};
  color: ${props => props.isSelected ? '#FF6F00' : '#000000'};
  opacity: ${props => props.isSelected ? 1 : 0.52};
  border-radius: 0.3125rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0225rem;
  padding: 0.75rem;
  cursor: pointer;
  box-shadow: 0 0.938rem 1.563rem 0 rgba(0, 0, 0, 0.02), 0 0.688rem 0.938rem 0 rgba(0, 0, 0, 0.03);
  display: inline-block;
  width: fit-content;
  min-width: 7.5rem;
  max-width: 100%;
  white-space: normal;
  word-wrap: break-word;
  font-family: "Noto Sans KR";
  font-style: normal;
  gap: 0.25rem;
`;

export const ImageUploadBox = styled.div`
  background-color: #EFEFEF;
  border-radius: 0.3125rem;
  width: 18.25rem;
  height: 13.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  
  span {
    color: rgba(0, 0, 0, 0.20);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.0225rem;
  }
`;

export const ReviewInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  min-height: 6.25rem;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.0225rem;
  padding-left: 1.4375rem;
  padding-right: 1.4375rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const CharCount = styled.div`
  text-align: right;
  
  .current {
    color: rgba(0, 0, 0, 0.86);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
  
  .max {
    color: rgba(0, 0, 0, 0.20);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
`;

export const NextButton = styled.button`
  color: white;
  border: none;
  margin-top: 2rem;
  margin-bottom: 0.438rem;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.625rem;
  background: #FF6F00;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
  margin-left: auto;
  display: block;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.313rem;
`;

export const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

export const Required = styled.span`
  background-color: #FF6F00;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 3.125rem;
  font-size: 0.75rem;
  font-family: 'Noto Sans KR', sans-serif;
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const Divider = styled.div`
  height: 0.063rem;
  background-color: #E4E4E4;
  margin: 1.25rem 0;
  width: 18.25rem;
  flex-shrink: 0;
  stroke-width: 0.063rem;
  stroke: #E4E4E4;
  
`;

export const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  img {
    width: 1rem;
    height: 1rem;
  }
  
  span {
    color: rgba(0, 0, 0, 0.75);
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
`;