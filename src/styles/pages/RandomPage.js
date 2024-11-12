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
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const MainText = styled.h2`
  position: absolute;
  top: 190px;
  font-family: 'Jalnan Gothic', sans-serif;
  font-size: 52px;
  font-weight: 400;
  line-height: 63px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
`;

export const HighlightText = styled.span`
  color: #FF6F00;
  font-family: 'Jalnan Gothic', sans-serif;
  font-size: 52px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: -0.03em;
  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 66px;
  height: auto;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 50px;
  background-color: #FFFFFF;
  color: #000;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const NextIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const BellIcon = styled.img`
  position: absolute; /* 화면에서 바깥으로 위치 */
  width: 130.21px;
  height: auto;
  top: 50px; /* 위치 조정 */
  margin-right: 0px;
  pointer-events: none; /* 클릭 방지 */
`;

export const FingerIcon = styled.img`
  position: absolute; /* 화면에서 바깥으로 위치 */
  width: 145.48px;
  height: 145.48px;
  top: 258.07px; /* 위치 조정 */
  margin-left: 0px;
  pointer-events: none; /* 클릭 방지 */
`;