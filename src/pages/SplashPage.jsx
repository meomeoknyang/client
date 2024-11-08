import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashContainer, LogoImage } from '../styles/pages/SplashPage';
import logoWhite from '../assets/svg/logowhite.svg';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/random'); // 1초 후 홈 화면으로 이동
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <SplashContainer>
      <LogoImage src={logoWhite} alt="머먹냥 로고" />
    </SplashContainer>
  );
}

export default SplashPage;