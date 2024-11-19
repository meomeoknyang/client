import { Overlay } from "../../../../styles/pages/StampPage";
import clearIcon from "../../../../assets/svg/clear.svg"
import styled from "styled-components";
import checkIcon from "../../../../assets/svg/check.svg"

const CategoryBottomSheet = ({ open, setOpen, selectedCategories, onCategorySelect }) => {

    const categoryMapping = {
        '한식': 1,
        '양식': 12,
        '아시안': 13,
        '일식': 10,
        '중식': 9,
        '패스트푸드': 17
    };

    const handleSelect = (category) => {
        const categoryId = categoryMapping[category];
        const isSelected = !selectedCategories.includes(categoryId);
        onCategorySelect(categoryId, isSelected);
    };

    if (!open) return null;
    return(
        
        <>
            <Overlay onClick={() => setOpen(false)}/>
            <Bottom>
                <Head>
                    <div style={{fontWeight: "700", display: "flex",alignItems: "center",fontSize:"20px"}}>카테고리</div>
                    <img onClick={() => setOpen(false)} 
                        src={clearIcon} 
                        alt="clear" 
                        style={{ cursor: 'pointer' }} />
                </Head>
                <Container>
                    {Object.entries(categoryMapping).map(([category, id]) => (
                        <List 
                            key={category}
                            onClick={() => handleSelect(category)}
                            style={{ opacity: selectedCategories.includes(id) ? 1 : 0.5 }}
                        >
                            {selectedCategories.includes(id) && <img src={checkIcon} alt="check" />}
                            <div>{category}</div>
                        </List>
                    ))}
                </Container>
            </Bottom>
        </>

    );
};

export default CategoryBottomSheet;

const Bottom = styled.div`
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
        margin:20px;
        flex-direction:row;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const List = styled.div`
    display:flex;
    gap:8px;
    margin: 20px;
    &> div{
        font-size: 16px;
        font-weight: 500;
        height:20px;
    };

`