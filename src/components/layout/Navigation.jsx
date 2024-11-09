import Menu from '../../styles/components/layout/Navigation';
import randomIcon from '../../assets/svg/layout/random.svg';
import mapIcon from '../../assets/svg/layout/map.svg';
import personIcon from '../../assets/svg/layout/person.svg';
import approvalIcon from '../../assets/svg/layout/approval.svg';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path) => {

        navigate('/' + path);
    };
    const currentPath = location.pathname.split('/')[1];

    return(
        <>
                <Menu 
                    onClick={() => handleClick( 'random')}
                    style={{
                        opacity: currentPath === 'random' ? 1 : 0.24
                    }}
                >
                    <img src={randomIcon} alt="random" />
                    <span>랜덤</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('stamp')}
                    style={{
                        opacity: currentPath === 'stamp' ? 1 : 0.24
                    }}
                >
                    <img src={approvalIcon} alt="stamp" />
                    <span>도장깨기</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('map')}
                    style={{
                        opacity: currentPath === 'map' ? 1 : 0.24
                    }}
                >
                    <img src={mapIcon} alt="map" />
                    <span>지도</span>
                </Menu>

                <Menu
                    onClick={() => handleClick('mypage')}
                    style={{
                        opacity: currentPath === 'mypage' ? 1 : 0.24
                    }}
                >
                    <img src={personIcon} alt="mypage" />
                    <span>마이페이지</span>
                </Menu>

        </>
        
    );
};

export default Navigation;