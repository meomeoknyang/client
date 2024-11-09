import {CgView, Filter, Back} from '../../../styles/components/stamp/Category';
import ChipWrapper from './ChipWrapper';
import FilterIcon from '../../../assets/svg/filter.svg';
import { useState } from 'react';

const Category = ({setBottomSheet}) => {
    const handleClick = (type) => {
        setBottomSheet({type:type, isOpen: true});
    };

    const [visited, setVisited] = useState(false);

    const handleVisit= (type) => {
        if (visited === type) {
            setVisited(false);
        } else {
            setVisited(type);
        }
    };

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
                    <ChipWrapper width="59px" text = {"방문"} onClick={() => handleVisit('visited')}
                        isSelected={visited === 'visited'}
                        />
                    <ChipWrapper width="59px" text = {"미방문"} onClick={() => handleVisit('unvisited')}
                        isSelected={visited === 'unvisited'}/>
                    <ChipWrapper onClick={()=>handleClick('sort')} width="72px" text = {"추천순"}  icon = {"drop"}/>
                    <ChipWrapper onClick={()=>handleClick('partner')} width="59px" text = {"제휴"} icon = {"drop"}/>
                    <ChipWrapper onClick={()=>handleClick('category')} width="81px"text = {"카테고리"} icon = {"drop"}/>
                </div>
            </CgView>
            <Back>
                <Filter>
                    <img onClick={()=>handleClick('all')}  style={{position: "absolute", right: "5px", bottom: "5px"}}  src={FilterIcon}  alt="filter" />
                </Filter>
            </Back>
        </div>
    );
};

export default Category;
