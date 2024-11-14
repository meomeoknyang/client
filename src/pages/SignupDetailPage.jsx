import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import BackArrow from '../assets/Login/BackArrow.svg';
import BackClose from '../assets/Login/BackClose.svg';
import LoginError from '../assets/Login/LoginError.svg';
import * as S from '../styles/pages/SignupDetailPage';

const SignupDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDepts = location.state?.departments || [];

  useEffect(() => {
    if (selectedDepts.length === 0) {
      navigate('/signup');
    }
  }, [selectedDepts, navigate]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    nickname: ''
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    name: '',
    nickname: ''
  });

  const [emailPrefix, setEmailPrefix] = useState('');
  const emailDomain = '@hanyang.ac.kr';

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('비밀번호는 최소 8자 이상이어야 합니다.');
    }
    if (/^\d+$/.test(password)) {
      errors.push('비밀번호는 숫자로만 구성될 수 없습니다.');
    }
    return errors;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.replace('@hanyang.ac.kr', '');
    setEmailPrefix(value);
    setFormData(prev => ({
      ...prev,
      email: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const department = selectedDepts.join(',');
      const emailWithDomain = formData.email + '@hanyang.ac.kr';
      
      const requestData = {
        user_id: formData.email,
        password: formData.password,
        password_confirm: formData.password,
        nickname: formData.nickname,
        name: formData.name,
        email: emailWithDomain,
        department: department,
        title: 'haksa'
      };
      
      if (requestData.user_id.length > 20) {
        setFormErrors(prev => ({
          ...prev,
          email: '아이디는 20자를 초과할 수 없습니다.'
        }));
        return;
      }

    //   console.log('Sending request to backend:', {
    //     url: `${process.env.REACT_APP_API_URL}/users/register/`,
    //     data: requestData
    //   });
      
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register/`,
        requestData
      );

      if (response.data.code === 201) {
        setSuccessMessage('회원가입이 성공적으로 완료되었습니다.');
        setTimeout(() => {
          navigate('/login');
        }, 500);
      }
    } catch (error) {
    //   console.error('Error response:', error.response);
      const errorData = error.response?.data?.data;
      
      if (errorData) {
        setFormErrors(prev => ({
          ...prev,
          email: '',
          nickname: ''
        }));
        setError('');

        if (errorData.user_id) {
            setFormErrors(prev => ({
                ...prev,
                email: errorData.user_id[0]
            }));
        }
        if (errorData.email) {
          setFormErrors(prev => ({
            ...prev,
            email: errorData.email[0]
          }));
        }
        if (errorData.nickname) {
          setError('nickname');
          setFormErrors(prev => ({
            ...prev,
            nickname: errorData.nickname[0]
          }));
        }
      }
    }
  };

  return (
    <S.SignupContainer>
      <S.Top>
        <img src={BackArrow} alt="back" onClick={handleBack} />
        <h1>회원가입</h1>
        <img src={BackClose} alt="close" onClick={() => navigate('/')} />
      </S.Top>
      <S.SubTitle>계정 만들기</S.SubTitle>

      <S.InputWrapper>
        <S.Label>이메일</S.Label>
        <S.EmailInputWrapper>
          <S.EmailInput
            type="text"
            name="email"
            value={emailPrefix}
            onChange={handleEmailChange}
            $focused={focusedInput === 'email'}
            $error={!!formErrors.email}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
            placeholder="이메일을 입력하세요"
            $domainWidth="120px"
          />
          <S.EmailDomain>@hanyang.ac.kr</S.EmailDomain>
        </S.EmailInputWrapper>
        {formErrors.email && (
          <S.ErrorMessage>
            <img src={LoginError} alt="error" />
            <span>{formErrors.email}</span>
          </S.ErrorMessage>
        )}

        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          $focused={focusedInput === 'password'}
          $error={!!formErrors.password}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
          placeholder="비밀번호를 입력하세요."
        />
        {formErrors.password && (
          <S.ErrorMessage>
            <img src={LoginError} alt="error" />
            <span>{formErrors.password}</span>
          </S.ErrorMessage>
        )}

        <S.Label>이름</S.Label>
        <S.Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          $focused={focusedInput === 'name'}
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
          placeholder="이름을 입력하세요."
        />

        <S.Label>닉네임</S.Label>
        <S.Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          $focused={focusedInput === 'nickname'}
          $error={error === 'nickname' || !!formErrors.nickname}
          onFocus={() => setFocusedInput('nickname')}
          onBlur={() => setFocusedInput(null)}
          placeholder="닉네임을 입력하세요."
        />
        {(error === 'nickname' || formErrors.nickname) && (
          <S.ErrorMessage>
            <img src={LoginError} alt="error" />
            <span>{formErrors.nickname || '중복된 닉네임입니다.'}</span>
          </S.ErrorMessage>
        )}
      </S.InputWrapper>

      {successMessage && (
        <S.SuccessMessage>
          <span>{successMessage}</span>
        </S.SuccessMessage>
      )}

      <S.ButtonContainer>
        <S.CompleteButton 
          onClick={handleSubmit}
          disabled={!formData.email || !formData.password || !formData.name || !formData.nickname}
        >
          완료
        </S.CompleteButton>
      </S.ButtonContainer>
    </S.SignupContainer>
  );
};

export default SignupDetailPage; 