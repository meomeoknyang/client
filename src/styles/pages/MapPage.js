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
  bottom: 65.96px;
  left: 0;
  right: 0;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 3;
`;

export const BottomSheetHandle = styled.div`
  background: #E0E0E0;
  border-radius: 2px;
  margin: 10px auto;

  width: 1.8125rem;
  height: 0.25rem;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: #CAD1DB;
`; 