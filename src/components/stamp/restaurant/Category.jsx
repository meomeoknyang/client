import ChipWrapper from './ChipWrapper';
import styled from 'styled-components';

const Category = ({ setBottomSheet, visited, setVisited, selectedSorts }) => {

    const searchParams = new URLSearchParams(window.location.search);
    const selectedCategories = searchParams.getAll('categories');

    const getSortWidth = (sort) => {
        switch (sort) {
            case '추천순':
            case '거리순':
            case '별점순':
                return '68px';
            case '리뷰많은순':
            case '가격낮은순':
                return '88px';
            default:
                return '68px';
        }
    };
    return (
        <Container>

            <ChipWrapper
                text="방문"
                width="45px"
                isSelected={visited === 'visited'}
                onClick={() => setVisited('visited')}
            />
            <ChipWrapper
                text="미방문"
                width="56px"
                isSelected={visited === 'unvisited'}
                onClick={() => setVisited('unvisited')}
            />
            <ChipWrapper
                text={selectedSorts}
                width={getSortWidth(selectedSorts)}
                icon="drop"
                onClick={() => setBottomSheet({ type: 'sort', isOpen: true })}
            />
            <ChipWrapper
                text="카테고리"
                width="78px"
                icon="drop"
                onClick={() => setBottomSheet({ type: 'category', isOpen: true })}
                isSelected={selectedCategories.length > 0}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 8px;
    margin: 12px 20px;
`;

export default Category;