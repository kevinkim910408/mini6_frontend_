/* GlobalStyle.jsx */
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
${reset} // normalize

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--white);
    -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
    display: none;
}

:root {
    --purple: #8e44ad;
    --grey: #bdc3c7;
    --yellow: #fff200;
    --pink: #ffcccc;
    --orange: #ff9f1a;
    --white: #fff;
    --black: #000;
    --black: #4A4D53; 
    --blue: #4D7CFE;
    --Button-blue: #1951ec;
}
`;

export default GlobalStyle;
