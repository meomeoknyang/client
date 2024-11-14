import styled from "styled-components";

export const SignupContainer = styled.div`
  padding: 4.06rem 1.25rem 5.625rem;
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
    font-size: 1rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.0625rem;
  }

  img {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
`;

export const SubTitle = styled.h2`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
`;

export const SearchTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.52rem;
  color: rgba(0, 0, 0, 0.80);
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
`;

export const SelectedDepartmentChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0rem;
  padding: 0.5rem 0.75rem;
  background: var(--Backgrounds-Primary, #FFF);
  border-radius: 3.125rem;
  border: 1px solid #FF6F00;
  margin-right: 0.5rem;
  margin-top: 1.06rem;
  justify-content: center;
  
  span {
    color: #FF6F00;
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.75rem;
    letter-spacing: -0.0625rem;
  }
  
  img {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.54rem;
  
  input {
    width: 100%;
    height: 2.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.3125rem;
    border: 1px solid #D3D3D3;
    background: var(--Backgrounds-Primary, #FFF);
    font-size: 0.875rem;
    
    &::placeholder {
      color: rgba(0, 0, 0, 0.20);
      font-family: "Noto Sans KR";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 0.75rem;
      letter-spacing: -0.0075rem;
    }
  }
  
  img {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const DepartmentSection = styled.div`
  margin-bottom: 1rem;
`;

export const DepartmentName = styled.div`
  color: ${props => props.$selected ? '#FF6F00' : '#000'};

  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  cursor: pointer;
`;

export const CollegeName = styled.div`
  color: rgba(0, 0, 0, 0.40);
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0625rem;
  margin-bottom: 1rem;
`;

export const NextButton = styled.button`
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
