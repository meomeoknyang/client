import styled from "styled-components";
import backIcon from "../assets/svg/back.svg"
const StampSearchPage = () => {
    return(
        <>
            <Search>
                <img src={backIcon} alt="" />
                <input type="text" placeholder="어떤 가게를 찾으세요?" />
            </Search>
            <Contents>
                    <div></div>

            </Contents>
        </>
    );

;}

export default StampSearchPage;

const Search = styled.div`
    height: 56px;
    
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:8px;
}
}
    & img {  
        left:20px;
    }
    & input {
        font-size: 16px;
        font-weight: 500;

        border:none;
        display:block;
    }
`

const Contents = styled.div`
    height:100%
`