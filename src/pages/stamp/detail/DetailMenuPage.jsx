import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import backIcon from '../../../assets/svg/back.svg'
import { useRestaurant } from '../../../api/Restaurant';
import closeIcon from '../../../assets/svg/Close.svg'

const DetailMenuPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('menu'); 
    const isMain = true;
    const { restaurantData, loading, error, fetchRestaurantData } = useRestaurant();
    const {id} = useParams();
    const baseurl = `/restaurant/detail/${id}`;
    const handleClick = (type) => {
        setActiveTab(type);
        if (type === 'home')  {
            navigate(baseurl);
        } else if (type === 'menu') {
            navigate(`${baseurl}/menu`);
        } else if (type === 'review') {
            navigate(`${baseurl}/review`);
        } else if (type === 'picture') {
            navigate(`${baseurl}/picture`);
        } else if (type === 'reviewWrite'){
            navigate(`/review/${id}`);
        }
    };
    const handleBack = () => {
        navigate(-1);
    }
    const handleList = () => {
        navigate(`/restaurant`);
    }  
    useEffect(() => {
        if (id) {
          fetchRestaurantData(id);
        }
      }, [id, fetchRestaurantData]);
    
      if (loading) return <div>로딩 중...</div>;
      if (error) return <div>에러가 발생했습니다.</div>;
      if (!restaurantData) {
        return <p>로딩 중...</p>
        };

    return(
        <div>
            <Header>   
                <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
                    <img src={backIcon} alt="back" onClick={()=>handleBack()} />
                    <div className='name'>{restaurantData.name}</div>
                </div>
                    <img onClick={()=>handleList()}src={closeIcon} alt="close" />

                    </Header>
                <Tab>
                    <SubTab onClick={()=>handleClick('home')} $isActive={activeTab === 'home'}>홈</SubTab>
                    <SubTab onClick={()=>handleClick('menu')} $isActive={activeTab === 'menu'}>메뉴</SubTab>
                    <SubTab onClick={()=>handleClick('picture')} $isActive={activeTab === 'picture'}>사진</SubTab>
                    <SubTab onClick={()=>handleClick('review')} $isActive={activeTab === 'review'}>리뷰</SubTab>
                </Tab>
                <MenuList>
                        {restaurantData && restaurantData.menus && restaurantData.menus.map((menu) => (
                            <MenuCard key={menu.id}>
                            <Profile>
                                <ProfileImg />
                            </Profile>
                            <MenuContent>
                                <MenuName>
                                        <span className="name">{menu.name}</span>
                                        {menu.is_special && <span className={isMain ? "badge" : "private"}>대표</span>}
                                </MenuName>
                                <div className='menuprice'>{menu.price.toLocaleString()}원</div>
                            </MenuContent>
                        </MenuCard>
                        ))}
                        {(!restaurantData?.menus || restaurantData.menus.length === 0) && (
                            <div style={{
                                gridColumn: "1 / -1",
                                textAlign: "center",
                                padding: "20px",
                                color: "rgba(0,0,0,0.5)",
                                fontSize: "12px"
                            }}>
                                등록된 메뉴가 없습니다.
                            </div>
                        )}
                    </MenuList>

        </div>
    );
};

export default DetailMenuPage;

const MenuList = styled.div`
    padding:0 20px;
`;

const MenuName = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    .name {
        font-size: 16px;
        font-weight: 500;
    }

    .badge {
        display: flex;
        padding: 2px 4px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border-radius: 50px;
        background: #FF6F00;
        color: #FFF;
        font-size: 8px;
        font-weight: 500;
        letter-spacing: -0.24px;
    }

    .private{
    display:none;
    }
`;

const MenuCard = styled.div`
    padding: 20px 0;
    display: flex;
    gap: 8px;
    border-bottom: 1px solid #E4E4E4;
    align-items: center
`;

const Profile = styled.div`
    flex-shrink: 0; 
`;

const ProfileImg = styled.div`
    width: 92px;
    height: 92px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.12);
`;

const MenuContent = styled.div`
    flex: 1;
    
    .menuprice{
    color: #000;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: -0.36px;
    margin-top:8px;
    }
`;

const Header = styled.div`
    height: 53px;
    padding: 11px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:8px;
    .name{
    color: rgba(0, 0, 0, 0.99);
    font-size: 20px;
    font-weight: 700;

    }
`
const SubTab = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: ${props=>props.$isActive ? '#000':'rgba(0, 0, 0, 0.55)'};
    width:93.74px;
    height:45px;
    border-bottom: ${props => props.$isActive ? '1.5px solid #000' : '1px solid #E4E4E4'};
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Tab = styled.div`
    display:flex;
`