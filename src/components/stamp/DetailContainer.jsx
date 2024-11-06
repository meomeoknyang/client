import { Title, Information } from "../../styles/components/stamp/DetailContainer";
import breakIcon from "../../asset/svg/break.svg"
import priceIcon from "../../asset/svg/price.svg"
import locationIcon from "../../asset/svg/location.svg"
const Main = ({text}) => {
    return(
        <Title>{text}</Title>
    );
};

const Breaktime = ({text}) => {
    return(
        <Information>
            <img style={{marginRight:"2px"}} src={breakIcon} alt="" />
            브레이크 {text}
        </Information>
    );
};

const Price = ({text}) => {
    return(
        <Information>
            <img style={{marginRight:"2px"}} src={priceIcon} alt="" />
            평균 {text}원
        </Information>
    );
};

const Distance = ({text}) => {
    return(
        <Information>
            <img style={{marginRight:"2px"}} src={locationIcon} alt="" />
            정문에서 도보 {text} 거리
        </Information>
    );
};

export {Main, Breaktime, Price, Distance}
