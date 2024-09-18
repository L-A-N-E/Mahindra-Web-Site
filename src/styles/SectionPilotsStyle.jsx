import styled from 'styled-components';
import Pilot_1 from '../assets/home/pilots/pilot-1.png';
import Pilot_2 from '../assets/home/pilots/pilot-2.png';

import Colors from '../constant/Colors';
import Font from '../constant/Font';

export const SectionPilotsStyle = styled.section`
    height: 100dvh;
    width: 100%;
    display: grid;
    background-color: ${Colors.black};
    grid-template-areas: 
    'pilot-1 pilot-2';
    
    .pilot-1 {
        grid-area: pilot-1;
        background-image: url(${Pilot_1});
        background-size: cover;
        opacity: 0.8;
        transition: all 300ms ease-in-out;

        &:hover {
            opacity: 1;
        }
    }
    
    .pilot-2{
        grid-area: pilot-2;
        background-image: url(${Pilot_2});
        background-size: cover;
        opacity: 0.8;
        transition: all 300ms ease-in-out;
    
        &:hover {
            opacity: 1;
        }
    }

    @media (max-width: 1000px) {
        height: 65dvh;

        .pilot-1{
            background-position: center;
        }
        
        .pilot-2{
            background-position: center;
        }
    }
    
    
    @media (max-width: 600px) {
        grid-template-areas: 
        'pilot-1'
        'pilot-2';
        height: 150dvh;
    }

    @media (max-width: 500px) {
        height: 150dvh;
    }
`

export const Pilots = styled.div`
    display: flex;
`;