import styled from 'styled-components';
import Colors from '../constant/Colors';

export const PilotsStyle = styled.main `
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.dark_gray};
`

export const PilotsContent = styled.div `
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${Colors.white};
`

export const PilotImage = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.red_1};
    clip-path: polygon(30% 0%, 100% 0%, 75% 100%, 5% 100%);

    img {
        height: 70%;
    }
`

export const PilotInfo = styled.div `
    width:40%;
`