import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserOptions = styled.div`
  display: flex;
  gap: 10px;
  color: gray;
`;

export const Option = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const Section = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const GradeSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 16px 0;
  
  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }
`;

export const ImageSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 16px 0;

  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }
`;

export const ImageCardContainer = styled.div`
  position: relative;
  width: 200px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  flex-shrink: 0;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const GradeCard = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 10px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  scroll-snap-align: start;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const GradeTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const GradeInfo = styled.p`
  font-size: 12px;
  color: gray;
`;