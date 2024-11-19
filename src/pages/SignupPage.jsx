import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackClose from '../assets/Login/BackClose.svg';
import MiniClose from '../assets/Login/MiniClose.svg';
import DeptSearch from '../assets/Login/DeptSearch.svg';
import Check from '../assets/Login/Check.svg';
import * as S from '../styles/pages/SignupPage';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departments, setDepartments] = useState({
    "소프트웨어융합대학": ["컴퓨터학부", "ICT융합학부", "인공지능학과", "융합전공"],
    "디자인대학": ["융합디자인학부", "주얼리패션디자인학과", "산업디자인학과", "커뮤니케이션디자인학과", "영상디자인학과"],
    "공학대학": [
        "건축학부", "건설환경공학과", "교통물류공학과", "전자공학부",
        "배터리소재화학과", "재료화학공학과", "기계공학과", "산업경영공학과",
        "생명나노공학과", "로봇공학과", "융합공학과", "국방정보공학과",
        "스마트융합공학부", "지능형로봇학과"
    ],
    "경상대학": ["경제학부", "경영학부", "보험계리학과", "회계세무학과", "비즈니스애널리틱스융합전공"],
    "과학기술융합대학": ["수리 데이터 사이언스학과", "응용물리학과", "의약생명과학과", "화학분자공학과", "해양융합공학과", "나노광전자학과"],
    "국제문화대학": ["한국언어문학과", "문화인류학과", "문화콘텐츠학과", "중국학과", "일본학과", "영미언어·문학학과", "프랑스학과"],
    "언론정보대학": ["광고홍보학과", "정보사회미디어학과", "문화콘텐츠학과", "문화인류학과"],
    "예체능대학": ["스포츠과학부", "무용예술학과", "실용음악학과"],
    "약학대학": ["약학대학"]
});
  const [filteredDepts, setFilteredDepts] = useState({});

  useEffect(() => {
    setFilteredDepts(departments);
  }, [departments]);

  const handleDeptSelect = (dept) => {
    if (selectedDepts.includes(dept)) {
      setSelectedDepts(selectedDepts.filter(d => d !== dept));
    } else {
      if (selectedDepts.length >= 2) {
        // 이미 2개가 선택된 경우 추가 선택 불가
        return;
      }
      setSelectedDepts([...selectedDepts, dept]);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue === '') {
      setFilteredDepts(departments);
      return;
    }

    const filtered = {};
    Object.entries(departments).forEach(([college, depts]) => {
      const matchingDepts = depts.filter(dept => 
        dept.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (matchingDepts.length > 0) {
        filtered[college] = matchingDepts;
      }
    });
    setFilteredDepts(filtered);
  };

  const handleNext = () => {
    navigate('/signup/detail', { 
      state: { departments: selectedDepts }
    });
  };

  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <S.SignupContainer>
      <S.Top>
        <h1>회원가입</h1>
        <img src={BackClose} alt="backclose" onClick={handleBack} />
      </S.Top>
      <S.SubTitle>학과 선택</S.SubTitle>
      {selectedDepts.length > 0 && (
        <div>
          {selectedDepts.map(dept => (
            <S.SelectedDepartmentChip key={dept}>
              <span>{dept}</span>
              <img 
                src={MiniClose} 
                alt="remove" 
                onClick={() => handleDeptSelect(dept)}
              />
            </S.SelectedDepartmentChip>
          ))}
        </div>
      )}

      <S.SearchTitle>전체 학과</S.SearchTitle>
      
      <S.SearchContainer>
        <input
          type="text"
          placeholder="학과 이름을 검색하세요."
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src={DeptSearch} alt="search" />
      </S.SearchContainer>

      {Object.entries(filteredDepts).map(([college, depts]) => (
        <S.DepartmentSection key={college}>
          {depts.map(dept => (
            <div key={dept}>
              <S.DepartmentName 
                $selected={selectedDepts.includes(dept)}
                onClick={() => handleDeptSelect(dept)}
              >
                {dept}
                {selectedDepts.includes(dept) && <img src={Check} alt="selected" />}
              </S.DepartmentName>
              <S.CollegeName>{college}</S.CollegeName>
            </div>
          ))}
        </S.DepartmentSection>
      ))}

      <S.ButtonContainer>
        <S.NextButton 
          onClick={handleNext}
          disabled={selectedDepts.length === 0}
        >
          다음
        </S.NextButton>
      </S.ButtonContainer>
    </S.SignupContainer>
  );
};

export default SignupPage; 