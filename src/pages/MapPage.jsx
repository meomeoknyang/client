import React, { useEffect, useState } from 'react';
import Search from '../assets/Map/Search.svg';
import Visit from '../assets/Map/Visit.svg';
import NotVisit from '../assets/Map/NotVisit.svg';
import Cafe from '../assets/Map/Cafe.svg';
import Partnership from '../assets/Map/Partnership.svg';
import {
  MapContainer,
  SearchBar,
  SearchInput,
  SearchIcon,
  FilterContainer,
  FilterButton,
  BottomSheet,
  BottomSheetHandle
} from '../styles/pages/MapPage';

const MapPage = () => {
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

      <BottomSheet>
        <BottomSheetHandle />
      </BottomSheet>
    </MapContainer>
  );
};

export default MapPage; 