import Tap from '../components/stamp/Tap'
import Category from '../components/stamp/Category';
import StampList from '../components/stamp/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../styles/pages/StampPage';
import searchIcon from '../assets/svg/search.svg?react';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import SortBottomSheet from '../components/stamp/bottomsheet/SortBottomSheet';
const StampPage = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    
    return (
    <>
        <FixedContainer>
            <Header>
                <Title>도장깨기</Title>
                <Search src={searchIcon} alt='search' onClick={() => navigate('/stamp/search')}/>
                
            </Header>
            <Tap/>
            <Category setOpen={setOpen}/>

        </FixedContainer>
        <ContentContainer >
            <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center" }}>
                <StampList></StampList>
            </div>
        </ContentContainer>
        <SortBottomSheet open={open} setOpen={setOpen}/>
    </>
    
    );
  };
export default StampPage;