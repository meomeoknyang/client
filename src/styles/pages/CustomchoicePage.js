import styled from 'styled-components';

export const CustomchoicePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #141414;
  color: #ffffff;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const WhiteContainer = styled.div`
  width: 375px;
  height: 300px;
  position: absolute;
  left: 0.5px;
  top: 512px;
  background: #ffffff;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
`;

export const WhiteContainerTitle = styled.h3`
  color: #202020; 
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 10px;
`;

export const AddFieldButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #ff8c00;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: bold;
`;

export const CompleteButton = styled.button`
  padding: 10px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e57a00;
  }
`;

export const FinalButton = styled.button`
  padding: 12px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  width: 90%;

  &:hover {
    background-color: #e57a00;
  }
`;
