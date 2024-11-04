// src/pages/SplashPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // 지정한 시간 후에 홈 화면으로 이동
    }, 3000); // 3초 후에 이동

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#FFA500' }}>
      <h1 style={{ color: '#FFFFFF', fontSize: '36px' }}>머먹냥</h1>
    </div>
  );
}
