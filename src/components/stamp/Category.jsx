import {CgView, Filter, Back} from '../../styles/components/stamp/Category';
import ChipWrapper from './ChipWrapper';
import FilterIcon from '../../asset/svg/filter.svg';
import DownIcon from '../../asset/svg//arrow_down.svg';

const Category = () => {
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
                    <ChipWrapper width="72px" text = {"추천순"}>
                        <img src={DownIcon} alt="" />
                    </ChipWrapper>
                    <ChipWrapper width="72px" text = {"제휴"}/>
                    <ChipWrapper width="72px"text = {"카테고리"}/>
                </div>


            </CgView>
            
            <Back>
                <Filter>
                    <img style={{position: "absolute", right: "5px", bottom: "5px"}}  src={FilterIcon}  alt="filter" />
                </Filter>
            </Back>
        </div>
    );
};

export default Category;


