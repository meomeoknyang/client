import { Overlay } from "../../../../styles/pages/StampPage";
import clearIcon from "../../../../assets/svg/clear.svg"
import styled from "styled-components";

const AllBottomSheet = ({ open, setOpen }) => {
    

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
                            <Box>방문</Box>
                            <Box>미방문</Box>
                        </BoxWrapper>
                    </List>

                    <List>
                        <div>제휴</div>
                        <BoxWrapper>
                            <Box>공학대학</Box>
                            <Box>소프트웨어융합대학</Box>
                            <Box>약학대학</Box>
                            <Box>과학기술융합대학</Box>
                            <Box>국제문화대학</Box>
                            <Box>언론정보대학</Box>
                            <Box>경상대학</Box>
                            <Box>디자인대학</Box>
                            <Box>예체능대학</Box>
                        </BoxWrapper>
                    </List>

                    <List>
                        <div>음식 카테고리</div>
                        <BoxWrapper>
                            <Box>한식</Box>
                            <Box>양식</Box>
                            <Box>아시안</Box>
                            <Box>일식</Box>
                            <Box>중식</Box>
                            <Box>패스트푸드</Box>

                        </BoxWrapper>
                    </List>

                </Container>
                <div style={{padding:"20px", display:"flex", gap:"8px",fontWeight:"500",fontSize:"16px", borderTop:"1px solid rgba(0, 0, 0, 0.10)"}}>
                    <div style={{width:"82px", padding:"12px 18px", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.20)"}}>초기화</div>
                    <div style={{padding:"12px 84px", borderRadius: "5px",backgroundColor: "#FF6F00", color:"#fff"}}>결과보기</div>

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