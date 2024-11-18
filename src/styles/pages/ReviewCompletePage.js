import styled from 'styled-components';

export const PageContainer = styled.div`
  background: linear-gradient(180deg, #FF6F00 -25.58%, #F0F0F3 18.37%);
  min-height: 100vh;
  padding: 1.25rem;
  font-family: 'Noto Sans KR', sans-serif !important;
  position: relative;
`;

export const CloseButton = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
  margin-top: 2.67rem;
`;


export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  
  h2 {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem;
    letter-spacing: -0.0375rem;
  }
  
  span {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem;
    letter-spacing: -0.0375rem;
  }
`;

export const SubText = styled.p`
  margin-top: 0.5rem;

  color: rgba(0, 0, 0, 0.75);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;

export const ReviewButton = styled.button`
  width: 100%;
  color: white;
  border: none;
  margin-bottom: 1.69rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0.625rem;
  background: #FF6F00;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;

  display: inline-flex;
  padding: 0.75rem 6.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const StampImage = styled.img`
  display: block;
  margin: 6.44rem auto 11.5rem;
  width: 16.125rem;
  height: 16.125rem;
  flex-shrink: 0;
  height: auto;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
`;