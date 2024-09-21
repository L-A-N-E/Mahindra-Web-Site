import styled from 'styled-components';
import Pilot_1 from '../assets/home/pilots/pilot-1.png';
import Pilot_2 from '../assets/home/pilots/pilot-2.png';

import Colors from '../constant/Colors';
import Font from '../constant/Font';

// Seção Pilotos
export const SectionPilotsStyle = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${Colors.off_white};
`

// Container
export const PilotsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

// Card Pilotos
export const PilotsCard = styled.div`
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            z-index: 100;
        }
    }
`;