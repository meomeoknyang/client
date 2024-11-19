import styled from 'styled-components';

const LayoutWrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;


const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
<<<<<<< HEAD
  padding-bottom: ${props => props.hasNavigation ? '65.96px' : '0'};  // 네비게이션 높이에 맞게 수정
=======
  padding-bottom: {props => props.$hasNavigation ? '65.96px' : '0'};  // 네비게이션 높이에 맞게 수정
>>>>>>> main
`;


const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 65.96px;  // 높이 수정
  background-color: white;
  display: flex;
  padding: 11px 30px;
  align-items: flex-start;
  gap: 30px;
<<<<<<< HEAD
=======
  z-index: 3;
  border-top: 1px solid rgba(0, 0, 0, 0.20);
>>>>>>> main
`;
export {LayoutWrapper, ContentContainer, NavigationContainer};