import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

export const Header = styled.h1`
  margin-top: 80px;
  font-size: 20px;
  color: #888;
`;

export const MainText = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #ff6600;
  margin: 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #eee;
  }
`;
