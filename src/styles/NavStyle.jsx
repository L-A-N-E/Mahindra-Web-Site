import styled from 'styled-components'; // Styled Components
import Colors from '../constant/Colors'; // Var Colors
import Font from '../constant/Font'; // Var Fonts
import Arrow from '../assets/footer/arrow.svg'; // Arrow

// Container Principal Nav
export const Container = styled.div`
    width: auto;
    display: flex;
    position: fixed;
    height: 100dvh;
    z-index: 1000;

    /* Mobile */
    @media (max-width: 750px) {
        height: 80px;
        width: 100%;
    }
`;

// Menu Desktop Fechado
export const NavDesktopClose = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100dvh;
    background-color: ${Colors.black};
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: transform 0.3s ease-in-out;
    transition: all 0.5s;
    /* Empurra para a esquerda quando o menu está aberto */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-60px)' : 'translateX(0)')};

    @media (max-width: 750px) {
        display: none;
    }

`;

// Menu Desktop Aberto
export const NavDesktopOpen = styled.nav`
    position: fixed;
    top: 0;
    left: 0; 
    width: 250px;
    height: 100vh;
    background-color: ${Colors.black};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 9999;

    @media (max-width: 750px) {
        display: none;
    }
`;

// Arrow
export const ArrowIcon = styled.img`
    width: 20px;
    height: auto;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;
`;

// Logo Mahindra
export const Logo = styled.img`
    height: 20px;
    margin-bottom: 15px;
`;

// Button Open and Close Menu
export const OpenButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
`;

// Section Top
export const NavTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
`;

// Section Mid
export const NavMid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        flex-direction: column; 
        gap: 1rem;
        list-style: none;
        padding: 0;

        /* Change Language */
        .content-lng {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            .lgn-li {
                display: flex;
                gap: 10px;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                /* Efeito apenas da setinha ao passar o mouse */
                &:hover img {
                    transform: rotate(90deg);
                }
                li{
                    color: ${Colors.off_white};
                    text-transform:uppercase;
                    font-size: ${Font.txt_14};
                }

                img{
                    transition: ease 0.2s;
                    transform: ${({showLanguages}) => (showLanguages ?'rotate(90deg)' : 'rotate(0deg)')};
                }
            }
            /* Transicao e movimento suave */
            .lgn-link{
                margin: 0 0 0 10px;
                visibility: ${({showLanguages}) => (showLanguages ?'visible' : 'hidden')};
                opacity: ${({ showLanguages }) => (showLanguages ? '1' : '0')}; 
                transform: ${({ showLanguages }) => (showLanguages ? 'translateY(0)' : 'translateY(-10px)')}; 
                transition: opacity 0.3s ease, transform 0.3s ease;
                cursor:pointer;
            }
        }
    }

    a {
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        font-size: ${Font.txt_14};
        color: ${Colors.off_white};
        position: relative;            
        display: inline-block;
        font-weight: 300;
        transition: all 0.3s ease-in-out;
        padding-left:12px;
    }
    /* Usa a seta como imagem, oculta por padrão e move a seta para a esquerda do texto */
    a::before {
        content: url(${Arrow}); 
        position: absolute;
        left: 0;
        opacity: 0; 
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        transform: translateX(-10px); 
    }
    /* Exibe a seta ao fazer um hover e a seta volta a sua posicao original */
    a:hover::before {
        opacity: 1;
        transform: translateX(0); 
    }
    /* Effect Hover Line */
    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease-in-out;
    }

    a:hover::after {
        width: 100%;
    }
`;

// Section Bottom
export const NavBottom = styled.div`
    height: 50px;
`;


// Mobile
export const NavMobileClose = styled.div`
    
    @media (max-width: 750px) {
        position: fixed;
        width: 100%;
        height: 80px;
        background-color: ${Colors.black};
        backdrop-filter: blur(10px);
        display: flex;
        justify-content:center;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        transition: all 0.5s;
        /* Empurra para a esquerda quando o menu está aberto */
        transform: ${({ isOpen }) => (isOpen ? 'translateY(-80px)' : 'translateY(0)')};
    }
`

export const NavMobileOpen = styled.nav`
    display: none;
    @media (max-width: 750px) {
        position: fixed;
        width: 100%;
        height: 80px;
        background-color: ${Colors.black};
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120px)')};
        transition: transform 0.3s ease-in-out;
    }
`;
// #ff1f1f
// #801010
export const LoginButton = styled.button`
background-color:transparent;
border:none;
button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    font-weight: 800;
    margin: 0 10px;
    width: 150px;
    padding: 10px 0;
    box-shadow: 0 0 5px #ff1f1f;
    transition: 0.4s;
}

.log {
    color: #fff;
    background-color: #ff1f1f;
    border: 1px solid #ff1f1f;
    letter-spacing:2px;
    text-transform:uppercase;
}

button:hover {
    color: white;
    width:;
    box-shadow: 0 0 5px #801010;
    background-color: #801010;
    border:#801010;
}
`

