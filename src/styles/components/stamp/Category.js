import styled from "styled-components"

const CgChips = styled.span`
    color: #000;
    font-size: 12px;
    font-weight: 600;
    width: ${props => props.width};
    height: 27px;
    border-radius: 48px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    display: flex;
<<<<<<< HEAD
    flex-direction: column;
    justify-content: center;
    align-items: center
=======
    flex-direction: row;
    justify-content: center;
    align-items: center

    ${props => props.$isSelected && `
    border: 1px solid #FF6F00;
    background: rgba(255, 111, 0, 0.10);
    color: #FF6F00;
    align-items: center
    `}
>>>>>>> main
    `

const CgView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
<<<<<<< HEAD
    padding-left:20px;
    align-items: center;
    -ms-overflow-style: none; 
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Filter = styled.div`
    background-color : #ECECEC;
    width: 26px;
    height: 26px;
    border-radius: 10px;
    position: relative;
    left: 12px;
    top: 5px;
    
`

const Back = styled.div`
    width: 58px;
    height: 36px;
    position: absolute;
    right: 0px;
    background: linear-gradient(270deg, white 90%, rgba(255, 255, 255, 0) 100%);
`

export {CgChips, CgView, Filter, Back};
=======
    align-items: center;
`


export {CgChips, CgView};
>>>>>>> main
