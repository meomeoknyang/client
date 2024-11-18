import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Tap = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (tabNumber) => {
        setActiveTab(tabNumber);
        if (tabNumber === 1) {
            navigate('/stamp/restaurant');
        } else {
            navigate('/stamp/cafe');
        }
    };

    return (
        <TabContainer>
            <TabButton 
                className={activeTab === 1 ? "active" : ""} 
                onClick={() => handleClick(1)}
            >
                식당
            </TabButton>
            <TabButton 
                className={activeTab === 0 ? "active" : ""} 
                onClick={() => handleClick(0)}
            >
                카페
            </TabButton>
        </TabContainer>
    );
};

export default Tap;

const TabContainer = styled.div`
    display: flex;
    width: 376px;
`;

const TabButton = styled.div`
    color: rgba(0, 0, 0, 0.35);
    font-size: 16px;
    font-weight: 600;
    width: 188px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    cursor: pointer;

    &.active {
        color: #000;
        border-bottom: 2px solid #000;
        width: 188px;
    }
`;
