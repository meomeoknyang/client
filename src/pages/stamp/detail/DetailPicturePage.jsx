import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backIcon from '../../../assets/svg/back.svg'
import logotextIcon from '../../../assets/logotext.png'
import closeIcon from '../../../assets/svg/Close.svg'
import { useRestaurant } from "../../../api/Restaurant";

const DetailPicturePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('picture'); 
    const {id} = useParams();
    const baseurl = `/restaurant/detail/${id}`;
    const { restaurantData, loading, error, fetchRestaurantData } = useRestaurant();
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
    };  
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
            <GridContainer>
                <GridImage/>
                <GridImage/>
                <GridImage/>
                <GridImage/>
                <GridImage/>
                <GridImage/>
                <GridImage/>
                <GridImage/>

                
            </GridContainer>
            <Footer>
                    <TopMenu>
                        <span>이용약관</span>
                        <span>고객센터</span>
                        <span>리뷰운영정책</span>
                        <span>신고센터</span>
                    </TopMenu>
                    <Logo><img src={logotextIcon} alt="" /></Logo>
                </Footer>
        </div>
         
    );
};

export default DetailPicturePage;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 164px);
    margin:20px 0;
    gap: 7px;
    justify-content: center;
    padding: 2px;
`;

const GridImage = styled.div`
    width: 164px;
    height: 164px; //auto변경예정
    object-fit: cover;
    background-color: #F4F4F4;
    border-radius: 10px;

`;

const Footer = styled.div`
    height: 111px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F4F3F3;
    padding: 16px 0;
    justify-content: center;
`;

const TopMenu = styled.div`
    display: flex;
    gap: 18px;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
`;

const Logo = styled.div`
    margin-top:12px;
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