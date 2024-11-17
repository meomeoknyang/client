import React, { useEffect, useState, useRef } from 'react';
import Search from '../assets/Map/Search.svg';
import Visit from '../assets/Map/Visit.svg';
import NotVisit from '../assets/Map/NotVisit.svg';
import Cafe from '../assets/Map/Cafe.svg';
import Partnership from '../assets/Map/Partnership.svg';
import Upward from '../assets/Map/Upward.svg';
import BottomLogo from '../assets/Map/BottomLogo.svg';
import SampleRst from '../assets/Map/SampleRst.jpg';
import RecentRst from '../assets/Map/RecentOpen.png'
import KoinoCoffee from '../assets/Map/코이노커피.jpg';
import Baeksojeong from '../assets/Map/백소정-안산한양대점.jpg';
import BunnyMoon from '../assets/Map/버니문.jpg';
import PinotNoir from '../assets/Map/삐노누아.jpeg';
import SisterPizza from '../assets/Map/언니네화덕핏짜.jpg';
import Yukhwe from '../assets/Map/육회바른연어.jpg';
import Cabaret from '../assets/Map/카바레식당.jpg';
import Kounz from '../assets/Map/코운즈.jpg';
import Proscons from '../assets/Map/프로스콘스_에리카점.jpg';
import Whicouver from '../assets/Map/휘쿠버_안산본점.jpg';
import {
  MapContainer,
  SearchBar,
  SearchInput,
  SearchIcon,
  FilterContainer,
  FilterButton,
  BottomSheet,
  BottomSheetHandle,
  BottomSheetContent,
  Title,
  RestaurantCard,
  RestaurantImage,
  RestaurantInfo,
  RestaurantName,
  Category,
  BestComment,
  MetaInfo,
  Divider,
  Divider2,
  ScrollableSection,
  CustomTitle,
  ScrollContent,
  UpwardButton,
  BottomLogoImage,
  ScrollRestaurantCard,
  ScrollRestaurantImage,
  ScrollRestaurantInfo,
  MainRestaurantInfo,
  StoreImageGrid,
  StoreImage
} from '../styles/pages/MapPage';
import axiosInstance from '../utils/axiosConfig';

// 새로운 RestaurantCard 컴포넌트 생성
const RestaurantCardComponent = ({ image, name, category, comment, distance, price, reviews }) => (
  <RestaurantCard>
    <RestaurantImage src={image || null} alt="Restaurant" />
    <RestaurantInfo>
      <RestaurantName>{name}<Category>{category}</Category></RestaurantName>
      <BestComment>{comment}</BestComment>
      <MetaInfo>
        <span className="label">정문에서 </span>
        <span className="value">{distance}</span>
        <Divider />
        <span className="label">평균 </span>
        <span className="value">{price}</span>
        <Divider />
        <span className="label">리뷰 </span>
        <span className="value">{reviews}개</span>
      </MetaInfo>
    </RestaurantInfo>
  </RestaurantCard>
);

const ScrollRestaurantCardComponent = ({ image, name, comment, distance, price }) => (
  <ScrollRestaurantCard>
    <ScrollRestaurantImage src={image} alt={name} />
    <ScrollRestaurantInfo>
      <RestaurantName>{name}</RestaurantName>
      <BestComment>{comment}</BestComment>
      <MetaInfo>
        <span className="label">정문에서 </span>
        <span className="value">{distance}</span>
        <Divider2 />
        <span className="label">평균 </span>
        <span className="value">{price}</span>
      </MetaInfo>
    </ScrollRestaurantInfo>
  </ScrollRestaurantCard>
);

const MainRestaurantCard = ({ image, name, category, comment, distance, price, reviews }) => (
  <RestaurantCard>
    <RestaurantImage src={image} alt={name} />
    <MainRestaurantInfo>
      <RestaurantName>{name}<Category>{category}</Category></RestaurantName>
      <BestComment>{comment}</BestComment>
      <MetaInfo>
        <span className="label">정문에서 </span>
        <span className="value">{distance}</span>
        <Divider />
        <span className="label">평균 </span>
        <span className="value">{price}</span>
        <Divider />
        <span className="label">리뷰 </span>
        <span className="value">{reviews}개</span>
      </MetaInfo>
    </MainRestaurantInfo>
  </RestaurantCard>
);

// 새로운 PopularRestaurant 컴포넌트 생성
const PopularRestaurant = () => (
  <div>
    <Title>오늘 학생들이 <strong>제일 도장깨기 많이 한 곳</strong></Title>
    <RestaurantCardComponent
      image={SampleRst}
      name="홍성 마라미방 한대앞점"
      category="중식"
      comment='"N번째 또간집입니다..! 진짜 학교갈 때마다 먹어요! "'
      distance="1분"
      price="8,900원"
      reviews="540"
    />
  </div>
);

