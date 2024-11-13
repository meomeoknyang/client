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
    flex-direction: row;
    justify-content: center;
    align-items: center

    ${props => props.$isSelected && `
    border: 1px solid #FF6F00;
    background: rgba(255, 111, 0, 0.10);
    color: #FF6F00;
    align-items: center
    `}
    `

const CgView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    align-items: center;
`


export {CgChips, CgView};