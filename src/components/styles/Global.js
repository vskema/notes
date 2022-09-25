import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,300&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body };
        color: hsl(192, 100%, 9%);
        font-family: "Poppins", sans-serif;
        font-size: 1.15em;
        margin: 0;
    }     
`

export default GlobalStyles;