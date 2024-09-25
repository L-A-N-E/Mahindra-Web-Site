import styled from 'styled-components';
import Colors from '../constant/Colors';
import Backgrounds from '../constant/Backgrounds';


export const PilotsStyle = styled.main `
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${Backgrounds.background_dark_gray3};
`

export const PilotsContent = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${Colors.white};
    padding: 0 2rem;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const PilotImage = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
        
        @media (max-width: 700px) {
            width: 100%;
        }
    }
`

export const PilotInfo = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding: 2rem 1rem;
    p {
        text-align: justify;
    }

    @media (max-width: 700px) {
        width: 90%;
    }
`