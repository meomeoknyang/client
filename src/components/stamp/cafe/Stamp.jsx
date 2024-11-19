import { Container, Detail, Visit } from "../../../styles/components/stamp/Stamp";
import { Main, Breaktime, Price, Distance } from "./DetailContainer";
import starIcon from "../../../assets/svg/star.svg"
import stampIcon from "../../../assets/svg/stamp.svg"
import nostampIcon from "../../../assets/svg/nostamp.svg"
import { useNavigate } from "react-router-dom";
const Stamp = ({ id, name, rating, categories, breakTimes, distance, price, visitCount, isContacted, mainImg }) => {
    const navigate = useNavigate();
    const categoryNames = categories?.length > 0 ? categories[0].name || '' : '';
    const displayRating = rating === -1 ? '0' : rating.toFixed(1);
    const handleClick = (number) => {
        navigate(`/cafes/detail/${number}`)
    };
    const formatBreakTime = (breakTimes) => {
        if (!breakTimes || !Array.isArray(breakTimes) || breakTimes.length === 0) {
            return '타임 없음';
        };
        const breakTime = breakTimes[0];
            if (!breakTime?.start_time || !breakTime?.end_time) {
            return '타임 없음';
        };
        const startTime = breakTime.start_time.slice(0, 5);
        const endTime = breakTime.end_time.slice(0, 5);
        
        return `${startTime} - ${endTime}`;
    };


    
    return(
        <Container onClick={()=>handleClick(id)}>
            <Detail src={mainImg}>
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"

                    }}>
                        <div style={{display:"flex", gap:"4px", alignItems: "center", marginBottom: "20px"}}>
                            <Main text={name}/>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={starIcon} alt="star" style={{width:"10px", height:"10px"}} />
                                <span style={{fontSize:"10px", fontWeight:"500", color: "white"}}>{displayRating}</span>
                                <span style={{fontSize:"8px", fontWeight:"500", marginLeft:"4px", color: "white"}}>{categoryNames}</span>
                            </div>
                        </div>
                        <div style={{ display:"flex", gap:"4px", flexDirection:"column"}}>
                            <Breaktime text={formatBreakTime(breakTimes)} />
                            <Price text={price}/>
                            <Distance text={`${distance}분`} />
                        </div>
                        
                    </div>
                </div>
            </Detail>
            <Visit>
                {isContacted ?
                    <>
                        <span className="orange">{visitCount}번째 방문</span>
                        <img src={stampIcon} alt="stamp" />
                    </> 
                :
                    <>
                        <span>미방문</span>
                        <img src={nostampIcon} alt="nostamp" />
                    </> 
                }
            </Visit>
        </Container>
    );

};

export default Stamp;