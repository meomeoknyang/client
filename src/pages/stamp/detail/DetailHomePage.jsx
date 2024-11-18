import styled from 'styled-components';
import {SubMain, SubBreaktime, SubPrice, SubDistance, SubCategory} from '../../../components/stamp/restaurant/DetailContainer'
//import menu from '../../../assets/menu.png'
import backIcon from '../../../assets/svg/back.svg'
import starIcon from '../../../assets/svg/star.svg'
//import downIcon from '../../../assets/svg/arrow_down.svg'
import closeIcon from '../../../assets/svg/Close.svg'
import rightIcon from '../../../assets/svg/arrow_right.svg'
import mapIcon from '../../../assets/svg/map.svg'
import editIcon from '../../../assets/svg/edit.svg'
import logotextIcon from '../../../assets/logotext.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRestaurant } from '../../../utils/api/Restaurant';
import axios from 'axios';
const DetailHomePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home'); 
    const {id} = useParams();
    const { restaurantData, loading, error, fetchRestaurantData } = useRestaurant();
    const baseurl = `/restaurant/detail/${id}`;

    useEffect(() => {
        if (id) {
          fetchRestaurantData(id);
          
        }
      }, [id, fetchRestaurantData]);
    
      if (loading) return <div>로딩 중...</div>;
      if (error) return <div>에러가 발생했습니다.</div>;
      if (!restaurantData || !restaurantData.data) {
        return <p>로딩 중...</p>
        };
    console.log(restaurantData);   
    const categoryNames = restaurantData.data && restaurantData.data.categories ? restaurantData.data.categories.map(category => category.name).join(', ') : '';
    const reviewCount = restaurantData.data?.comments?.length || 0;
    const displayRating = restaurantData.data && restaurantData.data.average_rating !== undefined ? 
    (restaurantData.data.average_rating === -1 ? '0' : restaurantData.data.average_rating.toFixed(1)) : '0';
    const formatBreakTime = (breakTimes) => {
        if (!breakTimes?.start_time || !breakTimes?.end_time) {
            return '타임 없음';
        }
        try {
            const startTime = breakTimes.start_time.slice(0, 5);
            const endTime = breakTimes.end_time.slice(0, 5);
            return `${startTime} - ${endTime}`;
        } catch {
            return '타임 없음';
        }
    };
    
    const breakTimeText = formatBreakTime(restaurantData.data?.break_times);
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
            navigate(`/restaurant/review/${id}`);
        }
    };


    
    const handleBack = () => {
        navigate(-1);
    }  
    const handleList = () => {
        navigate(`/restaurant`);
    }  



    const reviews = restaurantData.data.keywords ? restaurantData.data.keywords : [];
    const totalCount = reviews.reduce((sum, review) => sum + review.count, 0);

      const handleFindWay = () => {
        if (!restaurantData.data || !restaurantData.data.name) {
            alert("가게 정보가 없습니다.");
            return;
        }
        const searchQuery = encodeURIComponent(restaurantData.data.name);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            const kakaoMapUrl = `kakaomap://search?q=${searchQuery}`;
            window.location.href = kakaoMapUrl;
            
            setTimeout(() => {
                window.location.href = `https://map.kakao.com/link/search/${searchQuery}`;
            }, 1000);
        } else {
            window.open(`https://map.kakao.com/link/search/${searchQuery}`);
        }
    };

    const handleLoad = async (placeId) => {
        if (!placeId) {
            console.error('유효하지 않은 place_id입니다.');
            return;
        }
    
        try {
            const baseURL = process.env.REACT_APP_API_URL;
            
            // 식당 위치 정보만 먼저 시도
            try {
                const restaurantResponse = await axios.get(`${baseURL}/restaurants/${placeId}/location/`);
                if (restaurantResponse.data.code === 200) {
                    const locationData = restaurantResponse.data.data;
                    navigate('/map', {
                        state: {
                            placeId,
                            type: 'restaurant',
                            latitude: locationData.latitude,
                            longitude: locationData.longitude
                        }
                    });
                    return;
                }
            } catch (e) {
                // 식당 요청 실패시 카페 시도
                const cafeResponse = await axios.get(`${baseURL}/cafes/${placeId}/location/`);
                if (cafeResponse.data.code === 200) {
                    const locationData = cafeResponse.data.data;
                    navigate('/map', {
                        state: {
                            placeId,
                            type: 'cafe',
                            latitude: locationData.latitude,
                            longitude: locationData.longitude
                        }
                    });
                }
            }
        } catch (error) {
            console.error('위치 정보 조회 실패:', error);
        }
    };
    

    return(
        <div>
            <Container>
                <ImgContainer>
                    <Header>
                        <img onClick={()=>handleBack()} src={backIcon} alt="back" />
                        <img onClick={()=>handleList()}src={closeIcon} alt="close" />
                    </Header>
                   
                    <MenuImage src={restaurantData.data.image_url} alt="mainmenu" />
                </ImgContainer>
                <MenuDetail>
                    <MenuTitle>
                        <SubCategory text={categoryNames}/>
                            <SubMain text={restaurantData.data.name}/>
                            <RatingWrapper>
                                <StarIcon src={starIcon} alt="star"/>
                                <Rating>{displayRating}</Rating>
                                <ReviewCount>
                                    리뷰 {reviewCount}개
                                    <img src={rightIcon} alt="right" onClick={()=>handleClick('review')} />
                                </ReviewCount>
                                
                            </RatingWrapper>
                    </MenuTitle>
                    <InfoWrapper>
                        <InfoItem>
                            <SubDistance text={restaurantData.data.distance_from_gate}/>
                            <LocationButton onClick={()=> handleLoad(restaurantData.data.place_id)}>
                                <img src={mapIcon} alt="" />
                                위치
                            </LocationButton>
                        </InfoItem>
                        <InfoItem>
                            <SubBreaktime text={breakTimeText}/>
                        </InfoItem>
                        <InfoItem>
                            <SubPrice text={restaurantData.data.average_price}/>
                        </InfoItem>
                        <div style={{display:'flex',flexDirection:"row", gap:"4px", marginTop:"5px"}}>
                            {/**
                             <SubTag text={"다수추천"}/>
                            <SubTag text={"가성비"}/>
                             */}
                            

                        </div>
                        
                    </InfoWrapper>
                </MenuDetail>
                <Tab>
                    <SubTab onClick={()=>handleClick('home')} $isActive={activeTab === 'home'}>홈</SubTab>
                    <SubTab onClick={()=>handleClick('menu')} $isActive={activeTab === 'menu'}>메뉴</SubTab>
                    <SubTab onClick={()=>handleClick('picture')} $isActive={activeTab === 'picture'}>사진</SubTab>
                    <SubTab onClick={()=>handleClick('review')} $isActive={activeTab === 'review'}>리뷰</SubTab>
                </Tab>
                <div style={{borderBottom: "8px solid #F5F5F5"}}>
                    <Menut>
                        <div>메뉴</div>
                        <span>{restaurantData.data.menus ? restaurantData.data.menus.length : 0}</span>
                    </Menut>
                    <MenuContainer>
                        {restaurantData.data && restaurantData.data.menus && restaurantData.data.menus.slice(0, 4).map((menu) => (
                            <MenuItem key={menu.id}>
                                <MenuImg src={menu.image_url} />
                                <div style={{display: "flex", flexDirection: "column", gap:"4px"}}>
                                    <MenuName>{menu.name}</MenuName>
                                    <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
                                </div>
                            </MenuItem>
                        ))}
                        {(!restaurantData.data?.menus || restaurantData.data.menus.length === 0) && (
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
                    </MenuContainer>
                    <End>
                        <div className='line'/>
                        <StyledButton onClick={()=>handleClick('menu')} $isActive={activeTab === 'menu'}>메뉴 전체보기 <img src={rightIcon} alt="" /></StyledButton>
                    </End>

                    
                </div>

                <div style={{borderBottom: "8px solid #F5F5F5"}}>
                    <Menut>
                        <div>사진</div>
                    </Menut>

                    <PickContainer>
                        {restaurantData.data && restaurantData.data.review_images && restaurantData.data.review_images.length > 0 ? (
                            restaurantData.data.review_images.slice(0,9).map((imageObj, index) => (
                                <img 
                                    key={index}
                                    src={imageObj.image_url || imageObj.image}
                                    alt={`메뉴 ${index + 1}`}
                                    onError={(e) => {
                                        console.log('Image load error for URL:', imageObj.image_url || imageObj.image);
                                        e.target.style.backgroundColor = '#F5F5F5';
                                    }}
                                />
                            ))
                        ) : (
                            <div style={{
                                gridColumn: "1 / -1",
                                textAlign: "center",
                                padding: "20px",
                                color: "rgba(0,0,0,0.5)",
                                fontSize: "12px"
                            }}> 
                                등록된 사진이 없습니다. 
                            </div>
                        )} 
                    </PickContainer>
                        
                    <End>
                        <div className='line'/>
                        <StyledButton onClick={()=>handleClick('picture')} $isActive={activeTab === 'picture'}>사진/영상 더보기 <img src={rightIcon} alt="" /></StyledButton>
                    </End>
                </div>


                <div>
                    <Menut>
                        <div>학생들의 리얼한 리뷰</div>
                        <p onClick={()=>handleClick('reviewWrite')} $isActive={activeTab === 'reviewWrite'}> <img src={editIcon} alt="" /> 리뷰쓰기</p>
                    </Menut>
                    <Review>
                    {restaurantData.data && restaurantData.data.keywords && restaurantData.data.keywords.length > 0 ? (
                            restaurantData.data.keywords.slice(0,5).map((words,index)=>(
                                <ReviewItem 
                                key={index} 
                                $index={index}
                                $percent={(words.count / totalCount) * 100}
                            >
                                <div className="graph">
                                    <div className="fill"/>
                                    <div className="content">
                                        <div className="text">{words.keywords__description}</div>
                                        <div className="count">{words.count}</div>
                                    </div>
                                </div>
                            </ReviewItem>
                            ))
                        ) : (
                            <div style={{
                                textAlign: "center",
                                padding: "20px",
                                color: "rgba(0,0,0,0.5)",
                                fontSize: "12px"
                            }}  > 등록된 키워드가 없습니다. </div>
                        )} 
                        
                        <ReviewOverlay />
                    </Review>
                    <End><div className='line'/></End>
                    <ReviewList>
                        {restaurantData.data && restaurantData.data.comments && restaurantData.data.comments.length > 0 ? (
                            restaurantData.data.comments.slice(0,3).map((review, index) => (
                            <ReviewCard key={index}>
                                <Profile>
                                    <ProfileImg />
                                </Profile>
                                <ReviewContent>
                                    <UserInfo>
                                        <UserTop>
                                            <span className="nickname">{review.user}</span>
                                            <span className="badge">{review.title}</span>
                                        </UserTop>
                                        
                                        <VisitCount>
                                            {review.visit_count}번째 방문
                                        </VisitCount>
                                    </UserInfo>
                                    <Content>{review.comment}</Content>
                                </ReviewContent>
                            </ReviewCard>
                            ))
                        ):(
                            <div style={{
                                textAlign: "center",
                                padding: "20px",
                                color: "rgba(0,0,0,0.5)",
                                fontSize: "12px"
                            }}  > 등록된 리뷰가 없습니다. </div>
                        )}
                    </ReviewList>

                    <End>
                        <div className="line" />
                        <StyledButton onClick={()=>handleClick('review')} $isActive={activeTab === 'review'}>
                            후기 더보기 
                            <img src={rightIcon} alt="더보기" />
                        </StyledButton>
                    </End>
                </div>

                <Footer>
                    <TopMenu>
                        <span>이용약관</span>
                        <span>고객센터</span>
                        <span>리뷰운영정책</span>
                        <span>신고센터</span>
                    </TopMenu>
                    <Logo><img src={logotextIcon} alt="" /></Logo>
                </Footer>
            </Container>

            <Navi>
                <div style={{padding:"16px 24px", display:"flex", gap:"8px",fontSize:"16px", borderTop:"1px solid rgba(0, 0, 0, 0.10)"}}>
                        <button style={{width:"97px", padding:"12px 18px", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.20)", backgroundColor: "#fff",fontWeight:"700"}}
                        onClick={()=>{handleFindWay()}}>경로찾기</button>
                        <button
                            style={{width:"247px",padding:"12px 84px", borderRadius: "5px",backgroundColor: "#FF6F00", color:"#fff", border:"none",fontWeight:"700"}}
                            onClick={()=>handleClick('reviewWrite')} $isActive={activeTab === 'reviewWrite'}>
                                도장깨기
                        </button>
                </div>
            </Navi>
        </div>
    );
};



export default DetailHomePage;

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

const ReviewList = styled.div`
    padding:0 20px;
`;

const UserTop = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    .nickname {
        font-size: 10px;
        font-weight: 600;
    }

    .badge {
        font-size: 10px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.55);
        padding: 0 6px 0 0;
    }
`;

const VisitCount = styled.span`
    color: rgba(0, 0, 0, 0.55);
    font-size: 10px;
    font-weight: 600;
    border-left: 1px solid #D1D5D6;
    padding: 0 0 0 6px;
`;

const Content = styled.p`
    color: #000;
    font-size: 12px;
    font-weight: 600;
    padding: 10px 20px 10px 12px;
    letter-spacing: -0.12px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.04);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ReviewCard = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 8px;
    
    width: 335px;
