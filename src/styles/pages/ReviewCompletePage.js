import styled from 'styled-components';

export const PageContainer = styled.div`
  background: linear-gradient(180deg, #FF6F00 -25.58%, #F0F0F3 18.37%);
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

export const BellImage = styled.img`
  display: block;
  margin: 1.87rem auto 0rem;
  width: 6.95213rem;
  height: 6.95213rem;
  transform: rotate(-4.131deg);
  flex-shrink: 0;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

export const WhiteBox = styled.div`
  width: 20.9375rem;
  height: 26.9375rem;
  background: white;
  border-radius: 0.625rem;
  margin: 1.87rem auto 0rem;
  background: var(--Backgrounds-Primary, #FFF);
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.02);
`;

export const ReviewButton = styled.button`
  width: 100%;
  color: white;
  border: none;
  margin-top: 1.87rem;
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