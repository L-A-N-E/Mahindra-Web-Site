import styled from 'styled-components';
import Pilot_1 from '../assets/home/pilots/pilot-1.png';
import Pilot_2 from '../assets/home/pilots/pilot-2.png';

import Colors from '../constant/Colors';
import Font from '../constant/Font';

export const SectionPilotsStyle = styled.section`
    height: 100dvh;
    width: 100%;
    display: grid;
    grid-template-areas: 
    'pilot-1 pilot-2';
    
    .pilot-1 {
        grid-area: pilot-1;
        background-image: url(${Pilot_1});
    }

    .pilot-2{
        grid-area: pilot-2;
        background-image: url(${Pilot_2});
    }

    @media (max-width: 1000px) {
        height: 65dvh;
    }
    
    
    @media (max-width: 600px) {
        grid-template-areas: 
        'pilot-1'
        'pilot-2';
        height: 150dvh;
    }

    @media (max-width: 500px) {
        height: 100dvh;
    }
`

export const PilotsBackground = styled.div`
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: end;
    justify-content: center;


    /* Text Name Pilots */
    .txt-btn-pilots {
        cursor: pointer;

        border: none;
    }
`

export const ButtonPilots = styled.button`
    width: 70%;
    margin-bottom: 2rem;
    padding: 1rem 5rem;
    background-color: ${Colors.red_1};
    background-image: linear-gradient(to left, ${Colors.red_1} 50%, ${Colors.red_hover} 50%);
    background-position: right bottom;
    background-size: 200% 100%;
    border: none;
    border-radius: 10px;
    color: ${Colors.white};
    cursor: pointer;
    font-size: ${Font.txt_16};
    font-weight: ${Font.txt_500w};
    text-transform: uppercase;
    transition: background-position 0.5s ease-in-out;
    
    &:hover {
        background-position: left bottom;
    }

    @media (max-width: 1000px) {
        padding: 1rem 1.5rem;
        font-size: ${Font.txt_12};
    }
`;