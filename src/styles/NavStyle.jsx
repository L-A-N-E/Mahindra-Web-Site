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
`;

export const NavLogo = styled.div `
    img {
        height: 30px;
    }
`

export const NavDesktop = styled.div `
    display: flex;
    @media (max-width: 900px){
        display: none;
    }
`

export const NavItemsDesktop = styled.div `
    display: flex;
    height: 100%;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 3rem;

        li {
            list-style: none;
        }
    }
`

export const NavDesktopLanguages = styled.div `
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;

    .language {
        display: flex;

    }

    .language-options {
        display: flex;
        flex-direction: column;
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

    ${({ showMenu }) =>
    showMenu &&
    `
        span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        span:nth-child(2) {
            opacity: 0;
        }

        span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `}
`

export const NavMobile = styled.div `
    display: none;
    
    @media (max-width: 900px){
        display: flex;
    }
`



    export const NavItemsMobile = styled.div ``
    export const NavMobileLanguages = styled.div ``