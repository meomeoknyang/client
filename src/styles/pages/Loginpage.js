import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.845rem;
`;

export const Logo = styled.img`
  margin-top: 11.63rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 3.79rem;
`;

export const Label = styled.div`
  margin-bottom: 0.75rem;

  color: #000;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.603rem;
  padding: 0.875rem 1.1rem;
  border-radius: 0.52988rem;
  background: #F8F8F8;
  border: 1.696px solid ${props => 
    props.$error ? 'rgba(255, 0, 0, 0.35)' : 
    props.$focused ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.15)'};
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.33);
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.00875rem;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3.125rem;
  border-radius: 0.52988rem;
  background: #FF6F00;
  border: none;
  color: var(--Backgrounds-Primary, #FFF);
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
  cursor: pointer;

`;

export const HelpLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.98rem;
  gap: 0.62rem;
`;

export const HelpLink = styled.span`
  color: rgba(0, 0, 0, 0.55);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.0625rem;
  cursor: pointer;
  
`;

export const Divider = styled.div`
  width: 1px;
  height: 0.625rem;
  background: #C1C1C1;
`;

export const SignupWrapper = styled.div`
  margin-top: 10.13rem;
  display: flex;
  gap: 0.5rem;
`;

export const SignupText = styled.span`
  color: rgba(0, 0, 0, 0.55);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.0625rem;
`;

export const SignupLink = styled.span`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.0625rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;

`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: -0.64rem;
  
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

export const EmailInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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