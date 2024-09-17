import styled from 'styled-components'; // Styled Components
import Colors from '../constant/Colors'; // Var Colors
import Font from '../constant/Font'; // Var Fonts
import Arrow from '../assets/footer/arrow.svg'; // Arrow

// Container Principal Nav
export const NavStyle = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    z-index: 1000;
    background-color: ${Colors.black};
    padding: 1rem 3rem;

    @media (max-width: 900px){
        justify-content: space-between;
    }
`;

export const NavLogo = styled.div `
    img {
        height: 30px;
    }
`

export const NavDesktop = styled.div `
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width: 900px){
        display: none;
    }
`

export const NavItemsDesktop = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        ul {
            display: flex;
            gap: 0.3rem;
        }
    }
`


export const NavItemsEffect = styled.ul `
    li {
        position: relative; 
        display: inline-block;
        list-style: none;
        font-size: ${Font.txt_12};
        text-transform: uppercase;
        color: ${Colors.white};
    }

    li::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease-in-out;
    }

    li:hover::after {
        width: 100%;
    }

    img {
        position: relative;
        opacity: 0;
        left: -10px;
        transition: all 0.3s ease-in-out; 
    }

    &:hover img {
        left: 0; /* Movimenta a imagem para a posição original */
        opacity: 1; /* Torna a imagem visível */
    }
`




export const NavDesktopLanguages = styled.div `

    display: flex;
    flex-direction: column;

    .language {
        display: flex;
        gap: 0.3rem;
    }

    .language-options {
        display: flex;
        flex-direction: column;

        li {
            position: relative; 
            display: inline-block;
            list-style: none;
            font-size: ${Font.txt_12};
            text-transform: uppercase;
            color: ${Colors.white};
        }
    }
`

export const NavMenu = styled.div `
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
        width: 25px;
        height: 3px;
        background-color: white;
        transition: 0.3s;
    }

    @media (max-width: 900px) {
        display: flex;
    }
`

export const NavMobile = styled.div `
    display: none;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    margin-top: 70px;
    height: 100dvh;
    width: 50%;
    background-color: ${Colors.black};
    
    @media (max-width: 900px){
        display: flex;
    }
`



    export const NavItemsMobile = styled.div ``
    export const NavMobileLanguages = styled.div ``