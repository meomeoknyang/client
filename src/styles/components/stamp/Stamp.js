import styled from "styled-components";
//import menu from '../../../assets/menu.png'
const Container = styled.div`
    width: 335px;
    height: 128px;
    border-radius: 10px;
    background: var(--Backgrounds-Primary, #FFF);
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    margin-bottom: 16px;
`

const Detail = styled.div`
    color:#fff;
    width: 193px;
    height: 128px;
    border-radius: 5px 0px 0px 5px;
    display: flex;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.00) -20.31%,
        rgba(0, 0, 0, 0.55) 73.64%
    ), url(${props => props.src}) lightgray 50% / cover no-repeat;

  & > div {
    width: 152px;
    margin: auto;
    position: relative;
    z-index: 1;
  }
`;

const Visit = styled.div`
    width: 142px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & span.orange {
        padding: 16px;
        font-size: 16px;
        color: #FF6F00;
        font-weight: 700;
        max-width: 142px;
    }

    & > span {
        padding: 16px;
        font-size: 16px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.30);
        max-width: 142px;
    }

    & > img {
        padding: 0 15px 12px 55px;
    }
`;

export {Container, Detail, Visit} ;