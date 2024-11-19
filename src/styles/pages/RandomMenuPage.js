import styled from 'styled-components';

export const Container = styled.div`
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
  font-size: 20px; /* Adjust if needed */
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  line-height: 1; 
`;

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  border-bottom: 1px solid #444444;
`;

export const Tab = styled.button`
  font-size: 18px;
  padding: 8px 16px;
  background: transparent;
  color: ${({ selected }) => (selected ? '#ffffff' : '#888888')};
  border: none;
  outline: none;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border-bottom: ${({ selected }) => (selected ? '2px solid rgba(255, 255, 255, 0.88);' : 'none')};
`;

export const ExampleBox = styled.div`
  width: 335px;
  height: 458px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 336px;
  padding: 16px 110px;
  background-color: #FF6F00;
  color: #ffffff;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ResultModal = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  background-color: #ffffff;
  width: 280px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #000;
  text-align: center;

  h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    color: #ff5722;
    font-weight: bold;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333333;
`;
