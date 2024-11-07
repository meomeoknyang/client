import { CgChips } from "../../styles/components/stamp/Category";

const ChipWrapper = ({text, width}) => {
    
    return(
        <CgChips
        width={width}
        >
            {text}
            
        </CgChips>
    )
}

export default ChipWrapper;