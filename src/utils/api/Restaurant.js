import axios from 'axios';
import { createContext, useCallback, useContext, useState } from 'react';

// 초기값 설정
const RestaurantContext = createContext({
  restaurantData: null,
  loading: false,
  error: null,
  fetchRestaurantData: async () => {}
});

export const RestaurantProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurantData = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://port-0-server-m3eidei15754d939.sel4.cloudtype.app/restaurants/${id}/`);
      setRestaurantData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    restaurantData,
    loading,
    error,
    fetchRestaurantData
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};