import Tap from '../../components/stamp/Tap'
import Category from '../../components/stamp/restaurant/Category';
import StampList from '../../components/stamp/restaurant/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../../styles/pages/StampPage';
import searchIcon from '../../assets/svg/search.svg?react';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import SortBottomSheet from '../../components/stamp/restaurant/bottomsheet/SortBottomSheet';
import CategoryBottomSheet from '../../components/stamp/restaurant/bottomsheet/CategoryBottomSheet';
const ReStampPage = () => {
    const navigate = useNavigate();
    const [bottomSheet, setBottomSheet] = useState({
        type: null,
        isOpen: false
    });
    const [visited, setVisited] = useState(false);
    const [selectedSorts, setSelectedSorts] = useState('추천순');
    const [selectedFoods, setSelectedFoods] = useState({
        한식:false,
        양식:false,
        아시안:false,
        일식:false,
        중식:false,
        패스트푸드:false
    });
    
    return (
    <>
        <FixedContainer>
            <Header>
                <Title>도장깨기</Title>
                <Search src={searchIcon} alt='search' onClick={() => navigate('/stamp/search')}/>
            </Header>
            <Tap/>
            <Category setBottomSheet={setBottomSheet} visited={visited} setVisited={setVisited} />

        </FixedContainer>
        <ContentContainer >
            <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center" }}>
                <StampList></StampList>
            </div>
        </ContentContainer>
        
        <SortBottomSheet 
                open={bottomSheet.isOpen && bottomSheet.type === 'sort'} 
                setOpen={() => setBottomSheet({type: null, isOpen: false})}
                selectedSorts={selectedSorts}
                setSelectedSorts={setSelectedSorts}
            />
        
        <CategoryBottomSheet 
            open={bottomSheet.isOpen && bottomSheet.type === 'category'} 
            setOpen={() => setBottomSheet({type: null, isOpen: false})}
            selectedFoods={selectedFoods}
            setSelectedFoods={setSelectedFoods}
        /> 
    </>
    
    );
  };
export default ReStampPage;