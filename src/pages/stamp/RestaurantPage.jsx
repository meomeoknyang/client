import axios from 'axios';
import Tap from '../../components/stamp/Tap'
import Category from '../../components/stamp/restaurant/Category';
import StampList from '../../components/stamp/restaurant/StampList';
import {FixedContainer, ContentContainer, Title,Search, Header} from '../../styles/pages/StampPage';
import searchIcon from '../../assets/svg/search.svg?react';
import closeIcon from '../../assets/svg/Close.svg';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SortBottomSheet from '../../components/stamp/restaurant/bottomsheet/SortBottomSheet';
import CategoryBottomSheet from '../../components/stamp/restaurant/bottomsheet/CategoryBottomSheet';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosConfig';

const ReStampPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [currentSearch, setCurrentSearch] = useState('');
    const [selectedCategories, setSelectedCategories] = useState(() => 
        searchParams.getAll('categories').map(Number)
    );
    const [bottomSheet, setBottomSheet] = useState({ type: null, isOpen: false });
    const [visited, setVisited] = useState(false);
    const [selectedSorts, setSelectedSorts] = useState('추천순');
    const [data, setData] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const fetchRestaurants = async (params) => {
        try {
            const response = await axiosInstance.get(`/restaurants/?${params.toString()}`);
            if (!response.data.data) {
                setData([]);
                return;
            }
            setData(response.data.data);
        } catch (error) {
            if (error.response?.status === 401) {
                setShowLoginModal(true);
            } else {
                console.error('API 호출 에러:', error);
            }
            setData(null);
        }
    };

    const createUrlParams = (visitType = visited, categories = selectedCategories) => {
        const params = new URLSearchParams();
        
        if (visitType === 'visited') {
            params.append('visited', 'true');
        } else if (visitType === 'unvisited') {
            params.append('visited', 'false');
        }

        categories.forEach(category => {
            params.append('categories', category);
        });

        return params;
    };

    const handleVisitFilter = async (type) => {
        if (visited === type) {
            setVisited(false);
            navigate('/restaurant');
            fetchRestaurants(new URLSearchParams());
            return;
        }

        const params = createUrlParams(type);
        navigate(`/restaurant?${params.toString()}`);
        await fetchRestaurants(params);
        setVisited(type);
    };

    const handleCategorySelect = async (categoryId, isSelected) => {
        const newCategories = isSelected 
            ? [...selectedCategories, categoryId]
            : selectedCategories.filter(id => id !== categoryId);
        
        setSelectedCategories(newCategories);
        const params = createUrlParams(visited, newCategories);
        navigate(`/restaurant?${params.toString()}`);
        await fetchRestaurants(params);
    };

    const handleLoadMenu = async (menuName) => {
        try {
            const response = await axiosInstance.get(`/restaurants/?menu_name=${menuName}`);
            if (!response.data.data) {
                setData([]);
                return;
            }
            setData(response.data.data);
            setCurrentSearch(menuName);
        } catch (error) {
            console.error(error);
            setData(null);
        }
    };

    const handleResetSearch = async () => {
        navigate('/restaurant');
        setCurrentSearch('');
        fetchRestaurants(new URLSearchParams());
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/restaurants') {
            navigate('/restaurant', { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const categories = searchParams.getAll('categories');
        const menuName = searchParams.get('menu_name');
        
        if (menuName) {
            handleLoadMenu(menuName);
        } else if (categories.length > 0) {
            const categoryIds = categories.map(Number);
            setSelectedCategories(categoryIds);
            fetchRestaurants(createUrlParams(visited, categoryIds));
        } else {
            fetchRestaurants(new URLSearchParams());
        }
    }, []);

    return (
        <>
            <FixedContainer>
                <Header>
                    <Title>도장깨기</Title>
                    {currentSearch && (
                        <SearchInfo>
                            <span>{currentSearch}</span>
                        </SearchInfo>
                    )}
                    {currentSearch ? (
                        <BackButton 
                            src={closeIcon} 
                            alt='back'
                            onClick={handleResetSearch}
                        />
                    ) : (
                        <Search 
                            src={searchIcon} 
                            alt='search' 
                            onClick={() => navigate('/restaurant/search')}
                        />
                    )}
                </Header>
                <Tap/>
                <Category 
                    setBottomSheet={setBottomSheet} 
                    visited={visited} 
                    setVisited={handleVisitFilter}
                />
            </FixedContainer>

            <ContentContainer>
                <div style={{background:"#F0F0F3", display:"flex", justifyContent:"center"}}>
                    <StampList restaurants={data} visited={visited} />
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
                selectedCategories={selectedCategories}
                onCategorySelect={handleCategorySelect} 
            />

            {showLoginModal && (
                <LoginModal 
                    onConfirm={() => {
                        setShowLoginModal(false);
                        navigate('/login');
                    }}
                    onCancel={() => setShowLoginModal(false)}
                />
            )}
        </>
    );
};

const LoginModal = ({ onConfirm, onCancel }) => (
    <ModalOverlay>
        <Modal>
            <ModalContent>
                <div>로그인이 필요한 서비스입니다.</div>
                <ModalButtons>
                    <button onClick={onConfirm}>확인</button>
                    <button onClick={onCancel}>취소</button>
                </ModalButtons>
            </ModalContent>
        </Modal>
    </ModalOverlay>
);



export default ReStampPage;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Modal = styled.div`
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 80%;
    max-width: 320px;
`;

const ModalContent = styled.div`
    text-align: center;
    
    & > div:first-child {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
    }
`;

const ModalButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;

    button {
        padding: 8px 24px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-weight: 500;

        &:first-child {
            background-color: #FF6F00;
            color: white;
        }

        &:last-child {
            background-color: #F5F5F5;
            color: #666;
        }
    }
`;

const SearchInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    font-size: 14px;
    color: #333;
    padding: 2px 10px 2px 80px;
`;

const BackButton = styled.img`
    flex: 0 0 auto;
    cursor: pointer;
`;