import { Overlay } from "../../../../styles/pages/StampPage";
import clearIcon from "../../../../assets/svg/clear.svg"
import styled from "styled-components";
import checkIcon from "../../../../assets/svg/check.svg"

const CategoryBottomSheet = ({ open, setOpen, selectedFoods, setSelectedFoods }) => {



    const handleSelect = (restaurant) => {
        setSelectedFoods(prev=>({
            [restaurant]: !prev[restaurant]
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
                        onClick={() => handleSelect('한식')}
                        style={{ opacity: selectedFoods.한식 ? 1 : 0.5 }}
                    >
                        {selectedFoods.한식 && <img src={checkIcon} alt="check" />}
                        <div>한식</div>
                    </List>

                    <List 
                        onClick={() => handleSelect('양식')}
                        style={{ opacity: selectedFoods.양식 ? 1 : 0.5 }}
                    >
                        {selectedFoods.양식 && <img src={checkIcon} alt="check" />}
                        <div>양식</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('아시안')}
                        style={{ opacity: selectedFoods.아시안 ? 1 : 0.5 }}
                    >
                        {selectedFoods.아시안 && <img src={checkIcon} alt="check" />}
                        <div>아시안</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('일식')}
                        style={{ opacity: selectedFoods.일식 ? 1 : 0.5 }}
                    >
                        {selectedFoods.일식 && <img src={checkIcon} alt="check" />}
                        <div>일식</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('중식')}
                        style={{ opacity: selectedFoods.중식 ? 1 : 0.5 }}
                    >
                        {selectedFoods.중식 && <img src={checkIcon} alt="check" />}
                        <div>중식</div>
                    </List>
                    <List 
                        onClick={() => handleSelect('패스트푸드')}
                        style={{ opacity: selectedFoods.패스트푸드 ? 1 : 0.5 }}
                    >
                        {selectedFoods.패스트푸드 && <img src={checkIcon} alt="check" />}
                        <div>패스트푸드</div>
                    </List>
                    
                </Container>

            </Bottom>
        
        
        </>

    );
};

export default CategoryBottomSheet;

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
        height:20px;
    };

`