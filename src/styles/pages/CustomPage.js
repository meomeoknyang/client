import styled from 'styled-components';

export const CustomPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #141414;
  color: #ffffff;
  height: 100vh;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-left: 8px; 
  position: relative;
`;

export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 4px;
`;

export const Header = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  line-height: 1; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%; /* Ensures the buttons take the full width of the container */
  padding: 20px;
  margin-bottom: 20px; /* Space at the bottom of the screen */
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

export const ExampleBox = styled.div`
  width: 335px;
  height: 327px;
  background-color: #e0e0e0;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