`;

const Profile = styled.div`
    flex-shrink: 0; 
    width: 51px;
`;

const ProfileImg = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.12);
`;

const ReviewContent = styled.div`
    flex: 1;
    min-width: 0;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    margin-bottom: 8px;
`;


const ReviewOverlay = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 231px;
    background: linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.38) 30%, rgba(255, 255, 255, 0.00) 100%);
    pointer-events: none;
`;

const Review = styled.div`
    padding: 20px 20px 0 20px;
    position: relative;

`;

const ReviewItem = styled.div`
    margin-bottom: 8px;

    .graph {
        height: 40px;
        background: #F5F5F5;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        
        .fill {
            height: 100%;
            background: ${props => {
                const colors = [
                    '#FF6F00',
                    'rgba(255, 111, 0, 0.70)',
                    'rgba(255, 111, 0, 0.50)',
                    'rgba(255, 111, 0, 0.30)',
                    'rgba(255, 111, 0, 0.30)'
                ];
                return colors[props.$index] || colors[colors.length - 1];
            }};
            width: ${props => props.$percent}%;
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
        }

        .text {
            color: #000;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: -0.42px;
        }

        .count {
            color: #FF6F00;
            font-weight: 500;
            font-size: 14px;
        }
    }
`;

const PickContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 20px 20px 6px 20px;

    img {
        aspect-ratio: 1/1;
        background-color: #F5F5F5;
        border-radius: 4px;
        object-fit: cover;
        object-position: center;
    }

`

