import { Overlay } from "../../../styles/pages/StampPage";
import clearIcon from "../../../assets/svg/clear.svg"
import styled from "styled-components";
import checkIcon from "../../../assets/svg/check.svg"
import { useState } from "react";
const SortBottomSheet = ({ open, setOpen }) => {

    const [selectedItems, setSelectedItems] = useState({
        공학대학: false,
        소프트웨어융합대학: false,
        약학대학: false,
        과학기술융합대학: false,
        국제문화대학: false,
        언론정보대학: false,
        경상대학: false,
        디자인대학: false,
        예체능대학: false
    });

    const handleSelect = (college) => {
        setSelectedItems(prev=>({
            ...prev,
            [college]: !prev[college]
        }));
    };

    if (!open) return null;
    return(
        
        <>
            <Overlay onClick={() => setOpen(false)}/>
            <Bottom>
                <Head>
                    <div style={{fontWeight: "700", display: "flex",alignItems: "center",fontSize:"20px"}}>정렬</div>
                    <img onClick={() => setOpen(false)} 
                        src={clearIcon} 
                        alt="clear" 
                        style={{ cursor: 'pointer' }} />
                </Head>
                <Container>
                    <List 
                        onClick={() => handleSelect('공학대학')}
                        style={{ opacity: selectedItems.공학대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.공학대학 && <img src={checkIcon} alt="check" />}
                        <div>공학대학</div>
                    </List>

                    <List 
                        onClick={() => handleSelect('소프트웨어융합대학')}
                        style={{ opacity: selectedItems.소프트웨어융합대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.소프트웨어융합대학 && <img src={checkIcon} alt="check" />}
                        <div>소프트웨어융합대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('약학대학')}
                        style={{ opacity: selectedItems.약학대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.약학대학 && <img src={checkIcon} alt="check" />}
                        <div>약학대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('과학기술융합대학')}
                        style={{ opacity: selectedItems.과학기술융합대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.과학기술융합대학 && <img src={checkIcon} alt="check" />}
                        <div>과학기술융합대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('국제문화대학')}
                        style={{ opacity: selectedItems.국제문화대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.국제문화대학 && <img src={checkIcon} alt="check" />}
                        <div>국제문화대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('언론정보대학')}
                        style={{ opacity: selectedItems.언론정보대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.언론정보대학 && <img src={checkIcon} alt="check" />}
                        <div>언론정보대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('경상대학')}
                        style={{ opacity: selectedItems.경상대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.경상대학 && <img src={checkIcon} alt="check" />}
                        <div>경상대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('디자인대학')}
                        style={{ opacity: selectedItems.디자인대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.디자인대학 && <img src={checkIcon} alt="check" />}
                        <div>디자인대학</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('예체능대학')}
                        style={{ opacity: selectedItems.예체능대학 ? 1 : 0.5 }}
                    >
                        {selectedItems.예체능대학 && <img src={checkIcon} alt="check" />}
                        <div>예체능대학</div>
                    </List>
                    
                </Container>

            </Bottom>
        
        
        </>

    );
};

export default SortBottomSheet;

const Bottom = styled.div`
    height: 600x;
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
        height:20px;
    };

`