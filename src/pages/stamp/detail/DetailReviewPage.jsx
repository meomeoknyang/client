import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backIcon from '../../../assets/svg/back.svg'
import editIcon from '../../../assets/svg/edit.svg'
import logotextIcon from '../../../assets/logotext.png'
import rightIcon from '../../../assets/svg/arrow_right.svg'

const DetailReviewPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('review'); 
    const id = useParams();
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
        }
    };
    const handleBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        handleLoadDetail(id);
      }, []);

    const handleLoadDetail = async (id) => {
    
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
            <Header>
                        <img src={backIcon} alt="back" onClick={()=>handleBack()} />
                        <div className='name'>두루정</div>
            </Header>
            <Tab>
                <SubTab onClick={()=>handleClick('home')} $isActive={activeTab === 'home'}>홈</SubTab>
                <SubTab onClick={()=>handleClick('menu')} $isActive={activeTab === 'menu'}>메뉴</SubTab>
                <SubTab onClick={()=>handleClick('picture')} $isActive={activeTab === 'picture'}>사진</SubTab>
                <SubTab onClick={()=>handleClick('review')} $isActive={activeTab === 'review'}>리뷰</SubTab>
            </Tab>

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

                    </Review>
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
                                    <Date>
                                        2024.11.13
                                    </Date>
                                </UserInfo>
                                <Content>
                                    여기는 언제가도 평타. 오늘은 가서 돼지김치짜글이 먹었는데 이것도 맛있었음! 점심 먹기에는 적당한 듯 합니다.여기는 언제가도 평타. 오늘은 가서 돼지김치짜글이 먹었는데 이것도 맛있었음! 점심 먹기에는 적당한 듯 합니다.

                                </Content>
                            </ReviewContent>
                        </ReviewCard>
                        ))}
                    </ReviewList>

                    <End>
                        <div className="line" />
                        <button>
                            더보기 
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
                    <Logo><img src={logotextIcon} alt="" /></Logo>
                </Footer>

                
        </div>
         
    );
};

export default DetailReviewPage;

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

const Date = styled.div`
    color: rgba(0, 0, 0, 0.35);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.1px;
    border-left: 1px solid #D1D5D6;
    padding: 0 0 0 6px;
`

const ReviewList = styled.div`
    padding: 20px 20px 0px 20px;
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
    padding: 0 6px 0 6px;
`;

const Content = styled.p`
    color: #000;
    font-size: 10px;
    font-weight: 400;
    padding-top: 8px;
    letter-spacing: -0.1px;
    width: 100%;
    line-height: normal;
`;

const ReviewCard = styled.div`
    padding: 20px 0;
    display: flex;
    gap: 8px;
    border-bottom: 1px solid #E4E4E4;
    &:last-child {
        border-bottom: none;
    }
`;

const Profile = styled.div`
    flex-shrink: 0; 
`;

const ProfileImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.12);
`;

const ReviewContent = styled.div`
    flex: 1;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
`;

const Review = styled.div`
    padding: 20px 20px 38px 20px;
    border-bottom: 8px solid #F5F5F5;
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

const Header = styled.div`
    height: 53px;
    padding: 11px 20px;
    display: flex;
    align-items: center;
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