const End = styled.div`
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .line {
        position: absolute;
        top: 50%;
        left: 20px;
        right: 20px;
        height: 1px;
        background: #E4E4E4;
    }
`;

const StyledButton = styled.button`
    position: relative;
    border-radius: 50px;
    background: #F2F2F2;
    display: inline-flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${props => props.$isActive ? '#000' : 'rgba(0, 0, 0, 0.55)'};
    font-size: 12px;
    font-weight: 600;
    height: 30px;

    & > img {
        width: 16px;
        height: 20px;
        opacity: ${props => props.$isActive ? '1' : '0.3'};
    }
`;

const MenuName = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

const MenuPrice = styled.span`
    font-size: 12px;
    font-weight: 700;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const MenuImg = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    background-color: #F5F5F5;
    background-image: ${props => props.src ? `url(${props.src})` : 'none'};
    background-size: cover;
    background-position: center;
`;

const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 20px 20px 6px 20px;
`
const Menut = styled.div`

    display: flex;
    align-items: center;
    gap: 2px;
    padding:20px 0 0 20px;

    &> div {
        font-size: 18px;
        font-weight: 700;
    }
    &> span {
        color: rgba(0, 0, 0, 0.55);
        font-size: 18px;
        font-weight: 700;
    }
    &> p {
        color: #186ADE;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: -0.36px;
        margin-left: auto;
        padding-right: 20px;
        display: flex;
        align-items: center;
        gap: 4px;
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

const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
`;

const StarIcon = styled.img`
    width: 18px;
    height: 18px;
`;

const Rating = styled.span`
    font-size: 16px;
    font-weight: 700;
`;

const ReviewCount = styled.span`
    font-size: 16px;
    margin-left: 4px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 20px;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:8px;
`;

const LocationButton = styled.button`
    color: #186ADE;
    background: white;
    font-size: 14px;
    cursor: pointer;
    border:none;
    display: flex;
    align-items: center;
    height: 16px;
`;
const MenuTitle = styled.div`
    display:flex;
    flex-direction:column;
`
const MenuDetail = styled.div`
    padding: 17px 20px 20px 20px;
    border-bottom: 8px solid #F5F5F5;
`
const MenuImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `
const Navi = styled.div`
    background: #fff;
    position:fixed;
    bottom:0;
    width:375px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const Container = styled.div`
    flex:1;
    overflow-y: auto;
    width: 375px;
    height: 732px; 
`

const ImgContainer = styled.div`
    width:375px;
    height:214px;
`

const Header = styled.div`
    width: 375px;
    position: absolute;
    padding: 11px 20px;
    display: flex;
    justify-content: space-between;
`