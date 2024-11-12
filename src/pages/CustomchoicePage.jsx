import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CustomchoicePageContainer,
  InputContainer,
  InputField,
  AddFieldButton,
  CompleteButton,
  FinalButton,
  WhiteContainer
} from '../styles/pages/CustomchoicePage';
import {
  HeaderWrapper,
  BackIcon,
  Header,
  TabContainer,
  Tab,
  ExampleBox
} from '../styles/pages/RandomMenuPage';
import backIcon from '../assets/svg/back.svg';
import svgExample from '../assets/svg/example3D.svg';

const CustomchoicePage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('식당');
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [showContainer, setShowContainer] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTabClick = (tab) => setSelectedTab(tab);

  const handleComplete = () => {
    setShowContainer(false);
    setIsCompleted(true);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleInputChange = (index, value) => {
    const updatedFields = inputFields.map((field, i) =>
      i === index ? { ...field, value } : field
    );
    setInputFields(updatedFields);
  };

  return (
    <CustomchoicePageContainer>
      <HeaderWrapper>
        <BackIcon src={backIcon} alt="뒤로가기" onClick={() => navigate('/custom')} />
        <Header>선택지</Header>
      </HeaderWrapper>

      <TabContainer>
        <Tab selected={selectedTab === '식당'} onClick={() => handleTabClick('식당')}>
          식당
        </Tab>
        <Tab selected={selectedTab === '카페'} onClick={() => handleTabClick('카페')}>
          카페
        </Tab>
      </TabContainer>

      <ExampleBox>
        <img src={svgExample} alt="3D 예시" />
      </ExampleBox>

      {showContainer && (
        <WhiteContainer>
          <h3>선택지 추가</h3>
          <InputContainer>
            {inputFields.map((field, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <InputField
                  type="text"
                  placeholder={`${selectedTab} 입력`}
                  value={field.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {index === inputFields.length - 1 && (
                  <AddFieldButton onClick={handleAddField}>+</AddFieldButton>
                )}
              </div>
            ))}
          </InputContainer>
          <CompleteButton onClick={handleComplete}>선택지 입력 완료</CompleteButton>
        </WhiteContainer>
      )}

      {isCompleted && (
        <FinalButton onClick={() => console.log('식당 메뉴 뽑기 clicked!')}>
          식당 메뉴 뽑기
        </FinalButton>
      )}
    </CustomchoicePageContainer>
  );
};

export default CustomchoicePage;
