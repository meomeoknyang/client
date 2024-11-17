import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginLogo from '../assets/Login/LoginLogo.svg';
import LoginError from '../assets/Login/LoginError.svg';
import {
  LoginContainer,
  Logo,
  InputWrapper,
  Label,
  Input,
  LoginButton,
  HelpLinks,
  HelpLink,
  Divider,
  SignupWrapper,
  SignupText,
  SignupLink,
  ErrorMessage,
  EmailInputWrapper,
  EmailInput,
  EmailDomain,
} from '../styles/pages/Loginpage';
import axiosInstance from '../utils/axiosConfig';
import { setTokens } from '../utils/tokenUtils';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLogin = async () => {
    try {
      const requestData = {
        user_id: userId,
        password: password
      };

      const response = await axiosInstance.post('/users/login/', requestData);

      if (response.data.code === 200) {
        setTokens(response.data.data.access, response.data.data.refresh);
        navigate('/');
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <LoginContainer>
      <Logo src={LoginLogo} alt="머먹냥 로고" />
      <InputWrapper>
        <Label>아이디</Label>
        <EmailInputWrapper>
          <EmailInput
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            $error={error}
            $focused={focusedInput === 'id'}
            onFocus={() => setFocusedInput('id')}
            onBlur={() => setFocusedInput(null)}
            placeholder="아이디"
            $domainWidth="120px"
          />
          <EmailDomain>@hanyang.ac.kr</EmailDomain>
        </EmailInputWrapper>
        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $error={error}
          $focused={focusedInput === 'password'}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
          placeholder="비밀번호"
        />
        {error && (
          <ErrorMessage>
            <img src={LoginError} alt="error" />
            <span>가입되지 않은 계정이거나, 아이디 또는 비밀번호가 일치하지 않아요.</span>
          </ErrorMessage>
        )}
      </InputWrapper>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <HelpLinks>
        <HelpLink>아이디 찾기</HelpLink>
        <Divider />
        <HelpLink>비밀번호 찾기</HelpLink>
      </HelpLinks>
      <SignupWrapper>
        <SignupText>아직 회원이 아니세요?</SignupText>
        <SignupLink onClick={() => navigate('/signup')}>회원가입 하기</SignupLink>
      </SignupWrapper>
    </LoginContainer>
  );
};

export default LoginPage;