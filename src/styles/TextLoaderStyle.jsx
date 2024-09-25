import styled, { keyframes } from 'styled-components';
import Colors from '../constant/Colors';
import Font from '../constant/Font';

export const Card = styled.div`
    background: transparent;
    width: auto;
`;

export const LoaderContainer = styled.div`
    color: ${Colors.white};
    font-weight: 500;
    font-size: 25px;
    height: 40px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    text-shadow: ${Colors.shadow};
`;



export const WordFixed = styled.p`
    text-transform: uppercase;
    font-weight: ${Font.txt_100w};
    font-size: ${Font.txt_3rem};
`

export const WordsContainer = styled.div`
    overflow: hidden;
    position: relative;
    margin-left: 10px;
`;

export const fadeInOut = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20%);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20%);
    }
`;

export const Word = styled.p`
    display: block;
    font-weight: ${Font.txt_700w};
    text-transform: uppercase;
    color: ${Colors.red_1};
    font-size: ${Font.txt_3rem};
    animation: ${fadeInOut} 5s ease-in-out;
    padding-left: 6px;
    position: relative;
`;