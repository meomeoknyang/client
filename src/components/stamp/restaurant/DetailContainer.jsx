import { Title, Information, Tag, SubTitle, SubInformation, SubCategories } from "../../../styles/components/stamp/DetailContainer";
import breakIcon from "../../../assets/svg/break.svg"
import priceIcon from "../../../assets/svg/price.svg"
import locationIcon from "../../../assets/svg/location.svg"
import BbreakIcon from "../../../assets/svg/B_break.svg"
import BpriceIcon from "../../../assets/svg/B_price.svg"
import BlocationIcon from "../../../assets/svg/B_location_on.svg"

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

const SubCategory = ({text}) => {
    return(
        <SubCategories>{text}</SubCategories>
    );
};

const SubMain = ({text}) => {
    return(
        <SubTitle>{text}</SubTitle>
    );
};

const SubBreaktime = ({text}) => {
    return(
        <SubInformation>
            <img style={{marginRight:"8px"}} src={BbreakIcon} alt="" />
            브레이크 {text}
        </SubInformation>
    );
};

const SubPrice = ({text}) => {
    return(
        <SubInformation>
            <img style={{marginRight:"8px"}} src={BpriceIcon} alt="" />
            평균 {text}원
        </SubInformation>
    );
};

const SubDistance = ({text}) => {
    return(
        <SubInformation>
            <img style={{marginRight:"8px"}} src={BlocationIcon} alt="" />
            정문에서 도보 {text} 거리
        </SubInformation>
    );
};
const SubTag = ({text}) => {
    return(
        <Tag>
            {text}
        </Tag>
    );
};

export {Main, Breaktime, Price, Distance, SubMain, SubBreaktime, SubPrice, SubDistance, SubTag, SubCategory}
