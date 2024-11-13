import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #141414;
  color: rgba(255, 255, 255, 0.7);
`;

export const Header = styled.h1`
  position: absolute;
  top: 141px;
  color: rgba(255, 255, 255, 0.70);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 104.167% */
  letter-spacing: -0.72px;
`;

export const MainText = styled.h2`
  position: absolute;
  top: 190px;
  font-family: 'yg-jalnan';
  font-size: 52px;
  font-weight: 400;
  line-height: 63px;
  text-align: center;
  letter-spacing: -1.56px;
  color: #FFFFFF;
`;

export const HighlightText = styled.span`
  color: var(--Backgrounds-Primary, #FF6F00);
  font-family: 'yg-jalnan';
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: -1.56px;
  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 59px;
  left: 20px;
  width: 90px;
  height: auto;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 58px;
  right: 20px;
  width: 24px;
  height: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 517px;
`;

export const Button = styled.button`
  display: inline-flex;  // display 속성 수정 (inline-flex)
  width: 283px;
  hight: auto;
  padding: 16px 32px;  // 기본 패딩 적용
  justify-content: center;  // 가로로 중앙 정렬
  align-items: center;  // 세로로 중앙 정렬
  gap: 12px;  // 아이콘과 텍스트 간격 설정
  background-color: #f0f0f0;  // 기본 배경색
  border: none;
  color: #000;  // 기본 글자 색
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;  // 폰트 설정
  font-size: 20px;  // 글자 크기
  font-weight: 700;  // 글자 굵기
  letter-spacing: -0.6px;  // 글자 간격
  border-radius: 50px;

  &:hover {
    background-color: #e0e0e0;  // hover 시 배경색 변경
  }

  img {
    width: 20px;  // 아이콘 크기 조정 (필요에 따라 수정 가능)
    height: 20px;
  }
`;

export const NextIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const BellIcon = styled.img`
  position: absolute; 
  width: 130.213px;
  height: 130.213px;
  top: 100px; /* 위치 조정 */
  right: 0px;
  pointer-events: none; /* 클릭 방지 */
`;

export const FingerIcon = styled.img`
  position: absolute; 
  width: 145.48px;
  height: 145.48px;
  top: 258.07px; /* 위치 조정 */
  left: 0px;
  pointer-events: none; /* 클릭 방지 */
`;