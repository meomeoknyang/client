import Stamp from "./Stamp";
const StampList = ( {restaurants, isContacted, visited} ) => {
    if (!restaurants) {
        return <div style={{fontSize:"12px", padding:"20px"}}>~ 식당을 불러오는 중 ~</div>;
    }
    if (restaurants.length === 0) {
        if (visited === 'visited') {
            return <div style={{fontSize:"12px", padding:"20px"}}>도장깨기한 식당이 없어요 😅</div>;
        }
        if (visited === 'unvisited') {
            return <div style={{fontSize:"12px", padding:"20px"}}>식당을 모두 방문하셨네요 🎉</div>;
        }
        return <div style={{fontSize:"12px", padding:"20px"}}>~ 식당을 불러오는 중 ~</div>;
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItmes:"center", paddingTop:"14px"}}>
            {restaurants && restaurants.map((restaurant) => (
                <Stamp
                    key={restaurant.place_id}
                    id={restaurant.place_id}
                    name={restaurant.name}
                    rating={restaurant.average_rating}
                    categories={restaurant.categories}
                    price={restaurant.average_price}
                    breakTimes={restaurant.break_times}
                    distance={restaurant.distance_from_gate}
                    contact={restaurant.contact}
                    isContacted = {isContacted}
                />
            ))}

        </div>
    );
};
export default StampList;