export const SignUpButton = styled.button`
@media(max-width:620px){
    display:none;
}
margin-left:1rem;
background-color:transparent;
border:none;
button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    font-weight: 800;
    margin: 0 10px;

    width: 150px;
    padding: 10px 0;
    box-shadow: 0 0 5px  #ff1f1f;
    transition: 0.4s;
}

.sig {
    color: #fff;
    background-color:  #ff1f1f;
    border: 1px solid  #ff1f1f;
    letter-spacing:2px;
    text-transform:uppercase;
}

button:hover {
    color: white;
    width:;
    box-shadow: 0 0 10px #801010;
    background-color: #801010;
    border:#801010;
}

`

// icone
export const XIcon = styled.img`
    width: 30px;
    height: auto;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;
`;

export const HamburguerIcon = styled.img`
    width: 40px;
    height: auto;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;
`;

export const NavTopMobile = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    padding: 10px;
`;

export const NavMidMobile = styled.div`
@media(max-width:600px){
    display: none;
}
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row; 
        gap: 1.5rem;
        list-style: none;
        padding: 0;

        .content-lng {
            display: flex;
            gap: 1rem;
            margin-top: 70px;
            flex-direction: column;
            position: relative;
            background-color: ${({ showLanguages }) => (showLanguages ? `${Colors.black}` : 'transparent')};
            padding: ${({ showLanguages }) => (showLanguages ? '10px' : '0')};
            border-radius: ${({ showLanguages }) => (showLanguages ? '8px' : '0')};
            transition: background-color 0.3s ease, padding 0.3s ease, border-radius 0.3s ease;

            .lgn-li {
                display: flex;
                gap: 10px;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                li {
                    color: ${Colors.off_white};
                    text-transform: uppercase;
                    font-size: ${Font.txt_14};
                }

                img {
                    transition: transform 0.2s ease;
                    transform: ${({ showLanguages }) => (showLanguages ? 'rotate(90deg)' : 'rotate(0deg)')};
                }
            }

            .lgn-link {
                display: block;
                visibility: ${({ showLanguages }) => (showLanguages ? 'visible' : 'hidden')};
                opacity: ${({ showLanguages }) => (showLanguages ? '1' : '0')}; 
                transform: ${({ showLanguages }) => (showLanguages ? 'translateY(0)' : 'translateY(-10px)')}; 
                transition: opacity 0.3s ease, transform 0.3s ease;
                cursor: pointer;
            }
        }
    }

    a {
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        font-size: ${Font.txt_14};
        color: ${Colors.off_white};
        position: relative;            
        display: inline-block;
        font-weight: 300;
        transition: all 0.3s ease;
        padding-left: 12px;
    }

    a::before {
        content: url(${Arrow}); 
        position: absolute;
        left: 0;
        opacity: 0; 
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: translateX(-10px); 
    }

    a:hover::before {
        opacity: 1;
        transform: translateX(0); 
    }

    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease;
    }

    a:hover::after {
        width: 100%;
    }

`;

export const NavMidMobileMini = styled.div`
display:none;
@media(max-width:600px){
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row; 
        gap: 1.5rem;
        list-style: none;
        padding: 0;

        .content-lng {
            display: flex;
            gap: 1rem;
            margin-top: 70px;
            flex-direction: column;
            position: relative;
            background-color: ${({ showLanguages }) => (showLanguages ? `${Colors.black}` : 'transparent')};
            padding: ${({ showLanguages }) => (showLanguages ? '10px' : '0')};
            border-radius: ${({ showLanguages }) => (showLanguages ? '8px' : '0')};
            transition: background-color 0.3s ease, padding 0.3s ease, border-radius 0.3s ease;

            .lgn-li {
                display: flex;
                gap: 10px;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                li {
                    color: ${Colors.off_white};
                    text-transform: uppercase;
                    font-size: ${Font.txt_14};
                }

                img {
                    transition: transform 0.2s ease;
                    transform: ${({ showLanguages }) => (showLanguages ? 'rotate(90deg)' : 'rotate(0deg)')};
                }
            }

            .lgn-link {
                display: block;
                visibility: ${({ showLanguages }) => (showLanguages ? 'visible' : 'hidden')};
                opacity: ${({ showLanguages }) => (showLanguages ? '1' : '0')}; 
                transform: ${({ showLanguages }) => (showLanguages ? 'translateY(0)' : 'translateY(-10px)')}; 
                transition: opacity 0.3s ease, transform 0.3s ease;
                cursor: pointer;
            }
        }
    }

    a {
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        font-size: ${Font.txt_14};
        color: ${Colors.off_white};
        position: relative;            
        display: inline-block;
        font-weight: 300;
        transition: all 0.3s ease;
        padding-left: 12px;
    }

    a::before {
        content: url(${Arrow}); 
        position: absolute;
        left: 0;
        opacity: 0; 
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: translateX(-10px); 
    }

    a:hover::before {
        opacity: 1;
        transform: translateX(0); 
    }

    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease;
    }

    a:hover::after {
        width: 100%;
    }
}
`;


// Section Bottom
export const NavBottomMobile = styled.div`
    width: 60px;
`;
