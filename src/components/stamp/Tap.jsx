import Hbutton from "../../styles/components/stamp/Tap";
import { useState } from "react";

const Tap = () => {
    const [activeTab, setActiveTab] = useState(1); 

    return (
        <div style={{display:"flex"}}>
            <Hbutton className={activeTab === 1 ? "active":""} onClick={()=>setActiveTab(1)}>식당</Hbutton>
            <Hbutton className={activeTab === 0 ? "active":""} onClick={()=>setActiveTab(0)}>카페</Hbutton>
        </div>
    );
};
export default Tap;



