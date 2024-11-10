import { Overlay } from "../../../../styles/pages/StampPage";
import clearIcon from "../../../../assets/svg/clear.svg"
import styled from "styled-components";

const AllBottomSheet = ({ open, setOpen, selectedColleges, setSelectedColleges, selectedFoods, setSelectedFoods, visited, setVisited }) => {
    const handleVisitClick= (type) => {
        if (visited === type) {
            setVisited(false);
        } else {
            setVisited(type);
        }
    };
    const handleCollegeClick = (college) => {
        setSelectedColleges((prev) => {
            return{
            ...prev,
            [college]: !selectedColleges[college]
        }});
    };

    const handleFoodClick = (restaurant) => {
        setSelectedFoods((prev) => {
            return{
            ...prev,
            [restaurant]: !selectedFoods[restaurant]
        }});
    };
    
    const handleRemove = () => {
        setVisited(false);
        setSelectedColleges(() => ({
            공학대학: false,
            소프트웨어융합대학: false,
            약학대학: false,
            과학기술융합대학: false,
            국제문화대학: false,
            언론정보대학: false,
            경상대학: false,
            디자인대학: false,
            예체능대학: false
        }));
        setSelectedFoods(()=>({
            한식:false,
            양식:false,
            아시안:false,
            일식:false,
            중식:false,
            패스트푸드:false
        }));
    }

    const handleSubmit = async () => {
        const load = {
            visited,
            selectedColleges,
            selectedFoods,
        };

};


    if (!open) return null;
    return(
        
        <>
            <Overlay onClick={() => setOpen(false)}/>
            <Bottom>
                <Head>
                    <div style={{fontWeight: "700", display: "flex",alignItems: "center", fontSize:"20px"}}>세부필터</div>
                    <img onClick={() => setOpen(false)} 
                        src={clearIcon} 
                        alt="clear" 
                        style={{ cursor: 'pointer' }} />
                    
                </Head>
                <Container>
                    <List>
                        <div>정렬</div>
                        <BoxWrapper>
                        {visited === 'visited' ? (
                                <>
                                    <ClickBox onClick={() => handleVisitClick('visited')}>방문</ClickBox>
                                    <Box onClick={() => handleVisitClick('unvisited')}>미방문</Box>
                                </>
                            ) : visited === 'unvisited' ? (
                                <>
                                    <Box onClick={() => handleVisitClick('visited')}>방문</Box>
                                    <ClickBox onClick={() => handleVisitClick('unvisited')}>미방문</ClickBox>
                                </>
                            ) : (
                                <>
                                    <Box onClick={() => handleVisitClick('visited')}>방문</Box>
                                    <Box onClick={() => handleVisitClick('unvisited')}>미방문</Box>
                                </>
                            )}

                    
                            
                        </BoxWrapper>
                    </List>

                    <List>
                        <div>제휴</div>
                        <BoxWrapper>
                        {selectedColleges.공학대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('공학대학')}>공학대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('공학대학')}>공학대학</Box>
                            )}
                            
                            {selectedColleges.소프트웨어융합대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('소프트웨어융합대학')}>소프트웨어융합대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('소프트웨어융합대학')}>소프트웨어융합대학</Box>
                            )}
                            
                            {selectedColleges.약학대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('약학대학')}>약학대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('약학대학')}>약학대학</Box>
                            )}
                            
                            {selectedColleges.과학기술융합대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('과학기술융합대학')}>과학기술융합대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('과학기술융합대학')}>과학기술융합대학</Box>
                            )}
                            
                            {selectedColleges.국제문화대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('국제문화대학')}>국제문화대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('국제문화대학')}>국제문화대학</Box>
                            )}
                            
                            {selectedColleges.언론정보대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('언론정보대학')}>언론정보대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('언론정보대학')}>언론정보대학</Box>
                            )}
                            
                            {selectedColleges.경상대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('경상대학')}>경상대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('경상대학')}>경상대학</Box>
                            )}
                            
                            {selectedColleges.디자인대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('디자인대학')}>디자인대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('디자인대학')}>디자인대학</Box>
                            )}
                            
                            {selectedColleges.예체능대학 ? (
                                <ClickBox onClick={() => handleCollegeClick('예체능대학')}>예체능대학</ClickBox>
                            ) : (
                                <Box onClick={() => handleCollegeClick('예체능대학')}>예체능대학</Box>
                            )}
                        </BoxWrapper>
                    </List>

                    <List>
                        <div>음식 카테고리</div>
                        <BoxWrapper>
                            {selectedFoods.한식 ? (
                                    <ClickBox onClick={() => handleFoodClick('한식')}>한식</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('한식')}>한식</Box>
                                )}

                            {selectedFoods.양식 ? (
                                    <ClickBox onClick={() => handleFoodClick('양식')}>양식</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('양식')}>양식</Box>
                                )}

                            {selectedFoods.일식 ? (
                                    <ClickBox onClick={() => handleFoodClick('일식')}>일식</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('일식')}>일식</Box>
                                )}
                            {selectedFoods.중식 ? (
                                    <ClickBox onClick={() => handleFoodClick('중식')}>중식</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('중식')}>중식</Box>
                                )}
                            {selectedFoods.아시아 ? (
                                    <ClickBox onClick={() => handleFoodClick('아시아')}>아시아</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('아시아')}>아시아</Box>
                                )}
                            {selectedFoods.패스트푸드 ? (
                                    <ClickBox onClick={() => handleFoodClick('패스트푸드')}>패스트푸드</ClickBox>
                                ) : (
                                    <Box onClick={() => handleFoodClick('패스트푸드')}>패스트푸드</Box>
                                )}
                            

                        </BoxWrapper>
                    </List>

                </Container>
                <div style={{padding:"20px", display:"flex", gap:"8px",fontWeight:"500",fontSize:"16px", borderTop:"1px solid rgba(0, 0, 0, 0.10)"}}>
                    <button onClick={()=>handleRemove()} style={{width:"82px", padding:"12px 18px", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.20)", backgroundColor: "#fff"}}>초기화</button>
                    <button onClick={()=> handleSubmit()} style={{width:"247px",padding:"12px 84px", borderRadius: "5px",backgroundColor: "#FF6F00", color:"#fff", border:"none"}}>결과보기</button>

                </div>
                

            </Bottom>
        
        
        </>

    );
};

export default AllBottomSheet;

const Bottom = styled.div`
    height: 650px;
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
        padding:20px;
        flex-direction:row;
        border-bottom:1px solid rgba(0, 0, 0, 0.10);

`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 55px;

`

const List = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
    margin: 20px;
    &> div{
        font-size: 16px;
        font-weight: 500;
    };

`

const Box = styled.div`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #686868;
    color: rgba(0, 0, 0, 0.80);
    text-align: center;
    font-size: 12px;
    font-weight: 600;
`

const ClickBox = styled.div`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #FF6F00;
    background: rgba(255, 111, 0, 0.10);
    color: #FF6F00;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
`

const BoxWrapper= styled.div`
    display: flex;
    gap:8px;
    flex-wrap: wrap;
`