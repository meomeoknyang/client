import axios from 'axios';
import Tap from '../../components/stamp/Tap'
import Category from '../../components/stamp/restaurant/Category';
import StampList from '../../components/stamp/restaurant/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../../styles/pages/StampPage';
import searchIcon from '../../assets/svg/search.svg?react';
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SortBottomSheet from '../../components/stamp/restaurant/bottomsheet/SortBottomSheet';
import CategoryBottomSheet from '../../components/stamp/restaurant/bottomsheet/CategoryBottomSheet';
const ReStampPage = () => {
    const navigate = useNavigate();
    const [bottomSheet, setBottomSheet] = useState({
        type: null,
        isOpen: false
    });
    const [visited, setVisited] = useState(false);
    const [contacted, setContacted] = useState(false);
    const [selectedSorts, setSelectedSorts] = useState('추천순');
    const [selectedFoods, setSelectedFoods] = useState({
        한식:false,
        양식:false,
        아시안:false,
        일식:false,
        중식:false,
        패스트푸드:false
    });
    const [data, setData] = useState(null);

    useEffect(() => {
        handleLoadDetail();
    }, []);

    const handleLoadDetail = async () => {
        try {
            const response = await axios.get('https://port-0-server-m3eidei15754d939.sel4.cloudtype.app/restaurants/');
            const restaurantsData = response.data.data;

            if (!restaurantsData) {
                console.error('데이터가 없습니다');
                setData([]);
                return;
            }
    
            setData(restaurantsData);
            console.log(restaurantsData);
        } catch (error) {
            console.error(error);
            setData(null);
        }
    };

    useEffect(() => {
        if (visited === 'visited') {
            setContacted(true);
        } else if (visited === 'unvisited') {
            setContacted(false);
        } else {
            setContacted(false);
        }
    }, [visited]);

    const getFilteredRestaurants = () => {
        if (!data) return null;

        const originalData = [...data];

        if (visited === 'visited') {
            return originalData.filter(restaurant => restaurant.contact >= 1);
        } else if (visited === 'unvisited') {
            return originalData.filter(restaurant => restaurant.contact === null || restaurant.contact === 0);
        }

        return originalData;
    };
        

    return (
    <>
        <FixedContainer>
            <Header>
                <Title>도장깨기</Title>
                <Search src={searchIcon} alt='search' onClick={() => navigate('/restaurant/search')}/>
            </Header>
            <Tap/>
            <Category setBottomSheet={setBottomSheet} visited={visited} setVisited={setVisited} />

        </FixedContainer>
        <ContentContainer >
            <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center" }}>
                <StampList
                    restaurants={getFilteredRestaurants()} 
                    isContacted={contacted}
                    visited = {visited}/>
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