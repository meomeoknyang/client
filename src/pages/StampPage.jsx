import Tap from '../components/stamp/Tap'
import Category from '../components/stamp/Category';
import StampList from '../components/stamp/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../styles/pages/StampPage';
import searchIcon from '../assets/svg/search.svg?react';

const StampPage = () => {
    return (
    <>
    <FixedContainer>
        <Header>
            <Title>도장깨기</Title>
            <Search src={searchIcon} alt='search'/>
            
        </Header>
        <Tap/>
        <Category/>

    </FixedContainer>
    <ContentContainer>

        <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center"}}>
            <StampList></StampList>
        </div>
    </ContentContainer>

    </>
    
    );
  };
export default StampPage;