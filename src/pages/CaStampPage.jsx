import Tap from '../components/stamp/Tap'
import Category from '../components/stamp/restaurant/Category';
import StampList from '../components/stamp/restaurant/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../styles/pages/StampPage';
import searchIcon from '../assets/svg/search.svg?react';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import SortBottomSheet from '../components/stamp/restaurant/bottomsheet/SortBottomSheet';
import PartnerBottomSheet from '../components/stamp/restaurant/bottomsheet/PartnerBottomSheet';
import CategoryBottomSheet from '../components/stamp/restaurant/bottomsheet/CategoryBottomSheet';
import AllBottomSheet from '../components/stamp/restaurant/bottomsheet/AllBottomSheet';
const CaStampPage = () => {
    const navigate = useNavigate();
    const [bottomSheet, setBottomSheet] = useState({
        type: null,
        isOpen: false
    });

    return (
    <>
        <FixedContainer>
            <Header>
                <Title>카페 도장깨기</Title>
                <Search src={searchIcon} alt='search' onClick={() => navigate('/stamp/search')}/>
            </Header>
            <Tap/>
            <Category setBottomSheet={setBottomSheet}/>

        </FixedContainer>
        <ContentContainer >
            <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center" }}>
                <StampList></StampList>
            </div>
        </ContentContainer>
        <SortBottomSheet 
                open={bottomSheet.isOpen && bottomSheet.type === 'sort'} 
                setOpen={() => setBottomSheet({type: null, isOpen: false})}
            />
        <PartnerBottomSheet 
            open={bottomSheet.isOpen && bottomSheet.type === 'partner'} 
            setOpen={() => setBottomSheet({type: null, isOpen: false})}
        />
        <CategoryBottomSheet 
            open={bottomSheet.isOpen && bottomSheet.type === 'category'} 
            setOpen={() => setBottomSheet({type: null, isOpen: false})}
        />
        <AllBottomSheet
            open={bottomSheet.isOpen && bottomSheet.type === 'all'} 
            setOpen={() => setBottomSheet({type: null, isOpen: false})}
        />
    </>
    
    );
  };
export default CaStampPage;