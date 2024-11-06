import Menu from '../../styles/components/layout/Navigation';
import randomIcon from '../../assets/svg/layout/random.svg';
import mapIcon from '../../assets/svg/layout/map.svg';
import personIcon from '../../assets/svg/layout/person.svg';
import approvalIcon from '../../assets/svg/layout/approval.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState('');
    const handleClick = (menuName, path) => {
        setActiveMenu(menuName);
        navigate(path);
    };

    return(
        <>
                <Menu 
                    onClick={() => handleClick('random', '/random')}
                    style={{
                        opacity: activeMenu === 'random' ? 1 : 0.24
                    }}
                >
                    <img src={randomIcon} alt="random" />
                    <span>랜덤</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('stamp', '/stamp')}
                    style={{
                        opacity: activeMenu === 'stamp' ? 1 : 0.24
                    }}
                >
                    <img src={approvalIcon} alt="stamp" />
                    <span>도장깨기</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('map', '/map')}
                    style={{
                        opacity: activeMenu === 'map' ? 1 : 0.24
                    }}
                >
                    <img src={mapIcon} alt="map" />
                    <span>지도</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('mypage', '/mypage')}
                    style={{
                        opacity: activeMenu === 'mypage' ? 1 : 0.24
                    }}
                >
                    <img src={personIcon} alt="mypage" />
                    <span>마이페이지</span>
                </Menu>

        </>
        
    );
};

export default Navigation;