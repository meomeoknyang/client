import {LayoutWrapper, ContentContainer, NavigationContainer} from '../../styles/components/layout/LayoutC';
import Navigation from './Navigation';


const Layout = ({ children, $hasNavigation }) => {
  return (
    <LayoutWrapper>
      <ContentContainer $hasNavigation={$hasNavigation}>
        {children}
      </ContentContainer>
      {$hasNavigation && (
        <NavigationContainer>
          <Navigation></Navigation>
        </NavigationContainer>
      )}
    </LayoutWrapper>
  );
};

export default Layout; 