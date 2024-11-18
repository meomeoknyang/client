import Tap from '../../components/stamp/Tap'
import Category from '../../components/stamp/cafe/Category';
import StampList from '../../components/stamp/cafe/StampList';
import {FixedContainer, ContentContainer, Title, Search, Header} from '../../styles/pages/StampPage';
import searchIcon from '../../assets/svg/search.svg?react';
import closeIcon from '../../assets/svg/Close.svg';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SortBottomSheet from '../../components/stamp/cafe/bottomsheet/SortBottomSheet';
import CategoryBottomSheet from '../../components/stamp/cafe/bottomsheet/CategoryBottomSheet';
import styled from 'styled-components';
import axiosInstance from '../../utils/axiosConfig';
import { sortFunctions } from '../../utils/sortUtils';

const RestaurantPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const [currentSearch, setCurrentSearch] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [bottomSheet, setBottomSheet] = useState({ type: null, isOpen: false });
    const [visited, setVisited] = useState(false);
    const [selectedSorts, setSelectedSorts] = useState('추천순');

    const fetchRestaurants = async (params) => {
        try {
            const response = await axiosInstance.get(`/cafes/?${params.toString()}`);
            if (!response.data.data) {
                setData([]);
                return [];
            }
            return response.data.data;
        } catch (error) {
            if (error.response?.status === 401) {
                setShowLoginModal(true);
            } else {
                console.error('API 호출 에러:', error);
            }
            setData(null);
            return null;
        }
    };

    const createUrlParams = (menuName = currentSearch, visitType = visited, categories = selectedCategories) => {
        const params = new URLSearchParams();
        
        if (menuName) {
            params.set('menu_name', menuName);
        }
        if (visitType === 'visited') {
            params.set('visited', 'true');
        } else if (visitType === 'unvisited') {
            params.set('visited', 'false');
        }
        categories.forEach(category => {
            params.append('categories', category);
        });

        return params;
    };

    const handleVisitFilter = async (type) => {
        if (visited === type) {
            setVisited(false);
            const params = createUrlParams(currentSearch, false, selectedCategories);
            navigate(`/cafes/?${params.toString()}`);
            const newData = await fetchRestaurants(params);
            setData(sortFunctions[selectedSorts](newData));
            return;
        }

        const params = createUrlParams(currentSearch, type, selectedCategories);
        navigate(`/cafes/?${params.toString()}`);
        const newData = await fetchRestaurants(params);
        setData(sortFunctions[selectedSorts](newData));
        setVisited(type);
    };

    const handleSortChange = (newSort) => {
        setSelectedSorts(newSort);
        if (data) {
            setData(sortFunctions[newSort](data));
        }
    };

    const handleCategorySelect = async (categoryId, isSelected) => {
        const newCategories = isSelected 
            ? [...selectedCategories, categoryId]
            : selectedCategories.filter(id => id !== categoryId);
        
        setSelectedCategories(newCategories);
        const params = createUrlParams(currentSearch, visited, newCategories);
        navigate(`/cafes/?${params.toString()}`);
        const newData = await fetchRestaurants(params);
        setData(sortFunctions[selectedSorts](newData));
    };

    const handleResetSearch = async () => {
        const params = createUrlParams('', visited, selectedCategories);
        navigate(`/cafes/?${params.toString()}`);
        setCurrentSearch('');
        const newData = await fetchRestaurants(params);
        setData(sortFunctions[selectedSorts](newData));
    };

    useEffect(() => {
        if (window.location.pathname === '/cafes') {
            navigate('/cafes', { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const initializeData = async () => {
            const menuName = searchParams.get('menu_name');
            if (menuName) {
                setCurrentSearch(menuName);
            } else {
                setCurrentSearch('');
            }
    
            const visitedParam = searchParams.get('visited');
            if (visitedParam === 'true') {
                setVisited('visited');
            } else if (visitedParam === 'false') {
                setVisited('unvisited');
            } else {
                setVisited(false);
            }
    
            const categories = searchParams.getAll('categories');
            if (categories.length > 0) {
                setSelectedCategories(categories.map(Number));
            } else {
                setSelectedCategories([]);
            }
            const newData = await fetchRestaurants(searchParams);
            if (newData) {
                setData(sortFunctions[selectedSorts](newData));
            } else {
                setData([]);
            }
        };
    
        initializeData();
    }, [searchParams]);

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
                    onVisitedChange={handleVisitFilter}  
                    selectedSorts={selectedSorts}
                />
            </FixedContainer>

            <ContentContainer>
                <div className="bg-[#F0F0F3] flex justify-center">
                    <StampList restaurants={data} visited={visited} />
                </div>
            </ContentContainer>

            <SortBottomSheet 
                open={bottomSheet.isOpen && bottomSheet.type === 'sort'}
                setOpen={() => setBottomSheet({type: null, isOpen: false})}
                selectedSorts={selectedSorts}
                setSelectedSorts={handleSortChange}
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

export default RestaurantPage;

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
    padding: 1px 10px 2px 80px;
`;

const BackButton = styled.img`
    flex: 0 0 auto;
    cursor: pointer;
`;