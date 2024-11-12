import { Container, Detail, Visit } from "../../../styles/components/stamp/Stamp";
import { Main, Breaktime, Price, Distance } from "./DetailContainer";
import starIcon from "../../../assets/svg/star.svg"
const Stamp = () => {

    return(
        <Container>
            <Detail>
                <div style={{ width:"152px", position:"relative", top:"18px", left:"20.5px"}}>
                    <div style={{display:"flex", gap:"4px"}}>
                        <Main text={"가게이름"}/>
                        <div style={{display: "flex", alignItems:"center"} }>
                            <img src={starIcon} alt="star" style={{width:"10px", height:"10px"}} />
                            <span style={{fontSize:"10px", fontWeight:"500"}}>5.0</span>
                            <span style={{fontSize:"8px", fontWeight:"500", marginLeft:"4px"}}>메뉴</span>
                        </div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column",gap:"4px", marginTop:"28px"}}>
                        <Breaktime text={"15:00 - 17:00"}></Breaktime>
                        <Price text={"12,000"}></Price>
                        <Distance text={"3분"}></Distance>
                    </div>
                    
                </div>
            </Detail>
            <Visit>
                <span>N번째 방문</span>
            </Visit>
        </Container>
    );

};

export default Stamp;