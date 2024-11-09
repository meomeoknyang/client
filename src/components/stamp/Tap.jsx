import Hbutton from "../../styles/components/stamp/Tap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Tap = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1); 
    const handleClick = (activeTab) => {
        if (activeTab === 1) {
            navigate(`/stamp/restaurant`);
        } else{
            navigate(`/stamp/cafe`);
        }
    }

    return (
        <div style={{display:"flex"}}>
            <Hbutton className={activeTab === 1 ? "active":""} onClick={()=>handleClick(1)}>식당</Hbutton>
            <Hbutton className={activeTab === 0 ? "active":""} onClick={()=>handleClick(0)}>카페</Hbutton>
        </div>
    );
};
export default Tap;



