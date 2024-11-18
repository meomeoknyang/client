import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backIcon from '../../../assets/svg/back.svg'
import editIcon from '../../../assets/svg/edit.svg'
import logotextIcon from '../../../assets/logotext.png'
import closeIcon from '../../../assets/svg/Close.svg'
//import rightIcon from '../../../assets/svg/arrow_right.svg'
import axios from "axios";

const CafeDetailReviewPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('review'); 
    const {id} = useParams();
    const [reviews, setReviews] = useState();
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    };
    const handleList = () => {
        navigate(`/cafes`);
    };

    const getReivew = async(key) => {
        try{
            const response = await axios.get(`${baseURL}/reviews/place/cafe/${key}/`)
            if (!response) {
                console.error('데이터가 없습니다');
                setReviews([]);
                return;
            }
            setReviews(response.data.data);
            console.log(response.data.data);
        }catch(error){
            console.error(error);
            setReviews([]);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseURL}/cafes/${id}/`);
                setRestaurantData(response.data.data);
                await getReivew(id);
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
    
      const handleReviewWrite = () => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }
        handleClick('reviewWrite');
    };
    
    const handleModalClose = () => {
        setShowLoginModal(false);
    };
    

    const { name, keywords } = restaurantData;
    const totalCount = keywords ? keywords.reduce((sum, keyword) => sum + keyword.count, 0) : 0;
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

            <div>
                    <Menut>
                        <div >학생들의 리얼한 리뷰</div>
                        <p onClick={()=>handleReviewWrite()} > <img src={editIcon} alt="" /> 리뷰쓰기</p>
                    </Menut>
                    <Review>
                    {keywords && keywords.length > 0 ? (
                    keywords.slice(0,5).map((words,index) => (
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

                    </Review>
                    <ReviewList>
                        {reviews && reviews.length > 0 ? (
                            
                            reviews.map((review, index) => (
                            <ReviewCard key={index}>
                                <Profile>
                                    <ProfileImg />
                                </Profile>
                                <ReviewContent>
                                    <UserInfo>
                                        <UserTop>
                                            <span className="nickname">{review.user.nickname}</span>
                                            <span className="badge">{review.user.title}</span>
                                        </UserTop>
                                        
                                        <VisitCount>
                                            {review.visit_count}번째 방문
                                        </VisitCount>
                                        <Date>
                                        {review.created_at.split('T')[0]}
                                        </Date>
                                    </UserInfo>
                                    <Content>{review.comment}</Content>
                                </ReviewContent>
                            </ReviewCard>
                            ))
                        ):(
                            <div style={{
                                textAlign: "center",
                                padding: "20px 20px 40px 20px",
                                color: "rgba(0,0,0,0.5)",
                                fontSize: "12px"
                            }}  > 등록된 리뷰가 없습니다. </div>
                        )}
                    </ReviewList>
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
           {showLoginModal && (
                <LoginModal 
                    onConfirm={() => {
                        navigate('/login');
                    }}
                    onCancel={handleModalClose}
                />
            )}
                
        </div>
         
    );
};

export default CafeDetailReviewPage;

const LoginModal = ({ onConfirm, onCancel }) => (
    <ModalOverlay>
        <Modal>
            <ModalContent>
                <div>로그인이 필요한 서비스입니다.</div>
                <ModalButtons>
                    <button onClick={onConfirm}>확인</button>
                    <button onClick={onCancel}>취소</button>
                </ModalButtons>
            </ModalContent>
        </Modal>
    </ModalOverlay>
);

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Modal = styled.div`
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 80%;
    max-width: 320px;
`;

const ModalContent = styled.div`
    text-align: center;
    
    & > div:first-child {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
    }
`;

const ModalButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;

    button {
        padding: 8px 24px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-weight: 500;

        &:first-child {
            background-color: #FF6F00;
            color: white;
        }

        &:last-child {
            background-color: #F5F5F5;
            color: #666;
        }
    }
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
    padding:36px 0 12px 20px;

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
    justify-content: space-between;
    gap:8px;
    .name{
    color: rgba(0, 0, 0, 0.99);
    font-size: 20px;
    font-weight: 700;
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