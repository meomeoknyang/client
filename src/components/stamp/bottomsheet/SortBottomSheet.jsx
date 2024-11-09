import { Overlay } from "../../../styles/pages/StampPage";
import clearIcon from "../../../assets/svg/clear.svg"
import styled from "styled-components";
import checkIcon from "../../../assets/svg/check.svg"
import { useState } from "react";
const SortBottomSheet = ({ open, setOpen }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const sortOptions = [
        "추천순",
        "별점순",
        "리뷰 많은 순",
        "가격 낮은 순",
        "거리순"
    ];
    if (!open) return null;
    return(
        
        <>
            <Overlay onClick={() => setOpen(false)}/>
            <Bottom>
                <Head>
                    <div style={{fontWeight: "700", display: "flex",alignItems: "center"}}>정렬</div>
                    <img onClick={() => setOpen(false)} 
                        src={clearIcon} 
                        alt="clear" 
                        style={{ cursor: 'pointer' }} />
                </Head>
                <Container>
                    {sortOptions.map((option, index) => (
                            <List 
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                style={{ opacity: selectedIndex === index ? 1 : 0.5 }}
                            >
                                {selectedIndex === index && <img src={checkIcon} alt="check" />}
                                <div>{option}</div>
                            </List>
                        ))}

                </Container>

            </Bottom>
        
        
        </>

    );
};

export default SortBottomSheet;

const Bottom = styled.div`
    height: 403px;
    position:fixed;
    background-color:#fff;
    bottom:0px;
    z-index:101;
    width:375px;
    border-radius:16px 16px 0 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`

const Head = styled.div`
        display:flex;
        justify-content:space-between;
        margin:20px;
        flex-direction:row;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;

`

const List = styled.div`
    display:flex;
    gap:8px;
    margin: 20px;
    &> div{
        font-size: 16px;
        font-weight: 500;
    };

`