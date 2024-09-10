import styled from 'styled-components';
import Colors from '../constant/Colors'; // Variáveis de cores
import Font from '../constant/Font'; // Variáveis de fonte

// Container Main
export const Container = styled.div`
    width: auto;
    display: flex;
    position: fixed;
    height: 100dvh;
    z-index: 1000;
`;

// Menu Close
export const NavClose = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100dvh;
    background-color: ${Colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: transform 0.3s ease-in-out;
    
    /* Empurra para a esquerda quando o menu está aberto */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-60px)' : 'translateX(0)')};
`;

// Menu Open
export const NavOpen = styled.nav`
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

// Arrow
export const ArrowIcon = styled.img`
    width: 20px;
    height: auto;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;
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
            flex-direction: column;

            .lgn-li {
                display: flex;
                align-items: center;

            }
        }
    }

    a {
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        font-size: ${Font.txt_12};
        color: ${Colors.off_white};
        position: relative;            
        display: inline-block;
        font-weight: 300;
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

    /* Effect Rotation Arrow */
    .arrow-rotation {
        transition: transform 0.3s ease-in-out;
    }

    &:hover .arrow-rotation {
        transform: rotate(90deg);
    }
`;

// Section Bottom
export const NavBottom = styled.div`
    height: 50px;
`;

