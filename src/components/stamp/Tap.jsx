import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Tap = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        if (location.pathname.includes('/restaurant')) {
            setActiveTab(1);
        } else if (location.pathname.includes('/cafes')) {
            setActiveTab(0);
        }
    }, [location.pathname]);

    const handleClick = (tabNumber) => {
        setActiveTab(tabNumber);
        if (tabNumber === 1) {
            navigate('/restaurant');
        } else {
            navigate('/cafes');
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
