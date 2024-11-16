import styled from "styled-components";
import backIcon from "../../../assets/svg/back.svg"
import clearIcon from "../../../assets/svg/clear.svg"
import locationIcon from "../../../assets/svg/location_on.svg"
import searchIcon from ".././../../assets/svg/search.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RestaurantSearchPage = () => {
    const navigate = useNavigate();
    const [view,setView] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [recentSearch, setRecentSearch] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [placeList, setPlaceList] = useState([]);

    const handleLoad = (key) => {
        navigate('/map')
    }
    const handleBack = () => {
        navigate(-1);
    }
    const handleInputSearch = (e) => {
        if (!e.target) return;
        const value = e.target.value;
        setSearchInput(value);
        if (value.trim()) {
            setView(true);
            handleRealTimeSearch(value);
        } else {
            setView(false);
        }
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && searchInput.trim() !== '') {
            setRecentSearch((prev) => {
                const filtered = prev.filter(item => item !== searchInput);
                return [searchInput, ...filtered].slice(0, 5);
            });
            setSearchInput('');
            setView(false);
        }
    };

    const handleRemoveSearch = (term) => {
        setRecentSearch(prev => prev.filter(item => item !== term));
    };

    const handleResent = (term) => {
        setSearchInput(term);
        
        if (term.trim()) {
            setView(true);
            handleRealTimeSearch(term);
        } else {
            setView(false);
        }
    }

    const handleRealTimeSearch = async (text) => {
        try {
            const response = await axios.get(`https://port-0-server-m3eidei15754d939.sel4.cloudtype.app/search/restaurant/?q=${text}`);
            const {status, data} = response;
            if(status === 200){
                setMenuList(data.data.menus);
                setPlaceList(data.data.places);
            } else {
                console.log("실패")
            }

        } catch (error) {
            console.error(error);
        };
        
    };

    const highlightText = (text, searchInput) => {
        if (!searchInput) return text;
        
        const parts = text.split(searchInput);
        return parts.map((part, i) => (
            <>
                {part}
                {i !== parts.length - 1 && <span style={{ color: '#FF6F00' }}>{searchInput}</span>}
            </>
        ));
    };

    return(
        <>
            <Input>
                <img onClick={()=>handleBack()} src={backIcon} alt="" />
                <input
                    type="text"
                    placeholder="어떤 가게를 찾으세요?"
                    value={searchInput}
                    onChange={handleInputSearch}
                    onKeyDown={handleKeyDown} />
            </Input>
            <Contents>
                <List>
                    최근검색어
                </List>
                <BoxWrapper>
                    {recentSearch.map((search, index) => {
                        return (
                            <Box key={index}>
                                <div onClick={() => handleResent(search)}>
                                    {search}
                                </div>
                                
                                <img 
                                    src={clearIcon} 
                                    alt="delete"
                                    onClick={() => handleRemoveSearch(search)} 
                                />
                            </Box>
                        );
                    })}
                </BoxWrapper>
                
            </Contents>
            
            {view ? <SearchList>
                <MenuResult>
                {
                    
                    menuList.length > 0 && menuList.map((value, index) => {
                        return (
                        
                            <Search key={index}>
                                <img src={searchIcon} alt="search" />
                                <span onClick={() => handleResent(value.name)}>
                                    {highlightText(value.name, searchInput)}
                                </span>
                            </Search>
                                                
                    )})
                }
                </MenuResult>
                
                <PlacesResult>
                {
                    
                    placeList.length > 0 && placeList.map((value, index) => {
                        return(
                            <Location key={index}>
                                <LocMain>
                                    <img src={locationIcon} alt="location" />
                                    <span onClick={() => handleLoad(value.id)}>{highlightText(value.name, searchInput)}</span>
                                </LocMain>
                                <LocDetail>정문에서 도보 {value.distance_from_gate}분 거리</LocDetail>
                            </Location>
                        
                        ) 
                    })
                }
                </PlacesResult>   
            </SearchList>: ''}
            
        </>
    );

;}

export default RestaurantSearchPage;

const MenuResult = styled.div`
    max-height: 167px;
    overflow-y: auto;
    background: #fff;
    z-index: 1;
`

const PlacesResult = styled.div`
    max-height: 240px;
    overflow-y: auto;
    background: #fff;
    z-index: 1;
    border-top: 9px solid #F0F0F3;
`

const LocMain = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:8px;
    font-size: 16px;
    font-weight: 500;
        &>img{
        
        opacity:0.2;
        margin-left: 20px;
        
    }
`

const LocDetail = styled.div`
    color: rgba(0, 0, 0, 0.50);
    font-size: 14px;
    font-weight: 400;
    margin: 12px 0 0 48px;
`
const Search = styled.div`
    background: #fff;
    height:56px;
    width:375px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
        display:flex;
    flex-direction: row;
    align-items: center;
    gap:8px;
    font-size: 16px;
    font-weight: 500;
        &>img{
        
        opacity:0.2;
        margin-left: 20px;
        
    }

`

const Location = styled.div`
    background: #fff;
    height:80px;
    width:375px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const Input = styled.div`
    height: 56px;
    
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    padding:0 20px ;
}
    & input {
        font-size: 16px;
        font-weight: 500;
        width:100%;
        outline: none;
        border:none;
        display:block;
        
    }
`

const Contents = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    margin-bottom: 55px;
`


const List = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
    margin: 24px 20px;
    font-size: 16px;
    font-weight: 500;
    &> div{
        font-size: 16px;
        font-weight: 500;
    };

`

const BoxWrapper = styled.div`
    display: flex;
    gap:8px;
    flex-wrap: wrap;
    padding: 0 18px;
`

const Box = styled.div`

    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1px solid #E5E5E5;
    color: rgba(0, 0, 0, 0.80);
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    gap:2px;

    &> img{
        width:12px;
        opacity: 0.2;
    }
`
const SearchList = styled.div`
    position: absolute;
    top: 56px; 
    width: 375px;
    
`