import React, { useEffect, useState, useRef } from 'react';
import Search from '../assets/Map/Search.svg';
import Visit from '../assets/Map/Visit.svg';
import NotVisit from '../assets/Map/NotVisit.svg';
import Cafe from '../assets/Map/Cafe.svg';
import Partnership from '../assets/Map/Partnership.svg';
import Upward from '../assets/Map/Upward.svg';
import BottomLogo from '../assets/Map/BottomLogo.svg';
import SampleRst from '../assets/Map/SampleRst.jpg';
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
  MainRestaurantInfo
} from '../styles/pages/MapPage';

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
      name="마라미방"
      category="가게이름"
      comment='"중국식 계란볶음밥이 맛나"'
      distance="15분"
      price="12,000원"
      reviews="15"
    />
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

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
      }
    };

    if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    } else {
      window.kakaoMapCallback = loadKakaoMap;
    }
  }, []);

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
        <FilterButton>
          <img src={Visit} alt="방문" />
          <span>방문</span>
        </FilterButton>
        <FilterButton>
          <img src={NotVisit} alt="미방문" />
          <span>미방문</span>
        </FilterButton>
        <FilterButton>
          <img src={Cafe} alt="음식점" />
          <span>음식점</span>
        </FilterButton>
        <FilterButton>
          <img src={Cafe} alt="카페" />
          <span>카페</span>
        </FilterButton>
        <FilterButton>
          <img src={Partnership} alt="제휴" />
          <span>제휴</span>
        </FilterButton>
      </FilterContainer>

      <BottomSheet 
        position={position}
        ref={bottomSheetRef}
        isDragging={isDragging}
        draggedY={draggedY}
      >
        <BottomSheetHandle 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleMouseDown}
        />
        <BottomSheetContent>
          <PopularRestaurant />
          
          <ScrollableSection>
            <CustomTitle>
              <span className="highlight">하냥</span>
              <span className="normal">님이 미방문 하신 곳</span>
            </CustomTitle>
            <ScrollContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <ScrollRestaurantCardComponent
                  key={index}
                  image={SampleRst}
                  name="가게 이름"
                  comment='"좋아요 제일 많은 댓글"'
                  distance="n분"
                  price="12,000원"
                />
              ))}
            </ScrollContent>
          </ScrollableSection>

          <Title><strong>가장 최근에 오픈한 곳</strong></Title>
          <MainRestaurantCard
            image={SampleRst}
            name="가게 이름"
            category="카테고리"
            comment='"좋아요 제일 많은 댓글"'
            distance="n분"
            price="12,000원"
            reviews="15"
          />

          <UpwardButton src={Upward} alt="위로 가기" onClick={toggleBottomSheet} />
          <BottomLogoImage src={BottomLogo} alt="Bottom Logo" />
        </BottomSheetContent>
      </BottomSheet>
    </MapContainer>
  );
};

export default MapPage; 