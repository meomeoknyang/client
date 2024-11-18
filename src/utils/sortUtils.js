export const sortFunctions = {
    '별점순': (restaurants) => {
        return [...restaurants].sort((a, b) => {
            if (a.average_rating === -1) return 1;
            if (b.average_rating === -1) return -1;
            return b.average_rating - a.average_rating;
        });
    },
    '거리순': (restaurants) => {
        return [...restaurants].sort((a, b) => 
            (a.distance_from_gate || 0) - (b.distance_from_gate || 0)
        );
    },
    '가격낮은순': (restaurants) => {
        return [...restaurants].sort((a, b) => {
            const priceA = a.average_price || 0;
            const priceB = b.average_price || 0;
            return priceA - priceB;
        });
    },
    '리뷰많은순': (restaurants) => {
        return [...restaurants].sort((a, b) => 
            (b.visit_count || 0) - (a.visit_count || 0)
        );
    },
    '추천순': (restaurants) => {
        const sorted = [...restaurants];
        for (let i = sorted.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        }
        return sorted;
    }
};