import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #F0F0F3;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif !important;
  position: relative;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8.7px;
  right: 20px;
  cursor: pointer;
`;

export const RestaurantInfo = styled.div`
  margin-top: 40.7px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.6px;
  }
  
  span {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.6px;
  }
`;

export const Section = styled.div`
  background: white;
  border-radius: 10px;
  padding: 28px 23px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.02);
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const KeywordButton = styled.button`
  border: 1px solid ${props => props.isSelected ? '#FF6F00' : 'rgba(0, 0, 0, 0.1)'};
  background-color: ${props => props.isSelected ? '#FFF0E3' : '#FFFFFF'};
  color: ${props => props.isSelected ? '#FF6F00' : '#000000'};
  opacity: ${props => props.isSelected ? 1 : 0.52};
  border-radius: 5px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.02), 0px 11px 15px 0px rgba(0, 0, 0, 0.03);
  display: inline-block;
  width: fit-content;
  min-width: 120px;
  max-width: 100%;
  white-space: normal;
  word-wrap: break-word;
  font-family: "Noto Sans KR";
  font-style: normal;
`;

export const ImageUploadBox = styled.div`
  background-color: #EFEFEF;
  border-radius: 5px;
  width: 272px;
  height: 192px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  span {
    color: rgba(0, 0, 0, 0.20);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.36px;
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
  min-height: 100px;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
  padding-left: 23px;
  padding-right: 23px;
  
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
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
  }
  
  .max {
    color: rgba(0, 0, 0, 0.20);
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
  }
`;

export const NextButton = styled.button`
  color: white;
  border: none;
  margin-top: 32px;
  margin-bottom: 7px;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background: #FF6F00;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-left: auto;
  display: block;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const Required = styled.span`
  background-color: #FF6F00;
  color: white;
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #E4E4E4;
  margin: 20px 0;
  width: 292px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #E4E4E4;
  
`;

export const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  
  img {
    width: 16px;
    height: 16px;
  }
  
  span {
    color: rgba(0, 0, 0, 0.75);
font-family: "Noto Sans KR";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.36px;
  }
`;