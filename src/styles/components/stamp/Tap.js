import styled from "styled-components";
const Hbutton = styled.div`
    color: rgba(0, 0, 0, 0.35);
    font-size: 16px;
    font-weight: 600;
    width : 188px;
    height : 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid;

    &.active{
    color: #000;
       border-bottom: 2px solid #000;
    }


`

export default Hbutton;