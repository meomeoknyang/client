import { Overlay } from "../../../styles/pages/StampPage";
import clearIcon from "../../../assets/svg/clear.svg"
import styled from "styled-components";
import checkIcon from "../../../assets/svg/check.svg"
import { useState } from "react";
const SortBottomSheet = ({ open, setOpen }) => {

    const [selectedItem, setSelectedItem] = useState(false);

    if (!open) return null;
    return(
        
        <>
            <Overlay onClick={() => setOpen(false)}/>
            <Bottom>
                <Head>
                    <div style={{fontWeight: "700", display: "flex",alignItems: "center", fontSize:"20px"}}>정렬</div>
                    <img onClick={() => setOpen(false)} 
                        src={clearIcon} 
                        alt="clear" 
                        style={{ cursor: 'pointer' }} />
                </Head>
                <Container>
                    <List 
                        onClick={() => setSelectedItem('추천순')} 
                        style={{ opacity: selectedItem === '추천순' ? 1 : 0.5 }}
                    >
                        {selectedItem === '추천순' && <img src={checkIcon} alt="check" />}
                        <div>추천순</div>
                    </List>
                    <List 
                        onClick={() => setSelectedItem('별점순')}
                        style={{ opacity: selectedItem === '별점순' ? 1 : 0.5 }}
                    >
                        {selectedItem === '별점순' && <img src={checkIcon} alt="check" />}
                        <div>별점순</div>
                    </List>
                    <List 
                        onClick={() => setSelectedItem('리뷰많은순')}
                        style={{ opacity: selectedItem === '리뷰많은순' ? 1 : 0.5 }}
                    >
                        {selectedItem === '리뷰많은순' && <img src={checkIcon} alt="check" />}
                        <div>리뷰 많은 순</div>
                    </List>
                    <List 
                        onClick={() => setSelectedItem('가격낮은순')}
                        style={{ opacity: selectedItem === '가격낮은순' ? 1 : 0.5 }}
                    >
                        {selectedItem === '가격낮은순' && <img src={checkIcon} alt="check" />}
                        <div>가격 낮은 순</div>
                    </List>
                    <List 
                        onClick={() => setSelectedItem('거리순')}
                        style={{ opacity: selectedItem === '거리순' ? 1 : 0.5 }}
                    >
                        {selectedItem === '거리순' && <img src={checkIcon} alt="check" />}
                        <div>거리순</div>
                    </List>

                </Container>

            </Bottom>
        
        
        </>

    );
};

export default SortBottomSheet;

const Bottom = styled.div`

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