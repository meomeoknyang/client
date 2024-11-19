import styled from 'styled-components';
import closeIcon from './../../../assets/svg/Close.svg';
import searchIcon from './../../../assets/svg/search.svg';
import {Header, Title, Search} from '../../../styles/pages/StampPage'


const HeaderContent = ({ currentSearch, handleResetSearch, navigate }) => {
    if (currentSearch) {
        return (
            <SearchHeader>
                <SearchBar>
                    <SearchInput>{currentSearch}</SearchInput>
                    <CloseIcon 
                        src={closeIcon} 
                        alt="close"
                        onClick={handleResetSearch}
                    />
                </SearchBar>
            </SearchHeader>
        );
    }

    return (
        <Header>
            <Title>도장깨기</Title>
            <Search 
                src={searchIcon} 
                alt="search" 
                onClick={() => navigate('/restaurant/search')}
            />
        </Header>
    );
};

export default HeaderContent;

const SearchHeader = styled.div`
    padding: 11.7px 20px 0 20px;
    background: #fff;
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background: #F7F7F7;
    border-radius: 8px;
    padding: 10px 16px;
    gap: 8px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FFF;
`;

const SearchInput = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 500;
    flex-grow: 1;
`;

const CloseIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;