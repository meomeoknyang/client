import styled from "styled-components";

export const SignupContainer = styled.div`
  padding: 4.06rem 1.28rem 5.625rem;
  background-color: #FFFFFF;
  min-height: 100vh;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  h1 {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0625rem;
  }

  img {
    cursor: pointer;
  }
`;

export const SubTitle = styled.h2`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
  margin-bottom: 1.25rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  margin-bottom: 0.52rem;
  color: rgba(0, 0, 0, 0.80);
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.87rem 0.81rem;
  border-radius: 0.3125rem;
  border: 1px solid ${props => 
    props.$error ? '#F00' : 
    props.$focused ? 'rgba(0, 0, 0, 0.80)' : '#D3D3D3'};
  background: #F8F8F8;
  color: ${props => props.$error ? '#F00' : '#000'};
  margin-bottom: 0.92rem;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.0075rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.20);
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.75rem;
    letter-spacing: -0.0075rem;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: -0.63rem;
  margin-bottom: 0.29rem;
  
  img {
    margin-right: 0.25rem;
  }
  
  span {
    color: rgba(255, 0, 0, 0.75);
    font-family: "Noto Sans KR";
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.00625rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6.0625rem;
  padding: 1.03rem 1.655rem;
  border-top: 1px solid #E4E4E4;
  background: var(--Backgrounds-Primary, #FFF);
  z-index: 1;
`;

export const CompleteButton = styled.button`
  position: fixed;
  left: 1.655rem;
  right: 1.655rem;
  height: 3.125rem;
  background: #FF6F00;
  color: white;
  border: none;
  border-radius: 0.625rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  
  &:disabled {
    background: rgba(0, 0, 0, 0.15);
    cursor: not-allowed;
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.92rem;
`;

export const EmailInput = styled(Input)`
  padding-right: ${props => props.$domainWidth || '120px'};
  margin-bottom: 0;
`;

export const EmailDomain = styled.span`
  position: absolute;
  right: 0.81rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.40);
  font-family: "Noto Sans KR";
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem;
  pointer-events: none;
`;

export const SuccessMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  z-index: 1000;
  
  span {
    font-family: "Noto Sans KR";
    font-size: 1rem;
    font-weight: 500;
  }
`; 