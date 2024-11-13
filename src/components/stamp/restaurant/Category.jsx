import {CgView} from '../../../styles/components/stamp/Category';
import ChipWrapper from './ChipWrapper';

const Category = ({setBottomSheet, visited, setVisited}) => {
    const handleClick = (type) => {
        setBottomSheet({
            type:type,
            isOpen: true
        });
        
    };
    const handleVisit= (type) => {
        if (visited === type) {
            setVisited(false);
        } else {
            setVisited(type);
        }
    };

    return (
        <div style={{height:"60px", display:"flex", position:"relative",justifyContent: "center"}}>
            <CgView>
                <div style={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <ChipWrapper width="59px" text = {"방문"} onClick={() => handleVisit('visited')}
                        isSelected={visited === 'visited'}
                        />
                    <ChipWrapper width="59px" text = {"미방문"} onClick={() => handleVisit('unvisited')}
                        isSelected={visited === 'unvisited'}/>
                    <ChipWrapper onClick={()=>handleClick('sort')} width="72px" text = {"추천순"}  icon = {"drop"}/>
                    <ChipWrapper onClick={()=>handleClick('category')} width="81px"text = {"카테고리"} icon = {"drop"}/>
                </div>
            </CgView>
            
        </div>
    );
};

export default Category;