// 새로운 StoreInfo 컴포넌트 생성
const StoreInfo = ({ store }) => (
  <div>
    <RestaurantCard>
      <RestaurantInfo>
        <RestaurantName>
          {store.name}
          <Category>{store.category}</Category>
        </RestaurantName>
        <BestComment>{store.breakTime}</BestComment>
        <MetaInfo>
          <span className="label">정문에서 </span>
          <span className="value">{store.distance}</span>
          <Divider />
          <span className="label">평균 </span>
          <span className="value">{store.price}</span>
          <Divider />
          <span className="label">리뷰 </span>
          <span className="value">{store.reviews}개</span>
        </MetaInfo>
      </RestaurantInfo>
    </RestaurantCard>
    <StoreImageGrid>
      {store.images?.slice(0, 3).map((image, index) => (
        <StoreImage key={index} src={image} alt={`Store ${index + 1}`} />
      ))}
    </StoreImageGrid>
  </div>
);

const MapPage = () => {
  const [position, setPosition] = useState('middle');
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [draggedY, setDraggedY] = useState(0);
  const bottomSheetRef = useRef(null);
  const [clickStartTime, setClickStartTime] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [mouseStartY, setMouseStartY] = useState(0);
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [showStoreInfo, setShowStoreInfo] = useState(false);
  const [visitedLocations, setVisitedLocations] = useState([]);
  const [unvisitedLocations, setUnvisitedLocations] = useState([]);

  // 위치 데이터를 가져오는 함수 추가
  const fetchLocations = async (isVisited) => {
    try {
      console.log(`${isVisited ? '방문' : '미방문'} 위치 데이터 요청`);
      
      // 레스토랑과 카페 데이터를 동시에 요청
      const [restaurantResponse, cafeResponse] = await Promise.all([
        axiosInstance.get(`/restaurants/locations/?visited=${isVisited}`),
        axiosInstance.get(`/cafes/locations/?visited=${isVisited}`)
      ]);

      console.log('레스토랑 응답:', restaurantResponse.data);
      console.log('카페 응답:', cafeResponse);
      
      if (restaurantResponse.data.code === 200 && cafeResponse.data.code === 200) {
        // 레스토랑과 카페 데이터 합치기
        return [
          ...restaurantResponse.data.data.map(loc => ({ ...loc, type: 'restaurant' })),
          ...cafeResponse.data.data.map(loc => ({ ...loc, type: 'cafe' }))
        ];
      }
      return [];
    } catch (error) {
      console.error('위치 데이터 가져오기 실패:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.300152, 126.837760),
          level: 3
        };
        const newMap = new window.kakao.maps.Map(container, options);
        
        // 지도 클릭 이벤트 등록
        window.kakao.maps.event.addListener(newMap, 'click', () => {
          setShowStoreInfo(false);
          setPosition('middle');
        });

        setMap(newMap);
      }
    };

    if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    } else {
      window.kakaoMapCallback = loadKakaoMap;
    }
  }, []);

  // createMarkers 함수 수정
  const createMarkers = async (type) => {
    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));
    
    let locations = [];
    if (type === 'visit' || type === 'notVisit') {
      locations = await fetchLocations(type === 'visit');
      console.log(`${type} 마커 생성할 위치:`, locations);
    }

    const newMarkers = locations.map(loc => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          Number(loc.latitude), 
          Number(loc.longitude)
        ),
        map: map,
        clickable: true // 마커 클릭 이벤트가 지도 클릭 이벤트를 막도록 설정
      });

      // 마커 클릭 이벤트
      window.kakao.maps.event.addListener(marker, 'click', () => {
        const storeData = {
          name: loc.name,
          category: "카테고리",
          breakTime: "브레이크 시간",
          distance: "15분",
          price: "12,000원",
          reviews: "15",
          image: SampleRst,
          images: [SampleRst, SampleRst, SampleRst]
        };
        
        setSelectedStore(storeData);
        setPosition('middle');
        setShowStoreInfo(true);
      });

      return marker;
    });
    
    setMarkers(newMarkers);
  };

  // 필터 버튼 클릭 핸들러 수정
  const handleFilterClick = (type) => {
    if (map && (type === 'visit' || type === 'notVisit')) {
      createMarkers(type);
    }
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
    setClickStartTime(Date.now());
    setHasMoved(false);
  };

  const handleTouchMove = (e) => {
    setHasMoved(true);
    if (!isDragging) {
      setIsDragging(true);
    }
    setCurrentY(e.touches[0].clientY);
    setDraggedY(e.touches[0].clientY - startY);
  };

  const handleMouseDown = (e) => {
    setMouseStartY(e.clientY);
    setIsMouseMoved(false);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 0) return;

    if (!isDragging && Math.abs(e.clientY - mouseStartY) > 5) {
      setIsDragging(true);
      setIsMouseMoved(true);
      setStartY(mouseStartY);
    }

    if (isDragging) {
      const currentDrag = e.clientY - startY;
      setCurrentY(e.clientY);
      setDraggedY(currentDrag);
    }
  };

  const handleDragEnd = () => {
    if (!isMouseMoved && !isDragging) {
      setIsDragging(false);
      setDraggedY(0);
      return;
    }

    if (!isDragging) return;
    
    const diff = currentY - startY;
    const windowHeight = window.innerHeight;
    
    requestAnimationFrame(() => {
      if (diff < -windowHeight * 0.2) {
        setPosition('top');
      } else if (diff > windowHeight * 0.2) {
        setPosition('bottom');
      } else {
        setPosition('middle');
      }
      
      setIsDragging(false);
      setDraggedY(0);
      setIsMouseMoved(false);
    });
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, currentY, startY]);

  const scrollToTop = () => {
    const bottomSheet = bottomSheetRef.current;
    if (bottomSheet) {
      bottomSheet.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleBottomSheet = () => {
    setPosition('top');
    scrollToTop();
  };

  return (
    <MapContainer>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      
      <SearchBar>
        <SearchInput placeholder="식당, 카페, 제휴 정보 검색" />
        <SearchIcon src={Search} alt="검색" />
      </SearchBar>

      <FilterContainer>
        <FilterButton onClick={() => handleFilterClick('visit')}>
          <img src={Visit} alt="방문" />
          <span>방문</span>
        </FilterButton>
        <FilterButton onClick={() => handleFilterClick('notVisit')}>
          <img src={NotVisit} alt="미방문" />
          <span>미방문</span>
        </FilterButton>
        <FilterButton onClick={() => handleFilterClick('restaurant')}>
          <img src={Cafe} alt="음식점" />
          <span>음식점</span>
        </FilterButton>
        <FilterButton onClick={() => handleFilterClick('cafe')}>
          <img src={Cafe} alt="카페" />
          <span>카페</span>
        </FilterButton>
      </FilterContainer>

      <BottomSheet 
        ref={bottomSheetRef}
        isDragging={isDragging}
        position={position}
        draggedY={draggedY}
      >
        <BottomSheetHandle 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleMouseDown}
        />
        <BottomSheetContent>
          {showStoreInfo ? (
            <StoreInfo store={selectedStore} />
          ) : (
            <>
              <PopularRestaurant />
              <ScrollableSection>
                <CustomTitle>
                  <span className="highlight">하냥</span>
                  <span className="normal">님을 위한 오늘의 PICK</span>
                </CustomTitle>
                <ScrollContent>
                  {[
                    { image: KoinoCoffee, name: '코이노커피', comment: '일단 매장이 넓고 깔끔해요!', distance: '5분', price: '5,900원' },
                    { image: Baeksojeong, name: '백소정 안산한양대점', comment: '돈카츠는 못참지', distance: '1분', price: '14,620원' },
                    { image: BunnyMoon, name: '버니문', comment: '분위기 너무 좋고 사진 너무 이쁘게 나오는..', distance: '2분', price: '4,600원' },
                    { image: PinotNoir, name: '삐노누아', comment: '거리도 가깝고 가격도 싸고 맛있어서 자주..', distance: '2분', price: '4,200원' },
                    { image: SisterPizza, name: '언니네화덕핏짜', comment: '학교 근처 양식집 중 가장 맛있다고 단언할..', distance: '4분', price: '15,200원' },
                    { image: Yukhwe, name: '육회바른연어 안산한양대점', comment: '엄청 맛있고 특별한 건 아니지만 점심 특선..', distance: '1분', price: '7,700원' },
                    { image: Cabaret, name: '카바레식당', comment: '맛도 좋고 흘러나오는 음악도 좋아요', distance: '2분', price: '9,500원' },
                    { image: Kounz, name: '코운즈', comment: '학교 앞에 일상적으로 가기도 좋고 특별한..', distance: '5분', price: '10,300원' },
                    { image: Proscons, name: '프로스콘스 에리카점', comment: '빵이 몽땅 맛있어서 곤란한 카페', distance: '3분', price: '5,540원' },
                    { image: Whicouver, name: '휘쿠버 안산본점', comment: '원두가 세 가지 종류나 있어서 취향대로..', distance: '3분', price: '3,900원' }
                  ].map((store, index) => (
                    <ScrollRestaurantCardComponent
                      key={index}
                      image={store.image}
                      name={store.name}
                      comment={store.comment}
                      distance={store.distance}
                      price={store.price}
                    />
                  ))}
                </ScrollContent>
              </ScrollableSection>
              <Title><strong>가장 최근에 오픈한 곳</strong></Title>
              <MainRestaurantCard
                image={RecentRst}
                name="행컵 안산한양대점"
                category="도시락,컵밥"
                comment='"양도 푸짐하고 가성비 대박인 안산 한양대 맛집!!"'
                distance="3분"
                price="5,980원"
                reviews="46"
              />
              <UpwardButton src={Upward} alt="위로 가기" onClick={toggleBottomSheet} />
              <BottomLogoImage src={BottomLogo} alt="Bottom Logo" />
            </>
          )}
        </BottomSheetContent>
      </BottomSheet>
    </MapContainer>
  );
};

export default MapPage; 