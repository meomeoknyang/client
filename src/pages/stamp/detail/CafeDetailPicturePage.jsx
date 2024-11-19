import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backIcon from '../../../assets/svg/back.svg'
import logotextIcon from '../../../assets/logotext.png'
import closeIcon from '../../../assets/svg/Close.svg'
import axios from "axios";

const CafeDetailPicturePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('picture'); 
    const {id} = useParams();
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseURL = process.env.REACT_APP_API_URL;
    const detailurl = `/cafes/detail/${id}`;
    const handleClick = (type) => {
        setActiveTab(type);
        if (type === 'home')  {
            navigate(detailurl);
        } else if (type === 'menu') {
            navigate(`${detailurl}/menu`);
        } else if (type === 'review') {
            navigate(`${detailurl}/review`);
        } else if (type === 'picture') {
            navigate(`${detailurl}/picture`);
        } else if (type === 'reviewWrite'){
            navigate(`/cafes/review/${id}`);
        }
    };
    const handleBack = () => {
        navigate(-1);
    }
    const handleList = () => {
        navigate(`/cafes`);
    };  
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseURL}/cafes/${id}/`);
                setRestaurantData(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
            
        };

        if (id) {
            fetchData();
        }
    }, [id, baseURL]);

    if (!restaurantData) return <p>로딩 중...</p>;

    const { name, review_images } = restaurantData;
    return(
        <div>
            <Header>   
                <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
                    <img src={backIcon} alt="back" onClick={()=>handleBack()} />
                    <div className='name'>{name}</div>
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
            {review_images && review_images.length > 0 ? (
                    review_images.slice(0, 9).map((imageObj, index) => (
                        <GridImage
                            key={index}
                            src={imageObj.image_url || imageObj.image}
                            alt={`사진 ${index + 1}`}
                        />
                    ))
                ) : (
                    <NoImageMessage>
                        등록된 사진이 없습니다.
                    </NoImageMessage>
                )}
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

export default CafeDetailPicturePage;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 164px);
    margin: 20px 0;
    gap: 7px;
    justify-content: center;
    padding: 2px;
`;

const GridImage = styled.img`
    width: 164px;
    height: auto;
    border-radius: 10px;
    background-color: #F4F4F4;
    background-size: cover;
    background-position: center;
`;

const NoImageMessage = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    padding: 40px 20px;
    color: rgba(0,0,0,0.5);
    font-size: 14px;
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