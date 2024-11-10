import styled from "styled-components";
import backIcon from "../../assets/svg/back.svg"
import clearIcon from "../../assets/svg/clear.svg"
import locationIcon from "../../assets/svg/location_on.svg"
import searchIcon from ".././../assets/svg/search.svg"
import { useState } from "react";

const StampSearchPage = () => {
    const [view,setView] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [recentSearch, setRecentSearch] = useState([]);

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        setView(e.target.value.trim() !== '');
    };

 
    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && searchInput.trim() !== '') {
            setRecentSearch((prev) => {
                const filtered = prev.filter(item => item !== searchInput);
                return [searchInput, ...filtered].slice(0, 5);
            });
            setSearchInput('');
        }
    };

    const handleRemoveSearch = (term) => {
        setRecentSearch(prev => prev.filter(item => item !== term));
    };

    const handleResent = (text) => {
        setSearchInput(text);
        setView(true);
    }

    return(
        <>
            <Input>
                <img src={backIcon} alt="" />
                <input
                    type="text"
                    placeholder="어떤 가게를 찾으세요?"
                    value={searchInput}
                    onChange={handleInputChange}
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
                <Search>
                    <img  src={searchIcon} alt="search" />
                    <span>삼겹살</span>
                </Search>
                <Search>
                    <img  src={searchIcon} alt="search" />
                    <span>대패 삼겹살</span>
                </Search>
                <div style={{height:"9px", background:"#F0F0F3"}}/>
                <Location>
                    <LocMain>
                        <img src={locationIcon} alt="location" />
                        <span>91콩삼콩나물삼겹살</span>
                    </LocMain>
                    <LocDetail>정문에서 도보 3분 거리</LocDetail>
                </Location>
                <Location>
                    <LocMain>
                        <img src={locationIcon} alt="location" />
                        <span>하루삼겹</span>
                    </LocMain>
                    <LocDetail>정문에서 도보 3분 거리</LocDetail>
                </Location>
                
            </SearchList>: ''}
            
        </>
    );

;}

export default StampSearchPage;

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

        border:none;
        display:block;
        
    }
`

const Contents = styled.div`
    height:100%
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
    position:fixed;
    top:56px;
`