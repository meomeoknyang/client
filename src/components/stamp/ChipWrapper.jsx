import { CgChips } from "../../styles/components/stamp/Category";
import DownIcon from '../../assets/svg//arrow_down.svg';
const ChipWrapper = ({text, width, icon, onClick}) => {
    
    return(
        <CgChips
            width={width}
            onClick={onClick}
        >
            {text}

            {icon === "drop" && <img src={DownIcon} alt="down arrow" />}
        </CgChips>
    )
}

export default ChipWrapper;