import styled from 'styled-components';

// 기본 레이아웃 래퍼
const LayoutWrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// 실제 컨텐츠를 감싸는 컨테이너
const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: ${props => props.hasNavigation ? '65.96px' : '0'};  // 네비게이션 높이에 맞게 수정
`;

// 네비게이션 컨테이너
const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 65.96px;  // 높이 수정
  background-color: white;
`;

const Layout = ({ children, hasNavigation }) => {
  return (
    <LayoutWrapper>
      <ContentContainer hasNavigation={hasNavigation}>
        {children}
      </ContentContainer>
      {hasNavigation && (
        <NavigationContainer>
          {/* 네비게이션 컴포넌트 */}
        </NavigationContainer>
      )}
    </LayoutWrapper>
  );
};

export default Layout; 