import { createGlobalStyle } from 'styled-components'; //Global Styles

const GlobalStyle = createGlobalStyle `

    // Import Font
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

    // Reset
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    // Reset Link
    .txt-none {
        text-decoration: none;
        
    }
`

export default GlobalStyle