import { useState } from 'react';
import axiosInstance from '../axiosConfig';

export const useRestaurantData = () => {
    const [data, setData] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const fetchRestaurants = async (params) => {
        try {
            const response = await axiosInstance.get(`/restaurants/?${params.toString()}`);
            if (!response.data.data) {
                setData([]);
                return [];
            }
            return response.data.data;
        } catch (error) {
            if (error.response?.status === 401) {
                setShowLoginModal(true);
            } else {
                console.error('API 호출 에러:', error);
            }
            setData(null);
            return null;
        }
    };

    return {
        data,
        setData,
        fetchRestaurants,
        showLoginModal,
        setShowLoginModal
    };
};