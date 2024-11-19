import {LayoutWrapper, ContentContainer, NavigationContainer} from '../../styles/components/layout/LayoutC';
import Navigation from './Navigation';


<<<<<<< HEAD
const Layout = ({ children, hasNavigation }) => {
  return (
    <LayoutWrapper>
      <ContentContainer hasNavigation={hasNavigation}>
        {children}
      </ContentContainer>
      {hasNavigation && (
=======
const Layout = ({ children, $hasNavigation }) => {
  return (
    <LayoutWrapper>
      <ContentContainer $hasNavigation={$hasNavigation}>
        {children}
      </ContentContainer>
      {$hasNavigation && (
>>>>>>> main
        <NavigationContainer>
          <Navigation></Navigation>
        </NavigationContainer>
      )}
    </LayoutWrapper>
  );
};

export default Layout; 