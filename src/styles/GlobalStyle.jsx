import { createGlobalStyle } from 'styled-components'; //Global Styles
import Colors from '../constant/Colors';

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

    // Scrollbar
    ::-webkit-scrollbar {
        width: 5px;
    }

    // Scrollbar Color 
    ::-webkit-scrollbar-thumb {
        background-color: ${Colors.red_1};
        border-radius: 6px;
    }

    // Scrollbar Background 
    ::-webkit-scrollbar-track {
        background-color: ${Colors.black};
    }

    // Scrollbar Hover
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${Colors.red_hover};
    }
`

export default GlobalStyle