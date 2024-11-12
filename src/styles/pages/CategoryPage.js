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

export const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Tab = styled.button`
  background-color: ${({ selected }) => (selected ? '#FF8C00' : '#333')};
  color: ${({ selected }) => (selected ? '#fff' : '#ccc')};
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #FF8C00;
    color: white;
  }
`;

export const ExampleBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;