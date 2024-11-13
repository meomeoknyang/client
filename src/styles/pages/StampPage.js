import styled from "styled-components";


const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: auto;
    background: white;
    z-index: 100;

`;

const ContentContainer = styled.div`
    background: #F0F0F3;
    display: flex;
    justify-content: center;
    margin-top: 143px;
    margin-bottom: 65px;

`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: auto;
    right: auto;
    bottom: 0;
    width: 375px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100; 
    transition: opacity 0.3s ease;
`;

const Header = styled.div`
    height : 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Title = styled.span`

    position: absolute;
    left: 20px;
    font-weight : 700;
    font-size: 20px;
`

const Search = styled.img`
    position: absolute;
    right: 20px;
`

export {FixedContainer, ContentContainer, Header, Title, Search, Overlay};