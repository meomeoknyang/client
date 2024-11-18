export const sortFunctions = {
    '추천순': (restaurants) => {
        // 유효성 검사 추가
        if (!restaurants || !Array.isArray(restaurants)) {
            return [];
        }
        return [...restaurants];  // 원본 순서 유지
    },
    '거리순': (restaurants) => {
        if (!restaurants || !Array.isArray(restaurants)) {
            return [];
        }
        return [...restaurants].sort((a, b) => a.distance_from_gate - b.distance_from_gate);
    },
    '별점순': (restaurants) => {
        if (!restaurants || !Array.isArray(restaurants)) {
            return [];
        }
        return [...restaurants].sort((a, b) => b.average_rating - a.average_rating);
    },
    '리뷰많은순': (restaurants) => {
        if (!restaurants || !Array.isArray(restaurants)) {
            return [];
        }
        return [...restaurants].sort((a, b) => b.comments?.length - a.comments?.length);
    },
    '가격낮은순': (restaurants) => {
        if (!restaurants || !Array.isArray(restaurants)) {
            return [];
        }
        return [...restaurants].sort((a, b) => a.average_price - b.average_price);
    },
};