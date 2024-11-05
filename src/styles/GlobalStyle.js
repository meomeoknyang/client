import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    ${reset}

    @font-face {
        font-family: 'yg-jalnan';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
        
    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff');}

    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        src:url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff');
        }

    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff');
        }
       
    * {
        font-family: 'Noto Sans KR', 'Segoe UI';
        box-sizing: border-box;
    }
`;
export default GlobalStyle;