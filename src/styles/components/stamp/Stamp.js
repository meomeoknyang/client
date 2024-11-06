import styled from "styled-components";
import menu from '../../../asset/menu.png'
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
    color: #fff;
    width: 193px;
    height: 128px;
    border-radius: 5px 0px 0px 5px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) -20.31%, rgba(0, 0, 0, 0.55) 73.64%),
                    url(${menu}) lightgray 50% / cover no-repeat;
`

const Visit = styled.div`
    width: 142px;

    & >span {
        position: relative;
        top: 16px;
        left: 17px;
        font-size: 16px;
        color: #FF6F00;
        font-weight: 700;
    }
`

export {Container, Detail, Visit} ;