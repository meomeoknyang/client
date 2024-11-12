import styled from 'styled-components';
import {SubMain, SubBreaktime, SubPrice, SubDistance, SubTag, SubCategory} from '../../components/stamp/restaurant/DetailContainer'
import menu from '../../assets/menu.png'
import backIcon from '../../assets/svg/back.svg'
import starIcon from '../../assets/svg/star.svg'
import downIcon from '../../assets/svg/arrow_down.svg'
import rightIcon from '../../assets/svg/arrow_right.svg'
import mapIcon from '../../assets/svg/map.svg'
import editIcon from '../../assets/svg/edit.svg'
import logoIcon from '../../assets/logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const StampDetailPage = () => {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home'); 
    const handleClick = (type) => {
        setActiveTab(type);
        if (type === 'home') {
            navigate(`/stamp/restaurant/detail`);
        } else if (type === 'menu') {
            navigate(`/stamp/restaurant/detail/menu`);
        } else if (type === 'review') {
            navigate(`/stamp/restaurant/detail/review`);
        } else if (type === 'picture') {
            navigate(`/stamp/restaurant/detail/picture`);
        }
    };

    const reviews = [
        { text: "여기 없어지면 에리카 퇴학합니다.", count: 55 },
        { text: "지갑 지키고 싶을 때, 여기 추천", count: 30 },
        { text: "할머니집 같이 정 많은 식당", count: 16 },
        { text: "동기들과 함께 가면 럭키비키~", count: 7 },
        { text: "재료가 살아있네~", count: 3 }
    ];
    const totalCount = reviews.reduce((sum, review) => sum + review.count, 0);

    return(
        <div>
            <Container>
                <ImgContainer>
                    <Header>
                        <img src={backIcon} alt="back" />
                    </Header>
                   
                    <MenuImage src={menu} alt="mainmenu" />
                </ImgContainer>
                <MenuDetail>
                    <MenuTitle>
                        <SubCategory text={"한식"}/>
                            <SubMain text={"두루정"}/>
                            <RatingWrapper>
                                <StarIcon src={starIcon} alt="star"/>
                                <Rating>3.8</Rating>
                                <ReviewCount>
                                    리뷰 15개
                                    <img src={rightIcon} alt="right" />
                                </ReviewCount>
                                
                            </RatingWrapper>
                    </MenuTitle>
                    <InfoWrapper>
                        <InfoItem>
                            <SubDistance text={"3분"}/>
                            <img src={downIcon} alt="down" />
                            <LocationButton>
                                <img src={mapIcon} alt="" />
                                위치
                            </LocationButton>
                        </InfoItem>
                        <InfoItem>
                            <SubBreaktime text={"15:00~17:00"}/>
                        </InfoItem>
                        <InfoItem>
                            <SubPrice text={"12,000"}/>
                        </InfoItem>
                        <div style={{display:'flex',flexDirection:"row", gap:"4px", marginTop:"5px"}}>
                            <SubTag text={"다수추천"}/>
                            <SubTag text={"가성비"}/>

                        </div>
                        
                    </InfoWrapper>
                </MenuDetail>
                <Tap>
                    <SubTab onClick={()=>handleClick('home')} $isActive={activeTab === 'home'}>홈</SubTab>
                    <SubTab onClick={()=>handleClick('menu')} $isActiveisActive={activeTab === 'menu'}>메뉴</SubTab>
                    <SubTab onClick={()=>handleClick('picture')} $isActive={activeTab === 'picture'}>사진</SubTab>
                    <SubTab onClick={()=>handleClick('review')} $isActive={activeTab === 'review'}>리뷰</SubTab>
                </Tap>
                <Partner>

                </Partner>
                <div style={{borderBottom: "8px solid #F5F5F5"}}>
                    <Menut>
                        <div>메뉴</div>
                        <span>21</span>
                        <p>메뉴판 이미지로 보기</p>
                    </Menut>
                    <MenuContainer>
                        <MenuItem>
                            <MenuImg/>
                            <div style={{display: "flex", flexDirection: "column", gap:"4px"}}>
                                <MenuName>파채옥 두루치기</MenuName>
                                <MenuPrice>12,000원</MenuPrice>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <MenuImg/>
                            <div style={{display: "flex", flexDirection: "column", gap:"4px"}}>
                                <MenuName>파채옥 두루치기</MenuName>
                                <MenuPrice>12,000원</MenuPrice>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <MenuImg/>
                            <div style={{display: "flex", flexDirection: "column", gap:"4px"}}>
                                <MenuName>파채옥 두루치기</MenuName>
                                <MenuPrice>12,000원</MenuPrice>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <MenuImg/>
                            <div style={{display: "flex", flexDirection: "column", gap:"4px"}}>
                                <MenuName>파채옥 두루치기</MenuName>
                                <MenuPrice>12,000원</MenuPrice>
                            </div>
                        </MenuItem>
                        
                    </MenuContainer>
                    <End>
                        <div className='line'/>
                        <button>메뉴 전체보기 <img src={rightIcon} alt="" /></button>
                    </End>

                    
                </div>

                <div style={{borderBottom: "8px solid #F5F5F5"}}>
                    <Menut>
                        <div>사진</div>
                    </Menut>
                    <PickContainer>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </PickContainer>
                        
                    <End>
                        <div className='line'/>
                        <button>사진/영상 더보기 <img src={rightIcon} alt="" /></button>
                    </End>
                </div>


                <div>
                    <Menut>
                        <div>학생들의 리얼한 리뷰</div>
                        <p> <img src={editIcon} alt="" /> 리뷰쓰기</p>
                    </Menut>
                    <Review>
                    {reviews.map((review, index) => (
                            <ReviewItem 
                                key={index} 
                                $index={index}
                                $percent={(review.count / totalCount) * 100}
                            >
                                <div className="graph">
                                    <div className="fill"/>
                                    <div className="content">
                                        <div className="text">{review.text}</div>
                                        <div className="count">{review.count}</div>
                                    </div>
                                </div>
                            </ReviewItem>
                        ))}
                        <ReviewOverlay />
                    </Review>
                    <End><div className='line'/></End>
                    <ReviewList>
                        {[1, 2, 3].map((_, index) => (
                            <ReviewCard key={index}>
                            <Profile>
                                <ProfileImg />
                            </Profile>
                            <ReviewContent>
                                <UserInfo>
                                    <UserTop>
                                        <span className="nickname">닉네임</span>
                                        <span className="badge">청춘</span>
                                    </UserTop>
                                    
                                    <VisitCount>
                                        n번째 방문
                                    </VisitCount>
                                </UserInfo>
                                <Content>한 줄 리뷰 내용</Content>
                            </ReviewContent>
                        </ReviewCard>
                        ))}
                    </ReviewList>

                    <End>
                        <div className="line" />
                        <button>
                            후기 더보기 
                            <img src={rightIcon} alt="더보기" />
                        </button>
                    </End>
                </div>

                <Footer>
                    <TopMenu>
                        <span>이용약관</span>
                        <span>고객센터</span>
                        <span>리뷰운영정책</span>
                        <span>신고센터</span>
                    </TopMenu>
                    <Logo><img src={logoIcon} alt="" /></Logo>
                </Footer>
            </Container>

            <Navi>
                <div style={{padding:"16px 24px", display:"flex", gap:"8px",fontSize:"16px", borderTop:"1px solid rgba(0, 0, 0, 0.10)"}}>
                        <button style={{width:"97px", padding:"12px 18px", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.20)", backgroundColor: "#fff",fontWeight:"700"}}>경로찾기</button>
                        <button style={{width:"247px",padding:"12px 84px", borderRadius: "5px",backgroundColor: "#FF6F00", color:"#fff", border:"none",fontWeight:"700"}}>도장깨기</button>
                </div>
            </Navi>
        </div>
    );
};



export default StampDetailPage;

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
`;

const ReviewCard = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 8px;
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
        position: relative; // 추가: 내부 요소들의 기준점
        
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

    div {
        aspect-ratio: 1/1;
        background-color: #F5F5F5;
        border-radius: 4px;
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

    & > button {
        position: relative;
        z-index: 1;
        border-radius: 50px;
        background: #F2F2F2;
        display: inline-flex;
        padding: 8px 20px;
        justify-content: center;
        align-items: center;
        border: none;
        color: rgba(0, 0, 0, 0.55);
        font-size: 12px;
        font-weight: 600;
        height:30px;

        & > img {
            width: 16px;
            height: 20px;
            opacity: 0.3;
        }
    }
`

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
`

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

const Partner = styled.div`


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
    .active{
    border-bottom: 1px solid black;
    }
`

const Tap = styled.div`
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
`;
const MenuTitle = styled.div`
    display:flex;
    flex-direction:column;
`
const MenuDetail = styled.div`
    padding: 17px 20px 40px 20px;
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
    height:35px;
    position: absolute;
    padding: 11px 20px;
`