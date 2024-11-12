import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const SearchBar = styled.div`
  position: absolute;
  top: 3.38rem;
  left: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  display: flex;

  width: 20.9375rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.3125rem;
  background: var(--Backgrounds-Primary, #FFF);

  /* map shadoow */
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.875rem;
  letter-spacing: -0.0625rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.20);
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.875rem;
    letter-spacing: -0.0625rem;
  }
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

export const FilterContainer = styled.div`
  position: absolute;
  top: 6.62rem;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 0 20px;
`;

export const FilterButton = styled.button`
  align-items: center;
  border: none;
  cursor: pointer;

  display: inline-flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.25rem;

  border-radius: 3.125rem;
  background: var(--Backgrounds-Primary, #FFF);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);

  /* 텍스트 스타일 명확하게 분리 */
  span {
    color: #000;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.75rem;
    letter-spacing: -0.0625rem;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  /* 이미지 스타일 */
  img {
    width: 0.75rem;
    height: 0.75rem;
    display: block; /* 이미지 정렬 개선 */
  }
`;

export const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background: var(--Backgrounds-Primary, #FFF);
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.05);
  
  z-index: 2;
  height: 100vh;
  transform: translateY(${props => {
    if (props.isDragging) {
      // return `${props.draggedY}px`;
    }
    switch(props.position) {
      case 'top': return '+18vh';
      case 'middle': return '+61vh';
      case 'bottom': return 'calc(+100vh - 65.96px - 4.75rem)';
      default: return '50vh';
    }
  }});
  transition: ${props => props.isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'};
  overflow-y: scroll;
  touch-action: pan-y;
  will-change: transform;
  -webkit-font-smoothing: antialiased;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const BottomSheetContent = styled.div`
  padding-bottom: 2.62rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh + 18rem);
  
  & > *:not(.scrollable-section) {
    width: 20.9375rem;
    margin-left: auto;
    margin-right: auto;
  }

  .scrollable-section {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 1.44rem 1.37rem 1.38rem 1.25rem !important;
  }

  /* 하단 버튼들 스타일 */
  img[alt="위로 가기"],
  img[alt="Bottom Logo"] {
    width: auto;
    padding: 0;
  }
`;

export const BottomSheetHandle = styled.div`
  width: 100%;
  height: 1.74rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.625rem 0;

  &::after {
    content: '';
    width: 1.8125rem;
    height: 0.25rem;
    background: #E0E0E0;
    border-radius: 2px;
  }
`;

export const Title = styled.h2`
  margin: 1.5rem 0 1.25rem;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.0625rem;
  
  strong {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: -0.0625rem;
  }
`;

export const RestaurantCard = styled.div`
`;

export const RestaurantImage = styled.div`
  width: 20.9375rem;
  height: 8.4375rem;
  border-radius: 0.3125rem;
  background-color: #D9D9D9;
  background-image: ${({ src }) => src ? `url(${src})` : 'none'};
  background-size: cover;
  background-position: center;
`;

export const RestaurantInfo = styled.div`
  margin-top: 0.5rem;
`;

export const RestaurantName = styled.h3`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.0625rem;
`;

export const Category = styled.span`
  margin-left: 0.25rem;
  color: rgba(0, 0, 0, 0.40);
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.5rem; /* 66.667% */
  letter-spacing: -0.0625rem;
`;

export const BestComment = styled.p`
  margin-top: 0.5rem;
  align-self: stretch;
  color: rgba(0, 0, 0, 0.76);
  font-family: "Noto Sans KR";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.0625rem;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;

  span {
    &.label {
      color: #000;
      font-family: "Noto Sans KR";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1rem;
      letter-spacing: -0.0625rem;
      margin-right: 0.1rem;
    }
    
    &.value {
      color: #000;
      font-family: "Noto Sans KR";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1rem;
      letter-spacing: -0.0625rem;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 0.625rem;
  background: rgba(0, 0, 0, 0.20);
  margin: 0 0.5rem;
  stroke-width: 1px;
  stroke: rgba(0, 0, 0, 0.20);
`;

export const Divider2 = styled.div`
  width: 1px;
  height: 0.625rem;
  background: rgba(255, 255, 255, 0.20);
  margin: 0 0.5rem;
  stroke-width: 1px;
  stroke: rgba(255, 255, 255, 0.20);
`;

export const ScrollableSection = styled.div.attrs({
  className: 'scrollable-section'
})`
  background: #FF6F00;
  height: 16rem;
  margin-top: 1.5rem;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CustomTitle = styled.h2`
  text-align: left;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  letter-spacing: -0.0625rem;
  margin-bottom: 1.25rem;
  line-height: 1rem;
  
  span.highlight {
    color: var(--Backgrounds-Primary, #FFF);
    font-weight: 700;
  }
  
  span.normal {
    color: var(--Backgrounds-Primary, #FFF);
    font-weight: 500;
    line-height: 0.75rem;
  }
`;

export const ScrollContent = styled.div`
  display: inline-flex;
`;

export const UpwardButton = styled.img`
  width: auto;
  cursor: pointer;
  margin-top: 3.75rem;
  margin-bottom: 0.94rem;
`;

export const BottomLogoImage = styled.img`
  width: auto;
  margin-bottom: 1rem;
`;

export const ScrollRestaurantCard = styled(RestaurantCard)`
  display: inline-block;
  width: 11.8125rem;
  margin-right: 1rem;
  margin-bottom: 0;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const ScrollRestaurantImage = styled(RestaurantImage)`
  width: 11.8125rem;
  height: 6.4375rem;
`;

export const ScrollRestaurantInfo = styled(RestaurantInfo)`
  margin-top: 0.5rem;

  ${RestaurantName} {
    color: var(--Backgrounds-Primary, #FFF);
    font-family: "Noto Sans KR";
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: -0.0625rem;
    margin-bottom: 0.5rem;
  }
  
  ${BestComment} {
    color: rgba(255, 255, 255, 0.76);
    font-family: "Noto Sans KR";
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.75rem;
    letter-spacing: -0.0625rem;
    margin-bottom: 0.75rem;
  }
  
  ${MetaInfo} {
    span {
      &.label {
        color: var(--Backgrounds-Primary, #FFF);
        font-family: "Noto Sans KR";
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.0625rem;
        margin-right: 0.1rem;
      }
      
      &.value {
        color: var(--Backgrounds-Primary, #FFF);
        font-family: "Noto Sans KR";
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.0625rem;
      }
    }
  }
`;

export const MainRestaurantInfo = styled(RestaurantInfo)`
  ${MetaInfo} {
    span {
      &.label {
        color: #000;
        font-family: "Noto Sans KR";
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.0625rem;
        margin-right: 0.1rem;
      }
      
      &.value {
        color: #000;
        font-family: "Noto Sans KR";
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.0625rem;
      }
    }
  }
`;

export const StoreImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
  margin-top: 0.7rem;
  width: 20.9375rem;
`;

export const StoreImage = styled.div`
  width: 6.8125rem;
  height: 6rem;
  border-radius: 0.3125rem;
  background-color: #D9D9D9;
  background-image: ${({ src }) => src ? `url(${src})` : 'none'};
  background-size: cover;
  background-position: center;
`;