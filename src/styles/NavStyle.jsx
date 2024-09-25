import styled from 'styled-components'; // Styled Components
import Colors from '../constant/Colors'; // Var Colors
import Font from '../constant/Font'; // Var Fonts
import Arrow from '../assets/footer/arrow.svg'; // Arrow

// Container Principal Nav
export const NavStyle = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    z-index: 1000;
    background-color: ${Colors.black};
    padding: 1rem 3rem;
`;

export const NavLogo = styled.div `
    img {
        height: 30px;
    }

    @media (max-width: 900px){
        img {
            height: 25px;
        }
    }

    @media (max-width: 400px){
        img {
            height: 15px;
        }
    }
`

export const NavDesktop = styled.div `
    display: flex;
    width: 50%;
    @media (max-width: 900px){
        display: none;
    }
`

export const NavItemsDesktop = styled.nav `
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
    cursor: pointer;

    /* Idioma Selecionado */
    .language {
        display: flex;

        img {
            opacity: 1;
            left: 0;
        }
    }

    /* Menu de Opções Idioma */
    .language-options {
        position: absolute;
        top: 100%;
        right: 4%;
        width: auto;
        list-style: none;
        display: flex;
        flex-direction: column;
        background-color: ${Colors.black};

        /* Opções */
        button {
            width: 100%;
            cursor: pointer;
            padding: 1rem 1rem;
            text-align: start;
            color: ${Colors.white};
            font-size: ${Font.txt_12};
            text-transform: uppercase;
            background-color: ${Colors.black};
            border: none;
        
            &:hover {
                background-color: #313131;
            }
        }
    }
`

// Menu Hamburguer
export const NavHamburgerMenu = styled.div`
    display: none;

    @media (max-width: 900px) {
        display: flex;
        justify-content: flex-end;
    }
`;

// Criando Menu Hamburguer
export const NavMenu = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;

    span {
        width: 20px;
        height: 1.5px;
        background-color: white;
        transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
    }

    @media (max-width: 900px) {
        display: flex;
    }

    /* Animação Abrir e Fechar Menu Hamburguer */
    ${({ showMenu }) => showMenu &&
        `
        span:nth-child(1) {
            transform: rotate(45deg) translate(3px, 3px);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `}
`;

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
    
    @media (max-width: 350px){
        width: 100%;
    }
`

export const NavItemsMobile = styled.div `
    display: flex;
    width: 100%;
    height: auto;
    align-items: start;

    @media (max-width: 350px){
        justify-content: center;
    }
`


export const NavMobileUl = styled.ul `
    list-style: none;
    display: flex;
    gap: 3rem;
    height: 70%;
    flex-direction: column;
    margin-left: 1rem;

    li {
        width: auto; 
        position: relative; 
        list-style: none;
        font-size: ${Font.txt_12};
        text-transform: uppercase;
        color: ${Colors.white};
    }

    @media (max-width: 350px) {
        margin: 0;
        align-items: center;
    }
`

export const NavMobileLanguages = styled.div `
    display: flex;
    flex-direction: column;

    .language {
        display: flex;
        gap: 0.3rem;
    }

    .language-options {
        display: flex;
        flex-direction: column;
        margin: 1rem 0 0 1.3rem;
        gap: 1rem;

        button {
            border: none;
            background-color: ${Colors.black};
            color: ${Colors.white};
            text-align: start;
        }

    }

    @media (max-width: 350px) {
        .language-options {
            margin: 1rem 0 0 0;
        
            button {
                text-align: center;
            }
        }
    }

`