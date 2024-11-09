import {CgView, Filter, Back} from '../../styles/components/stamp/Category';
import ChipWrapper from './ChipWrapper';
import FilterIcon from '../../assets/svg/filter.svg';

const Category = ({setBottomSheet}) => {
    const handleClick = (type) => {
        setBottomSheet({type:type, isOpen: true});
    }
    return (
        <div style={{height:"60px", display:"flex", alignItems:"center", position:"relative"}}>
            <CgView style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                width: "calc(100% - 50px)"
            }}>
                <div style={{
                    display: "flex",
                    gap: "8px"
                }}>
                    <ChipWrapper width="59px" text = {"방문"}/>
                    <ChipWrapper width="59px" text = {"미방문"}/>
                    <ChipWrapper onClick={()=>handleClick('sort')} width="72px" text = {"추천순"}  icon = {"drop"}/>
                    <ChipWrapper onClick={()=>handleClick('partner')} width="59px" text = {"제휴"} icon = {"drop"}/>
                    <ChipWrapper onClick={()=>handleClick('category')} width="81px"text = {"카테고리"} icon = {"drop"}/>
                </div>
            </CgView>
            <Back>
                <Filter>
                    <img  style={{position: "absolute", right: "5px", bottom: "5px"}}  src={FilterIcon}  alt="filter" />
                </Filter>
            </Back>
        </div>
    );
};

export default Category;
